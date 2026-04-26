import { HL7ListenerError, InboundRequest, Server } from "node-hl7-server/src";
import { describe, expect, test } from "vitest";

describe("node hl7 server", () => {
  describe("sanity tests - modules", () => {
    test("InboundRequest - message undefined", async () => {
      // @ts-expect-error message is not defined
      const empty = new InboundRequest(undefined, { type: "file" });
      try {
        empty.getMessage();
      } catch (e) {
        expect(e).toStrictEqual(
          new HL7ListenerError("Message is not defined."),
        );
      }
    });

    test("InboundRequest - type check", async () => {
      // @ts-expect-error type check
      const req = new InboundRequest("", { type: "file" });
      expect(req.getType()).toBe("file");
    });
  });

  describe("sanity tests - server class", () => {
    test("error - bindAddress has to be string", async () => {
      try {
        // @ts-expect-error this is not a string
        new Server({ bindAddress: 351123 });
      } catch (err: any) {
        expect(err.message).toBe("bindAddress is not valid string.");
      }
    });

    test("ipv4 + ipv6 both true is allowed (dual-stack)", async () => {
      expect(() => new Server({ ipv6: true, ipv4: true })).not.toThrow();
    });

    test("error - both families disabled is rejected", async () => {
      expect.assertions(1);
      try {
        new Server({ ipv4: false, ipv6: false });
      } catch (err: any) {
        expect(err.message).toBe(
          "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
        );
      }
    });

    test("error - ipv4 not empty", async () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "", ipv4: true });
      } catch (err: any) {
        expect(err.message).toBe("bindAddress is an invalid ipv4 address.");
      }
    });

    test("error - ipv4 not valid address", async () => {
      expect.assertions(1);
      try {
        new Server({ bindAddress: "123.34.52.455", ipv4: true });
      } catch (err: any) {
        expect(err.message).toBe("bindAddress is an invalid ipv4 address.");
      }
    });

    test("error - dual-stack rejects garbage bindAddress", async () => {
      expect.assertions(1);
      try {
        // dual-stack must be opted into; the message then names both families
        new Server({ bindAddress: "not-an-ip", ipv4: true, ipv6: true });
      } catch (err: any) {
        expect(err.message).toBe(
          "bindAddress is not a valid IPv4 or IPv6 address.",
        );
      }
    });

    test("error - ipv6 not empty", async () => {
      try {
        new Server({ bindAddress: "", ipv6: true, ipv4: false });
      } catch (err: any) {
        expect(err.message).toBe("bindAddress is an invalid ipv6 address.");
      }
    });

    test("error - ipv6 not valid address", async () => {
      try {
        new Server({
          bindAddress: "2001:0db8:85a3:0000:zz00:8a2e:0370:7334",
          ipv6: true,
          ipv4: false,
        });
      } catch (err: any) {
        expect(err.message).toBe("bindAddress is an invalid ipv6 address.");
      }
    });

    test("error - ipv6 valid address", async () => {
      try {
        new Server({
          bindAddress: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
          ipv6: true,
          ipv4: false,
        });
      } catch (err: any) {
        expect(err.message).toBeUndefined();
      }
    });

    test("properties exist", async () => {
      const server = new Server();
      expect(server).toHaveProperty("createInbound");
    });
  });

  describe("sanity tests - listener class", () => {
    test("error - no port specified", async () => {
      try {
        const server = new Server();
        // @ts-expect-error port is not specified
        server.createInbound();
      } catch (err: any) {
        expect(err.message).toBe("port is not defined.");
      }
    });

    test("error - port not a number", async () => {
      try {
        const server = new Server();
        // @ts-expect-error port is not a number
        server.createInbound({ port: "12345" }, async () => {});
      } catch (err: any) {
        expect(err.message).toBe("port is not a valid number.");
      }
    });

    test("error - port less than 0", async () => {
      try {
        const server = new Server();
        server.createInbound({ port: -1 }, async () => {});
      } catch (err: any) {
        expect(err.message).toEqual("port must be a number (0, 65353).");
      }
    });

    test("error - port greater than 65353", async () => {
      try {
        const server = new Server();
        server.createInbound({ port: 65354 }, async () => {});
      } catch (err: any) {
        expect(err.message).toBe("port must be a number (0, 65353).");
      }
    });

    test("error - name is invalid", async () => {
      try {
        const server = new Server();
        server.createInbound(
          { name: "$#@!sdfe-`", port: 65353 },
          async () => {},
        );
      } catch (err: any) {
        expect(err.message).toContain(
          "name must not contain certain characters: `!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?~.",
        );
      }
    });

    test("error - mshOverride invalid override value type .. as boolean", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            name: "mshOverride",
            port: 4000,
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": true,
            },
          },
          async () => {},
        );
      } catch (err: any) {
        expect(err.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("error - mshOverride invalid override value type .. as number", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            name: "mshOverride",
            port: 4000,
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": 1,
            },
          },
          async () => {},
        );
      } catch (err: any) {
        expect(err.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("error - mshOverride invalid override value type .. as float", async () => {
      try {
        const server = new Server();
        server.createInbound(
          {
            name: "mshOverride",
            port: 4000,
            mshOverrides: {
              // @ts-expect-error value must be a string
              "9.3": 1.1,
            },
          },
          async () => {},
        );
      } catch (err: any) {
        expect(err.message).toContain(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });

    test("error - getMessage() - no message passed to inbound request", async () => {
      try {
        // @ts-expect-error no message.
        const inboundReq = new InboundRequest("", { type: "message" });
        // this should cause an error
        inboundReq.getMessage();
      } catch (err: any) {
        expect(err.message).toBe("Message is not defined.");
      }
    });
  });
});
