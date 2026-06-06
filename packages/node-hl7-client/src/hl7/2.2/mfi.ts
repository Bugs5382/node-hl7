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
/** HL7 2.2 MFI - Master File Identification */
export interface HL7_2_2_MFI {
  /** MFI.1 - Master File Identifier (required, max 60) */
  mfi_1: string;
  /** MFI.2 - Master File Application Identifier (max 60) */
  mfi_2?: string;
  /** MFI.3 - File-Level Event Code (required) */
  mfi_3: "REP" | "UPD";
  /** MFI.4 - Entered Date/Time */
  mfi_4?: Date | string;
  /** MFI.5 - Effective Date/Time */
  mfi_5?: Date | string;
  /** MFI.6 - Response Level Code (required) */
  mfi_6: "AL" | "ER" | "NE" | "NR";
}
