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
import { Client } from "node-hl7-client/src";
import portfinder from "portfinder";
import { describe, expect, test } from "vitest";

describe("unlimited connection retries (#72)", () => {
  test("accepts zero while rejecting negative or over-cap retry settings", () => {
    const client = new Client({ host: "127.0.0.1", version: "2.7" });
    const base = { autoConnect: false, port: 12_345 };
    expect(() =>
      client.createConnection(
        { ...base, maxConnectionAttempts: 0 },
        async () => {},
      ),
    ).not.toThrow();
    expect(() =>
      client.createConnection(
        { ...base, maxConnectionAttempts: -1 },
        async () => {},
      ),
    ).toThrow();
    expect(() =>
      client.createConnection(
        { ...base, maxConnectionAttempts: 51 },
        async () => {},
      ),
    ).toThrow();
    client.closeAll();
  });

  test("zero retries across more than the default ten attempts without stopping", async () => {
    // A free but unbound loopback port produces deterministic ECONNREFUSED errors.
    const port = await portfinder.getPortPromise();
    const client = new Client({ host: "127.0.0.1", version: "2.7" });
    const outbound = client.createConnection(
      { maxConnectionAttempts: 0, port, retryHigh: 10, retryLow: 1 },
      async () => {},
    );

    let errors = 0;
    try {
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(new Error(`Only ${errors} retry errors arrived`)),
          4000,
        );
        outbound.on("client.error", () => {
          errors += 1;
          if (errors >= 12) {
            clearTimeout(timeout);
            resolve();
          }
        });
      });
      expect(errors).toBeGreaterThanOrEqual(12);
    } finally {
      await outbound.close();
      client.closeAll();
    }
  });
});
