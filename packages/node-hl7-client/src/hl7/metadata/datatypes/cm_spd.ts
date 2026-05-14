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
 * CM_SPD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_SPD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_spd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_SPD {
  /** CM_SPD.1 - Specialty Name */
  cm_spd_1?: string;
  /** CM_SPD.2 - Governing Board */
  cm_spd_2?: string;
  /** CM_SPD.3 - Eligible Or Certified */
  cm_spd_3?: string;
  /** CM_SPD.4 - Date Of Certification */
  cm_spd_4?: string;
  dateOfCertification?: string;
  eligibleOrCertified?: string;
  governingBoard?: string;
  specialtyName?: string;
}
