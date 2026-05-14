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
 * CSU — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CSU)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`csu_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CSU {
  alternateUnitOfMeasureCodingSystem?: string;
  alternateUnitOfMeasureCodingSystemOid?: string;
  alternateUnitOfMeasureCodingSystemOid21?: string;
  alternateUnitOfMeasureCodingSystemVersionId?: string;
  alternateUnitOfMeasureDescription?: string;
  alternateUnitOfMeasureIdentifier?: string;
  alternateUnitOfMeasureValueSetOid?: string;
  alternateUnitOfMeasureValueSetOid22?: string;
  alternateUnitOfMeasureValueSetVersionId?: string;
  alternateUnitOfMeasureValueSetVersionId23?: string;
  channelSensitivity?: string;
  /** CSU.1 - Channel Sensitivity */
  csu_1?: string;
  /** CSU.10 - Original Text */
  csu_10?: string;
  /** CSU.11 - Second Alternate Unit Of Measure Identifier */
  csu_11?: string;
  /** CSU.12 - Second Alternate Unit Of Measure Text */
  csu_12?: string;
  /** CSU.13 - Name Of Second Alternate Unit Of Measure Coding Sy */
  csu_13?: string;
  /** CSU.14 - Second Alternate Unit Of Measure Coding System Ver */
  csu_14?: string;
  /** CSU.15 - Unit Of Measure Coding System Oid */
  csu_15?: string;
  /** CSU.16 - Unit Of Measure Value Set Oid */
  csu_16?: string;
  /** CSU.17 - Unit Of Measure Value Set Version Id */
  csu_17?: string;
  /** CSU.18 - Alternate Unit Of Measure Coding System Oid */
  csu_18?: string;
  /** CSU.19 - Alternate Unit Of Measure Value Set Oid */
  csu_19?: string;
  /** CSU.2 - Unit Of Measure Identifier */
  csu_2?: string;
  /** CSU.20 - Alternate Unit Of Measure Value Set Version Id */
  csu_20?: string;
  /** CSU.21 - Alternate Unit Of Measure Coding System Oid */
  csu_21?: string;
  /** CSU.22 - Alternate Unit Of Measure Value Set Oid */
  csu_22?: string;
  /** CSU.23 - Alternate Unit Of Measure Value Set Version Id */
  csu_23?: string;
  /** CSU.3 - Unit Of Measure Description */
  csu_3?: string;
  /** CSU.4 - Unit Of Measure Coding System */
  csu_4?: string;
  /** CSU.5 - Alternate Unit Of Measure Identifier */
  csu_5?: string;
  /** CSU.6 - Alternate Unit Of Measure Description */
  csu_6?: string;
  /** CSU.7 - Alternate Unit Of Measure Coding System */
  csu_7?: string;
  /** CSU.8 - Unit Of Measure Coding System Version Id */
  csu_8?: string;
  /** CSU.9 - Alternate Unit Of Measure Coding System Version Id */
  csu_9?: string;
  nameOfSecondAlternateUnitOfMeasureCodingSy?: string;
  originalText?: string;
  secondAlternateUnitOfMeasureCodingSystemVer?: string;
  secondAlternateUnitOfMeasureIdentifier?: string;
  secondAlternateUnitOfMeasureText?: string;
  unitOfMeasureCodingSystem?: string;
  unitOfMeasureCodingSystemOid?: string;
  unitOfMeasureCodingSystemVersionId?: string;
  unitOfMeasureDescription?: string;
  unitOfMeasureIdentifier?: string;
  unitOfMeasureValueSetOid?: string;
  unitOfMeasureValueSetVersionId?: string;
}
