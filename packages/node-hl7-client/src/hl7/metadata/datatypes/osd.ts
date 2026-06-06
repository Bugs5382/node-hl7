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
 * OSD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/OSD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`osd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_OSD {
  fillerOrderNumberEntityIdentifier?: string;
  fillerOrderNumberNamespaceId?: string;
  fillerOrderNumberUniversalId?: string;
  fillerOrderNumberUniversalIdType?: string;
  maximumNumberOfRepeats?: string;
  /** OSD.1 - Sequence/results Flag */
  osd_1?: string;
  /** OSD.10 - Filler Order Number: Universal ID */
  osd_10?: string;
  /** OSD.11 - Filler Order Number: Universal ID Type */
  osd_11?: string;
  /** OSD.2 - Placer Order Number: Entity Identifier */
  osd_2?: string;
  /** OSD.3 - Placer Order Number: Namespace ID */
  osd_3?: string;
  /** OSD.4 - Filler Order Number: Entity Identifier */
  osd_4?: string;
  /** OSD.5 - Filler Order Number: Namespace ID */
  osd_5?: string;
  /** OSD.6 - Sequence Condition Value */
  osd_6?: string;
  /** OSD.7 - Maximum Number Of Repeats */
  osd_7?: string;
  /** OSD.8 - Placer Order Number: Universal ID */
  osd_8?: string;
  /** OSD.9 - Placer Order Number; Universal ID Type */
  osd_9?: string;
  placerOrderNumberEntityIdentifier?: string;
  placerOrderNumberNamespaceId?: string;
  placerOrderNumberUniversalId?: string;
  placerOrderNumberUniversalIdType?: string;
  sequenceConditionValue?: string;
  sequenceResultsFlag?: string;
}
