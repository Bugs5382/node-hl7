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
 * XON — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XON)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xon_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XON {
  assigningAuthority?: string;
  assigningFacility?: string;
  checkDigit?: string;
  checkDigitScheme?: string;
  identifierTypeCode?: string;
  idNumber?: string;
  nameRepresentationCode?: string;
  organizationIdentifier?: string;
  organizationName?: string;
  organizationNameTypeCode?: string;
  /** XON.1 - Organization Name */
  xon_1?: string;
  /** XON.10 - Organization Identifier */
  xon_10?: string;
  /** XON.2 - Organization Name Type Code */
  xon_2?: string;
  /** XON.3 - Id Number */
  xon_3?: string;
  /** XON.4 - Check Digit */
  xon_4?: string;
  /** XON.5 - Check Digit Scheme */
  xon_5?: string;
  /** XON.6 - Assigning Authority */
  xon_6?: string;
  /** XON.7 - Identifier Type Code */
  xon_7?: string;
  /** XON.8 - Assigning Facility */
  xon_8?: string;
  /** XON.9 - Name Representation Code */
  xon_9?: string;
}
