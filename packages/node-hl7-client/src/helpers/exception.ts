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
/** Parent Cass of HL7 Error
 * @since 1.0.0 */
export class HL7Error extends Error {
  code: number;
  /** @internal */
  constructor(code: number, message: string) {
    super(message);
    this.name = "HL7ClientError";
    this.code = code;
  }
}

/** Used to indicate a fatal failure of a connection.
 * @since 1.0.0 */
export class HL7FatalError extends HL7Error {
  /** @internal */
  name = "HL7FatalError";
  constructor(message: string) {
    super(500, message);
  }
}

/** Used to indicate a fatal failure of a connection.
 * @since 1.0.0 */
export class HL7ParserError extends HL7Error {
  /** @internal */
  name = "HL7ParserError";
  constructor(message: string) {
    super(404, message);
  }
}

/** Used to indicate a fatal failure of a validator.
 * @since 1.0.0 */
export class HL7ValidationError extends HL7Error {
  /** @internal */
  name = "HL7ValidationError";
  constructor(message: string) {
    super(404, message);
  }
}
