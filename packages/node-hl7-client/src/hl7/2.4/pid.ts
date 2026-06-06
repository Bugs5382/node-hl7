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
import { HL7_2_3_PID } from "@/hl7/2.3/pid";

/** HL7 2.4 PID - extends 2.3 with fields 31-39 */
export interface HL7_2_4_PID extends HL7_2_3_PID {
  /** PID.31 - Identity Unknown Indicator */
  pid_31?: "N" | "Y";
  /** PID.32 - Identity Reliability Code */
  pid_32?: string;
  /** PID.33 - Last Update Date/Time */
  pid_33?: Date | string;
  /** PID.34 - Last Update Facility */
  pid_34?: string;
  /** PID.35 - Species Code */
  pid_35?: string;
  /** PID.36 - Breed Code */
  pid_36?: string;
  /** PID.37 - Strain */
  pid_37?: string;
  /** PID.38 - Production Class Code */
  pid_38?: string;
  /** PID.39 - Tribal Citizenship */
  pid_39?: string;
}
