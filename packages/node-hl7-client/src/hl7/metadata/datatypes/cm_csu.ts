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
 * CM_CSU — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_CSU)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_csu_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_CSU {
  /** CM_CSU.1 - Sensitivity */
  cm_csu_1?: string;
  /** CM_CSU.2 - Unit Identifier */
  cm_csu_2?: string;
  /** CM_CSU.3 - Unit Text */
  cm_csu_3?: string;
  /** CM_CSU.4 - Units Name Of Coding System */
  cm_csu_4?: string;
  /** CM_CSU.5 - Units Alternate Identifier */
  cm_csu_5?: string;
  /** CM_CSU.6 - Units Alternate Text */
  cm_csu_6?: string;
  /** CM_CSU.7 - Units Name Of Alternate Coding System */
  cm_csu_7?: string;
  sensitivity?: string;
  unitIdentifier?: string;
  unitsAlternateIdentifier?: string;
  unitsAlternateText?: string;
  unitsNameOfAlternateCodingSystem?: string;
  unitsNameOfCodingSystem?: string;
  unitText?: string;
}
