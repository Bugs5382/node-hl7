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
 * PL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PL {
  assigningAuthorityForLocation?: string;
  bed?: string;
  building?: string;
  comprehensiveLocationIdentifier?: string;
  facility?: string;
  floor?: string;
  locationDescription?: string;
  locationStatus?: string;
  personLocationType?: string;
  /** PL.1 - Point Of Care */
  pl_1?: string;
  /** PL.10 - Comprehensive Location Identifier */
  pl_10?: string;
  /** PL.11 - Assigning Authority For Location */
  pl_11?: string;
  /** PL.2 - Room */
  pl_2?: string;
  /** PL.3 - Bed */
  pl_3?: string;
  /** PL.4 - Facility */
  pl_4?: string;
  /** PL.5 - Location Status */
  pl_5?: string;
  /** PL.6 - Person Location Type */
  pl_6?: string;
  /** PL.7 - Building */
  pl_7?: string;
  /** PL.8 - Floor */
  pl_8?: string;
  /** PL.9 - Location Description */
  pl_9?: string;
  pointOfCare?: string;
  room?: string;
}
