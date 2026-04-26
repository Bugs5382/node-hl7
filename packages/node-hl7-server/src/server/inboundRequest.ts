import { HL7ListenerError } from "@/utils/exception";
import { Socket } from "net";
import { Message } from "node-hl7-client";

/**
 * Inbound Request Props
 * @since 1.0.0
 */
export interface InboundRequestProps {
  /** The underlying socket of the connection that produced this message.
   * Available so handlers can read peer/local connection details (e.g.
   * `localAddress`, `localPort`, `remoteAddress`).
   * @since 4.0.0 */
  socket?: Socket;
  type: string;
}

/**
 * Inbound Request
 * @since 1.0.0
 */
export class InboundRequest {
  /** @internal */
  private readonly _message?: Message;
  /** @internal */
  private readonly _fromType: string;
  /** @internal */
  private readonly _socket?: Socket;

  /**
   * @since 1.0.0
   * @param message
   * @param props
   */
  constructor(message: Message, props: InboundRequestProps) {
    this._fromType = props.type;
    this._message = message;
    this._socket = props.socket;
  }

  /** '
   * Get Stored Message
   * @since 1.0.0
   */
  getMessage(): Message {
    if (typeof this._message !== "undefined") {
      return this._message;
    }
    throw new HL7ListenerError("Message is not defined.");
  }

  /**
   * Get the underlying socket associated with this inbound request.
   * @remarks Useful for advanced scenarios that need access to the connection
   * (for example reading `localAddress`, `localPort`, or `remoteAddress`).
   * Throws if the request was constructed without a socket reference.
   * @since 4.0.0
   */
  getSocket(): Socket {
    if (typeof this._socket === "undefined") {
      throw new HL7ListenerError("Socket is not defined.");
    }
    return this._socket;
  }

  getType(): string {
    return this._fromType;
  }
}
