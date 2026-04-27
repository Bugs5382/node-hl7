/**
 * CM_POSITION — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_POSITION)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_position_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_POSITION {
  /** CM_POSITION.1 - Hall */
  cm_position_1?: string;
  hall?: string;
  /** CM_POSITION.2 - Table */
  cm_position_2?: string;
  table?: string;
  /** CM_POSITION.3 - Chair */
  cm_position_3?: string;
  chair?: string;
}
