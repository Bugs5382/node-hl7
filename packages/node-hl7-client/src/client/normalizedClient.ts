import { HL7FatalError } from "@/helpers/exception";
import { ClientListenerOptions, ClientOptions } from "@/modules/types";
import { assertNumber } from "@/utils";
import { detectIPFamily, validIPv4, validIPv6 } from "@/utils/ipAddress";
import { TcpSocketConnectOpts } from "node:net";
import type { ConnectionOptions as TLSOptions } from "node:tls";

const DEFAULT_CLIENT_OPTS = {
  encoding: "utf-8",
  connectionTimeout: 0,
  ipv4: true,
  ipv6: false,
  autoSelectFamily: true,
  autoSelectFamilyAttemptTimeout: 250,
  maxAttempts: 10,
  maxConnectionAttempts: 10,
  maxTimeout: 10,
  retryHigh: 30000,
  retryLow: 1000,
};

const DEFAULT_LISTEN_CLIENT_OPTS = {
  autoConnect: true,
  maxAttempts: 10,
  maxConnectionAttempts: 10,
  waitAck: true,
  maxLimit: 10000,
};

type ValidatedClientKeys = "host" | "connectionTimeout";

type ValidatedClientListenerKeys =
  | "autoConnect"
  | "port"
  | "maxAttempts"
  | "maxConnectionAttempts";

interface ValidatedClientOptions extends Pick<
  Required<ClientOptions>,
  ValidatedClientKeys
> {
  autoSelectFamily: boolean;
  autoSelectFamilyAttemptTimeout: number;
  connectionTimeout: number;
  /** Resolved family for the connection. `0` means dual-stack (let Node decide
   * with Happy Eyeballs); `4`/`6` mean force that family. */
  family: 0 | 4 | 6;
  host: string;
  ipv4: boolean;
  ipv6: boolean;
  maxTimeout: number;
  retryHigh: number;
  retryLow: number;
  socket?: TcpSocketConnectOpts;
  tls?: TLSOptions;
}

interface ValidatedClientListenerOptions extends Pick<
  Required<ClientListenerOptions>,
  ValidatedClientListenerKeys
> {
  autoConnect: boolean;
  encoding: BufferEncoding;
  extendMaxLimit: boolean;
  port: number;
  maxAttempts: number;
  maxConnectionAttempts: number;
  maxLimit: number;
  notifyOnLimitExceeded: boolean;
  retryHigh: number;
  retryLow: number;
  waitAck: boolean;
}

/** @internal */
export function normalizeClientOptions(
  raw?: ClientOptions,
): ValidatedClientOptions {
  const props: any = { ...DEFAULT_CLIENT_OPTS, ...raw };

  // Backward-compatible semantics: passing only one of `ipv4` / `ipv6`
  // explicitly is treated as "that family only". Pass both `true` (or neither)
  // to opt into dual-stack with fallback.
  const rawIpv4 = raw && Object.prototype.hasOwnProperty.call(raw, "ipv4");
  const rawIpv6 = raw && Object.prototype.hasOwnProperty.call(raw, "ipv6");
  if (rawIpv4 && raw?.ipv4 === true && !rawIpv6) {
    props.ipv6 = false;
  }
  if (rawIpv6 && raw?.ipv6 === true && !rawIpv4) {
    props.ipv4 = false;
  }

  if (typeof props.host === "undefined" || props.host.length <= 0) {
    throw new HL7FatalError(
      "host is not defined or the length is less than 0.",
    );
  }

  if (typeof props.host !== "string") {
    throw new HL7FatalError("host is not valid string.");
  }

  if (props.ipv4 === false && props.ipv6 === false) {
    throw new HL7FatalError(
      "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
    );
  }

  // Detect whether host is an IP literal or an FQDN. Literals are validated
  // against the explicitly requested family; FQDNs defer family selection to
  // DNS at connect time.
  const literalFamily = detectIPFamily(props.host);
  const looksLikeIPv4 = /^[0-9.]+$/.test(props.host);
  const looksLikeIPv6 = props.host.includes(":");

  if (props.ipv4 === true && props.ipv6 === false) {
    if (looksLikeIPv4 && validIPv4(props.host) === false) {
      throw new HL7FatalError("host is not a valid IPv4 address.");
    }
    if (literalFamily === 6) {
      throw new HL7FatalError("host is not a valid IPv4 address.");
    }
    props.family = 4;
  } else if (props.ipv4 === false && props.ipv6 === true) {
    if (looksLikeIPv6 && validIPv6(props.host) === false) {
      throw new HL7FatalError("host is not a valid IPv6 address.");
    }
    if (literalFamily === 4) {
      throw new HL7FatalError("host is not a valid IPv6 address.");
    }
    props.family = 6;
  } else {
    // dual-stack: family is resolved at connect time (0 = unspecified)
    props.family = literalFamily;
  }

  if (props.tls === true) {
    props.tls = {};
  }

  assertNumber(props, "connectionTimeout", 0, 60000);
  assertNumber(props, "maxTimeout", 1, 50);
  assertNumber(props, "autoSelectFamilyAttemptTimeout", 10, 60000);

  return props;
}

/** @internal */
export function normalizeClientListenerOptions(
  client: ClientOptions,
  raw?: ClientListenerOptions,
): ValidatedClientListenerOptions {
  const props: any = { ...DEFAULT_LISTEN_CLIENT_OPTS, ...raw };

  if (typeof props.port === "undefined") {
    throw new HL7FatalError("port is not defined.");
  }

  if (typeof props.port !== "number") {
    throw new HL7FatalError("port is not valid number.");
  }

  if (typeof props.retryHigh === "undefined") {
    props.retryHigh = client.retryHigh;
  }

  if (typeof props.retryLow === "undefined") {
    props.retryLow = client.retryLow;
  }

  if (
    typeof props.enqueueMessage !== "undefined" &&
    typeof props.flushQueue === "undefined"
  ) {
    throw new HL7FatalError("flushQueue is not set.");
  }

  if (
    typeof props.enqueueMessage == "undefined" &&
    typeof props.flushQueue !== "undefined"
  ) {
    throw new HL7FatalError("enqueueMessage is not set.");
  }

  assertNumber(props, "maxLimit", 1);
  assertNumber(props, "maxAttempts", 1, 50);
  assertNumber(props, "maxConnectionAttempts", 1, 50);
  assertNumber(props, "port", 1, 65353);

  return props;
}
