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
import EventEmitter from "node:events";
import net, { Socket } from "node:net";
import { clearTimeout } from "node:timers";
import tls from "node:tls";

import { normalizeClientListenerOptions } from "@/client/normalizedClient";
import { Deferred } from "@/declaration/deferred";
import { ReadyState } from "@/declaration/enum";
import { HL7FatalError } from "@/helpers/exception";
import { MLLPCodec } from "@/modules/codec";
import {
  ClientListenerOptions,
  FallBackHandler,
  NotifyPendingCount,
  OutboundHandler,
} from "@/modules/types";
import { createDeferred } from "@/utils/createDeferred";
import { expBackoff } from "@/utils/expBackoff";

import { Batch, FileBatch, Message } from "../builder/index";
import { isBatch, MessageItem } from "../index";
import { Client } from "./client";
import { InboundResponse } from "./inboundResponse";

export interface IConnection extends EventEmitter {
  /** The connection has been closed manually. You have to start the connection again. */
  on(name: "close", callback: () => void): this;
  /** The connection is made. */
  on(name: "connect", callback: () => void): this;
  /** The connection is being (re)established or attempting to re-connect. */
  on(name: "connection", callback: () => void): this;
  /** The handle is open to do a manual start to connect. */
  on(name: "open", callback: () => void): this;
  /** The total acknowledged for this connection. */
  on(name: "client.acknowledged", callback: (number: number) => void): this;
  /** The connection has an error. */
  on(name: "client.error", callback: (error: any) => void): this;
  /** The total sent for this connection. */
  on(name: "client.sent", callback: (number: number) => void): this;
  /** The connection has timeout. Review "client.error" event for the reason. */
  on(name: "client.timeout", callback: () => void): this;
  /** When the in-memory queue limit is exceeded */
  on(name: "client.limitExceeded", callback: (port: number) => void): this;
}

/** Connection Class
 * @remarks Create a connection customer that will listen to result send to the particular port.
 * @since 1.0.0 */
export class Connection extends EventEmitter implements IConnection {
  /** @internal */
  _connectionTimer?: NodeJS.Timeout | undefined;
  /** @internal */
  _handler: OutboundHandler;
  /** @internal */
  _onConnect: Deferred<void>;
  /** @internal */
  _retryTimer: NodeJS.Timeout | undefined;
  /** @internal */
  readonly stats = {
    /** Total acknowledged messages back from server.
     * @since 1.1.0 */
    acknowledged: 0,
    /** Pending Messages
     * @since 3.1.0 */
    pending: 0,
    /** Total message sent to server.
     * @since 1.1.0 */
    sent: 0,
  };
  /** @internal */
  protected _readyState: ReadyState;
  /** @internal */
  private _awaitingResponse: boolean;
  /** @internal */
  private _codec: MLLPCodec | null;
  /** @internal */
  private _dataResult: boolean | undefined;
  /** @internal */
  private readonly _enqueueMessageFn: (
    message: MessageItem,
    notifyPendingCount: NotifyPendingCount,
  ) => Promise<void> | void;
  /** @internal */
  private readonly _extendMaxLimit: boolean;
  /** @internal */
  private readonly _flushQueueFn: (
    callback: FallBackHandler,
    notifyPendingCount: NotifyPendingCount,
  ) => Promise<void> | void;
  /** @internal */
  private readonly _main: Client;
  /** @internal */
  private readonly _maxLimit: number;
  /** @internal */
  private readonly _notifyOnLimitExceeded: boolean;
  /** @internal */
  private readonly _opt: ReturnType<typeof normalizeClientListenerOptions>;
  /** @internal */
  private readonly _pendingMessages: Array<Batch | FileBatch | Message> = [];
  /** @internal */
  private _pendingSetup: boolean;
  /** @internal */
  private _retryCount: number;
  /** @internal */
  private _retryTimeoutCount: number;
  /** @internal */
  private _socket: Socket | undefined;

