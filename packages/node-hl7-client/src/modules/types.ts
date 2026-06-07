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
import type { ConnectionOptions as TLSOptions } from "node:tls";

import { TcpSocketConnectOpts } from "node:net";

import { InboundResponse } from "@/client/inboundResponse";
import { MSH } from "@/hl7/headers";
import { HL7Version } from "@/hl7/metadata/types";

import { Batch, FileBatch, Message } from "../builder";

export interface ClientBuilderFileOptions extends ClientBuilderOptions {
  /**
   * Extension of the file when it gets created.
   * @since 1.0.0
   * @default hl7
   */
  extension?: string;
  /** The file as a buffer passed onto the constructor
   * @since 1.0.0  */
  fileBuffer?: Buffer;
  /** If you are providing the full file path, please set it here.
   * @since 1.0.0 */
  fullFilePath?: string;
  /** Location where the file will be saved.
   * If this is not set,
   * the files will get save it in the same directory of the executing file that is calling the function.
   * If running this package inside a DOCKER/KUBERNETES node,
   * if the container is destroyed and the files are not saved on a folder mounted outside the node,
   * the files will be lost on restart.
   * @since 1.0.0
   * @default ""
   */
  location?: string;
  /** The HL7 string that we are going to parse.
   * @default "" */
  text?: string;
}
export interface ClientBuilderMessageOptions extends ClientBuilderOptions {
  /**
   * MSH Header Options
   * @since 1.0.0
   */
  messageHeader?: MSH;
  /** The HL7 string that we are going to parse.
   * @default "" */
  text?: string;
}
/**
 * Client Builder Options
 * @remarks Used to specific default parameters around building an HL7 message if that is
 * so desired.
 * @since 1.0.0
 */
export interface ClientBuilderOptions {
  /** The date type for the date field. Usually generated at the time of the class being initialized.
   * @since 1.0.0
   * @default 14
   */
  date?: "12" | "14" | "19" | "8";
  /** */
  hardError?: boolean;
  /** At the end of each line, add this as the new line character.
   * @since 1.0.0
   * @default \r */
  newLine?: string;
  /** The character used to separate different components.
   * @since 1.0.0
   * @default ^ */
  separatorComponent?: string;
  /** The character used to escape characters that need it in order for the computer to interpret the string correctly.
   * @since 1.0.0
   * @default \\ */
  separatorEscape?: string;
  /** The character used for separating fields.
   * @since 1.0.0
   * @default | */
  separatorField?: string;
  /** The character used for repetition field/values pairs.
   * @since 1.0.0
   * @default ~ */
  separatorRepetition?: string;
  /** The character used to have subcomponents seperated.
   * @since 1.0.0
   * @default & */
  separatorSubComponent?: string;
}
export interface ClientListenerOptions extends ClientOptions {
  /** If set to false, you have to tell the system to start trying to connect
   * by sending 'start' method.
   * @default true
   */
  autoConnect?: boolean;
  /** Encoding of the messages we expect from the HL7 message.
   * @default "utf8"
   */
  encoding?: BufferEncoding;
  /**
   * Your custom function to store messages if messages have to queue.
   * Note: You must set up flushQueue prop as well.
   * @since 3.1.0
   * @example
   * ```ts
   * const enqueueMessage = (message: Message): void => {
   *   messageQueue.push(message);
   * };
   * ```
   * @remarks
   * `enqueueMessage(message)` is called whenever a message should be stored.
   */
  enqueueMessage?: (
    message: MessageItem,
    notifyPendingCount: NotifyPendingCount,
  ) => Promise<void> | void;
  /**
   * Your custom function to get messages from your custom enqueueMessage function.
   * Note: You must set up enqueueMessage prop as well.
   * @since 3.1.0
   * @example
   * ```ts
   * const flushQueue = (deliver: (msg: Message) => void): void => {
   *   while (messageQueue.length > 0) {
   *     const msg = messageQueue.shift();
   *     if (msg) deliver(msg);
   *   }
   * };
   * ```
   * @remarks
   * `flushQueue(deliverFn)` is called on reconnecting and established to send stored messages back into the connection.
   */
  flushQueue?: (
    callback: FallBackHandler,
    notifyPendingCount: NotifyPendingCount,
  ) => Promise<void> | void;
  /** Max Connections this connection makes.
   * Has to be greater than 1.
   * @default 10 */
  maxConnections?: number;
  /**
   * @since 3.1.0
   * @default 10,000
   */
  maxLimit?: number;
  /** The port we should connect to on the server. */
  port: number;
  /** Wait for ACK before sending a new message.
   * If this is set to false, you can send as many messages as you want but since you are not expecting any ACK from a
   * previous message sent before sending another one.
   * This does not stop the "total acknowledgement" counter on the
   * client object to stop increasing.
   * @default true **/
  waitAck?: boolean;
}

