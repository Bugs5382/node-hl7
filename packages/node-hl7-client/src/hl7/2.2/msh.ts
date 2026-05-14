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
/**
 * HL7 2.2 MSH Specification
 * @since 4.0.0
 */
export interface HL7_2_2_MSH {
  /** Message Control ID (max 20 chars)
   * @default Random string */
  msh_10?: string;
  /** Processing ID: P=Production, T=Test */
  msh_11?: "P" | "T";
  /** Sending Application */
  msh_3?: string;
  /** Sending Facility */
  msh_4?: string;
  /** Receiving Application */
  msh_5?: string;
  /** Receiving Facility */
  msh_6?: string;
  /** Message Date/Time */
  msh_7?: Date;
  /** Security */
  msh_8?: string;
  /** Message Code (e.g. "ADT") */
  msh_9_1: string;
  /** Trigger Event (e.g. "A01") */
  msh_9_2: string;
  receivingApplication?: string;
  receivingFacility?: string;
  sendingApplication?: string;
  sendingFacility?: string;
}
