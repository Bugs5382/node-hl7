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
/** HL7 2.3 AIS - Appointment Information - Service */
export interface HL7_2_3_AIS {
  /** AIS.1 - Set ID (required) */
  ais_1: number | string;
  /** AIS.10 - Filler Status Code */
  ais_10?: string;
  /** AIS.2 - Segment Action Code */
  ais_2?: "A" | "D" | "U";
  /** AIS.3 - Universal Service Identifier (required) */
  ais_3: string;
  /** AIS.4 - Start Date/Time */
  ais_4?: Date | string;
  /** AIS.5 - Start Date/Time Offset */
  ais_5?: string;
  /** AIS.6 - Start Date/Time Offset Units */
  ais_6?: string;
  /** AIS.7 - Duration */
  ais_7?: string;
  /** AIS.8 - Duration Units */
  ais_8?: string;
  /** AIS.9 - Allow Substitution Code */
  ais_9?: string;
}
