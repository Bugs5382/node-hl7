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
import { Message, MLLPCodec } from "node-hl7-client";
import EventEmitter from "node:events";
import { Socket } from "node:net";

import { ISendRequest } from "@/declaration/ISendRequest";
import {
  MSA_1_VALUES_v2_1,
  MSA_1_VALUES_v2_x,
  validMSA1,
} from "@/utils/constants";
import { HL7ServerError } from "@/utils/exception";
import { ListenerOptions } from "@/utils/normalize";

/**
 * base Send Response
 * @since 4.0.0
 */
export class BaseSendResponse extends EventEmitter implements ISendRequest {
  /** @internal */
  protected _ack: Message | undefined;
  /** @internal */
  protected readonly _codec: MLLPCodec;
  /** @internal */
  protected readonly _message: Message;
  /** @internal */
  protected readonly _mshOverrides: ListenerOptions["mshOverrides"];
  /** @internal */
  protected readonly _socket: Socket;

  constructor(
    socket: Socket,
    message: Message,
    mshOverrides?: ListenerOptions["mshOverrides"],
  ) {
    super();
    this._ack = undefined;
    this._message = message;
    this._mshOverrides = mshOverrides;
    this._socket = socket;
    this._codec = new MLLPCodec();
  }

  /**
   * Get the Ack Message
   * @since 2.2.0
   * @remarks Get the acknowledged message that was sent to the client.
   * This could return undefined if accessed before sending the response
   */
  getAckMessage(): Message | undefined {
    return this._ack;
  }

  /**
   * Use the codec attached the to send request so you can send your custom message. You need to provide the client socket (@see getSocket())
   * that you will need, the HL7 Message object as a string, and the encoding format you want.
   *
   * @example
   *
   * this._codec.sendMessage(socket, this.message.toString(), "utf8");
   *
   */
  getCodec() {
    return this._codec;
  }

  /**
   * Get the socket used from the client which can be used to send a message back;
   * however, you should always use the Codec class (@see getCodec()) as it can handle
   * long messages to encode the message in a way that a remote side can
   * understand.
   * @since 4.0.0
   * @return Socket
   */
  getSocket() {
    return this._socket;
  }

  /**
   * Send a fully customized acknowledgment back to the client.
   * @remarks Use this when the auto-generated ACK from {@link sendResponse} does
   * not match the format the receiving system expects (custom MSH/MSA fields,
   * extra segments, vendor-specific layouts, etc.). The provided message is
   * sent verbatim through the MLLP codec — no validation, swapping of
   * sender/receiver, or MSH overrides are applied.
   *
   * @since 4.0.0
   * @param message The fully formed HL7 ACK to send. Accepts either a
   *   {@link Message} instance or a raw HL7 string.
   * @param encoding Encoding to use when writing to the socket.
   * @example
   * ```ts
   * server.createInbound({ port }, async (req, res) => {
   *   const ack = new Message({
   *     text: `MSH|^~\\&|MY_APP|MY_FAC|...|...|${createHL7Date(new Date())}||ACK|123|P|2.5\rMSA|AA|${req.getMessage().get("MSH.10").toString()}|All good|`,
   *   });
   *   await res.sendCustomResponse(ack);
   * });
   * ```
   */
  async sendCustomResponse(
    message: Message | string,
    encoding: BufferEncoding = "utf8",
  ): Promise<void> {
    const ackMessage =
      typeof message === "string" ? new Message({ text: message }) : message;

    this._ack = ackMessage;
    this._codec.sendMessage(this._socket, ackMessage.toString(), encoding);
    this.emit("response.sent");
  }

  /**
   *
   * @param _type
   * @param _encoding
   */
  async sendResponse(_type: validMSA1, _encoding: BufferEncoding = "utf8") {
    throw new Error("Method not implemented.");
  }

  /** @internal */
  protected _validateMSA1(spec: string, type: validMSA1): void {
    switch (spec) {
      case "2.1": {
        if (!MSA_1_VALUES_v2_1.includes(type)) {
          throw new HL7ServerError(
            `Invalid MSA.1 value: ${type} for HL7 version 2.1`,
          );
        }
        break;
      }
      default: {
        if (![...MSA_1_VALUES_v2_1, ...MSA_1_VALUES_v2_x].includes(type)) {
          throw new HL7ServerError(
            `Invalid MSA.1 value: ${type} for HL7 version ${spec}`,
          );
        }
        break;
      }
    }
  }
}
