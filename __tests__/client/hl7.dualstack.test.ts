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
import { detectIPFamily, validIPv4, validIPv6 } from "node-hl7-client/src";
import Server from "node-hl7-server/src";
import portfinder from "portfinder";
import { describe, expect, test } from "vitest";

import { createDeferred, expectEvent } from "../server/__utils__";

function makeTestMessage(): Message {
  return new Message({
    text: String.raw`MSH|^~\&|||||20240101000000||ADT^A01|CONTROL_ID|D|2.7`,
  });
}

describe("dual-stack & IP family handling", () => {
  describe("validIPv4 / validIPv6 / detectIPFamily", () => {
    test("validIPv4 accepts dotted quad", () => {
      expect(validIPv4("127.0.0.1")).toBe(true);
      expect(validIPv4("0.0.0.0")).toBe(true);
      expect(validIPv4("192.0.2.1")).toBe(true);
      expect(validIPv4("255.255.255.255")).toBe(true);
    });

    test("validIPv4 rejects out-of-range / malformed", () => {
      expect(validIPv4("256.0.0.1")).toBe(false);
      expect(validIPv4("1.2.3")).toBe(false);
      expect(validIPv4("1.2.3.4.5")).toBe(false);
      expect(validIPv4("a.b.c.d")).toBe(false);
      expect(validIPv4("")).toBe(false);
      expect(validIPv4("::1")).toBe(false);
    });

    test("validIPv6 accepts full-form addresses", () => {
      expect(validIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")).toBe(true);
      expect(validIPv6("fe80:0000:0000:0000:0000:0000:0000:0001")).toBe(true);
    });

    test("validIPv6 accepts shorthand notation", () => {
      expect(validIPv6("::1")).toBe(true);
      expect(validIPv6("::")).toBe(true);
      expect(validIPv6("fe80::1")).toBe(true);
      expect(validIPv6("2001:db8::1")).toBe(true);
      expect(validIPv6("2001:db8::")).toBe(true);
    });

    test("validIPv6 accepts IPv4-mapped addresses", () => {
      expect(validIPv6("::ffff:192.168.1.1")).toBe(true);
      expect(validIPv6("::ffff:0.0.0.0")).toBe(true);
    });

    test("validIPv6 strips brackets and zone-id suffix", () => {
      expect(validIPv6("[::1]")).toBe(true);
      expect(validIPv6("fe80::1%eth0")).toBe(true);
      expect(validIPv6("[fe80::1%eth0]")).toBe(true);
    });

    test("validIPv6 rejects malformed", () => {
      expect(validIPv6("2001:0db8:85a3:0000:zz00:8a2e:0370:7334")).toBe(false);
      expect(validIPv6("not-an-ip")).toBe(false);
      expect(validIPv6("")).toBe(false);
      expect(validIPv6("1.2.3.4")).toBe(false);
    });

    test("detectIPFamily classifies literals vs FQDNs", () => {
      expect(detectIPFamily("127.0.0.1")).toBe(4);
      expect(detectIPFamily("::1")).toBe(6);
      expect(detectIPFamily("fe80::1")).toBe(6);
      expect(detectIPFamily("hl7.example.com")).toBe(0);
      expect(detectIPFamily("localhost")).toBe(0);
    });
  });

  describe("Client option normalization", () => {
    test("IPv4-only is the default", () => {
      const client = new Client({ host: "hl7.example.com" });
      expect(client._opt.ipv4).toBe(true);
      expect(client._opt.ipv6).toBe(false);
      expect(client._opt.family).toBe(4);
    });

    test("explicit ipv4: true alone forces IPv4-only family", () => {
      const client = new Client({ host: "192.0.2.1", ipv4: true });
      expect(client._opt.ipv4).toBe(true);
      expect(client._opt.ipv6).toBe(false);
      expect(client._opt.family).toBe(4);
    });

    test("explicit ipv6: true alone forces IPv6-only family", () => {
      const client = new Client({ host: "::1", ipv6: true });
      expect(client._opt.ipv4).toBe(false);
      expect(client._opt.ipv6).toBe(true);
      expect(client._opt.family).toBe(6);
    });

    test("dual-stack opt-in: both ipv4 and ipv6 true", () => {
      const client = new Client({
        host: "hl7.example.com",
        ipv4: true,
        ipv6: true,
      });
      expect(client._opt.ipv4).toBe(true);
      expect(client._opt.ipv6).toBe(true);
      // family 0 = let Node decide via Happy Eyeballs
      expect(client._opt.family).toBe(0);
      expect(client._opt.autoSelectFamily).toBe(true);
    });

    test("dual-stack with IPv6 literal pins family to 6", () => {
      const client = new Client({ host: "::1", ipv4: true, ipv6: true });
      expect(client._opt.family).toBe(6);
    });

    test("dual-stack with IPv4 literal pins family to 4", () => {
      const client = new Client({ host: "127.0.0.1", ipv4: true, ipv6: true });
      expect(client._opt.family).toBe(4);
    });

    test("autoSelectFamily can be disabled", () => {
      const client = new Client({
        autoSelectFamily: false,
        host: "hl7.example.com",
        ipv4: true,
        ipv6: true,
      });
      expect(client._opt.autoSelectFamily).toBe(false);
    });

    test("rejects an IPv6 literal when ipv4 is exclusive", () => {
      expect.assertions(1);
      try {
        new Client({ host: "::1", ipv4: true });
      } catch (error: any) {
        expect(error.message).toBe("host is not a valid IPv4 address.");
      }
    });

    test("rejects an IPv4 literal when ipv6 is exclusive", () => {
      expect.assertions(1);
      try {
        new Client({ host: "127.0.0.1", ipv6: true });
      } catch (error: any) {
        expect(error.message).toBe("host is not a valid IPv6 address.");
      }
    });

    test("validates autoSelectFamilyAttemptTimeout range", () => {
      expect.assertions(1);
      try {
        new Client({
          autoSelectFamilyAttemptTimeout: 5,
          host: "192.0.2.1",
        });
      } catch (error: any) {
        expect(error.message).toMatch(
          /autoSelectFamilyAttemptTimeout must be a number/,
        );
      }
    });
  });

  describe("Server option normalization", () => {
    test("IPv4-only is the default: bindAddress=0.0.0.0, ipv4=true, ipv6=false", () => {
      const server = new Server();
      expect(server._opt.ipv4).toBe(true);
      expect(server._opt.ipv6).toBe(false);
      expect(server._opt.bindAddress).toBe("0.0.0.0");
      expect(server._opt.ipv6Only).toBe(false);
    });

    test("ipv4-only: ipv4=true alone defaults bindAddress to 0.0.0.0", () => {
      const server = new Server({ ipv4: true });
      expect(server._opt.ipv4).toBe(true);
      expect(server._opt.ipv6).toBe(false);
      expect(server._opt.bindAddress).toBe("0.0.0.0");
      expect(server._opt.ipv6Only).toBe(false);
    });

    test("ipv6-only: ipv6=true alone defaults bindAddress to :: with ipv6Only", () => {
      const server = new Server({ ipv6: true });
      expect(server._opt.ipv4).toBe(false);
      expect(server._opt.ipv6).toBe(true);
      expect(server._opt.bindAddress).toBe("::");
      expect(server._opt.ipv6Only).toBe(true);
    });

    test("dual-stack opt-in: both ipv4=true and ipv6=true", () => {
      const server = new Server({ ipv4: true, ipv6: true });
      expect(server._opt.ipv4).toBe(true);
      expect(server._opt.ipv6).toBe(true);
      expect(server._opt.bindAddress).toBe("::");
      expect(server._opt.ipv6Only).toBe(false);
    });

    test("user can pin a specific IPv4 bindAddress", () => {
      const server = new Server({ bindAddress: "127.0.0.1", ipv4: true });
      expect(server._opt.bindAddress).toBe("127.0.0.1");
    });

    test("user can pin a specific IPv6 bindAddress", () => {
      const server = new Server({ bindAddress: "::1", ipv6: true });
      expect(server._opt.bindAddress).toBe("::1");
    });

    test("dual-stack accepts an IPv4 or IPv6 bindAddress", () => {
      expect(
        () => new Server({ bindAddress: "127.0.0.1", ipv4: true, ipv6: true }),
      ).not.toThrow();
      expect(
        () => new Server({ bindAddress: "::", ipv4: true, ipv6: true }),
      ).not.toThrow();
      expect(
        () => new Server({ bindAddress: "::1", ipv4: true, ipv6: true }),
      ).not.toThrow();
    });

    test("ipv6-only rejects IPv4 bindAddress", () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "127.0.0.1", ipv6: true });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv6 address.");
      }
    });

    test("ipv4-only rejects IPv6 bindAddress", () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "::1", ipv4: true });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv4 address.");
      }
    });

    test("localhost is always allowed", () => {
      expect(() => new Server({ bindAddress: "localhost" })).not.toThrow();
      expect(
        () => new Server({ bindAddress: "localhost", ipv4: true }),
      ).not.toThrow();
      expect(
        () => new Server({ bindAddress: "localhost", ipv6: true }),
      ).not.toThrow();
    });
  });

  describe("End-to-end wire behavior", () => {
    test("IPv4 client → IPv4 server (loopback)", async () => {
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "127.0.0.1", ipv4: true });
      const listener = server.createInbound({ port }, async (_request, res) => {
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "127.0.0.1", ipv4: true });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
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

    test("IPv6 client → IPv6 server (loopback)", async () => {
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "::1", ipv6: true });
      const listener = server.createInbound({ port }, async (_request, res) => {
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      const client = new Client({ host: "::1", ipv6: true });
      const outbound = client.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
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

    test("dual-stack server accepts both IPv4 and IPv6 clients", async () => {
      const port = await portfinder.getPortPromise();

      // Opt into dual-stack: bindAddress "::", ipv6Only=false
      const server = new Server({ ipv4: true, ipv6: true });
      const listener = server.createInbound({ port }, async (_request, res) => {
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      // IPv4 client
      const v4Done = createDeferred<void>();
      const clientV4 = new Client({ host: "127.0.0.1", ipv4: true });
      const v4Out = clientV4.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
          v4Done.resolve();
        },
      );
      await expectEvent(v4Out, "connect");
      await v4Out.sendMessage(makeTestMessage());
      await v4Done.promise;
      await v4Out.close();
      clientV4.closeAll();

      // IPv6 client
      const v6Done = createDeferred<void>();
      const clientV6 = new Client({ host: "::1", ipv6: true });
      const v6Out = clientV6.createConnection(
        { port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
          v6Done.resolve();
        },
      );
      await expectEvent(v6Out, "connect");
      await v6Out.sendMessage(makeTestMessage());
      await v6Done.promise;
      await v6Out.close();
      clientV6.closeAll();

      await listener.close();
    });

    test("dual-stack client falls back from IPv6 to IPv4 via Happy Eyeballs", async () => {
      // localhost has both A (127.0.0.1) and AAAA (::1) records on most
      // platforms. Bind the server to IPv4 only — the IPv6 attempt will fail
      // (ECONNREFUSED on ::1) and Node's autoSelectFamily must fall back to
      // the IPv4 address.
      const port = await portfinder.getPortPromise();
      const dfd = createDeferred<void>();

      const server = new Server({ bindAddress: "127.0.0.1", ipv4: true });
      const listener = server.createInbound({ port }, async (_request, res) => {
        await res.sendResponse("AA");
      });

      await expectEvent(listener, "listen");

      // Opt into dual-stack on the client; autoSelectFamily=true is default.
      const client = new Client({
        host: "localhost",
        ipv4: true,
        ipv6: true,
      });
      const outbound = client.createConnection(
        { maxConnectionAttempts: 2, port },
        async (res: InboundResponse) => {
          expect(res.getMessage().get("MSA.1").toString()).toBe("AA");
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
});
