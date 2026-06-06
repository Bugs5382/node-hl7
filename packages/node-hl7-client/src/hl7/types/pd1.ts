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
/** HL7 PD1 - Patient Additional Demographic (added in HL7 2.3) */
export interface HL7_PD1 {
  duplicatePatient?: string;
  handicap?: string;
  livingArrangement?: string;
  livingDependency?: string;
  livingWillCode?: string;
  organDonorCode?: string;
  patientPrimaryCareProvider?: string;
  patientPrimaryFacility?: string;
  /** PD1.1 - Living Dependency */
  pd1_1?: string;
  /** PD1.10 - Duplicate Patient */
  pd1_10?: string;
  /** PD1.11 - Publicity Code */
  pd1_11?: string;
  /** PD1.12 - Protection Indicator */
  pd1_12?: string;
  /** PD1.2 - Living Arrangement */
  pd1_2?: string;
  /** PD1.3 - Patient Primary Facility */
  pd1_3?: string;
  /** PD1.4 - Patient Primary Care Provider */
  pd1_4?: string;
  /** PD1.5 - Student Indicator */
  pd1_5?: string;
  /** PD1.6 - Handicap */
  pd1_6?: string;
  /** PD1.7 - Living Will Code */
  pd1_7?: string;
  /** PD1.8 - Organ Donor Code */
  pd1_8?: string;
  /** PD1.9 - Separate Bill */
  pd1_9?: string;
  protectionIndicator?: string;
  publicityCode?: string;
  separateBill?: string;
  studentIndicator?: string;
}
