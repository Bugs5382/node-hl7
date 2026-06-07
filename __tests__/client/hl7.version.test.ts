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
import Client, {
  Batch,
  FileBatch,
  isKnownVersion,
  KNOWN_VERSIONS,
  Message,
} from "node-hl7-client/src";
import { describe, expect, test, vi } from "vitest";

import { expectHL7FatalError } from "./__utils__/expectHL7FatalError";

/** Build a valid HL7 message at a specific version. */
function makeMessage(
  version: string,
  controlId: string = "CONTROL_ID",
): Message {
  return new Message({
    text: String.raw`MSH|^~\&|||||20240101000000||ADT^A01|${controlId}|D|${version}`,
  });
}

describe("client HL7 version pin", () => {
  describe("runtime known-version exports", () => {
    test("KNOWN_VERSIONS lists every supported version", () => {
      expect(KNOWN_VERSIONS).toEqual([
        "2.1",
        "2.2",
        "2.3",
        "2.3.1",
        "2.4",
        "2.5",
        "2.5.1",
        "2.6",
        "2.7",
        "2.7.1",
        "2.8",
      ]);
    });

    test("isKnownVersion accepts known versions and rejects others", () => {
      expect(isKnownVersion("2.7")).toBe(true);
      expect(isKnownVersion("2.5.1")).toBe(true);
      expect(isKnownVersion("2.9")).toBe(false);
      expect(isKnownVersion("")).toBe(false);
      expect(isKnownVersion()).toBe(false);
      expect(isKnownVersion(27)).toBe(false);
    });
  });

  describe("construction", () => {
    test("throws when version is missing", () => {
      expect.assertions(2);
      try {
        // @ts-expect-error version is required
        new Client({ host: "localhost" });
      } catch (error) {
        expectHL7FatalError(error, "version is not defined.");
      }
    });

    test("throws when version is not a known HL7 version", () => {
      expect.assertions(2);
      try {
        // @ts-expect-error version must be a known HL7 version
        new Client({ host: "localhost", version: "2.9" });
      } catch (error) {
        expectHL7FatalError(error, 'version "2.9" is not a known HL7 version.');
      }
    });

    test("accepts a known version and exposes it on the options", () => {
      const client = new Client({ host: "localhost", version: "2.5" });
      expect(client._opt.version).toBe("2.5");
    });
  });

  describe("sendMessage version enforcement", () => {
    test("rejects a single message whose MSH.12 differs from the client version", async () => {
      const client = new Client({ host: "localhost", version: "2.7" });
      const outbound = client.createConnection(
        { autoConnect: false, port: 9999 },
        async () => {},
      );
      vi.spyOn(outbound as any, "_connect").mockReturnValue();

      await expect(outbound.sendMessage(makeMessage("2.5"))).rejects.toThrow(
        'message version "2.5" does not match the connection version "2.7".',
      );

      client.closeAll();
    });

    test("accepts a single message that matches the client version", async () => {
      const client = new Client({ host: "localhost", version: "2.7" });
      const outbound = client.createConnection(
        { autoConnect: false, port: 9999 },
        async () => {},
      );
      vi.spyOn(outbound as any, "_connect").mockReturnValue();

      await expect(
        outbound.sendMessage(makeMessage("2.7")),
      ).resolves.toBeUndefined();

      client.closeAll();
    });

    test("rejects a batch when any contained message mismatches the version", async () => {
      const client = new Client({ host: "localhost", version: "2.7" });
      const outbound = client.createConnection(
        { autoConnect: false, port: 9999 },
        async () => {},
      );
      vi.spyOn(outbound as any, "_connect").mockReturnValue();

      const batch = new Batch();
      batch.start();
      batch.add(makeMessage("2.7", "CTRL_OK"));
      batch.add(makeMessage("2.5", "CTRL_BAD"));
      batch.end();

      await expect(outbound.sendMessage(batch)).rejects.toThrow(
        'message version "2.5" does not match the connection version "2.7".',
      );

      client.closeAll();
    });

    test("rejects a file batch when a contained message mismatches the version", async () => {
      const client = new Client({ host: "localhost", version: "2.7" });
      const outbound = client.createConnection(
        { autoConnect: false, port: 9999 },
        async () => {},
      );
      vi.spyOn(outbound as any, "_connect").mockReturnValue();

      const file = new FileBatch();
      file.start();
      file.add(makeMessage("2.7", "CTRL_OK"));
      file.add(makeMessage("2.5", "CTRL_BAD"));
      file.end();

      await expect(outbound.sendMessage(file)).rejects.toThrow(
        'message version "2.5" does not match the connection version "2.7".',
      );

      client.closeAll();
    });
  });
});
