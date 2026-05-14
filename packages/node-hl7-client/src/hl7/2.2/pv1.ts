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
import { HL7_2_1_PV1 } from "@/hl7/2.1/pv1";
import { TABLE_0326 } from "@/hl7/tables/0326";

/** HL7 2.2 PV1 - extends 2.1 with fields 45-52 */
export interface HL7_2_2_PV1 extends HL7_2_1_PV1 {
  /** PV1.45 - Discharge Date/Time */
  pv1_45?: Date | string;
  /** PV1.46 - Current Patient Balance */
  pv1_46?: string;
  /** PV1.47 - Total Charges */
  pv1_47?: string;
  /** PV1.48 - Total Adjustments */
  pv1_48?: string;
  /** PV1.49 - Total Payments */
  pv1_49?: string;
  /** PV1.50 - Alternate Visit ID (max 15) */
  pv1_50?: string;
  /** PV1.51 - Visit Indicator */
  pv1_51?: (typeof TABLE_0326)[number];
  /** PV1.52 - Other Healthcare Provider */
  pv1_52?: string;
}
