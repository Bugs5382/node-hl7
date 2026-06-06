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
export interface HL7_NST {
  /** Statistics Available: "Y" or "N" */
  nst_1?: "N" | "Y";
  /** Checksum Errors Received */
  nst_10?: number | string;
  /** Length Errors Received */
  nst_11?: number | string;
  /** Other Errors Received */
  nst_12?: number | string;
  /** Connect Timeouts */
  nst_13?: number | string;
  /** Receive Timeouts */
  nst_14?: number | string;
  /** Application Control Level Errors */
  nst_15?: number | string;
  /** Source Identifier */
  nst_2?: string;
  /** Source Type */
  nst_3?: string;
  /** Statistics Start (date/time) */
  nst_4?: Date | string;
  /** Statistics End (date/time) */
  nst_5?: Date | string;
  /** Receive Character Count */
  nst_6?: number | string;
  /** Send Character Count */
  nst_7?: number | string;
  /** Messages Received */
  nst_8?: number | string;
  /** Messages Sent */
  nst_9?: number | string;
}
