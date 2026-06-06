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
/** HL7 2.3 AIG - Appointment Information - General Resource */
export interface HL7_2_3_AIG {
  /** AIG.1 - Set ID (required) */
  aig_1: number | string;
  /** AIG.10 - Start Date/Time Offset Units */
  aig_10?: string;
  /** AIG.11 - Duration */
  aig_11?: string;
  /** AIG.12 - Duration Units */
  aig_12?: string;
  /** AIG.13 - Allow Substitution Code */
  aig_13?: string;
  /** AIG.14 - Filler Status Code */
  aig_14?: string;
  /** AIG.2 - Segment Action Code */
  aig_2?: "A" | "D" | "U";
  /** AIG.3 - Resource ID */
  aig_3?: string;
  /** AIG.4 - Resource Type (required) */
  aig_4: string;
  /** AIG.5 - Resource Group */
  aig_5?: string;
  /** AIG.6 - Resource Quantity */
  aig_6?: string;
  /** AIG.7 - Resource Quantity Units */
  aig_7?: string;
  /** AIG.8 - Start Date/Time */
  aig_8?: Date | string;
  /** AIG.9 - Start Date/Time Offset */
  aig_9?: string;
}
