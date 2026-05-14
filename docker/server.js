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
// Minimal node-hl7-server example, suitable for running in a container
// or a Kubernetes pod. Acknowledges every well-formed HL7 message with AA.
//
// Environment variables:
//   HL7_PORT      — TCP/MLLP listen port (default 3000)
//   BIND_ADDRESS  — interface to bind to (default 0.0.0.0)
//
// Replace the handler with your own logic for production use — typically
// you would push the parsed message onto a Redis or RabbitMQ queue and ACK
// fast. See pages/server/kubernetes/index.md.

const { Server } = require("node-hl7-server");

const PORT = Number(process.env.HL7_PORT || 3000);
const BIND = process.env.BIND_ADDRESS || "0.0.0.0";

const log = (level, message, extra = {}) => {
  console.log(
    JSON.stringify({
      level,
      message,
      time: new Date().toISOString(),
      ...extra,
    }),
  );
};

const server = new Server({ bindAddress: BIND });

const inbound = server.createInbound(
  { name: "hl7-listener", port: PORT },
  async (request, res) => {
    const message = request.getMessage();
    log("info", "received", {
      controlId: message.get("MSH.10").toString(),
      from: request.getSocket().remoteAddress,
      type: message.get("MSH.9").toString(),
    });
    await res.sendResponse("AA");
  },
);

inbound.on("listen", () =>
  log("info", "listening", { bind: BIND, port: PORT }),
);
inbound.on("client.connect", (s) =>
  log("info", "client.connect", { from: s.remoteAddress }),
);
inbound.on("client.close", (hadError) =>
  log("info", "client.close", { hadError }),
);
inbound.on("client.error", (error) =>
  log("warn", "client.error", { err: String(error) }),
);
inbound.on("data.error", (error) =>
  log("warn", "data.error", { err: String(error) }),
);
inbound.on("response.sent", () => log("debug", "response.sent"));

// Graceful shutdown — Kubernetes sends SIGTERM before SIGKILL. Drain
// in-flight ACKs so we don't drop messages mid-flight.
let shuttingDown = false;
const shutdown = async (signal) => {
  if (shuttingDown) return;
  shuttingDown = true;
  log("info", "shutdown.start", { signal });
  try {
    await inbound.close();
    log("info", "shutdown.complete");
    process.exit(0);
  } catch (error) {
    log("error", "shutdown.failed", { err: String(error) });
    process.exit(1);
  }
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
