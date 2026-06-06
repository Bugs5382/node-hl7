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
import { TABLE_0206 } from "@/hl7/tables/0206";

/** HL7 2.3 ROL - Role */
export interface HL7_2_3_ROL {
  /** ROL.1 - Role Instance ID */
  rol_1?: string;
  /** ROL.2 - Action Code (required) */
  rol_2: (typeof TABLE_0206)[number];
  /** ROL.3 - Role-ROL (required) */
  rol_3: string;
  /** ROL.4 - Role Person (required) */
  rol_4: string;
  /** ROL.5 - Role Begin Date/Time */
  rol_5?: Date | string;
  /** ROL.6 - Role End Date/Time */
  rol_6?: Date | string;
  /** ROL.7 - Role Duration */
  rol_7?: string;
  /** ROL.8 - Role Action Reason */
  rol_8?: string;
}
