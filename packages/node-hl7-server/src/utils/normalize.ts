import { BaseSendResponse } from "@/declaration/baseSendRequest";
import {
  assertNumber,
  Message,
  randomString,
  validIPv4,
  validIPv6,
} from "node-hl7-client";
import { TcpSocketConnectOpts } from "node:net";
import type { ConnectionOptions as TLSOptions } from "node:tls";
import { HL7ListenerError, HL7ServerError } from "./exception";

const DEFAULT_SERVER_OPTS: Partial<ServerOptions> = {
  encoding: "utf-8",
  ipv4: true,
  ipv6: false,
};

const DEFAULT_LISTENER_OPTS: Partial<ListenerOptions> = {
  encoding: "utf-8",
};

/**
 * @since 1.0.0
 */
export interface ServerOptions {
  /** The network address to listen on.
   *
   * Defaults are picked automatically from `ipv4` / `ipv6`:
   *   - IPv4 only (`ipv4: true, ipv6: false`, the default) → `"0.0.0.0"`
   *   - IPv6 only (`ipv4: false, ipv6: true`)              → `"::"`
   *   - dual-stack (`ipv4: true, ipv6: true`)              → `"::"`
   *
   * Pass an explicit IPv4 (e.g. `"10.1.2.3"`) or IPv6 (e.g. `"fe80::1"`)
   * literal — or `"localhost"` — when the host has multiple addresses
   * and you need to terminate on a specific one.
   * @default depends on ipv4/ipv6 (see above)
   */
  bindAddress?: string;
  /** Encoding of the messages we expect from the HL7 message.
   * @default "utf-8"
   */
  encoding?: BufferEncoding;
  /** Accept IPv4 connections.
   *
   * Combine with {@link ipv6}` = true` to opt into dual-stack listening
   * (IPv4 + IPv6 on a single socket). Setting `ipv4: false` listens on
   * IPv6 only.
   * @default true
   */
  ipv4?: boolean;
  /** Accept IPv6 connections.
   *
   * Combine with {@link ipv4}` = true` (also the default) to opt into
   * dual-stack listening. Setting `ipv6: true` alone listens on IPv6 only.
   * @default false
   */
  ipv6?: boolean;
  /** Additional options when creating the TCP socket with net.connect(). */
  socket?: TcpSocketConnectOpts;
  /** Enable TLS, or set TLS specific options like overriding the CA for
   * self-signed certificates. */
  tls?: TLSOptions;
}

/**
 * @since 1.0.0
 */
export interface ListenerOptions {
  /** Encoding of the messages we expect from the HL7 message.
   * @default "utf-8"
   */
  encoding?: BufferEncoding;
  /** Optional MSH segment overrides. See the readme for examples.
   * @since 2.5.0 */
  mshOverrides?: Record<string, string | ((message: Message) => string)>;
  /** Name of the Listener (e.g., IB_EPIC_ADT)
   * @default Randomized String */
  name?: string;
  /** The network address to listen on expediently.
   * Must be set between 0 and 65,353 */
  port: number;
  /** If you need to override the response class sent to the client,
   * you need to extend the base BaseSendResponse class from
   *  **/
  responseClass?: typeof BaseSendResponse;
}

/**
 * @since 1.0.0
 */
type ValidatedKeys = "port";

/**
 * @since 1.0.0
 */
interface ValidatedOptions extends Pick<
  Required<ListenerOptions>,
  ValidatedKeys
> {
  mshOverrides?: Record<string, string | ((message: Message) => string)>;
  name?: string;
  port: number;
  responseClass?: typeof BaseSendResponse;
}

/**
 * Resolved server options (post-normalization).
 * @internal
 */
export interface NormalizedServerOptions extends ServerOptions {
  bindAddress: string;
  encoding: BufferEncoding;
  ipv4: boolean;
  ipv6: boolean;
  /** Resolved value forwarded to `server.listen({ ipv6Only })`. `true` when
   * IPv6-only is requested, `false` when dual-stack listening is requested.
   * @since 4.0.0 */
  ipv6Only: boolean;
}