export interface ClientOptions {
  /**
   * Enable Happy-Eyeballs / dual-stack auto-selection when resolving the
   * host name. Only takes effect when dual-stack is opted into
   * (`ipv4: true, ipv6: true`). When on, Node races IPv6 and IPv4 connection
   * attempts and uses whichever wins, so a remote with a stale or
   * unreachable AAAA record silently falls back to its A record (and vice
   * versa). Forwarded directly to `net.connect()` / `tls.connect()`.
   * @since 4.0.0
   * @default true; ignored when `ipv4` or `ipv6` is exclusive
   */
  autoSelectFamily?: boolean;
  /**
   * How long, in milliseconds, to wait for a connection attempt on one
   * address family before racing the other when `autoSelectFamily` is on.
   * @since 4.0.0
   * @default 250
   */
  autoSelectFamilyAttemptTimeout?: number;
  /**
   * How long a connection attempt checked before ending the socket and attempting again.
   * If this is set to zero, the client will stay connected.
   * Min. is 0 (Stay Connected), and Max. is 60000 (60 seconds.)
   * Use with caution.
   * @default 0
   */
  connectionTimeout?: number;
  /** Host - You can do a FQDN or the IPv(4|6) address. */
  host?: string;
  /** IPv4 - When `true`, IPv4 connections are accepted. The host (if a
   * literal) is validated as IPv4 when this is the only enabled family.
   * Combine with {@link ipv6}` = true` to opt into dual-stack with
   * Happy-Eyeballs fallback.
   * @default true */
  ipv4?: boolean;
  /** IPv6 - When `true`, IPv6 connections are accepted. The host (if a
   * literal) is validated as IPv6 when this is the only enabled family.
   * Combine with {@link ipv4}` = true` (the default) to opt into dual-stack
   * with Happy-Eyeballs fallback.
   * @default false */
  ipv6?: boolean;
  /** Max attempts
   * to send the message before an error is thrown if we are in the process of re-attempting to connect to the server.
   * Has to be greater than 1. You cannot exceed 50.
   * @default 10 */
  maxAttempts?: number;
  /** If we are trying to establish an initial connection to the server, let's end it after this many attempts.
   * The time between re-connecting is determined by {@link connectionTimeout}.
   * You cannot exceed 50.
   * @since 1.1.0
   * @default 30
   */
  maxConnectionAttempts?: number;
  /** The number of times a connection timeout occurs until it stops attempting and just stops.
   * @since 2.1.0
   * @default 10
   */
  maxTimeout?: number;
  /** Max delay, in milliseconds, for exponential-backoff when reconnecting
   * @default 30_000 */
  retryHigh?: number;
  /** Step size, in milliseconds, for exponential-backoff when reconnecting
   * @default 1000 */
  retryLow?: number;
  /** Additional options when creating the TCP socket with net.connect(). */
  socket?: TcpSocketConnectOpts;
  /** Enable TLS, or set TLS specific options like overriding the CA for
   * self-signed certificates. */
  tls?: boolean | TLSOptions;
  /** The HL7 version this client pins. Required. Every message (or every
   * message contained in a batch/file) sent through a connection must carry a
   * matching `MSH.12`, or the send is rejected before it is queued.
   * Must be one of the known HL7 versions
   * (2.1, 2.2, 2.3, 2.3.1, 2.4, 2.5, 2.5.1, 2.6, 2.7, 2.7.1, 2.8).
   * @since 4.0.0 */
  version: HL7Version;
}

export type FallBackHandler = (message: MessageItem) => void;

export type MessageItem = Batch | FileBatch | Message;

export type NotifyPendingCount = (count: number) => Promise<void>;

/**
 * Outbound Handler
 * @remarks Used to receive a response from the server
 * @since 1.0.0
 * @param res
 */
export type OutboundHandler = (res: InboundResponse) => Promise<void> | void;
