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
import { Message } from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src/hl7/2.1";

/**
 * Create an Ack Message
 * @since 1.0.0
 * @param type
 * @param message
 */
export function _createAckMessage(type: string, message: Message): Message {
  const messageBuild = new HL7_2_1();

  messageBuild.buildMSH({
    msh_10: "12345",
    msh_11: "T",
    msh_3: message.get("MSH.5").toString(),
    msh_4: message.get("MSH.6").toString(),
    msh_5: message.get("MSH.3").toString(),
    msh_6: message.get("MSH.4").toString(),
    msh_9: "ACK",
  });

  messageBuild.buildMSA({
    msa_1: type,
    msa_2: message.get("MSH.10").toString(),
  });

  return messageBuild.toMessage();
}
