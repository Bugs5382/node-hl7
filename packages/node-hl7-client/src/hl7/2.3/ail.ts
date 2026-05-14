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
/** HL7 2.3 AIL - Appointment Information - Location Resource */
export interface HL7_2_3_AIL {
  /** AIL.1 - Set ID (required) */
  ail_1: number | string;
  /** AIL.10 - Duration Units */
  ail_10?: string;
  /** AIL.11 - Allow Substitution Code */
  ail_11?: string;
  /** AIL.12 - Filler Status Code */
  ail_12?: string;
  /** AIL.2 - Segment Action Code */
  ail_2?: "A" | "D" | "U";
  /** AIL.3 - Location Resource ID */
  ail_3?: string;
  /** AIL.4 - Location Type */
  ail_4?: string;
  /** AIL.5 - Location Group */
  ail_5?: string;
  /** AIL.6 - Start Date/Time */
  ail_6?: Date | string;
  /** AIL.7 - Start Date/Time Offset */
  ail_7?: string;
  /** AIL.8 - Start Date/Time Offset Units */
  ail_8?: string;
  /** AIL.9 - Duration */
  ail_9?: string;
}
