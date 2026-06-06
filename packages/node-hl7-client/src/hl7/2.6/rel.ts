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
/** HL7 2.6 REL - Clinical Relationship Segment */
export interface HL7_2_6_REL {
  /** REL.1 - Set ID */
  rel_1?: number | string;
  /** REL.10 - Asserting Organization */
  rel_10?: string;
  /** REL.11 - Assertor Address */
  rel_11?: string;
  /** REL.12 - Assertor Contact */
  rel_12?: string;
  /** REL.13 - Assertion Recorded Date/Time */
  rel_13?: Date | string;
  /** REL.14 - Assertion Expiration Date/Time */
  rel_14?: string;
  /** REL.2 - Relationship Type (required) */
  rel_2: string;
  /** REL.3 - This Relationship Instance Identifier (required) */
  rel_3: string;
  /** REL.4 - Source Information Instance Identifier (required) */
  rel_4: string;
  /** REL.5 - Target Information Instance Identifier (required) */
  rel_5: string;
  /** REL.6 - Assertion Date Range Begin */
  rel_6?: Date | string;
  /** REL.7 - Assertion Date Range End */
  rel_7?: Date | string;
  /** REL.8 - Asserting Entity Instance ID */
  rel_8?: "N" | "Y";
  /** REL.9 - Asserting Person */
  rel_9?: string;
}
