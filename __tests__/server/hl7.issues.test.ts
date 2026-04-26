import Client, {
  InboundResponse,
  Message,
  createHL7Date,
} from "node-hl7-client/src";
import Server, {
  HL7ListenerError,
  InboundRequest,
} from "node-hl7-server/src";
import net, { Socket } from "node:net";
import portfinder from "portfinder";
import { describe, expect, test } from "vitest";
import { createDeferred, expectEvent } from "./__utils__";

/** Pick a free port for a test. Uses a high start port to avoid colliding
 *  with sibling test files that also use portfinder (which defaults to 8000). */
async function pickPort(): Promise<number> {
  return portfinder.getPortPromise({
    port: 15000 + Math.floor(Math.random() * 10000),
  });
}

/** Minimal valid HL7 message used by these tests. */
function makeTestMessage(controlId: string = "CONTROL_ID"): Message {
  return new Message({
    text: `MSH|^~\\&|SENDER|FAC|RECEIVER|RFAC|20240101000000||ADT^A01|${controlId}|D|2.7`,
  });
}

describe("node hl7 server - issue coverage", () => {
  describe("PR #134 — InboundRequest exposes the underlying socket", () => {
    test("InboundRequest.getSocket() returns the socket passed in props", () => {
      const fakeSocket = { foo: "bar" } as unknown as Socket;
      const message = makeTestMessage();
      const req = new InboundRequest(message, {
        type: "message",
        socket: fakeSocket,
      });
      expect(req.getSocket()).toBe(fakeSocket);
    });

    test("InboundRequest.getSocket() throws when no socket was provided", () => {
      const req = new InboundRequest(makeTestMessage(), { type: "message" });
      expect(() => req.getSocket()).toThrow(HL7ListenerError);
      expect(() => req.getSocket()).toThrow("Socket is not defined.");
    });

    test("createInbound handler receives a real net.Socket via req.getSocket()", async () => {
      const port = await pickPort();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const socket = req.getSocket();
        // The exact concrete class is net.Socket (or tls.TLSSocket which extends it).
        expect(socket).toBeInstanceOf(net.Socket);
        // localPort should match the port we bound to.
        expect(socket.localPort).toBe(port);
        // Both ends of the connection should have addresses available.
        expect(typeof socket.remoteAddress).toBe("string");
        expect(typeof socket.localAddress).toBe("string");
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port },
        async (_res: InboundResponse) => {
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeTestMessage());
      await dfd.promise;

      await outbound.close();
      await listener.close();
      client.closeAll();
    });
  });

  describe("Issue #130 — custom ACK support", () => {
    test("sendCustomResponse delivers a verbatim ACK to the client", async () => {
      const port = await pickPort();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const original = req.getMessage();
        // Build a vendor-shaped ACK that does NOT come from the auto-generator.
        // Note the additional MSA fields (MSA.3 text + custom MSA.6) and the
        // explicit ERR segment that sendResponse() would never produce.
        const customAck = new Message({
          text: [
            `MSH|^~\\&|CUSTOM_APP|CUSTOM_FAC|REMOTE_APP|REMOTE_FAC|${createHL7Date(new Date())}||ACK^A01|RESP_${original.get("MSH.10").toString()}|P|2.5`,
            `MSA|AA|${original.get("MSH.10").toString()}|Custom message accepted|||VENDOR_CODE`,
            `ERR|||0^Message accepted^HL70357|I`,
          ].join("\r"),
        });

        await res.sendCustomResponse(customAck);

        // After sending, getAckMessage() should reflect the custom ACK.
        const stored = res.getAckMessage();
        expect(stored?.get("MSH.3").toString()).toBe("CUSTOM_APP");
        expect(stored?.get("MSA.3").toString()).toBe(
          "Custom message accepted",
        );
        expect(stored?.get("MSA.6").toString()).toBe("VENDOR_CODE");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          const got = res.getMessage();
          expect(got.get("MSH.3").toString()).toBe("CUSTOM_APP");
          expect(got.get("MSH.4").toString()).toBe("CUSTOM_FAC");
          expect(got.get("MSA.1").toString()).toBe("AA");
          expect(got.get("MSA.3").toString()).toBe("Custom message accepted");
          // The custom segment must round-trip.
          expect(got.get("ERR.3.2").toString()).toBe("Message accepted");
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeTestMessage());
      await dfd.promise;

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("sendCustomResponse accepts a raw HL7 string as well as a Message", async () => {
      const port = await pickPort();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const original = req.getMessage();
        const raw = [
          `MSH|^~\\&|RAW|FAC|R|RF|${createHL7Date(new Date())}||ACK^A01|RAW_${original.get("MSH.10").toString()}|P|2.5`,
          `MSA|AA|${original.get("MSH.10").toString()}`,
        ].join("\r");

        await res.sendCustomResponse(raw);
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          const got = res.getMessage();
          expect(got.get("MSH.3").toString()).toBe("RAW");
          expect(got.get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeTestMessage());
      await dfd.promise;

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("sendCustomResponse emits 'response.sent' on the listener", async () => {
      const port = await pickPort();
      const responseSent = createDeferred<void>();
      const ackReceived = createDeferred<void>();

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const ack = new Message({
          text: [
            `MSH|^~\\&|A|F|R|RF|${createHL7Date(new Date())}||ACK|X${req.getMessage().get("MSH.10").toString()}|P|2.5`,
            `MSA|AA|${req.getMessage().get("MSH.10").toString()}`,
          ].join("\r"),
        });
        await res.sendCustomResponse(ack);
      });

      listener.on("response.sent", () => responseSent.resolve());

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port },
        async (_res: InboundResponse) => {
          ackReceived.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeTestMessage());

      await Promise.all([responseSent.promise, ackReceived.promise]);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });
  });

  describe("Issue #132 — large messages and concurrent connections", () => {
    test("two simultaneous clients do not interleave each other's data buffers", async () => {
      // The original Inbound shared a single MLLPCodec across every socket on the
      // same listener. When two clients sent data at the same time, their
      // partial buffers were concatenated together and the parser would throw
      // "text must begin with the MSH segment". This test exercises that path.
      const port = await pickPort();
      const seenControlIds = new Set<string>();
      const expected = 6;
      const allDone = createDeferred<void>();
      const dataErrors: any[] = [];

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const id = req.getMessage().get("MSH.10").toString();
        seenControlIds.add(id);
        await res.sendResponse("AA");
        if (seenControlIds.size === expected) allDone.resolve();
      });
      listener.on("data.error", (err) => dataErrors.push(err));

      await expectEvent(listener, "listen");

      const clientA = new Client({ host: "0.0.0.0" });
      const clientB = new Client({ host: "0.0.0.0" });
      const outboundA = clientA.createConnection(
        { port, waitAck: false },
        async () => {},
      );
      const outboundB = clientB.createConnection(
        { port, waitAck: false },
        async () => {},
      );

      await Promise.all([
        expectEvent(outboundA, "connect"),
        expectEvent(outboundB, "connect"),
      ]);

      // Interleave sends from two connections.
      await Promise.all([
        outboundA.sendMessage(makeTestMessage("A_1")),
        outboundB.sendMessage(makeTestMessage("B_1")),
        outboundA.sendMessage(makeTestMessage("A_2")),
        outboundB.sendMessage(makeTestMessage("B_2")),
        outboundA.sendMessage(makeTestMessage("A_3")),
        outboundB.sendMessage(makeTestMessage("B_3")),
      ]);

      await allDone.promise;

      expect(dataErrors).toEqual([]);
      expect(seenControlIds).toEqual(
        new Set(["A_1", "A_2", "A_3", "B_1", "B_2", "B_3"]),
      );

      await outboundA.close();
      await outboundB.close();
      await listener.close();
      clientA.closeAll();
      clientB.closeAll();
    });

    test("a single MLLP frame split across many TCP writes still parses cleanly", async () => {
      // Issue #132: large messages from Epic occasionally produced "text must
      // begin with the MSH segment". Reproduce TCP fragmentation by writing
      // the framed message one tiny chunk at a time.
      const port = await pickPort();
      const ackReceived = createDeferred<string>();
      const dataErrors: any[] = [];

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        await res.sendResponse("AA");
      });
      listener.on("data.error", (err) => dataErrors.push(err));

      await expectEvent(listener, "listen");

      // Build a "large" ADT^A08 with a long OBX so the framed bytes total
      // several KB, then split into 64-byte chunks for the wire.
      const big =
        "X".repeat(8 * 1024); // 8KB of payload inside an OBX field
      const text = [
        `MSH|^~\\&|EPIC|HOSP|RECV|RFAC|20240101000000||ADT^A08|FRAG_001|P|2.5`,
        `EVN|A08|20240101000000`,
        `PID|1||MRN12345^^^HOSP^MR||DOE^JANE^A||19800101|F`,
        `OBX|1|TX|NOTE^Long Note^L||${big}||||||F`,
      ].join("\r");

      const VT = 0x0b;
      const FS = 0x1c;
      const CR = 0x0d;
      const framed = Buffer.concat([
        Buffer.from([VT]),
        Buffer.from(text, "utf-8"),
        Buffer.from([FS, CR]),
      ]);

      const raw = net.createConnection({ host: "0.0.0.0", port });
      await new Promise<void>((resolve, reject) => {
        raw.once("connect", resolve);
        raw.once("error", reject);
      });

      raw.on("data", (buf) => {
        ackReceived.resolve(buf.toString("utf-8"));
      });

      // Write in 64-byte chunks with a microtask gap so the receiver sees
      // many separate "data" events.
      const chunkSize = 64;
      for (let i = 0; i < framed.length; i += chunkSize) {
        raw.write(framed.subarray(i, i + chunkSize));
        await new Promise((r) => setImmediate(r));
      }

      const ack = await ackReceived.promise;
      expect(dataErrors).toEqual([]);
      expect(ack).toContain("MSA|AA|FRAG_001");

      raw.destroy();
      await listener.close();
    });
  });

  describe("Issue #133 — performance / throughput smoke test", () => {
    test("the listener processes a burst of messages without dropping any", async () => {
      // Issue #133 asks whether the library can handle ~60k ADT messages/day
      // (~0.7 msg/s sustained, with bursts). This is just a smoke test that we
      // can move a reasonable burst through a single connection without
      // dropping or duplicating any.
      const port = await pickPort();
      const total = 200;
      const seen = new Set<string>();
      const allDone = createDeferred<void>();
      const dataErrors: any[] = [];

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound({ port }, async (req, res) => {
        const id = req.getMessage().get("MSH.10").toString();
        seen.add(id);
        await res.sendResponse("AA");
        if (seen.size === total) allDone.resolve();
      });
      listener.on("data.error", (err) => dataErrors.push(err));

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0" });
      const outbound = client.createConnection(
        { port, waitAck: false },
        async () => {},
      );

      await expectEvent(outbound, "connect");

      const start = Date.now();
      const sends: Promise<unknown>[] = [];
      for (let i = 0; i < total; i++) {
        sends.push(outbound.sendMessage(makeTestMessage(`PERF_${i}`)));
      }
      await Promise.all(sends);
      await allDone.promise;
      const elapsedMs = Date.now() - start;

      expect(dataErrors).toEqual([]);
      expect(seen.size).toBe(total);
      // The client is allowed to bundle messages into MLLP frames or batches,
      // so stats.received counts frames rather than messages. stats.totalMessage
      // is the per-message counter, which should match what we sent.
      expect(listener.stats.totalMessage).toBeGreaterThanOrEqual(total);
      // Sanity: 200 small messages should finish well under 10 seconds even on
      // a slow CI runner. This guards against future regressions making the
      // per-message overhead pathological.
      expect(elapsedMs).toBeLessThan(10_000);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });
  });
});
