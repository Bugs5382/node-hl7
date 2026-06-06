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
 * CN_PHYSICIAN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CN_PHYSICIAN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cn_physician_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CN_PHYSICIAN {
  /** CN_PHYSICIAN.1 - Physician Id */
  cn_physician_1?: string;
  /** CN_PHYSICIAN.2 - Familiy Name */
  cn_physician_2?: string;
  /** CN_PHYSICIAN.3 - Given Name */
  cn_physician_3?: string;
  /** CN_PHYSICIAN.4 - Middle Initial Or Name */
  cn_physician_4?: string;
  /** CN_PHYSICIAN.5 - Suffix (e.g. Jr Or Iii) */
  cn_physician_5?: string;
  /** CN_PHYSICIAN.6 - Prefix (e.g. Dr) */
  cn_physician_6?: string;
  /** CN_PHYSICIAN.7 - Degree (e.g. Md) */
  cn_physician_7?: string;
  /** CN_PHYSICIAN.8 - Source Table Id */
  cn_physician_8?: string;
  degree?: string;
  familiyName?: string;
  givenName?: string;
  middleInitialOrName?: string;
  physicianId?: string;
  prefix?: string;
  sourceTableId?: string;
  suffix?: string;
}
