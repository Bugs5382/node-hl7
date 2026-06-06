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
import { HL7_2_3_ORC } from "@/hl7/2.3/orc";

/** HL7 2.4 ORC - extends 2.3 with fields 24-30 */
export interface HL7_2_4_ORC extends HL7_2_3_ORC {
  /** ORC.24 - Order Status Modifier */
  orc_24?: string;
  /** ORC.25 - Advanced Beneficiary Notice Override Reason */
  orc_25?: string;
  /** ORC.26 - Filler's Expected Availability Date/Time */
  orc_26?: Date | string;
  /** ORC.27 - Confidentiality Code */
  orc_27?: string;
  /** ORC.28 - Order Type */
  orc_28?: "I" | "O";
  /** ORC.29 - Enterer Authorization Mode */
  orc_29?: string;
  /** ORC.30 - Parent Universal Service Identifier */
  orc_30?: string;
}
