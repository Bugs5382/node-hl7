import { BaseSendResponse } from "@/declaration/baseSendRequest";
import { ListenerOptions, normalizeListenerOptions } from "@/utils/normalize";
import EventEmitter from "events";
import net, { Socket } from "net";
import {
  Batch,
  FileBatch,
  MLLPCodec,
  Message,
  isBatch,
  isFile,
} from "node-hl7-client";
import tls from "tls";
import { InboundRequest } from "./inboundRequest";
import { SendResponse } from "./sendResponse";
import { Server } from "./server";

/**
 * Inbound Handler
 * @remarks The handler that will handle the user parsing a received message by the client to the server.
 * @since 1.0.0
 * @example
 * In this example, we are processing the results in an async handler.
 *```ts
 *  const IB_ADT = server.createInbound({port: 3000}, async (req, res) => {
 *    const messageReq = req.getMessage()
 *    const messageRes = res.getAckMessage()
 *  })
 *```
 */
export type InboundHandler = (
  req: InboundRequest,
  res: SendResponse | BaseSendResponse,
) => void;

export interface IInbound extends EventEmitter {
  /** When the connection form the client is closed. We might have an error, we might not. */
  on(name: "client.close", cb: (hasError: boolean) => void): this;
  /** When a connection from the client is made. */
  on(name: "client.connect", cb: (socket: Socket) => void): this;
  /** When an error was sent by the connecting source. */
  on(name: "client.error", cb: (err: any) => void): this;
  /** Something wrong happened during data parsing. */
  on(name: "data.error", cb: (err: any) => void): this;
  /** The raw data received by this particular inbound connection. */
  on(name: "data.raw", cb: (rawData: string) => void): this;
  /** When the socket itself has an error. */
  on(name: "error", cb: (err: any) => void): this;
  /** When the socket is ready and listening on the port. */
  on(name: "listen", cb: () => void): this;
  /** An HL7 response was sent */
  on(name: "response.sent", cb: () => void): this;
}

/**
 * Inbound Listener Class
 * @since 1.0.0
 */
export class Inbound extends EventEmitter implements IInbound {
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
    req: InboundRequest,
    res: SendResponse | BaseSendResponse,
  ) => void;
  /** @internal */
  _main: Server;
  /** @internal */
  _opt: ReturnType<typeof normalizeListenerOptions>;
  /** @internal */
  private _sendResponseClass: typeof BaseSendResponse;
  /** @internal */
  private readonly _socket: net.Server | tls.Server;
  /** @internal */
  private readonly _sockets: Socket[];

  /** @internal */
  private _handleMessages = (
    socket: Socket,
    messages: Message[],
    type: "file" | "batch",
  ) => {
    messages.forEach((message: Message) => {
      const parsed = new Message({ text: message.toString() });
      ++this.stats.totalMessage;

      const req = new InboundRequest(parsed, { type, socket });
      const res = new this._sendResponseClass(
        socket,
        parsed,
        this._opt.mshOverrides,
      );

      res.on("response.sent", () => this.emit("response.sent"));
      void this._handler(req, res);
    });
  };

  /**
   * Build a Listener
   * @since 1.0.0
   * @param server
   * @param props
   * @param handler
   */
  constructor(server: Server, props: ListenerOptions, handler: InboundHandler) {
    super();

    this._handler = handler;
    this._main = server;

    this._opt = normalizeListenerOptions(props);

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
    this._sockets.forEach((socket) => {
      socket.destroy();
    });

    this._socket?.close(() => {
      this._socket?.unref();
    });

    return true;
  }

  /** @internal */
  private _listen(): net.Server | tls.Server {
    let socket: net.Server | tls.Server;
    const port = this._opt.port;
    const bindAddress = this._main._opt.bindAddress;
    const ipv6Only = this._main._opt.ipv6Only;
    const dualStack = this._main._opt.ipv4 && this._main._opt.ipv6;

    if (typeof this._main._opt.tls !== "undefined") {
      const { key, cert, requestCert, ca } = this._main._opt.tls;
      socket = tls.createServer({ key, cert, requestCert, ca }, (socket) => {
        this._onTcpClientConnected(socket);
      });
    } else {
      socket = net.createServer((socket) => {
        this._onTcpClientConnected(socket);
      });
    }

    socket.on("error", (err) => {
      this.emit("error", err);
    });

    const listenOptions = {
      port,
      host: bindAddress,
      ipv6Only,
    };

    // Dual-stack fallback: if binding the IPv6 wildcard fails (the host kernel
    // has IPv6 disabled, no v6 stack, or a duplicate v6 socket), fall back to
    // an IPv4-only listener on `0.0.0.0`. The user can still terminate on a
    // specific address by passing an explicit `bindAddress`.
    const tryListen = (opts: typeof listenOptions, onError: () => void) => {
      const errorHandler = (err: NodeJS.ErrnoException) => {
        if (
          dualStack &&
          (err.code === "EAFNOSUPPORT" ||
            err.code === "EADDRNOTAVAIL" ||
            err.code === "EINVAL")
        ) {
          socket.removeListener("error", errorHandler);
          onError();
        } else {
          this.emit("error", err);
        }
      };
      socket.once("error", errorHandler);
      socket.listen(opts, () => {
        socket.removeListener("error", errorHandler);
        this.emit("listen");
      });
    };

    tryListen(listenOptions, () => {
      // IPv6 not available on this host — retry as IPv4-only.
      const fallback = {
        port,
        host: bindAddress === "::" ? "0.0.0.0" : bindAddress,
        ipv6Only: false,
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
      } catch (err) {
        this.emit("data.error", err);
      }

      socket.uncork();

      if (dataResult === true) {
        // we got a message, we don't care if it's good or not
        ++this.stats.received;

        const loadedMessage = codec.getLastMessage();

        try {
          // copy the completed message to continue processing and clear the buffer
          const completedMessageCopy = JSON.parse(
            JSON.stringify(loadedMessage),
          ) as string;

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

            const req = new InboundRequest(parsed, {
              type: "message",
              socket,
            });
            const res = new this._sendResponseClass(
              socket,
              parsed,
              this._opt.mshOverrides,
            );

            res.on("response.sent", () => this.emit("response.sent"));
            void this._handler(req, res);
          }
        } catch (err) {
          this.emit("data.error", err);
        }
      }
    });

    socket.on("error", (err) => {
      this.emit("client.error", err);
      this._closeSocket(socket);
    });

    socket.on("close", (hadError) => {
      this.emit("client.close", hadError);
      this._closeSocket(socket);
    });

    this.emit("client.connect", socket);
  }

  /** @internal */
  private _closeSocket(socket: Socket): void {
    socket.destroy();
    this._sockets.splice(this._sockets.indexOf(socket), 1);
  }
}