  /**
   * @since 1.0.0
   * @param client The client parent that we are connecting too.
   * @param props The individual port connection options.
   * Some values will be defaulted by the parent server connection.
   * @param handler The function that will send the returned information back to the client after we got a response from the server.
   * @example
   * ```ts
   * const OB = client.createConnection({ port: 3000 }, async (res) => {})
   * ```
   */
  constructor(
    client: Client,
    properties: ClientListenerOptions,
    handler: OutboundHandler,
  ) {
    super();

    this._handler = handler;
    this._main = client;
    this._awaitingResponse = false;

    this._opt = normalizeClientListenerOptions(client._opt, properties);

    this._connect = this._connect.bind(this);

    this._pendingSetup = false;
    this._retryCount = 0;
    this._retryTimeoutCount = 0;
    this._retryTimer = undefined;
    this._connectionTimer = undefined;
    this._codec = null;
    this._pendingMessages = [];
    this._maxLimit = this._opt.maxLimit;
    this._extendMaxLimit = this._opt.extendMaxLimit ?? false;
    this._notifyOnLimitExceeded = this._opt.notifyOnLimitExceeded ?? false;

    this._enqueueMessageFn =
      properties.enqueueMessage ?? this.defaultEnqueueMessage.bind(this);
    this._flushQueueFn =
      properties.flushQueue ?? this.defaultFlushQueue.bind(this);

    this._onConnect = createDeferred(true);

    if (this._opt.autoConnect) {
      this._readyState = ReadyState.CONNECTING;
      this.emit("connecting");
      this._socket = this._connect();
    } else {
      this._readyState = ReadyState.OPEN;
      this.emit("open");
      this._socket = undefined;
    }
  }
  /** Close Client Listener Instance.
   * @remarks Force close a connection.
   * It will stop any re-connection timers.
   * If you want to restart, your app has to restart the connection.
   * @since 1.0.0
   * @example
   * ```ts
   * outbound.close()
   * ```
   */
  async close(): Promise<void> {
    if (this._readyState === ReadyState.CLOSED) {
      return; // We are already closed. Nothing to do.
    }

    if (this._readyState === ReadyState.CLOSING) {
      return await new Promise((resolve) =>
        this._socket?.once("close", resolve),
      );
    }

    if (this._readyState === ReadyState.CONNECTING) {
      // clear retry timer
      if (this._retryTimer !== undefined) {
        clearTimeout(this._retryTimer);
      }
      // let's clear out the try timer forcefully
      this._retryTimer = undefined;
    }

    // normal closing
    this._readyState = ReadyState.CLOSING;

    // remove socket
    this._socket?.destroy();
    this._socket?.end();

    // Ensure no further reconnections are attempted
    clearTimeout(this._connectionTimer);

    // Emit close event on the socket
    this.emit("close");

    // Set closure state
    this._readyState = ReadyState.CLOSED;
  }

  /**
   * Start the connection if not auto started.
   * @since 2.0.0
   */
  async connect(): Promise<void> {
    if (this._readyState === ReadyState.CONNECTING) {
      return;
    }

    if (this._readyState === ReadyState.CONNECTED) {
      return;
    }

    if (this._readyState === ReadyState.OPEN) {
      return;
    }

    if (this._readyState === ReadyState.CLOSING) {
      return await new Promise((resolve) =>
        this._socket?.once("close", resolve),
      );
    }

    this.emit("connecting");

    this._socket = this._connect();
  }

  /**
   * Get Port
   * @remarks Get the port that this connection will connect to.
   * @since 2.0.0
   */
  getPort(): number {
    return this._opt.port;
  }

  /** Send a HL7 Message to the Listener
   * @remarks This function sends a message/batch/file batch to the remote side.
   * It has the ability, if set to auto-retry (defaulted to 1 re-connect before connection closes)
   * @since 1.0.0
   * @param message The message we need to send to the port.
   * @example
   * ```ts
   *
   * // the OB was set from the original 'createConnection' method.
   *
   * let message = new Message({
   *  messageHeader: {
   *    msh_9_1: "ADT",
   *    msh_9_2: "A01",
   *    msh_11_1: "P" // marked for production here in the example
   *  }
   * })
   *
   * await OB.sendMessage(message)
   *
   * ```
   */
  async sendMessage(message: Batch | FileBatch | Message): Promise<void> {
    const theMessage = message.toString();
    const emitter = new EventEmitter();
    const codec = new MLLPCodec(this._opt.encoding);
    const maxAttempts = this._opt.maxAttempts;
    let attempts = 0;

    // If not ready to send, queue the message
    const shouldQueue = (): boolean => {
      return (
        this._readyState !== ReadyState.CONNECTED ||
        (this._opt.waitAck && this._awaitingResponse)
      );
    };

    if (shouldQueue()) {
      // Queue the message
      await this._enqueueMessageFn(message, this._handlePendingUpdate);

      // Attempt connection if not already pending
      if (!this._pendingSetup) {
        this._pendingSetup = true;
        try {
          this._socket = this._connect();
        } catch (error: any) {
          Error.captureStackTrace(error);
          this._pendingSetup = false;
          emitter.emit("connection.error", error);
        }
      }

      return;
    }

    while (true) {
      try {
        if (this._readyState !== ReadyState.CONNECTED) {
          throw new HL7FatalError("In an invalid state to send message.");
        }

        break; // ready to send
      } catch (error: any) {
        Error.captureStackTrace(error);
        if (++attempts >= maxAttempts) throw error;
        emitter.emit("retry", error);
      }
    }

    if (this._opt.waitAck) {
      this._awaitingResponse = true;
    }

    codec.sendMessage(this._socket, theMessage, this._opt.encoding);
    ++this.stats.sent;
    this.emit("client.sent", this.stats.sent);
  }

