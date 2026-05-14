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
 * CNN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CNN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cnn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CNN {
  assigningAuthorityNamespaceId?: string;
  assigningAuthorityUniversalId?: string;
  assigningAuthorityUniversalIdType?: string;
  /** CNN.1 - ID Number */
  cnn_1?: string;
  /** CNN.10 - Assigning Authority Universal ID */
  cnn_10?: string;
  /** CNN.11 - Assigning Authority Universal ID Type */
  cnn_11?: string;
  /** CNN.2 - Family Name */
  cnn_2?: string;
  /** CNN.3 - Given Name */
  cnn_3?: string;
  /** CNN.4 - Second And Further Given Names Or Initials Thereof */
  cnn_4?: string;
  /** CNN.5 - Suffix */
  cnn_5?: string;
  /** CNN.6 - Prefix */
  cnn_6?: string;
  /** CNN.7 - Degree */
  cnn_7?: string;
  /** CNN.8 - Source Table */
  cnn_8?: string;
  /** CNN.9 - Assigning Authority Namespace ID */
  cnn_9?: string;
  degree?: string;
  familyName?: string;
  givenName?: string;
  idNumber?: string;
  prefix?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  sourceTable?: string;
  suffix?: string;
}
