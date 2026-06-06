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
 * CWE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CWE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cwe_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CWE {
  alternateCodingSystemOid?: string;
  alternateCodingSystemVersionId?: string;
  alternateIdentifier?: string;
  alternateText?: string;
  alternateValueSetOid?: string;
  alternateValueSetVersionId?: string;
  codingSystemOid?: string;
  codingSystemVersionId?: string;
  /** CWE.1 - Identifier */
  cwe_1?: string;
  /** CWE.10 - Second Alternate Identifier */
  cwe_10?: string;
  /** CWE.11 - Second Alternate Text */
  cwe_11?: string;
  /** CWE.12 - Name Of Second Alternate Coding System */
  cwe_12?: string;
  /** CWE.13 - Second Alternate Coding System Version Id */
  cwe_13?: string;
  /** CWE.14 - Coding System Oid */
  cwe_14?: string;
  /** CWE.15 - Value Set Oid */
  cwe_15?: string;
  /** CWE.16 - Value Set Version Id */
  cwe_16?: string;
  /** CWE.17 - Alternate Coding System Oid */
  cwe_17?: string;
  /** CWE.18 - Alternate Value Set Oid */
  cwe_18?: string;
  /** CWE.19 - Alternate Value Set Version Id */
  cwe_19?: string;
  /** CWE.2 - Text */
  cwe_2?: string;
  /** CWE.20 - Second Alternate Coding System Oid */
  cwe_20?: string;
  /** CWE.21 - Second Alternate Value Set Oid */
  cwe_21?: string;
  /** CWE.22 - Second Alternate Value Set Version Id */
  cwe_22?: string;
  /** CWE.3 - Name Of Coding System */
  cwe_3?: string;
  /** CWE.4 - Alternate Identifier */
  cwe_4?: string;
  /** CWE.5 - Alternate Text */
  cwe_5?: string;
  /** CWE.6 - Name Of Alternate Coding System */
  cwe_6?: string;
  /** CWE.7 - Coding System Version Id */
  cwe_7?: string;
  /** CWE.8 - Alternate Coding System Version Id */
  cwe_8?: string;
  /** CWE.9 - Original Text */
  cwe_9?: string;
  identifier?: string;
  nameOfAlternateCodingSystem?: string;
  nameOfCodingSystem?: string;
  nameOfSecondAlternateCodingSystem?: string;
  originalText?: string;
  secondAlternateCodingSystemOid?: string;
  secondAlternateCodingSystemVersionId?: string;
  secondAlternateIdentifier?: string;
  secondAlternateText?: string;
  secondAlternateValueSetOid?: string;
  secondAlternateValueSetVersionId?: string;
  text?: string;
  valueSetOid?: string;
  valueSetVersionId?: string;
}
