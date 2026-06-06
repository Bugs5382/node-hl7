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
import net from "node:net";

/**
 * Valid IPv4 Checker
 * @remarks Backed by Node's `net.isIPv4` for full RFC 791 coverage.
 * @since 1.0.0
 * @param ip
 */
export const validIPv4 = (ip: string): boolean => {
  if (typeof ip !== "string" || ip.length === 0) {
    return false;
  }
  return net.isIPv4(ip);
};

/**
 * Valid IPv6 Checker
 * @remarks Backed by Node's `net.isIPv6`. Accepts the full form
 * (`2001:0db8:85a3:0000:0000:8a2e:0370:7334`), shorthand notation
 * (`::1`, `fe80::1`, `2001:db8::1`), and IPv4-mapped IPv6 addresses
 * (`::ffff:192.168.1.1`). Bracketed forms (`[::1]`) and zone-id suffixes
 * (`fe80::1%eth0`) are stripped before validation.
 * @since 1.0.0
 * @param ip
 */
export const validIPv6 = (ip: string): boolean => {
  if (typeof ip !== "string" || ip.length === 0) {
    return false;
  }
  let candidate = ip.trim();
  if (candidate.startsWith("[") && candidate.endsWith("]")) {
    candidate = candidate.slice(1, -1);
  }
  const zoneIndex = candidate.indexOf("%");
  if (zoneIndex !== -1) {
    candidate = candidate.slice(0, zoneIndex);
  }
  return net.isIPv6(candidate);
};

/**
 * Detect IP family
 * @remarks Returns `4` for valid IPv4 literals, `6` for valid IPv6 literals,
 * or `0` for hostnames / FQDNs that should be resolved via DNS.
 * @since 4.0.0
 * @param value
 */
export const detectIPFamily = (value: string): 0 | 4 | 6 => {
  if (validIPv4(value)) return 4;
  if (validIPv6(value)) return 6;
  return 0;
};
