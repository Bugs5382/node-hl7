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
/** HL7 2.4 DRG - Diagnosis Related Group */
export interface HL7_2_4_DRG {
  /** DRG.1 - Diagnostic Related Group */
  drg_1?: string;
  /** DRG.2 - DRG Assigned Date/Time */
  drg_2?: Date | string;
  /** DRG.3 - DRG Approval Indicator */
  drg_3?: "N" | "Y";
  /** DRG.4 - DRG Grouper Review Code */
  drg_4?: string;
  /** DRG.5 - Outlier Type */
  drg_5?: string;
  /** DRG.6 - Outlier Days */
  drg_6?: number | string;
  /** DRG.7 - Outlier Cost */
  drg_7?: string;
  /** DRG.8 - DRG Payor */
  drg_8?: string;
}
