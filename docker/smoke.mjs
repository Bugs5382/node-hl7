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
// Smoke client for .github/workflows/job-docker-smoke.yaml. Connects to
// the dockerized node-hl7-server listening on localhost:3000, sends one
// ADT^A01 message, and asserts the server replied with an AA ACK whose
// MSA.2 echoes the original MSH.10 control ID. Exits 0 on success,
// non-zero on any failure or timeout.

import Client, { Message } from "node-hl7-client";

const HOST = process.env.SMOKE_HOST || "127.0.0.1";
const PORT = Number(process.env.SMOKE_PORT || 3000);
const CONTROL_ID = `SMOKE-${Date.now()}`;
const OVERALL_TIMEOUT_MS = 20_000;

const die = (message) => {
  console.error(`[smoke] FAIL: ${message}`);
  process.exit(1);
};

// Keep the timer ref'd. Without this, if no connect/error/ack event ever
// fires (e.g. the server starts but doesn't respond), the event loop drains
// and Node aborts the top-level await with exit code 13 — masking the real
// "no ACK in time" failure with a cryptic "unsettled top-level await" warning.
const overallTimer = setTimeout(
  () => die(`overall ${OVERALL_TIMEOUT_MS}ms timeout`),
  OVERALL_TIMEOUT_MS,
);

const client = new Client({ host: HOST });

let ackReceived = false;
const ackPromise = new Promise((resolve, reject) => {
  const outbound = client.createConnection({ port: PORT }, async (res) => {
    try {
      const ack = res.getMessage();
      const msa1 = ack.get("MSA.1").toString();
      const msa2 = ack.get("MSA.2").toString();
      console.log(`[smoke] received ACK MSA.1=${msa1} MSA.2=${msa2}`);
      if (msa1 !== "AA")
        return reject(new Error(`expected MSA.1=AA, got ${msa1}`));
      if (msa2 !== CONTROL_ID) {
        return reject(new Error(`expected MSA.2=${CONTROL_ID}, got ${msa2}`));
      }
      ackReceived = true;
      resolve(outbound);
    } catch (error) {
      reject(error);
    }
  });

  outbound.once("connect", async () => {
    console.log(`[smoke] connected to ${HOST}:${PORT}`);
    try {
      const message = new Message({
        text: String.raw`MSH|^~\&|smoke|test|||20260101000000||ADT^A01|${CONTROL_ID}|D|2.7`,
      });
      await outbound.sendMessage(message);
      console.log(`[smoke] sent control id ${CONTROL_ID}`);
    } catch (error) {
      reject(error);
    }
  });
  outbound.once("error", reject);
});

try {
  const outbound = await ackPromise;
  await outbound.close();
  client.closeAll();
  clearTimeout(overallTimer);
  if (!ackReceived) die("ackReceived flag was never set");
  console.log("[smoke] OK");
  process.exit(0);
} catch (error) {
  die(error?.message || String(error));
}
