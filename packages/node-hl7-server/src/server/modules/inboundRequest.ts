import { HL7ListenerError } from "@/utils/exception";
import type { Socket } from "net";
import { Message } from "node-hl7-client";

/**
 * Inbound Request Props
 * @since 1.0.0
 */
export interface InboundRequestProps {
  type: string;
  socket: Socket;
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
  private readonly _socket: Socket;

  /**
   * @since 1.0.0
   * @param message
   * @param props
   */
  constructor(message: Message, props: InboundRequestProps) {
    this._fromType = props.type;
    this._socket = props.socket;
    this._message = message;
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

  getType(): string {
    return this._fromType;
  }

  /**
   * Get the underlying TCP/TLS socket the message arrived on.
   * Useful for downstream consumers that need access to peer/local
   * address pairs (e.g. for conntrack lookups when the listener sits
   * behind DNAT or a load balancer with floating-IP rules) and
   * therefore cannot rely on a single `port → client` mapping.
   * @since 4.0.0
   */
  getSocket(): Socket {
    return this._socket;
  }
}
