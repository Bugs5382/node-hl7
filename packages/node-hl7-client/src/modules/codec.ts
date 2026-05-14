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
import { Socket } from "node:net";

import {
  PROTOCOL_MLLP_END,
  PROTOCOL_MLLP_FOOTER,
  PROTOCOL_MLLP_HEADER,
} from "@/helpers/constants";

/** MLLPCodec Class
 * @since 3.1.0 */
export class MLLPCodec {
  /** @internal */
  private readonly _encoding: BufferEncoding;
  /** @internal */
  private readonly _returnCharacter: string;
  /** @internal */
  private dataBuffer: Buffer = Buffer.alloc(0);
  /** @internal */
  private lastMessage: null | string = null;

  /**
   * @since 3.1.0
   * @param encoding
   * @param returnCharacter
   */
  constructor(
    encoding: BufferEncoding = "utf-8",
    returnCharacter: string = "\r",
  ) {
    this._encoding = encoding;
    this._returnCharacter = returnCharacter;
  }

  /**
   * Get the last message.
   * @since 3.1.0
   */
  public getLastMessage(): null | string {
    return this.lastMessage;
  }

  /**
   * Process the incoming data from the client.
   * @since 3.1.0
   * @param data
   */
  public receiveData(data: Buffer | string): boolean {
    const buf =
      typeof data === "string" ? Buffer.from(data, this._encoding) : data;
    this.dataBuffer = Buffer.concat([this.dataBuffer, buf]);

    // only go into this code see that the last part of the dataBuffer contains the end and footer protocol
    if (this.dataBuffer.includes(0x1c) && this.dataBuffer.includes(0x0d)) {
      // process the message now
      void this.processMessage();
      // return true
      return true;
    }

    // return false because we are still waiting for more of the message to come over
    return false;
  }

  /**
   * Send a message and send it to the remote side.
   * @since 3.1.0
   * @param socket
   * @param message
   * @param encoding
   */
  public sendMessage(
    socket: Socket | undefined,
    message: string,
    encoding: BufferEncoding,
  ): void {
    const messageBuffer = Buffer.concat([
      PROTOCOL_MLLP_HEADER,
      Buffer.from(message, encoding),
      PROTOCOL_MLLP_END,
      PROTOCOL_MLLP_FOOTER,
    ]);

    socket?.write(messageBuffer);
  }

  /**
   * Process the stored message that was sent over.
   * @since 3.1.0
   * @private
   */
  private processMessage(): void {
    const messages: string[] = [];
    const dataString = this.dataBuffer.toString(this._encoding);
    const messageParts = dataString.split("\u001C\r");

    // loop though the message parts
    for (const part of messageParts) {
      if (part.trim() !== "") {
        const trimmedPart = part.trim();
        messages.push(this.stripMLLPCharacters(trimmedPart));
      }
    }

    // put the entire message together
    this.lastMessage = messages.join(this._returnCharacter);

    // clear the data buffer
    this.dataBuffer = Buffer.alloc(0);
  }

  /**
   * @since 3.1.0
   * @param message
   * @private
   */
  private stripMLLPCharacters(message: string): string {
    return message.replaceAll("\u000B", "").replaceAll("\u001C", "");
  }
}
