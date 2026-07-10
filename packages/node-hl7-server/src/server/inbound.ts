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
import {
  Batch,
  FileBatch,
  isBatch,
  isFile,
  isKnownVersion,
  Message,
  MLLPCodec,
} from "node-hl7-client";
import EventEmitter from "node:events";
import net, { Socket } from "node:net";
import tls from "node:tls";

import { BaseSendResponse } from "@/declaration/baseSendRequest";
import { HL7ListenerError } from "@/utils/exception";
import { ListenerOptions, normalizeListenerOptions } from "@/utils/normalize";

import { InboundRequest } from "./inboundRequest";
import { SendResponse } from "./sendResponse";
import { Server } from "./server";

export interface IInbound extends EventEmitter {
  /** When the connection form the client is closed. We might have an error, we might not. */
  on(name: "client.close", callback: (hasError: boolean) => void): this;
  /** When a connection from the client is made. */
  on(name: "client.connect", callback: (socket: Socket) => void): this;
  /** When an error was sent by the connecting source. */
  on(name: "client.error", callback: (error: any) => void): this;
  /** Something wrong happened during data parsing. */
  on(name: "data.error", callback: (error: any) => void): this;
  /** The raw data received by this particular inbound connection. */
  on(name: "data.raw", callback: (rawData: string) => void): this;
  /** When the socket itself has an error. */
  on(name: "error", callback: (error: any) => void): this;
  /** When the socket is ready and listening on the port. */
  on(name: "listen", callback: () => void): this;
  /** An HL7 response was sent */
  on(name: "response.sent", callback: () => void): this;
}

/**
 * Inbound Handler
 * @remarks The handler that will handle the user parsing a received message by the client to the server.
 * @since 1.0.0
 * @example
 * In this example, we are processing the results in an async handler.
 *```ts
 *  const IB_ADT = server.createInbound({port: 3000, version: "2.7"}, async (req, res) => {
 *    const messageReq = req.getMessage()
 *    const messageRes = res.getAckMessage()
 *  })
 *```
 */
export type InboundHandler = (
  request: InboundRequest,
  res: BaseSendResponse | SendResponse,
) => void;

/**
 * Inbound Listener Class
 * @since 1.0.0
 */
export class Inbound extends EventEmitter implements IInbound {
  /** @internal */
  _main: Server;
  /** @internal */
  _opt: ReturnType<typeof normalizeListenerOptions>;
  /** @internal */
  readonly stats = {
    /** Total message received to server.
     * @since 2.0.0 */
    received: 0,
    /** Total message parsed by the server.
     * @since 2.0.0 */
    totalMessage: 0,
  };
  /** @internal */
  private readonly _handler: (
    request: InboundRequest,
    res: BaseSendResponse | SendResponse,
  ) => void;
  /** @internal */
  private _sendResponseClass: typeof BaseSendResponse;
  /** @internal */
  private readonly _socket: net.Server | tls.Server;
  /** @internal */
  private readonly _sockets: Socket[];

  /**
   * Build a Listener
   * @since 1.0.0
   * @param server
   * @param props
   * @param handler
   */
  constructor(
    server: Server,
    properties: ListenerOptions,
    handler: InboundHandler,
  ) {
    super();

    this._handler = handler;
    this._main = server;

    this._opt = normalizeListenerOptions(properties);

    this._sendResponseClass = this._opt.responseClass ?? SendResponse;

    this._sockets = [];

    this._listen = this._listen.bind(this);
    this._onTcpClientConnected = this._onTcpClientConnected.bind(this);

    this._socket = this._listen();
  }

  /** Close Listener Instance.
   * This be called for each listener, but if the server instance is closed and shut down, this will also fire off.
   * @since 1.0.0 */
  async close(): Promise<boolean> {
    for (const socket of this._sockets) {
      socket.destroy();
    }

    this._socket?.close(() => {
      this._socket?.unref();
    });

    return true;
  }

  /** @internal */
  private _closeSocket(socket: Socket): void {
    socket.destroy();
    this._sockets.splice(this._sockets.indexOf(socket), 1);
  }

  /** @internal */
  private _handleMessages = (
    socket: Socket,
    messages: Message[],
    type: "batch" | "file",
  ) => {
    for (const message of messages) {
      const parsed = new Message({ text: message.toString() });
      ++this.stats.totalMessage;

      const request = new InboundRequest(parsed, { socket, type });
      const res = new this._sendResponseClass(
        socket,
        parsed,
        this._opt.mshOverrides,
      );

      res.on("response.sent", () => this.emit("response.sent"));

      // Enforce the listener's accepted HL7 version(s). On a non-match, reject
      // the message with an "AR" acknowledgement, surface the error, and skip
      // the user handler.
      const got = parsed.get("MSH.12").toString();
      if (!this._isVersionAccepted(got)) {
        this._rejectVersionMismatch(got, res);
        continue;
      }

      void this._handler(request, res);
    }
  };

  /** Whether an inbound message's `MSH.12` is accepted by this listener.
   * When `acceptAnyVersion` is set, any known HL7 version passes; otherwise the
   * version must be a member of the resolved accepted set.
   * @internal */
  private _isVersionAccepted(got: string): boolean {
    if (this._opt.acceptAnyVersion) {
      return isKnownVersion(got);
    }
    return (this._opt.versions as readonly string[]).includes(got);
  }

