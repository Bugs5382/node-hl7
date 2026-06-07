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
import { HL7ListenerError, InboundRequest, Server } from "node-hl7-server/src";
import { describe, expect, test } from "vitest";

describe("node hl7 server", () => {
  describe("InboundRequest module", () => {
    test("getMessage throws when no Message was provided", async () => {
      // @ts-expect-error message is not defined
      const empty = new InboundRequest(undefined, { type: "file" });
      try {
        empty.getMessage();
      } catch (error) {
        expect(error).toStrictEqual(
          new HL7ListenerError("Message is not defined."),
        );
      }
    });

    test("getType returns the configured request type", async () => {
      // @ts-expect-error type check
      const request = new InboundRequest("", { type: "file" });
      expect(request.getType()).toBe("file");
    });
  });

  describe("Server class", () => {
    test("rejects bindAddress with non-string type", async () => {
      try {
        // @ts-expect-error this is not a string
        new Server({ bindAddress: 351_123 });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is not valid string.");
      }
    });

    test("accepts ipv4 and ipv6 both true (dual-stack)", async () => {
      expect(() => new Server({ ipv4: true, ipv6: true })).not.toThrow();
    });

    test("rejects ipv4 and ipv6 both false", async () => {
      expect.assertions(1);
      try {
        new Server({ ipv4: false, ipv6: false });
      } catch (error: any) {
        expect(error.message).toBe(
          "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
        );
      }
    });

    test("rejects empty bindAddress when ipv4 is exclusive", async () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "", ipv4: true });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv4 address.");
      }
    });

    test("rejects malformed bindAddress when ipv4 is exclusive", async () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "123.34.52.455", ipv4: true });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv4 address.");
      }
    });

    test("rejects garbage bindAddress in dual-stack mode", async () => {
      expect.assertions(1);
      try {
        // dual-stack must be opted into; the message then names both families
        new Server({ bindAddress: "not-an-ip", ipv4: true, ipv6: true });
      } catch (error: any) {
        expect(error.message).toBe(
          "bindAddress is not a valid IPv4 or IPv6 address.",
        );
      }
    });

    test("rejects empty bindAddress when ipv6 is exclusive", async () => {
      try {
        new Server({ bindAddress: "", ipv4: false, ipv6: true });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv6 address.");
      }
    });

    test("rejects malformed bindAddress when ipv6 is exclusive", async () => {
      try {
        new Server({
          bindAddress: "2001:0db8:85a3:0000:zz00:8a2e:0370:7334",
          ipv4: false,
          ipv6: true,
        });
      } catch (error: any) {
        expect(error.message).toBe("bindAddress is an invalid ipv6 address.");
      }
    });

    test("accepts a valid IPv6 bindAddress when ipv6 is exclusive", async () => {
      try {
        new Server({
          bindAddress: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
          ipv4: false,
          ipv6: true,
        });
      } catch (error: any) {
        expect(error.message).toBeUndefined();
      }
    });

    test("properties exist", async () => {
      const server = new Server();
      expect(server).toHaveProperty("createInbound");
    });
  });

  describe("Listener class", () => {
    test("rejects createInbound with no port", async () => {
      try {
        const server = new Server();
        // @ts-expect-error port is not specified
        server.createInbound({ version: "2.7" });
      } catch (error: any) {
        expect(error.message).toBe("port is not defined.");
      }
    });

    test("rejects port given as a string", async () => {
      try {
        const server = new Server();
        // @ts-expect-error port is not a number
        server.createInbound({ port: "12345", version: "2.7" }, async () => {});
      } catch (error: any) {
        expect(error.message).toBe("port is not a valid number.");
      }
    });

    test("rejects negative port", async () => {
      try {
        const server = new Server();
        server.createInbound({ port: -1, version: "2.7" }, async () => {});
      } catch (error: any) {
        expect(error.message).toEqual("port must be a number (0, 65353).");
      }
    });

    test("rejects port above 65353", async () => {
      try {
        const server = new Server();
        server.createInbound({ port: 65_354, version: "2.7" }, async () => {});
      } catch (error: any) {
        expect(error.message).toBe("port must be a number (0, 65353).");
      }
    });

    test("rejects name with disallowed special characters", async () => {
      try {
        const server = new Server();
        server.createInbound(
          { name: "$#@!sdfe-`", port: 65_353 },
          async () => {},
        );
      } catch (error: any) {
        expect(error.message).toContain(
          "name must not contain certain characters: `!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?~.",
        );
      }
    });

    test("rejects mshOverrides value of boolean type", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": true,
            },
            name: "mshOverride",
            port: 4000,
          },
          async () => {},
        );
      } catch (error: any) {
        expect(error.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("rejects mshOverrides value of integer type", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": 1,
            },
            name: "mshOverride",
            port: 4000,
          },
          async () => {},
        );
      } catch (error: any) {
        expect(error.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("rejects mshOverrides value of float type", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": 1.1,
            },
            name: "mshOverride",
            port: 4000,
          },
          async () => {},
        );
      } catch (error: any) {
        expect(error.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("InboundRequest.getMessage throws when message is missing", async () => {
      try {
        // @ts-expect-error no message.
        const inboundRequest = new InboundRequest("", { type: "message" });
        // this should cause an error
        inboundRequest.getMessage();
      } catch (error: any) {
        expect(error.message).toBe("Message is not defined.");
      }
    });
  });
});
