/**
 * CM_PEN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PEN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pen_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PEN {
  /** CM_PEN.1 - Penalty Id */
  cm_pen_1?: string;
  penaltyId?: string;
  /** CM_PEN.2 - Penalty Amount */
  cm_pen_2?: string;
  penaltyAmount?: string;
}
