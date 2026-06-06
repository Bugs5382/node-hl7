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
 * RPT — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RPT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`rpt_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RPT {
  calendarAlignment?: string;
  event?: string;
  eventOffsetQuantity?: string;
  eventOffsetUnits?: string;
  generalTimingSpecification?: string;
  institutionSpecifiedTime?: string;
  periodQuantity?: string;
  periodUnits?: string;
  phaseRangeBeginValue?: string;
  phaseRangeEndValue?: string;
  repeatPatternCode?: string;
  /** RPT.1 - Repeat Pattern Code */
  rpt_1?: string;
  /** RPT.10 - Event Offset Units */
  rpt_10?: string;
  /** RPT.11 - General Timing Specification */
  rpt_11?: string;
  /** RPT.2 - Calendar Alignment */
  rpt_2?: string;
  /** RPT.3 - Phase Range Begin Value */
  rpt_3?: string;
  /** RPT.4 - Phase Range End Value */
  rpt_4?: string;
  /** RPT.5 - Period Quantity */
  rpt_5?: string;
  /** RPT.6 - Period Units */
  rpt_6?: string;
  /** RPT.7 - Institution Specified Time */
  rpt_7?: string;
  /** RPT.8 - Event */
  rpt_8?: string;
  /** RPT.9 - Event Offset Quantity */
  rpt_9?: string;
}