  /** @internal */
  protected _connect(): Socket {
    const host = this._main._opt.host;
    const port = this._opt.port;
    const family = this._main._opt.family;
    const autoSelectFamily =
      family === 0 ? this._main._opt.autoSelectFamily : false;
    const autoSelectFamilyAttemptTimeout =
      this._main._opt.autoSelectFamilyAttemptTimeout;

    // Strip surrounding brackets from IPv6 literals — Node accepts
    // unbracketed addresses on `host`, and some users pass `[::1]` style.
    const dialHost =
      host.startsWith("[") && host.endsWith("]") ? host.slice(1, -1) : host;

    // When an explicit family was selected, pin it on the connection
    // options. Otherwise leave it unset so Node's Happy-Eyeballs (when
    // enabled) can race IPv6 + IPv4 lookups.
    const familyOptions =
      family === 0
        ? { autoSelectFamily, autoSelectFamilyAttemptTimeout }
        : { family };

    this._retryTimer = undefined;

    const socket: Socket =
      this._main._opt.tls === undefined
        ? net.connect({
            host: dialHost,
            port,
            ...familyOptions,
          })
        : tls.connect({
            host: dialHost,
            port,
            ...familyOptions,
            ...this._main._opt.socket,
            ...this._main._opt.tls,
          });

    this._codec = new MLLPCodec();
    this._socket = socket;

    // set no delay
    socket.setNoDelay(true);

    let connectionError: boolean | Error | undefined;

    if (
      this._main._opt.connectionTimeout > 0 &&
      (this._readyState === ReadyState.CONNECTED ||
        this._readyState === ReadyState.CONNECTING)
    ) {
      if (this._retryTimeoutCount < this._main._opt.maxTimeout) {
        this._connectionTimer = setTimeout(() => {
          ++this._retryTimeoutCount;
          this.emit("client.timeout");
          socket.destroy();
        }, this._main._opt.connectionTimeout);
      } else if (this._retryTimeoutCount >= this._main._opt.maxTimeout) {
        void this.close();
      }
    }

    socket.on("error", (error) => {
      connectionError = connectionError == undefined ? error : connectionError;
    });

    socket.on("close", () => {
      if (this._readyState === ReadyState.CLOSING) {
        this._readyState = ReadyState.CLOSED;
      } else if (
        !(
          this._readyState === ReadyState.CLOSED &&
          this._connectionTimer != undefined &&
          (this._connectionTimer as unknown as { _destroyed: boolean })
            ._destroyed
        ) &&
        this._main._opt.connectionTimeout > 0
      ) {
        connectionError =
          connectionError == undefined
            ? new HL7FatalError("Socket closed unexpectedly by server.")
            : connectionError;
        if (this._readyState === ReadyState.OPEN) {
          this._onConnect = createDeferred(true);
        }
        this._readyState = ReadyState.CONNECTING;
        const retryCount = this._retryCount++;
        const delay = expBackoff(
          this._opt.retryLow,
          this._opt.retryHigh,
          retryCount,
        );
        if (retryCount < this._opt.maxConnectionAttempts) {
          this._retryTimer = setTimeout(this._connect, delay);
          this.emit("client.error", connectionError);
        } else if (retryCount > this._opt.maxConnectionAttempts) {
          // stop this from going again
          void this.close();
        }
      }
    });

    socket.on("connect", () => {
      // accepting connections
      this._readyState = ReadyState.CONNECTED;
      // reset retryCount count
      this._retryCount = 1;
      // flush queue
      this._flushQueueFn((message: MessageItem) => {
        void this.sendMessage(message);
      }, this._handlePendingUpdate);
      // emit
      this.emit("connect");
    });

    socket.on("data", (buffer) => {
      socket.cork();

      try {
        this._dataResult = this._codec?.receiveData(buffer);
      } catch (error) {
        this.emit("data.error", error);
      }

      socket.uncork();

      if (this._dataResult === true) {
        // we got some sort of response, bad, good, or error,
        // so let's tell the system we got "something"
        this._awaitingResponse = false;

        try {
          const loadedMessage = this._codec?.getLastMessage();

          if (loadedMessage == undefined) {
            return;
          }

          // copy the completed message to continue processing and clear the buffer
          const completedMessageCopy = structuredClone(loadedMessage);

          // parser either is batch or a message
          let parser: Batch | FileBatch | Message;

          // send raw information to the emit
          this.emit("data.raw", completedMessageCopy);

          if (this._handler !== undefined) {
            if (isBatch(completedMessageCopy)) {
              // parser the batch
              parser = new Batch({ text: completedMessageCopy });
              // load the messages
              const allMessage = parser.messages();
              // loop messages
              for (const message of allMessage) {
                // parse this message
                const messageParsed = new Message({ text: message.toString() });
                // increase the total message
                ++this.stats.acknowledged;
                // response
                const response = new InboundResponse(messageParsed.toString());
                // update ack total
                this.emit("client.acknowledged", this.stats.acknowledged);
                // send it back
                void this._handler(response);
              }
            } else {
              // parse this message
              const messageParsed = new Message({ text: completedMessageCopy });
              // increase the total message
              ++this.stats.acknowledged;
              // response
              const response = new InboundResponse(messageParsed.toString());
              // update ack total
              this.emit("client.acknowledged", this.stats.acknowledged);
              // send it back
              void this._handler(response);
            }
          }
        } catch (error) {
          this.emit("data.error", error);
        }
      }
    });

    const readerLoop = async (): Promise<void> => {
      try {
        await this._negotiate();
      } catch (error: any) {
        if (error.code !== "READ_END") {
          socket.destroy(error);
        }
      }
    };

    void readerLoop().then((_r) => {
      /* noop */
    });

    return socket;
  }

