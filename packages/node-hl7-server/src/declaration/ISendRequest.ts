import { validMSA1 } from "@/utils/constants";
import { Socket } from "net";
import { Message, MLLPCodec } from "node-hl7-client";

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
  /** */
  sendResponse: (type: validMSA1, encoding: BufferEncoding) => Promise<void>;
  /** Send a fully customized ACK message back to the client. */
  sendCustomResponse: (
    message: Message | string,
    encoding?: BufferEncoding,
  ) => Promise<void>;
}
