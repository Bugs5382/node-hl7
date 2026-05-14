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
 * CN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CN {
  assigningAuthority?: string;
  /** CN.1 - ID Number */
  cn_1?: string;
  /** CN.2 - Family Name */
  cn_2?: string;
  /** CN.3 - Given Name */
  cn_3?: string;
  /** CN.4 - Middle Initial Or Name */
  cn_4?: string;
  /** CN.5 - Suffix */
  cn_5?: string;
  /** CN.6 - Prefix */
  cn_6?: string;
  /** CN.7 - Degree */
  cn_7?: string;
  /** CN.8 - Source Table */
  cn_8?: string;
  /** CN.9 - Assigning Authority */
  cn_9?: string;
  degree?: string;
  familyName?: string;
  givenName?: string;
  idNumber?: string;
  middleInitialOrName?: string;
  prefix?: string;
  sourceTable?: string;
  suffix?: string;
}
