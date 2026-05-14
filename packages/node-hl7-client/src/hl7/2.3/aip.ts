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
/** HL7 2.3 AIP - Appointment Information - Personnel Resource */
export interface HL7_2_3_AIP {
  /** AIP.1 - Set ID (required) */
  aip_1: number | string;
  /** AIP.10 - Duration Units */
  aip_10?: string;
  /** AIP.11 - Allow Substitution Code */
  aip_11?: string;
  /** AIP.12 - Filler Status Code */
  aip_12?: string;
  /** AIP.2 - Segment Action Code */
  aip_2?: "A" | "D" | "U";
  /** AIP.3 - Personnel Resource ID */
  aip_3?: string;
  /** AIP.4 - Resource Role (required) */
  aip_4: string;
  /** AIP.5 - Resource Group */
  aip_5?: string;
  /** AIP.6 - Start Date/Time */
  aip_6?: Date | string;
  /** AIP.7 - Start Date/Time Offset */
  aip_7?: string;
  /** AIP.8 - Start Date/Time Offset Units */
  aip_8?: string;
  /** AIP.9 - Duration */
  aip_9?: string;
}
