import selfsigned from "selfsigned";

let cachePromise: Promise<{ cert: Buffer; key: Buffer }> | undefined;

// Generates a fresh self-signed cert + key once per test process and
// memoizes the result. Used by the TLS end2end suites instead of
// committing static fixtures under /certs.
export function tlsTestCerts(): Promise<{ cert: Buffer; key: Buffer }> {
  if (!cachePromise) {
    cachePromise = selfsigned
      .generate([{ name: "commonName", value: "localhost" }], {
        days: 1,
        keySize: 2048,
      })
      .then((pems: { cert: string; private: string }) => ({
        cert: Buffer.from(pems.cert),
        key: Buffer.from(pems.private),
      }));
  }
  return cachePromise;
}
