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
 * LA1 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/LA1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`la1_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_LA1 {
  address?: string;
  bed?: string;
  building?: string;
  facility?: string;
  floor?: string;
  /** LA1.1 - Point Of Care */
  la1_1?: string;
  /** LA1.2 - Room */
  la1_2?: string;
  /** LA1.3 - Bed */
  la1_3?: string;
  /** LA1.4 - Facility */
  la1_4?: string;
  /** LA1.5 - Location Status */
  la1_5?: string;
  /** LA1.6 - Person Location Type */
  la1_6?: string;
  /** LA1.7 - Building */
  la1_7?: string;
  /** LA1.8 - Floor */
  la1_8?: string;
  /** LA1.9 - Address */
  la1_9?: string;
  locationStatus?: string;
  personLocationType?: string;
  pointOfCare?: string;
  room?: string;
}
