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
import { HL7_2_2_OBR } from "@/hl7/2.2/obr";

/** HL7 2.3 OBR - extends 2.2 with fields 36-43 */
export interface HL7_2_3_OBR extends HL7_2_2_OBR {
  /** OBR.36 - Scheduled Date/Time */
  obr_36?: Date | string;
  /** OBR.37 - Number of Sample Containers */
  obr_37?: string;
  /** OBR.38 - Transport Logistics of Collected Sample */
  obr_38?: string;
  /** OBR.39 - Collector's Comment */
  obr_39?: string;
  /** OBR.40 - Transport Arrangement Responsibility */
  obr_40?: string;
  /** OBR.41 - Transport Arranged */
  obr_41?: "A" | "N" | "W";
  /** OBR.42 - Escort Required */
  obr_42?: "N" | "O" | "R";
  /** OBR.43 - Planned Patient Transport Comment */
  obr_43?: string;
}
