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
import { TABLE_0119 } from "@/hl7/tables/0119";
import { TABLE_0121 } from "@/hl7/tables/0121";

/** HL7 ORC - Common Order */
export interface HL7_ORC {
  callBackPhoneNumber?: string;
  enteredBy?: string;
  fillerOrderNumber?: string;
  /** ORC.1 - Order Control */
  orc_1: Table0119Value;
  /** ORC.10 - Entered By */
  orc_10?: string;
  /** ORC.11 - Verified By */
  orc_11?: string;
  /** ORC.12 - Ordering Provider */
  orc_12?: string;
  /** ORC.13 - Enterer's Location */
  orc_13?: string;
  /** ORC.14 - Call Back Phone Number */
  orc_14?: string;
  /** ORC.2 - Placer Order Number */
  orc_2?: string;
  /** ORC.3 - Filler Order Number */
  orc_3?: string;
  /** ORC.4 - Placer Group Number */
  orc_4?: string;
  /** ORC.5 - Order Status */
  orc_5?: string;
  /** ORC.6 - Response Flag */
  orc_6?: Table0121Value;
  /** ORC.7 - Quantity/Timing */
  orc_7?: string;
  /** ORC.8 - Parent */
  orc_8?: string;
  /** ORC.9 - Date/Time of Transaction */
  orc_9?: Date | string;
  orderControl?: Table0119Value;
  orderingProvider?: string;
  orderStatus?: string;
  placerOrderNumber?: string;
  responseFlag?: Table0121Value;
  transactionDateTime?: Date | string;
  verifiedBy?: string;
}
export type Table0119Value = (typeof TABLE_0119)[number];

export type Table0121Value = (typeof TABLE_0121)[number];
