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
