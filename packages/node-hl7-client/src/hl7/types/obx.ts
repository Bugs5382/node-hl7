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
import { TABLE_0078 } from "@/hl7/tables/0078";
import { TABLE_0085 } from "@/hl7/tables/0085";
import { TABLE_0125 } from "@/hl7/tables/0125";

/** HL7 OBX - Observation/Result */
export interface HL7_OBX {
  abnormalFlags?: Table0078Value;
  observationIdentifier?: string;
  observationResultStatus?: Table0085Value;
  observationSubId?: string;
  observationValue?: string;
  /** OBX.1 - Set ID */
  obx_1?: number | string;
  /** OBX.10 - Nature of Abnormal Test */
  obx_10?: string;
  /** OBX.11 - Observation Result Status */
  obx_11: Table0085Value;
  /** OBX.2 - Value Type */
  obx_2?: Table0125Value;
  /** OBX.3 - Observation Identifier */
  obx_3: string;
  /** OBX.4 - Observation Sub-ID */
  obx_4?: string;
  /** OBX.5 - Observation Value */
  obx_5?: string;
  /** OBX.6 - Units */
  obx_6?: string;
  /** OBX.7 - References Range */
  obx_7?: string;
  /** OBX.8 - Abnormal Flags */
  obx_8?: Table0078Value;
  /** OBX.9 - Probability */
  obx_9?: number | string;
  referencesRange?: string;
  units?: string;
  valueType?: Table0125Value;
}
export type Table0078Value = (typeof TABLE_0078)[number];
export type Table0085Value = (typeof TABLE_0085)[number];

export type Table0125Value = (typeof TABLE_0125)[number];
