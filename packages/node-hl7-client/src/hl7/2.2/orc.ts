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
import { HL7_2_1_ORC } from "@/hl7/2.1/orc";

/** HL7 2.2 ORC - extends 2.1 with fields 15-20 */
export interface HL7_2_2_ORC extends HL7_2_1_ORC {
  /** ORC.15 - Order Effective Date/Time */
  orc_15?: Date | string;
  /** ORC.16 - Order Control Code Reason (max 200) */
  orc_16?: string;
  /** ORC.17 - Entering Organization (max 60) */
  orc_17?: string;
  /** ORC.18 - Entering Device (max 60) */
  orc_18?: string;
  /** ORC.19 - Action By (max 80) */
  orc_19?: string;
  /** ORC.20 - Advanced Beneficiary Notice Code (max 40) */
  orc_20?: string;
}
