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
import selfsigned from "selfsigned";

let cachePromise: Promise<{ cert: Buffer; key: Buffer }> | undefined;

// Generates a fresh self-signed cert + key once per test process and
// memorizes the result. Used by the TLS end2end suites instead of
// committing static fixtures under /certs.
export function tlsTestCerts(): Promise<{ cert: Buffer; key: Buffer }> {
  if (!cachePromise) {
    cachePromise = selfsigned
      .generate([{ name: "commonName", value: "localhost" }], {
        keySize: 2048,
      })
      .then((pems: { cert: string; private: string }) => ({
        cert: Buffer.from(pems.cert),
        key: Buffer.from(pems.private),
      }));
  }
  return cachePromise;
}
