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
/** HL7 2.5 SPM - Specimen */
export interface HL7_2_5_SPM {
  /** SPM.1 - Set ID */
  spm_1?: number | string;
  /** SPM.10 - Specimen Collection Site */
  spm_10?: string;
  /** SPM.11 - Specimen Role */
  spm_11?: string;
  /** SPM.12 - Specimen Collection Amount */
  spm_12?: string;
  /** SPM.13 - Grouped Specimen Count */
  spm_13?: number | string;
  /** SPM.14 - Specimen Description */
  spm_14?: string;
  /** SPM.15 - Specimen Handling Code */
  spm_15?: string;
  /** SPM.16 - Specimen Risk Code */
  spm_16?: string;
  /** SPM.17 - Specimen Collection Date/Time */
  spm_17?: Date | string;
  /** SPM.18 - Specimen Received Date/Time */
  spm_18?: Date | string;
  /** SPM.19 - Specimen Expiration Date/Time */
  spm_19?: Date | string;
  /** SPM.2 - Specimen ID */
  spm_2?: string;
  /** SPM.20 - Specimen Availability */
  spm_20?: "N" | "Y";
  /** SPM.21 - Specimen Reject Reason */
  spm_21?: string;
  /** SPM.22 - Specimen Quality */
  spm_22?: string;
  /** SPM.23 - Specimen Appropriateness */
  spm_23?: string;
  /** SPM.24 - Specimen Condition */
  spm_24?: string;
  /** SPM.25 - Specimen Current Quantity */
  spm_25?: string;
  /** SPM.26 - Number of Specimen Containers */
  spm_26?: number | string;
  /** SPM.27 - Container Type */
  spm_27?: string;
  /** SPM.3 - Specimen Parent IDs */
  spm_3?: string;
  /** SPM.4 - Specimen Type (required) */
  spm_4: string;
  /** SPM.5 - Specimen Type Modifier */
  spm_5?: string;
  /** SPM.6 - Specimen Additives */
  spm_6?: string;
  /** SPM.7 - Specimen Collection Method */
  spm_7?: string;
  /** SPM.8 - Specimen Source Site */
  spm_8?: string;
  /** SPM.9 - Specimen Source Site Modifier */
  spm_9?: string;
}
