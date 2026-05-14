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
 * CM_PAT_ID_0192 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PAT_ID_0192)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pat_id_0192_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PAT_ID_0192 {
  checkDigit?: string;
  checkDigitScheme?: string;
  /** CM_PAT_ID_0192.1 - Patient Id */
  cm_pat_id_0192_1?: string;
  /** CM_PAT_ID_0192.2 - Check Digit */
  cm_pat_id_0192_2?: string;
  /** CM_PAT_ID_0192.3 - Check Digit Scheme */
  cm_pat_id_0192_3?: string;
  /** CM_PAT_ID_0192.4 - Facility Id */
  cm_pat_id_0192_4?: string;
  /** CM_PAT_ID_0192.5 - Type */
  cm_pat_id_0192_5?: string;
  facilityId?: string;
  patientId?: string;
  type?: string;
}