/** @internal */
export function normalizeServerOptions(
  props?: ServerOptions,
): NormalizedServerOptions {
  const merged: ServerOptions = {
    ...DEFAULT_SERVER_OPTS,
    ...(props || {}),
  };

  // Backward-compatible semantics: passing only one of `ipv4` / `ipv6`
  // explicitly is treated as "that family only". Pass both `true` (or rely on
  // the defaults) to opt into dual-stack listening.
  const rawIpv4 = props && Object.prototype.hasOwnProperty.call(props, "ipv4");
  const rawIpv6 = props && Object.prototype.hasOwnProperty.call(props, "ipv6");
  if (rawIpv4 && props?.ipv4 === true && !rawIpv6) {
    merged.ipv6 = false;
  }
  if (rawIpv6 && props?.ipv6 === true && !rawIpv4) {
    merged.ipv4 = false;
  }

  if (merged.ipv4 === false && merged.ipv6 === false) {
    throw new HL7ServerError(
      "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
    );
  }

  const dualStack = merged.ipv4 === true && merged.ipv6 === true;
  const ipv6Only = merged.ipv4 === false && merged.ipv6 === true;

  // Pick a sensible bindAddress default if the caller did not specify one.
  if (typeof merged.bindAddress === "undefined") {
    merged.bindAddress = dualStack || ipv6Only ? "::" : "0.0.0.0";
  }

  if (typeof merged.bindAddress !== "string") {
    throw new HL7ServerError("bindAddress is not valid string.");
  }

  if (merged.bindAddress !== "localhost") {
    if (dualStack) {
      // Dual-stack accepts either family literal — but a plain IPv4 literal
      // cannot listen on IPv6 traffic, so flag the inconsistency early.
      if (
        merged.bindAddress.length > 0 &&
        validIPv4(merged.bindAddress) === false &&
        validIPv6(merged.bindAddress) === false
      ) {
        throw new HL7ServerError(
          "bindAddress is not a valid IPv4 or IPv6 address.",
        );
      }
    } else if (ipv6Only) {
      if (!validIPv6(merged.bindAddress)) {
        throw new HL7ServerError("bindAddress is an invalid ipv6 address.");
      }
    } else {
      // ipv4 only
      if (!validIPv4(merged.bindAddress)) {
        throw new HL7ServerError("bindAddress is an invalid ipv4 address.");
      }
    }
  }

  return {
    ...merged,
    bindAddress: merged.bindAddress,
    encoding: merged.encoding ?? "utf-8",
    ipv4: merged.ipv4 ?? true,
    ipv6: merged.ipv6 ?? true,
    ipv6Only,
  };
}

/** @internal */
export function normalizeListenerOptions(
  props: ListenerOptions,
): ValidatedOptions {
  const merged: ListenerOptions = {
    ...DEFAULT_LISTENER_OPTS,
    ...(props || {}),
  };

  const nameFormat = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/; //eslint-disable-line

  if (typeof merged.name === "undefined") {
    merged.name = randomString();
  } else {
    if (nameFormat.test(merged.name)) {
      throw new HL7ListenerError(
        "name must not contain certain characters: `!@#$%^&*()+\\-=\\[\\]{};':\"\\\\|,.<>\\/?~.",
      );
    }
  }

  if (typeof merged.mshOverrides === "object") {
    Object.entries(merged.mshOverrides).forEach(([_path, override]) => {
      if (typeof override !== "string" && typeof override !== "function") {
        throw new HL7ListenerError(
          "mshOverrides override value must be a string or a function.",
        );
      }
    });
  }

  if (typeof merged.port === "undefined") {
    throw new HL7ListenerError("port is not defined.");
  }

  // this might seem not needed, but it is. don't change no matter what! :)
  if (typeof merged.port !== "number" || isNaN(merged.port)) {
    throw new HL7ListenerError("port is not a valid number.");
  }

  assertNumber({ port: merged.port }, "port", 0, 65353);

  return merged;
}
