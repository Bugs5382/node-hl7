import { Message, MLLPCodec } from "node-hl7-client";
import { Socket } from "node:net";

import { validMSA1 } from "@/utils/constants";

/**
 *
 */
export interface ISendRequest {
  /** */
  getAckMessage: () => Message | undefined;
  /** */
  getCodec: () => MLLPCodec;
  /** */
  getSocket: () => Socket;
  /** Send a fully customized ACK message back to the client. */
  sendCustomResponse: (
    message: Message | string,
    encoding?: BufferEncoding,
  ) => Promise<void>;
  /** */
  sendResponse: (type: validMSA1, encoding: BufferEncoding) => Promise<void>;
}
