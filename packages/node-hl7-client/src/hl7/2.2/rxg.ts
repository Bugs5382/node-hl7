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
/** HL7 2.2 RXG - Pharmacy/Treatment Give */
export interface HL7_2_2_RXG {
  /** RXG.1 - Give Sub-ID Counter (required) */
  rxg_1: string;
  /** RXG.10 - Substitution Status */
  rxg_10?: string;
  /** RXG.11 - Dispense-to Location */
  rxg_11?: string;
  /** RXG.12 - Needs Human Review */
  rxg_12?: "N" | "Y";
  /** RXG.13 - Special Administration Instructions */
  rxg_13?: string;
  /** RXG.14 - Give Per (Time Unit) */
  rxg_14?: string;
  /** RXG.15 - Give Rate Amount */
  rxg_15?: string;
  /** RXG.16 - Give Rate Units */
  rxg_16?: string;
  /** RXG.2 - Dispense Sub-ID Counter */
  rxg_2?: string;
  /** RXG.3 - Quantity/Timing */
  rxg_3?: string;
  /** RXG.4 - Give Code (required) */
  rxg_4: string;
  /** RXG.5 - Give Amount - Minimum (required) */
  rxg_5: string;
  /** RXG.6 - Give Amount - Maximum */
  rxg_6?: string;
  /** RXG.7 - Give Units (required) */
  rxg_7: string;
  /** RXG.8 - Give Dosage Form */
  rxg_8?: string;
  /** RXG.9 - Administration Notes */
  rxg_9?: string;
}
