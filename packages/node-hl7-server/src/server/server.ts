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
import EventEmitter from "node:events";

import {
  ListenerOptions,
  normalizeServerOptions,
  ServerOptions,
} from "@/utils/normalize";

import { Inbound, InboundHandler } from "./inbound";

/**
 * Server Class
 * @remarks Start Server listening on a network address.
 * {@link ServerOptions} Link to the options that can be passed into props.
 * @since 1.0.0
 */
export class Server extends EventEmitter {
  /** @internal */
  _opt: ReturnType<typeof normalizeServerOptions>;

  /**
   * @since 1.0.0
   * @param props {@link ServerOptions}
   * @example
   *
   * Non-TLS:
   * ```
   * const server = new Server()
   * ```
   *
   * TLS:
   * ```
   * const server = new Server(
   *   {
   *     tls:
   *       {
   *         key: fs.readFileSync(path.join('certs/', 'server-key.pem')), // where your certs are
   *         cert: fs.readFileSync(path.join('certs/', 'server-crt.pem')), // where your certs are
   *         rejectUnauthorized: false
   *       }
   *   })
   *   ```
   *
   */
  constructor(properties?: ServerOptions) {
    super();
    this._opt = normalizeServerOptions(properties);
  }

  /** This creates an instance of a HL7 server.
   * @remarks You would specify your port and what it will do when it gets a message.
   * @since 1.0.0
   * @example
   *```
   * const server = new Server()
   *
   * const IB = server.createInbound({port: 3000}, async (req, res) => {
   *   const messageReq = req.getMessage()
   *   const messageRes = res.getAckMessage()
   *   // do your code here
   * })
   *```
   *
   * */
  createInbound(
    properties: ListenerOptions,
    callback: InboundHandler,
  ): Inbound {
    return new Inbound(this, properties, callback);
  }
}
