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
import { createHL7Date, Message, randomString } from "node-hl7-client";

import { BaseSendResponse } from "@/declaration/baseSendRequest";
import { ISendRequest } from "@/declaration/ISendRequest";
import { validMSA1 } from "@/utils/constants";
import { HL7ServerError } from "@/utils/exception";

/**
 * Send Response
 * @since 1.0.0
 */
export class SendResponse extends BaseSendResponse implements ISendRequest {
  /**
   * Send Response back to End User
   * @since 1.0.0
   * @see {@link https://hl7-definition.caristix.com/v2/HL7v2.1/Tables/0008}
   * @param type
   * @param encoding
   * @example
   * If you are to confirm to the end user (client) that the message they sent was good and processed successfully.
   * you would send an "AA" style message (Application Accept).
   * Otherwise, send an "AR" (Application Reject) to tell the client the data was
   * not accepted/processed or send an "AE"
   * (Application Error) to tell the client your overall application had an error.
   * ```ts
   * const server = new Server({bindAddress: '0.0.0.0'})
   * const IB_ADT = server.createInbound({port: LISTEN_PORT}, async (req, res) => {
   *  const messageReq = req.getMessage()
   *  await res.sendResponse("AA")
   * })
   *
   * or
   *
   * const server = new Server({bindAddress: '0.0.0.0'})
   * const IB_ADT = server.createInbound({port: LISTEN_PORT}, async (req, res) => {
   *  const messageReq = req.getMessage()
   *  await res.sendResponse("AR")
   * })
   *
   * or
   *
   * const server = new Server({bindAddress: '0.0.0.0'})
   * const IB_ADT = server.createInbound({port: LISTEN_PORT}, async (req, res) => {
   *  const messageReq = req.getMessage()
   *  await res.sendResponse("AE")
   * })
   *```
   *
   * "AE" (Application Error) will be automatically sent if there is a problem creating either an "AA" or "AR"
   * message from the original message sent because the original message structure sent wrong in the first place.
   *
   * If the specification of the Hl7 message you get from the client is 2.1, the value sent back can be "AA", "AR", "AE".
   * Anything above 2.1 and greater fields are valid "AA", "AR", "AE", "CA", "CR", and "CE".
   * If a CE is sent back with 2.1, the system will send an error in which
   * the server will have failed to respond properly back to the client.
   *
   */
  async sendResponse(
    type: validMSA1,
    encoding: BufferEncoding = "utf8",
  ): Promise<void> {
    try {
      this._ack = this._createAckMessage(type, this._message);
    } catch (error: any) {
      if (error instanceof HL7ServerError) throw error;

      this._ack = this._createAEAckMessage();
    }

    this._codec.sendMessage(this._socket, this._ack.toString(), encoding);

    // we are sending a response back, why not?
    this.emit("response.sent");
  }

  /** @internal */
  private _createAckMessage(type: validMSA1, message: Message): Message {
    const spec = message.get("MSH.12").toString();
    this._validateMSA1(spec, type);

    // Swap sender/receiver from the original message
    const sendApp = message.get("MSH.5").toString();
    const sendFac = message.get("MSH.6").toString();
    const recvApp = message.get("MSH.3").toString();
    const recvFac = message.get("MSH.4").toString();
    const processingId = message.get("MSH.11").toString();
    const origControlId = message.get("MSH.10").toString();

    // HL7 2.1 uses a simple message type; 2.3+ uses a composite (ACK^EventCode)
    const eventCode = message.get("MSH.9.2").toString();
    const msh9 = eventCode ? `ACK^${eventCode}` : "ACK";

    const text = [
      String.raw`MSH|^~\&|${sendApp}|${sendFac}|${recvApp}|${recvFac}|${createHL7Date(new Date())}||${msh9}|${randomString()}|${processingId}|${spec}`,
      `MSA|${type}|${origControlId}`,
    ].join("\r");

    const ackMessage = new Message({ text });

    // Apply MSH field overrides last, so they win over the echoed values. This
    // includes MSH.12: the listener's pinned `version` only validates the
    // INBOUND message, so an override of MSH.12 here makes the ACK declare a
    // different HL7 version on purpose (an escape hatch; matches go-hl7).
    if (typeof this._mshOverrides === "object") {
      for (const [path, override] of Object.entries(this._mshOverrides)) {
        ackMessage.set(
          `MSH.${path}`,
          typeof override === "function" ? override(message) : override,
        );
      }
    }

    return ackMessage;
  }

  /** @internal */
  private _createAEAckMessage(): Message {
    // Z99 is an unassigned event code used as a placeholder for unknown failures
    const text = [
      String.raw`MSH|^~\&|||||${createHL7Date(new Date())}||ACK^Z99^ACK|${randomString()}|P|2.7`,
      `MSA|AE|`,
    ].join("\r");
    return new Message({ text });
  }
}
