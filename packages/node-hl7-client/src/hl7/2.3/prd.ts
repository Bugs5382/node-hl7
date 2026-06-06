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
/** HL7 2.3 PRD - Provider Data */
export interface HL7_2_3_PRD {
  /** PRD.1 - Provider Role (required) */
  prd_1: string;
  /** PRD.2 - Provider Name */
  prd_2?: string;
  /** PRD.3 - Provider Address */
  prd_3?: string;
  /** PRD.4 - Provider Location */
  prd_4?: string;
  /** PRD.5 - Provider Communication Information */
  prd_5?: string;
  /** PRD.6 - Preferred Method of Contact */
  prd_6?: string;
  /** PRD.7 - Provider Identifiers */
  prd_7?: string;
  /** PRD.8 - Effective Start Date of Provider Role */
  prd_8?: Date | string;
  /** PRD.9 - Effective End Date of Provider Role */
  prd_9?: Date | string;
}
