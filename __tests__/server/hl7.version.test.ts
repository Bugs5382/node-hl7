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
    test("throws when version is missing", () => {
      expect.assertions(2);
      const server = new Server({ bindAddress: "0.0.0.0" });
      try {
        // @ts-expect-error version is required
        server.createInbound({ port: 3000 }, async () => {});
      } catch (error) {
        expect(error).toBeInstanceOf(HL7ListenerError);
        expect((error as HL7ListenerError).message).toBe(
          "version is not defined.",
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
  });
});
