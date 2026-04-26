# 🔌 Inbound Listeners

> A single `Server` can host any number of inbound listeners — typically one per HL7 message type / port (ADT on 6661, ORU on 6662, …). Each listener owns its own MSH‑override config and handler.

## 🧾 Table of Contents

1. [Server vs. Inbound](#-server-vs-inbound)
2. [Server options](#-server-options)
3. [Inbound options](#-inbound-options)
4. [The handler](#-the-handler)
5. [Reading the `req`](#-reading-the-req)
6. [Events](#-events)
7. [Closing cleanly](#-closing-cleanly)

---

## 🧱 Server vs. Inbound

```mermaid
flowchart LR
    subgraph "1 process"
      A[Server<br/>bindAddress, ipv4/ipv6, tls] --> B[Inbound :6661<br/>ADT]
      A --> C[Inbound :6662<br/>ORU]
      A --> D[Inbound :6663<br/>SIU]
    end
```

`new Server(...)` configures the **process** (bind address, TLS, IPv4/IPv6). `server.createInbound(...)` opens an **individual listening port** with its own handler.

```ts
import { Server } from "node-hl7-server";

// IPv4 only by default (binds 0.0.0.0).
const server = new Server();

const IB_ADT = server.createInbound({ port: 6661 }, async (req, res) => { /* … */ });
const IB_ORU = server.createInbound({ port: 6662 }, async (req, res) => { /* … */ });
```

---

## ⚙️ Server options

```ts
new Server({
  // bindAddress: "0.0.0.0",  // default depends on ipv4/ipv6 (see below)
  encoding: "utf-8",          // default: utf-8
  ipv4: true,                 // default: true
  ipv6: false,                // default: false (set true alongside ipv4 for dual-stack)
  // tls: { /* see TLS docs */ },
});
```

### 🌐 IPv4 + IPv6 (Dual-Stack)

`node-hl7-server` listens on **IPv4 only by default**. Opt into dual-stack by setting both `ipv4: true` and `ipv6: true` — a single socket bound to the IPv6 wildcard (`::`) with `ipv6Only: false` then accepts traffic from either family. No second listener required.

| Mode | Set this | Default `bindAddress` | `ipv6Only` |
|---|---|---|---|
| IPv4 only (default) | `ipv4: true` (or omit)                  | `"0.0.0.0"` | `false` |
| Dual-stack          | `ipv4: true, ipv6: true`                | `"::"`      | `false` |
| IPv6 only           | `ipv6: true` (alone)                    | `"::"`      | `true`  |

```ts
// IPv4 only on every v4 interface (default)
new Server();

// Dual-stack on every interface
new Server({ ipv4: true, ipv6: true });

// IPv6 only on every v6 interface
new Server({ ipv6: true });

// Pin a specific termination address when the host has multiple
new Server({ bindAddress: "10.50.0.4", ipv4: true });
new Server({ bindAddress: "fd12::4",   ipv6: true });
```

**Fallback.** When dual-stack is opted in, if the kernel refuses the IPv6 wildcard bind (no v6 stack, hardened container, etc.), the listener automatically retries as IPv4-only on `0.0.0.0`. Errors that aren't address-family-related (e.g. `EADDRINUSE`) propagate as the regular `error` event.

> 💡 Passing only **one** of `ipv4` / `ipv6` as `true` is treated as exclusive. Setting both to `false` throws. The `bindAddress` is validated against the chosen family — `localhost` is always allowed.

---

## 🛎️ Inbound options

```ts
server.createInbound(
  {
    port: 6661,                                  // required, 0 < port < 65353
    name: "IB_EPIC_ADT",                         // optional, for logging
    encoding: "utf-8",
    mshOverrides: {                              // see Responses docs
      "3": "MY_APP",
      "9.3": "ACK",
    },
    // responseClass: MyCustomSendResponse,      // advanced — extend BaseSendResponse
  },
  async (req, res) => { /* … */ },
);
```

| Option | Purpose |
|---|---|
| `port` | TCP port to listen on. Required. |
| `name` | Human‑readable identifier; defaults to a random string. |
| `encoding` | Buffer encoding for inbound bytes. Default `utf-8`. |
| `mshOverrides` | Per‑field MSH overrides for the auto‑ACK. See [Responses](../responses/index.md). |
| `responseClass` | Custom subclass of `BaseSendResponse` if you want full control of ACK behavior. |

---

## 🧠 The handler

```ts
type InboundHandler = (req: InboundRequest, res: SendResponse) => void;
```

The handler runs **once per parsed message** — even if the frame was a BHS batch or FHS file containing many messages.

```ts
server.createInbound({ port: 6661 }, async (req, res) => {
  // 1) Inspect the message.
  const msg = req.getMessage();
  const mrn = msg.get("PID.3").toString();

  // 2) Do whatever the system needs.
  await persistAdmission(mrn, msg);

  // 3) Acknowledge the sender. (See Responses docs for AR / AE / custom.)
  await res.sendResponse("AA");
});
```

> 💡 **Acknowledge first, work later.** Push the parsed message onto a queue (Redis, RabbitMQ) before returning — you'll keep the sender unblocked and avoid back-pressure during bursts.

---

## 📨 Reading the `req`

| Method | Returns | Notes |
|---|---|---|
| `req.getMessage()` | `Message` | The parsed message. Throws `HL7ListenerError` if missing. |
| `req.getType()` | `'message' \| 'batch' \| 'file'` | Whether the original frame was a single MSH, BHS batch, or FHS file. |
| `req.getSocket()` | `net.Socket` | The underlying TCP/TLS socket. Throws if the request was constructed without one. |

```ts
const msg  = req.getMessage();
const type = req.getType();
const sock = req.getSocket();

console.log(`📨 ${msg.get("MSH.10")} (${type}) from ${sock.remoteAddress}:${sock.remotePort}`);
```

The full reading API (`get`, `set`, `addSegment`, repetitions, sub‑components) lives in the [client parser docs](../../client/parser/index.md) — `req.getMessage()` returns the same `Message` class.

---

## 📡 Events

`Inbound` extends `EventEmitter`:

| Event | Payload | Fires when… |
|---|---|---|
| `listen` | _none_ | the TCP/TLS server is bound and accepting connections. |
| `client.connect` | `socket: Socket` | a new client connects. |
| `client.close` | `hadError: boolean` | a client disconnects. |
| `client.error` | `err: Error` | a per‑connection error occurs (closes the socket). |
| `error` | `err: Error` | the underlying TCP/TLS server emits an error. |
| `data.raw` | `string` | a complete MLLP message has been buffered, just before parsing. Useful for debug capture. |
| `data.error` | `err: Error` | a frame couldn't be parsed (malformed HL7, unexpected bytes). |
| `response.sent` | _none_ | an ACK was just written to the socket. |

```ts
IB_ADT.on("listen",        () => console.log("🎧 listening"));
IB_ADT.on("client.connect", (s) => console.log("🤝", s.remoteAddress));
IB_ADT.on("data.raw",       (raw) => console.log("📥", raw.length, "bytes"));
IB_ADT.on("response.sent",  () => console.log("✅ ACK sent"));
IB_ADT.on("data.error",     (err) => console.error("💥 parse error", err));
```

---

## 🚪 Closing cleanly

HL7 servers are typically long‑lived — designed to be up at all times. When you do shut down (deploys, scale-down):

```ts
await IB_ADT.close();   // close one listener
// or close many in parallel:
await Promise.all([IB_ADT.close(), IB_ORU.close()]);
```

`close()` destroys all open client sockets and unrefs the listening server.
