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
import { TABLE_0127 } from "@/hl7/tables/0127";
import { TABLE_0128 } from "@/hl7/tables/0128";
import { TABLE_0136 } from "@/hl7/tables/0136";

/** HL7 2.2 AL1 - Patient Allergy Information */
export interface HL7_2_2_AL1 {
  /** AL1.1 - Set ID (required) */
  al1_1: number | string;
  /** AL1.2 - Allergy Type */
  al1_2?: Table0127Value;
  /** AL1.3 - Allergy Code/Mnemonic/Description (required) */
  al1_3: string;
  /** AL1.4 - Allergy Severity */
  al1_4?: Table0128Value;
  /** AL1.5 - Allergy Reaction */
  al1_5?: string;
  /** AL1.6 - Identification Date */
  al1_6?: Date | string;
}
export type Table0127Value = (typeof TABLE_0127)[number];
export type Table0128Value = (typeof TABLE_0128)[number];

export type Table0136Value = (typeof TABLE_0136)[number];
