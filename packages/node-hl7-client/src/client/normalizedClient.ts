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
import type { ConnectionOptions as TLSOptions } from "node:tls";

import { TcpSocketConnectOpts } from "node:net";

import { HL7FatalError } from "@/helpers/exception";
import { ClientListenerOptions, ClientOptions } from "@/modules/types";
import { assertNumber } from "@/utils";
import { detectIPFamily, validIPv4, validIPv6 } from "@/utils/ipAddress";

const DEFAULT_CLIENT_OPTS = {
  autoSelectFamily: true,
  autoSelectFamilyAttemptTimeout: 250,
  connectionTimeout: 0,
  encoding: "utf8",
  ipv4: true,
  ipv6: false,
  maxAttempts: 10,
  maxConnectionAttempts: 10,
  maxTimeout: 10,
  retryHigh: 30_000,
  retryLow: 1000,
};

const DEFAULT_LISTEN_CLIENT_OPTS = {
  autoConnect: true,
  maxAttempts: 10,
  maxConnectionAttempts: 10,
  maxLimit: 10_000,
  waitAck: true,
};

type ValidatedClientKeys = "connectionTimeout" | "host";

type ValidatedClientListenerKeys =
  | "autoConnect"
  | "maxAttempts"
  | "maxConnectionAttempts"
  | "port";

interface ValidatedClientListenerOptions extends Pick<
  Required<ClientListenerOptions>,
  ValidatedClientListenerKeys
> {
  autoConnect: boolean;
  encoding: BufferEncoding;
  extendMaxLimit: boolean;
  maxAttempts: number;
  maxConnectionAttempts: number;
  maxLimit: number;
  notifyOnLimitExceeded: boolean;
  port: number;
  retryHigh: number;
  retryLow: number;
  waitAck: boolean;
}

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

/** @internal */
export function normalizeClientListenerOptions(
  client: ClientOptions,
  raw?: ClientListenerOptions,
): ValidatedClientListenerOptions {
  const properties: any = { ...DEFAULT_LISTEN_CLIENT_OPTS, ...raw };

  if (properties.port === undefined) {
    throw new HL7FatalError("port is not defined.");
  }

  if (typeof properties.port !== "number") {
    throw new HL7FatalError("port is not valid number.");
  }

  if (properties.retryHigh === undefined) {
    properties.retryHigh = client.retryHigh;
  }

  if (properties.retryLow === undefined) {
    properties.retryLow = client.retryLow;
  }

  if (
    properties.enqueueMessage !== undefined &&
    properties.flushQueue === undefined
  ) {
    throw new HL7FatalError("flushQueue is not set.");
  }

  if (
    properties.enqueueMessage === undefined &&
    properties.flushQueue !== undefined
  ) {
    throw new HL7FatalError("enqueueMessage is not set.");
  }

  assertNumber(properties, "maxLimit", 1);
  assertNumber(properties, "maxAttempts", 1, 50);
  assertNumber(properties, "maxConnectionAttempts", 1, 50);
  assertNumber(properties, "port", 1, 65_353);

  return properties;
}

/** @internal */
export function normalizeClientOptions(
  raw?: ClientOptions,
): ValidatedClientOptions {
  const properties: any = { ...DEFAULT_CLIENT_OPTS, ...raw };

  // Backward-compatible semantics: passing only one of `ipv4` / `ipv6`
  // explicitly is treated as "that family only". Pass both `true` (or neither)
  // to opt into dual-stack with fallback.
  const rawIpv4 = raw && Object.prototype.hasOwnProperty.call(raw, "ipv4");
  const rawIpv6 = raw && Object.prototype.hasOwnProperty.call(raw, "ipv6");
  if (rawIpv4 && raw?.ipv4 === true && !rawIpv6) {
    properties.ipv6 = false;
  }
  if (rawIpv6 && raw?.ipv6 === true && !rawIpv4) {
    properties.ipv4 = false;
  }

  if (properties.host === undefined || properties.host.length <= 0) {
    throw new HL7FatalError(
      "host is not defined or the length is less than 0.",
    );
  }

  if (typeof properties.host !== "string") {
    throw new HL7FatalError("host is not valid string.");
  }

  if (properties.ipv4 === false && properties.ipv6 === false) {
    throw new HL7FatalError(
      "ipv4 and ipv6 cannot both be disabled — at least one address family must be enabled.",
    );
  }

  // Detect whether host is an IP literal or an FQDN. Literals are validated
  // against the explicitly requested family; FQDNs defer family selection to
  // DNS at connect time.
  const literalFamily = detectIPFamily(properties.host);
  const looksLikeIPv4 = /^[0-9.]+$/.test(properties.host);
  const looksLikeIPv6 = properties.host.includes(":");

  if (properties.ipv4 === true && properties.ipv6 === false) {
    if (looksLikeIPv4 && validIPv4(properties.host) === false) {
      throw new HL7FatalError("host is not a valid IPv4 address.");
    }
    if (literalFamily === 6) {
      throw new HL7FatalError("host is not a valid IPv4 address.");
    }
    properties.family = 4;
  } else if (properties.ipv4 === false && properties.ipv6 === true) {
    if (looksLikeIPv6 && validIPv6(properties.host) === false) {
      throw new HL7FatalError("host is not a valid IPv6 address.");
    }
    if (literalFamily === 4) {
      throw new HL7FatalError("host is not a valid IPv6 address.");
    }
    properties.family = 6;
  } else {
    // dual-stack: family is resolved at connect time (0 = unspecified)
    properties.family = literalFamily;
  }

  if (properties.tls === true) {
    properties.tls = {};
  }

  assertNumber(properties, "connectionTimeout", 0, 60_000);
  assertNumber(properties, "maxTimeout", 1, 50);
  assertNumber(properties, "autoSelectFamilyAttemptTimeout", 10, 60_000);

  return properties;
}
