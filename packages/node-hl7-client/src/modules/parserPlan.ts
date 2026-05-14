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
/**
 * Parse Plan
 * @remarks Used to figure out the current HL7
 * message(s)/batch delimited used to encode this particular HL7 message
 * @since 1.0.0
 */
export class ParserPlan {
  /** @internal */
  separatorComponent: string;
  /** @internal */
  separatorEscape: string;
  /** @internal */
  separatorField: string;
  /** @internal */
  separatorRepetition: string;
  /** @internal */
  separatorSubComponent: string;

  /**
   * @since 1.0.0
   * @param data
   */
  constructor(data: string) {
    const seps = [...data];

    this.separatorField = seps[0];
    this.separatorRepetition = seps.length > 2 ? seps[2] : "~";
    this.separatorComponent = seps.length > 1 ? seps[1] : "^";
    this.separatorSubComponent = seps.length > 4 ? seps[4] : "&";
    this.separatorEscape = seps.length > 3 ? seps[3] : "\\";
  }
}
