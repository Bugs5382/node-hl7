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
/** HL7 2.3 CSR - Clinical Study Registration */
export interface HL7_2_3_CSR {
  /** CSR.1 - Sponsor Study ID (required) */
  csr_1: string;
  /** CSR.10 - Patient Study Eligibility Status */
  csr_10?: string;
  /** CSR.11 - Study Randomization Date/Time */
  csr_11?: Date | string;
  /** CSR.12 - Randomized Study Arm */
  csr_12?: string;
  /** CSR.13 - Stratum for Study Randomization */
  csr_13?: string;
  /** CSR.14 - Patient Evaluability Status */
  csr_14?: string;
  /** CSR.15 - Date/Time Ended Study */
  csr_15?: Date | string;
  /** CSR.16 - Reason Ended Study */
  csr_16?: string;
  /** CSR.2 - Alternate Study ID */
  csr_2?: string;
  /** CSR.3 - Institution Registering the Patient */
  csr_3?: string;
  /** CSR.4 - Sponsor Patient ID (required) */
  csr_4: string;
  /** CSR.5 - Alternate Patient ID */
  csr_5?: string;
  /** CSR.6 - Date/Time of Patient Study Registration (required) */
  csr_6: Date | string;
  /** CSR.7 - Person Performing Study Registration */
  csr_7?: string;
  /** CSR.8 - Study Authorizing Provider (required) */
  csr_8: string;
  /** CSR.9 - Date/Time Patient Study Consent Signed */
  csr_9?: Date | string;
}
