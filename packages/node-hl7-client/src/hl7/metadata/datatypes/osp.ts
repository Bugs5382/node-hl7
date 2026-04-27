/**
 * OSP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/OSP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`osp_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_OSP {
  /** OSP.1 - Occurrence Span Code */
  osp_1?: string;
  occurrenceSpanCode?: string;
  /** OSP.2 - Occurrence Span Start Date */
  osp_2?: string;
  occurrenceSpanStartDate?: string;
  /** OSP.3 - Occurrence Span Stop Date */
  osp_3?: string;
  occurrenceSpanStopDate?: string;
}
