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
 * XAD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XAD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xad_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XAD {
  addressee?: string;
  addressIdentifier?: string;
  addressRepresentationCode?: string;
  addressType?: string;
  addressUsage?: string;
  addressValidityRange?: string;
  badAddressIndicator?: string;
  censusTract?: string;
  city?: string;
  comment?: string;
  country?: string;
  countyParishCode?: string;
  effectiveDate?: string;
  expirationDate?: string;
  expirationReason?: string;
  otherDesignation?: string;
  otherGeographicDesignation?: string;
  preferenceOrder?: string;
  protectionCode?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  temporaryIndicator?: string;
  /** XAD.1 - Street Address */
  xad_1?: string;
  /** XAD.10 - Census Tract */
  xad_10?: string;
  /** XAD.11 - Address Representation Code */
  xad_11?: string;
  /** XAD.12 - Address Validity Range */
  xad_12?: string;
  /** XAD.13 - Effective Date */
  xad_13?: string;
  /** XAD.14 - Expiration Date */
  xad_14?: string;
  /** XAD.15 - Expiration Reason */
  xad_15?: string;
  /** XAD.16 - Temporary Indicator */
  xad_16?: string;
  /** XAD.17 - Bad Address Indicator */
  xad_17?: string;
  /** XAD.18 - Address Usage */
  xad_18?: string;
  /** XAD.19 - Addressee */
  xad_19?: string;
  /** XAD.2 - Other Designation */
  xad_2?: string;
  /** XAD.20 - Comment */
  xad_20?: string;
  /** XAD.21 - Preference Order */
  xad_21?: string;
  /** XAD.22 - Protection Code */
  xad_22?: string;
  /** XAD.23 - Address Identifier */
  xad_23?: string;
  /** XAD.3 - City */
  xad_3?: string;
  /** XAD.4 - State Or Province */
  xad_4?: string;
  /** XAD.5 - Zip Or Postal Code */
  xad_5?: string;
  /** XAD.6 - Country */
  xad_6?: string;
  /** XAD.7 - Address Type */
  xad_7?: string;
  /** XAD.8 - Other Geographic Designation */
  xad_8?: string;
  /** XAD.9 - County/Parish Code */
  xad_9?: string;
  zipOrPostalCode?: string;
}