  /** @internal */
  private _listen(): net.Server | tls.Server {
    let socket: net.Server | tls.Server;
    const port = this._opt.port;
    const bindAddress = this._main._opt.bindAddress;
    const ipv6Only = this._main._opt.ipv6Only;
    const dualStack = this._main._opt.ipv4 && this._main._opt.ipv6;

    if (this._main._opt.tls === undefined) {
      socket = net.createServer((socket) => {
        this._onTcpClientConnected(socket);
      });
    } else {
      const { ca, cert, key, requestCert } = this._main._opt.tls;
      socket = tls.createServer({ ca, cert, key, requestCert }, (socket) => {
        this._onTcpClientConnected(socket);
      });
    }

    socket.on("error", (error) => {
      this.emit("error", error);
    });

    const listenOptions = {
      host: bindAddress,
      ipv6Only,
      port,
    };

    // Dual-stack fallback: if binding the IPv6 wildcard fails (the host kernel
    // has IPv6 disabled, no v6 stack, or a duplicate v6 socket), fall back to
    // an IPv4-only listener on `0.0.0.0`. The user can still terminate on a
    // specific address by passing an explicit `bindAddress`.
    const tryListen = (options: typeof listenOptions, onError: () => void) => {
      const errorHandler = (error: NodeJS.ErrnoException) => {
        if (
          dualStack &&
          error.code !== undefined &&
          ["EADDRNOTAVAIL", "EAFNOSUPPORT", "EINVAL"].includes(error.code)
        ) {
          socket.removeListener("error", errorHandler);
          onError();
        } else {
          this.emit("error", error);
        }
      };
      socket.once("error", errorHandler);
      socket.listen(options, () => {
        socket.removeListener("error", errorHandler);
        this.emit("listen");
      });
    };

    tryListen(listenOptions, () => {
      // IPv6 not available on this host — retry as IPv4-only.
      const fallback = {
        host: bindAddress === "::" ? "0.0.0.0" : bindAddress,
        ipv6Only: false,
        port,
      };
      socket.listen(fallback, () => {
        this.emit("listen");
      });
    });

    return socket;
  }

  /** @internal */
  private _onTcpClientConnected(socket: Socket): void {
    // add socked connection to array
    this._sockets.push(socket);

    // no delay in processing the message
    socket.setNoDelay(true);

    // Per-socket codec so concurrent connections do not interleave their
    // data buffers (issue #132).
    const codec = new MLLPCodec(this._main._opt.encoding);

    socket.on("data", (buffer) => {
      socket.cork();

      let dataResult: boolean | undefined;
      try {
        dataResult = codec.receiveData(buffer);
      } catch (error) {
        this.emit("data.error", error);
      }

      socket.uncork();

      if (dataResult === true) {
        // we got a message, we don't care if it's good or not
        ++this.stats.received;

        const loadedMessage = codec.getLastMessage();

        try {
          if (loadedMessage === null) {
            return;
          }

          // copy the completed message to continue processing and clear the buffer
          const completedMessageCopy = structuredClone(loadedMessage);

          // send raw information to the emitting
          this.emit("data.raw", completedMessageCopy);

          if (isFile(completedMessageCopy)) {
            const parser = new FileBatch({ text: completedMessageCopy });
            this._handleMessages(socket, parser.messages(), "file");
          } else if (isBatch(completedMessageCopy)) {
            const parser = new Batch({ text: completedMessageCopy });
            this._handleMessages(socket, parser.messages(), "batch");
          } else {
            const parsed = new Message({ text: completedMessageCopy });
            ++this.stats.totalMessage;

            const request = new InboundRequest(parsed, {
              socket,
              type: "message",
            });
            const res = new this._sendResponseClass(
              socket,
              parsed,
              this._opt.mshOverrides,
            );

            res.on("response.sent", () => this.emit("response.sent"));

            // Enforce the listener's accepted HL7 version(s). On a non-match,
            // reject the message with an "AR" acknowledgement, surface the
            // error, and skip the user handler.
            const got = parsed.get("MSH.12").toString();
            if (!this._isVersionAccepted(got)) {
              this._rejectVersionMismatch(got, res);
              return;
            }

            void this._handler(request, res);
          }
        } catch (error) {
          this.emit("data.error", error);
        }
      }
    });

    socket.on("error", (error) => {
      this.emit("client.error", error);
      this._closeSocket(socket);
    });

    socket.on("close", (hadError) => {
      this.emit("client.close", hadError);
      this._closeSocket(socket);
    });

    this.emit("client.connect", socket);
  }

  /** Reject a message whose version is not accepted: send an `AR`
   * acknowledgement and surface the reason on the `data.error` event.
   * @internal */
  private _rejectVersionMismatch(got: string, res: BaseSendResponse): void {
    void res.sendResponse("AR");
    this.emit(
      "data.error",
      new HL7ListenerError(this._versionMismatchMessage(got)),
    );
  }

  /** Build the `data.error` message for a rejected version, worded for the
   * listener's configuration (single version, allow-list, or accept-any).
   * @internal */
  private _versionMismatchMessage(got: string): string {
    if (this._opt.acceptAnyVersion) {
      return `message version "${got}" is not a known HL7 version.`;
    }
    if (this._opt.versions.length === 1) {
      return `message version "${got}" does not match the listener version "${this._opt.versions[0]}".`;
    }
    return `message version "${got}" is not one of the listener versions "${this._opt.versions.join(", ")}".`;
  }
}
