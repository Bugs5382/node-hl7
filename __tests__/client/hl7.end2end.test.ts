import { createClient } from "@redis/client";
import Client, {
  Batch,
  Message,
  MessageItem,
  NotifyPendingCount,
  ReadyState,
} from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src/hl7/2.1";
import { createDeferred } from "node-hl7-client/src/utils";
import { Server } from "node-hl7-server";
import fs from "node:fs";
import path from "node:path";
import portfinder from "portfinder";
import { RedisMemoryServer } from "redis-memory-server";
import { describe, expect, test, vi } from "vitest";
import { expectEvent } from "./__utils__";

/** Minimal valid HL7 2.7 ADT^A01 message for test use. */
function makeTestMessage(controlId: string = "CONTROL_ID"): Message {
  return new Message({
    text: `MSH|^~\\&|||||20240101000000||ADT^A01|${controlId}|D|2.7`,
  });
}

describe("node hl7 end to end - client", () => {
  describe("server/client sanity checks", () => {
    test("...simple connect", async () => {
      const port = await portfinder.getPortPromise();

      const dfd = createDeferred<void>();
      const dfdConnectionChecks = createDeferred<void>();

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const messageReq = req.getMessage();
        expect(messageReq.get("MSH.12").toString()).toBe("2.7");
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });

      const outbound = client.createConnection({ port }, async (res) => {
        const messageRes = res.getMessage();
        expect(messageRes.get("MSA.1").toString()).toBe("AA");
        dfd.resolve();
      });

      // Ensure no errors on the connection
      outbound.on("client.error", (err) => {
        if (err.message === "Socket closed unexpectedly by server.")
          dfdConnectionChecks.reject("Connection terminated incorrectly");
      });

      // Ensure connection closes successfully
      outbound.on("close", () => {
        outbound.on("connection", () => {
          dfdConnectionChecks.reject(
            "Unexpected follow on connection attempted.",
          );
        });

        // Give the connection time to report any errors.
        setTimeout(dfdConnectionChecks.resolve, 500);
      });

      await expectEvent(outbound, "connect");

      await outbound.sendMessage(makeTestMessage());

      await dfd.promise;

      expect(client.totalSent()).toEqual(1);
      expect(client.totalAck()).toEqual(1);

      await outbound.close();
      await listener.close();

      client.closeAll();

      await dfdConnectionChecks.promise;
      expect(outbound._connectionTimer).toBeUndefined();
      expect((outbound as any)._readyState).toEqual(ReadyState.CLOSED);
      expect(client._connections.length).toEqual(0);
    });

    test("...send simple message twice, no ACK needed", async () => {
      const port = await portfinder.getPortPromise();

      const dfd = createDeferred<void>();
      let totalSent = 0;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const messageReq = req.getMessage();
        expect(messageReq.get("MSH.12").toString()).toBe("2.7");
        totalSent++;
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port, waitAck: false },
        async () => {
          if (totalSent === 2) {
            dfd.resolve();
          }
        },
      );

      await expectEvent(outbound, "connect");

      await outbound.sendMessage(makeTestMessage("CONTROL_ID_1"));
      await outbound.sendMessage(makeTestMessage("CONTROL_ID_2"));

      await dfd.promise;

      expect(client.totalSent()).toEqual(2);
      expect(client.totalAck()).toEqual(2);

      await outbound.close();
      await listener.close();

      client.closeAll();
    });

    describe("queueing testing", () => {
      // These tests mock _connect, so the actual port value is irrelevant.
      const mockPort = 9999;

      test("... queues messages (autoConnect: false)", async () => {
        const client = new Client({ host: "0.0.0.0" });

        const outbound = client.createConnection(
          { port: mockPort, autoConnect: false },
          async () => {},
        );

        vi.spyOn(outbound as any, "_connect").mockResolvedValue(undefined);

        await outbound.sendMessage(makeTestMessage());

        expect(client.totalPending()).toEqual(1);
      });

      test("... queues messages to redis", async () => {
        let redisServer, redisPort, host;

        if (typeof process.env.REDIS_REMOTE === "undefined") {
          redisServer = new RedisMemoryServer();
          await redisServer.start();
          redisPort = await redisServer.getPort();
          host = await redisServer.getHost();
        } else {
          redisPort = parseInt(process.env.REDIS_PORT || "6379", 10);
          host = process.env.REDIS_HOST || "localhost";
        }

        const redis = createClient({
          socket: {
            host,
            port: redisPort,
          },
        });

        await redis.connect();

        const enqueueMessage = async (
          message: MessageItem,
          notifyPendingCount: NotifyPendingCount,
        ) => {
          await redis.lPush("hl7queue", message.toString());
          await notifyPendingCount(await redis.lLen("hl7queue"));
        };

        const flushQueue = async (
          callback: (message: MessageItem) => void,
          notifyPendingCount: NotifyPendingCount,
        ) => {
          while ((await redis.lLen("hl7queue")) > 0) {
            const result = await redis.blPop("hl7queue", 1);

            if (result && result.element) {
              const msg = new Message({ text: result.element });
              callback(msg);
              await notifyPendingCount(await redis.lLen("hl7queue"));
            }
          }
        };

        const client = new Client({ host: "0.0.0.0" });

        const outbound = client.createConnection(
          {
            port: mockPort,
            autoConnect: false,
            enqueueMessage,
            flushQueue,
          },
          async () => {},
        );

        vi.spyOn(outbound as any, "_connect").mockResolvedValue(undefined);

        await outbound.sendMessage(makeTestMessage());

        expect(client.totalPending()).toEqual(1);
      });

      test("... queues messages 10,001 still is 10000 (autoConnect: false)", async () => {
        const client = new Client({ host: "0.0.0.0" });

        const outbound = client.createConnection(
          { port: mockPort, autoConnect: false },
          async () => {},
        );

        vi.spyOn(outbound as any, "_connect").mockResolvedValue(undefined);

        const message = makeTestMessage();

        for (let i = 0; i < 10001; i++) {
          await outbound.sendMessage(message);
        }

        console.log(client.totalPending());

        expect(client.totalPending()).toEqual(10000);
      });
    });
  });

  describe("server/client failure checks", () => {
    test("...host does not exist, error out", async () => {
      // Find a free port — no server will be started on it, so connection must fail.
      const port = await portfinder.getPortPromise();

      const client = new Client({ host: "0.0.0.0", connectionTimeout: 1000 });
      const outbound = client.createConnection({ port }, async () => {});

      // ECONNREFUSED fires almost immediately (before the 1s timeout), so
      // listen for client.error first.
      const error = await expectEvent(outbound, "client.error");
      expect(error.code).toBe("ECONNREFUSED");

      outbound.removeAllListeners();
      client.closeAll();
    });

    test("...tls host does not exist, error out", async () => {
      const port = await portfinder.getPortPromise();

      const client = new Client({
        host: "0.0.0.0",
        connectionTimeout: 1000,
        tls: { rejectUnauthorized: false },
      });
      const outbound = client.createConnection({ port }, async () => {});

      const error = await expectEvent(outbound, "client.error");
      expect(error.code).toBe("ECONNREFUSED");

      outbound.removeAllListeners();
      client.closeAll();
    });
  });

  describe("...no tls", () => {
    describe("...no file", () => {
      test("...send batch with two message, get proper ACK", async () => {
        const port = await portfinder.getPortPromise();
        const dfd = createDeferred<void>();

        const server = new Server({ bindAddress: "0.0.0.0" });
        const inbound = server.createInbound({ port }, async (req, res) => {
          const messageReq = req.getMessage();
          expect(messageReq.get("MSH.12").toString()).toBe("2.1");
          await res.sendResponse("AA");
        });

        await expectEvent(inbound, "listen");

        const client = new Client({ host: "0.0.0.0" });
        const outbound = client.createConnection({ port }, async (res) => {
          const messageRes = res.getMessage();
          expect(messageRes.get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        });

        const batch = new Batch();
        batch.start();

        const batchBuilder = new HL7_2_1();
        batchBuilder.buildMSH({
          msh_9: "ACK",
          msh_10: "CONTROL_ID",
          msh_11: "T",
        });
        const message = batchBuilder.toMessage();

        batch.add(message);
        batch.add(message);

        batch.end();

        await outbound.sendMessage(batch);

        await dfd.promise;

        expect(client.totalSent()).toEqual(1);
        expect(client.totalAck()).toEqual(2);

        await outbound.close();
        await inbound.close();

        client.closeAll();
      });
    });
  });

  describe("...tls", () => {
    describe("...no file", () => {
      test("...simple", async () => {
        const port = await portfinder.getPortPromise();
        const dfd = createDeferred<void>();

        const server = new Server({
          bindAddress: "0.0.0.0",
          tls: {
            key: fs.readFileSync(path.join("certs/", "server-key.pem")),
            cert: fs.readFileSync(path.join("certs/", "server-crt.pem")),
            rejectUnauthorized: false,
          },
        });
        const inbound = server.createInbound({ port }, async (req, res) => {
          const messageReq = req.getMessage();
          expect(messageReq.get("MSH.12").toString()).toBe("2.7");
          await res.sendResponse("AA");
        });

        await expectEvent(inbound, "listen");

        const client = new Client({
          host: "0.0.0.0",
          tls: { rejectUnauthorized: false },
        });
        const outbound = client.createConnection({ port }, async (res) => {
          const messageRes = res.getMessage();
          expect(messageRes.get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        });

        await expectEvent(outbound, "connect");

        await outbound.sendMessage(makeTestMessage());

        await dfd.promise;

        await outbound.close();
        await inbound.close();

        client.closeAll();
      }, 70000);
    });
  });
});