  /**
   * This is the default Enqueue Message Handler
   * @since 3.1.0
   * @param message
   * @param notifyPendingCount
   * @protected
   */
  protected async defaultEnqueueMessage(
    message: MessageItem,
    notifyPendingCount: NotifyPendingCount,
  ): Promise<void> {
    if (this._pendingMessages.length === this._maxLimit) {
      this.handleQueueOverflow();
    }
    this._pendingMessages.push(message);

    await notifyPendingCount(this._pendingMessages.length);
  }

  /**
   * This is the default Flush Message Handler
   * @since 3.1.0
   * @param callback
   * @param notifyPendingCount
   * @protected
   */
  protected async defaultFlushQueue(
    callback: FallBackHandler,
    notifyPendingCount: NotifyPendingCount,
  ): Promise<void> {
    while (this._pendingMessages.length > 0) {
      const message = this._pendingMessages.shift();
      if (message !== undefined) {
        callback(message);
        await notifyPendingCount(this._pendingMessages.length);
      }
    }
  }

  /**
   * This is checked during Encoding to handle overflow from use of memory.
   * @since 3.1.0
   * @protected
   */
  protected handleQueueOverflow(): void {
    if (!this._extendMaxLimit) {
      this._pendingMessages.shift();
    }

    if (this._notifyOnLimitExceeded) {
      this.emit("client.limitExceeded", this._opt.port);
    }
  }

  /**
   * The handle that handles telling the client how many pending message this connection has.
   * @since 3.1.0
   * @param count
   */
  private _handlePendingUpdate = async (count: number): Promise<void> => {
    this.stats.pending = count;
    this.emit("client.pending", this.stats.pending);
  };

  /** @internal */
  private async _negotiate(): Promise<void> {
    if (this._socket?.writable === true) {
      // we are open, not yet ready, but we can
      this._readyState = ReadyState.OPEN;
      // on connect resolve
      this._onConnect.resolve();
      // emit
      this.emit("connection");
    }
  }
}

export default Connection;
