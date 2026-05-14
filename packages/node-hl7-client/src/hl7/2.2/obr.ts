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
import { HL7_2_1_OBR } from "@/hl7/2.1/obr";

/** HL7 2.2 OBR - extends 2.1 with fields 26-35 */
export interface HL7_2_2_OBR extends HL7_2_1_OBR {
  /** OBR.26 - Parent Result (max 60) */
  obr_26?: string;
  /** OBR.27 - Quantity/Timing (max 200) */
  obr_27?: string;
  /** OBR.28 - Result Copies To (max 150) */
  obr_28?: string;
  /** OBR.29 - Parent (max 150) */
  obr_29?: string;
  /** OBR.30 - Transportation Mode (max 20) */
  obr_30?: string;
  /** OBR.31 - Reason for Study (max 300) */
  obr_31?: string;
  /** OBR.32 - Principal Result Interpreter (max 60) */
  obr_32?: string;
  /** OBR.33 - Assistant Result Interpreter (max 60) */
  obr_33?: string;
  /** OBR.34 - Technician (max 60) */
  obr_34?: string;
  /** OBR.35 - Transcriptionist (max 60) */
  obr_35?: string;
}
