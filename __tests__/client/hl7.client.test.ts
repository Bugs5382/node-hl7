import { Client, HL7FatalError } from "node-hl7-client/src";
import { beforeEach, describe, expect, test } from "vitest";

import { expectHL7FatalError } from "./__utils__/expectHL7FatalError";

describe("node hl7 client", () => {
  describe("Client class", () => {
    describe("valid", () => {
      test("valid - properties exist", async () => {
        const client = new Client({ host: "hl7.server.local" });
        expect(client).toHaveProperty("createConnection");
      });

      test("getHost returns the configured host", async () => {
        const client = new Client({ host: "hl7.server.local" });
        expect(client.getHost()).toEqual("hl7.server.local");
      });

      test("port is set on outbound connection", async () => {
        const client = new Client({ host: "hl7.server.local" });
        const outbound = client.createConnection(
          // @ts-ignore message is not doing anything
          { autoConnect: false, port: 12_345 },
          async () => {},
        );

        expect(outbound.getPort()).toEqual(12_345);
      });
    });

    describe("errors", () => {
      test("rejects host with non-string type", async () => {
        expect.assertions(1);
        try {
          // @ts-expect-error hostname has to be string
          new Client({ host: 351_123 });
        } catch (error: any) {
          expect(error.message).toBe("host is not valid string.");
        }
      });

      test("accepts ipv4 and ipv6 both true (dual-stack)", async () => {
        expect(
          () => new Client({ host: "5.8.6.1", ipv4: true, ipv6: true }),
        ).not.toThrow();
      });

      test("rejects malformed IPv4 host when ipv4 is exclusive", async () => {
        expect.assertions(1);
        try {
          new Client({ host: "123.34.52.455", ipv4: true });
        } catch (error: any) {
          expect(error.message).toBe("host is not a valid IPv4 address.");
        }
      });

      test("accepts valid IPv4 host when ipv4 is exclusive", async () => {
        expect(
          () => new Client({ host: "123.34.52.45", ipv4: true }),
        ).not.toThrow();
      });

      test("rejects malformed IPv6 host when ipv6 is exclusive", async () => {
        expect.assertions(1);
        try {
          new Client({
            host: "2001:0db8:85a3:0000:zz00:8a2e:0370:7334",
            ipv6: true,
          });
        } catch (error: any) {
          expect(error.message).toBe("host is not a valid IPv6 address.");
        }
      });

      test("accepts valid IPv6 host when ipv6 is exclusive", async () => {
        expect(
          () =>
            new Client({
              host: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
              ipv6: true,
            }),
        ).not.toThrow();
      });

      test("rejects ipv4 and ipv6 both false", async () => {
        expect.assertions(1);
        try {
          new Client({ host: "192.0.2.1", ipv4: false, ipv6: false });
        } catch (error: any) {
          expect(error.message).toBe(
            "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
          );
        }
      });
    });
  });

  describe("Outbound connection options", () => {
    let client: Client;

    beforeEach(() => {
      client = new Client({ host: "localhost" });
    });

    test("rejects createConnection with no port", async () => {
      try {
        // @ts-expect-error no port specified
        client.createConnection();
      } catch (error: any) {
        expect(error.message).toBe("port is not defined.");
      }
    });

    test("rejects port given as a string", async () => {
      try {
        // @ts-expect-error port is not specified as a number
        client.createConnection({ port: "12345" }, async () => {});
      } catch (error: any) {
        expect(error.message).toBe("port is not valid number.");
      }
    });

    test("rejects negative port", async () => {
      try {
        client.createConnection({ port: -1 }, async () => {});
      } catch (error: any) {
        expect(error.message).toBe("port must be a number (1, 65353).");
      }
    });

    test("rejects port above 65353", async () => {
      try {
        client.createConnection({ port: 65_354 }, async () => {});
      } catch (error: any) {
        expect(error.message).toBe("port must be a number (1, 65353).");
      }
    });

    test("rejects enqueueMessage without flushQueue", async () => {
      try {
        client.createConnection(
          // @ts-ignore message is not doing anything
          { enqueueMessage: (message) => {}, port: 12_345 },
          async () => {},
        );
      } catch (error) {
        expect(error).toEqual(new HL7FatalError("flushQueue is not set."));
      }
    });

    test("rejects flushQueue without enqueueMessage", async () => {
      try {
        client.createConnection(
          // @ts-ignore message is not doing anything
          { flushQueue: (message) => {}, port: 12_345 },
          async () => {},
        );
      } catch (error) {
        expectHL7FatalError(error, "enqueueMessage is not set.");
      }
    });
  });
});
