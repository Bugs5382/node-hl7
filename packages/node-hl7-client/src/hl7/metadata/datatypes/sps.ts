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
 * SPS — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/SPS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`sps_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_SPS {
  additives?: string;
  bodySite?: string;
  collectionModifierMethodCode?: string;
  freetext?: string;
  siteModifier?: string;
  specimenRole?: string;
  specimenSourceNameOrCode?: string;
  /** SPS.1 - Specimen Source Name Or Code */
  sps_1?: string;
  /** SPS.2 - Additives */
  sps_2?: string;
  /** SPS.3 - Freetext */
  sps_3?: string;
  /** SPS.4 - Body Site */
  sps_4?: string;
  /** SPS.5 - Site Modifier */
  sps_5?: string;
  /** SPS.6 - Collection Modifier Method Code */
  sps_6?: string;
  /** SPS.7 - Specimen Role */
  sps_7?: string;
}
