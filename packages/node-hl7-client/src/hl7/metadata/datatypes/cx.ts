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
 * CX — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CX)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cx_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CX {
  assigningAgencyOrDepartment?: string;
  assigningAuthority?: string;
  assigningFacility?: string;
  assigningJurisdiction?: string;
  checkDigitScheme?: string;
  /** CX.1 - Id Number */
  cx_1?: string;
  /** CX.10 - Assigning Agency Or Department */
  cx_10?: string;
  /** CX.11 - Security Check */
  cx_11?: string;
  /** CX.12 - Security Check Scheme */
  cx_12?: string;
  /** CX.2 - Identifier Check Digit */
  cx_2?: string;
  /** CX.3 - Check Digit Scheme */
  cx_3?: string;
  /** CX.4 - Assigning Authority */
  cx_4?: string;
  /** CX.5 - Identifier Type Code */
  cx_5?: string;
  /** CX.6 - Assigning Facility */
  cx_6?: string;
  /** CX.7 - Effective Date */
  cx_7?: string;
  /** CX.8 - Expiration Date */
  cx_8?: string;
  /** CX.9 - Assigning Jurisdiction */
  cx_9?: string;
  effectiveDate?: string;
  expirationDate?: string;
  identifierCheckDigit?: string;
  identifierTypeCode?: string;
  idNumber?: string;
  securityCheck?: string;
  securityCheckScheme?: string;
}
