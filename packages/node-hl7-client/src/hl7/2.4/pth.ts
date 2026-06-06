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
/** HL7 2.4 PTH - Pathway */
export interface HL7_2_4_PTH {
  /** PTH.1 - Action Code (required) */
  pth_1: "AD" | "DE" | "LI" | "UN";
  /** PTH.2 - Pathway ID (required) */
  pth_2: string;
  /** PTH.3 - Pathway Instance ID (required) */
  pth_3: string;
  /** PTH.4 - Pathway Established Date/Time (required) */
  pth_4: Date | string;
  /** PTH.5 - Pathway Life Cycle Status */
  pth_5?: string;
  /** PTH.6 - Change Pathway Life Cycle Status Date/Time */
  pth_6?: Date | string;
  /** PTH.7 - Mood Code */
  pth_7?: string;
}
