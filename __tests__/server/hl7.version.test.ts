/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

import Client, { InboundResponse, Message } from "node-hl7-client/src";
import Server, { HL7ListenerError } from "node-hl7-server/src";
import net from "node:net";
import portfinder from "portfinder";
import { describe, expect, test } from "vitest";

import { createDeferred, expectEvent } from "./__utils__";

/** Build a valid HL7 message at a specific version. */
function makeMessage(
  version: string,
  controlId: string = "CONTROL_ID",
): Message {
  return new Message({
    text: String.raw`MSH|^~\&|||||20240101000000||ADT^A01|${controlId}|D|${version}`,
  });
}

describe("server HL7 version pin", () => {
  describe("createInbound construction", () => {
    test("throws when neither version nor acceptAnyVersion is given", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        server.createInbound({ port: 3000 }, async () => {});
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          "version is not defined.",
        );
      }
    });

    test("throws when version and acceptAnyVersion are both set", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        server.createInbound(
          { acceptAnyVersion: true, port: 3000, version: "2.7" },
          async () => {},
        );
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          "version and acceptAnyVersion are mutually exclusive.",
        );
      }
    });

    test("throws when the version array is empty", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        server.createInbound({ port: 3000, version: [] }, async () => {});
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          "version must not be an empty array.",
        );
      }
    });

    test("throws when a version array element is not a known HL7 version", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        server.createInbound(
          // @ts-expect-error every element must be a known HL7 version
          { port: 3000, version: ["2.4", "2.9"] },
          async () => {},
        );
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          'version "2.9" is not a known HL7 version.',
        );
      }
    });

    test("throws when version is not a known HL7 version", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        // @ts-expect-error version must be a known HL7 version
        server.createInbound({ port: 3000, version: "2.9" }, async () => {});
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          'version "2.9" is not a known HL7 version.',
        );
      }
    });
  });

  describe("inbound enforcement", () => {
    test("matched round-trip reaches the handler and is ACKed", async () => {
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();
      let handlerCalled = false;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { port, version: "2.7" },
        async (request, res) => {
          handlerCalled = true;
          expect(request.getMessage().get("MSH.12").toString()).toBe("2.7");
          await res.sendResponse("AA");
        },
      );

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0", version: "2.7" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeMessage("2.7"));
      await dfd.promise;

      expect(handlerCalled).toBe(true);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("mismatched inbound is AR-rejected, emits the error event, and skips the handler", async () => {
      const port = await portfinder.getPortPromise();
      const ackReceived = createDeferred<void>();
      const errorReceived = createDeferred<HL7ListenerError>();
      let handlerCalled = false;

      // listener pins 2.7; client sends 2.5
      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { port, version: "2.7" },
        async (request, res) => {
          handlerCalled = true;
          await res.sendResponse("AA");
        },
      );
      listener.on("data.error", (error) => errorReceived.resolve(error));

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0", version: "2.5" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AR");
          ackReceived.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeMessage("2.5"));

      await ackReceived.promise;
      const error = await errorReceived.promise;

      expect(error).toBeInstanceOf(HL7ListenerError);
      expect(error.message).toBe(
        'message version "2.5" does not match the listener version "2.7".',
      );
      // the handler must not have run for a rejected message
      expect(handlerCalled).toBe(false);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("accepts a message whose version is in the version array", async () => {
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();
      let handlerCalled = false;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { port, version: ["2.3.1", "2.4", "2.5"] },
        async (request, res) => {
          handlerCalled = true;
          expect(request.getMessage().get("MSH.12").toString()).toBe("2.4");
          await res.sendResponse("AA");
        },
      );

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0", version: "2.4" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeMessage("2.4"));
      await dfd.promise;

      expect(handlerCalled).toBe(true);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("AR-rejects a message whose version is not in the version array", async () => {
      const port = await portfinder.getPortPromise();
      const ackReceived = createDeferred<void>();
      const errorReceived = createDeferred<HL7ListenerError>();
      let handlerCalled = false;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { port, version: ["2.3.1", "2.4", "2.5"] },
        async (_request, res) => {
          handlerCalled = true;
          await res.sendResponse("AA");
        },
      );
      listener.on("data.error", (error) => errorReceived.resolve(error));

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0", version: "2.6" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AR");
          ackReceived.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeMessage("2.6"));

      await ackReceived.promise;
      const error = await errorReceived.promise;

      expect(error).toBeInstanceOf(HL7ListenerError);
      expect(error.message).toBe(
        'message version "2.6" is not one of the listener versions "2.3.1, 2.4, 2.5".',
      );
      expect(handlerCalled).toBe(false);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("acceptAnyVersion reaches the handler for any known version", async () => {
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();
      let handlerCalled = false;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { acceptAnyVersion: true, port },
        async (request, res) => {
          handlerCalled = true;
          expect(request.getMessage().get("MSH.12").toString()).toBe("2.3");
          await res.sendResponse("AA");
        },
      );

      await expectEvent(listener, "listen");

      const client = new Client({ host: "0.0.0.0", version: "2.3" });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
          dfd.resolve();
        },
      );

      await expectEvent(outbound, "connect");
      await outbound.sendMessage(makeMessage("2.3"));
      await dfd.promise;

      expect(handlerCalled).toBe(true);

      await outbound.close();
      await listener.close();
      client.closeAll();
    });

    test("acceptAnyVersion still AR-rejects an unknown MSH.12", async () => {
      const port = await portfinder.getPortPromise();
      const errorReceived = createDeferred<HL7ListenerError>();
      let handlerCalled = false;

      const server = new Server({ bindAddress: "0.0.0.0" });
      const listener = server.createInbound(
        { acceptAnyVersion: true, port },
        async (_request, res) => {
          handlerCalled = true;
          await res.sendResponse("AA");
        },
      );
      listener.on("data.error", (error) => errorReceived.resolve(error));

      await expectEvent(listener, "listen");

      // The client validates its own version, so an unknown version can only be
      // delivered over a raw MLLP frame (VT ... FS CR).
      const raw = makeMessage("9.9").toString();
      const socket = net.connect(port, "0.0.0.0");
      await new Promise<void>((resolve) => socket.once("connect", resolve));
      socket.write(
        Buffer.concat([
          Buffer.from([0x0b]),
          Buffer.from(raw, "utf8"),
          Buffer.from([0x1c, 0x0d]),
        ]),
      );

      const error = await errorReceived.promise;
      expect(error).toBeInstanceOf(HL7ListenerError);
      expect(error.message).toBe(
        'message version "9.9" is not a known HL7 version.',
      );
      expect(handlerCalled).toBe(false);

      socket.destroy();
      await listener.close();
    });
  });
});
