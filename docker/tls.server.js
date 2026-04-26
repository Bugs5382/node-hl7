// node-hl7-server example with TLS / mTLS termination inside the Node app
// (Pattern B from pages/server/kubernetes/index.md). Mount certs as a
// Kubernetes Secret and point the env vars at the mount path.
//
// Environment variables:
//   HL7_PORT     — TCP/MLLP listen port (default 3000)
//   BIND_ADDRESS — interface to bind to (default 0.0.0.0)
//   TLS_KEY      — path to the server private key (PEM)
//   TLS_CERT     — path to the server certificate (PEM)
//   TLS_CA       — path to a trusted CA bundle (PEM); enables mTLS
//   TLS_REQUEST_CLIENT_CERT — "true" to require a client certificate
//
// Example secret mount:
//   kubectl create secret generic hl7-tls \
//     --from-file=tls.key=server-key.pem \
//     --from-file=tls.crt=server-crt.pem \
//     --from-file=ca.crt=trusted-client-ca.pem
//
// Then set env in the Deployment:
//   TLS_KEY=/etc/hl7/tls/tls.key
//   TLS_CERT=/etc/hl7/tls/tls.crt
//   TLS_CA=/etc/hl7/tls/ca.crt
//   TLS_REQUEST_CLIENT_CERT=true

const fs = require("node:fs");
const { Server } = require("node-hl7-server");

const PORT = Number(process.env.HL7_PORT || 3000);
const BIND = process.env.BIND_ADDRESS || "0.0.0.0";

const log = (level, message, extra = {}) => {
  console.log(JSON.stringify({ level, time: new Date().toISOString(), message, ...extra }));
};

const tlsKeyPath  = process.env.TLS_KEY  || "/etc/hl7/tls/tls.key";
const tlsCertPath = process.env.TLS_CERT || "/etc/hl7/tls/tls.crt";
const tlsCaPath   = process.env.TLS_CA;
const requestClientCert = process.env.TLS_REQUEST_CLIENT_CERT === "true";

const tls = {
  key:  fs.readFileSync(tlsKeyPath),
  cert: fs.readFileSync(tlsCertPath),
};

if (tlsCaPath) {
  // mTLS — demand a client cert and validate it against this CA bundle.
  tls.ca = fs.readFileSync(tlsCaPath);
  tls.requestCert = requestClientCert;
  tls.rejectUnauthorized = requestClientCert;
}

const server = new Server({ bindAddress: BIND, tls });

const inbound = server.createInbound({ port: PORT, name: "hl7-listener-tls" }, async (req, res) => {
  const msg = req.getMessage();
  const sock = req.getSocket();
  const peer = typeof sock.getPeerCertificate === "function" ? sock.getPeerCertificate() : undefined;

  log("info", "received", {
    controlId: msg.get("MSH.10").toString(),
    type: msg.get("MSH.9").toString(),
    from: sock.remoteAddress,
    peerCN: peer && peer.subject ? peer.subject.CN : undefined,
  });

  await res.sendResponse("AA");
});

inbound.on("listen",        () => log("info",  "listening", { port: PORT, bind: BIND, mtls: Boolean(tls.ca) }));
inbound.on("client.connect", (s) => log("info",  "client.connect", { from: s.remoteAddress }));
inbound.on("client.close",   (hadError) => log("info", "client.close", { hadError }));
inbound.on("client.error",   (err) => log("warn", "client.error", { err: String(err) }));
inbound.on("data.error",     (err) => log("warn", "data.error",   { err: String(err) }));
inbound.on("response.sent",  () => log("debug", "response.sent"));

// Graceful shutdown.
let shuttingDown = false;
const shutdown = async (signal) => {
  if (shuttingDown) return;
  shuttingDown = true;
  log("info", "shutdown.start", { signal });
  try {
    await inbound.close();
    log("info", "shutdown.complete");
    process.exit(0);
  } catch (err) {
    log("error", "shutdown.failed", { err: String(err) });
    process.exit(1);
  }
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT",  () => shutdown("SIGINT"));
