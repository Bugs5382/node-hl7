/**
 * CM_DTN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_DTN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_dtn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_DTN {
  /** CM_DTN.1 - Day Type */
  cm_dtn_1?: string;
  dayType?: string;
  /** CM_DTN.2 - Number Of Days */
  cm_dtn_2?: string;
  numberOfDays?: string;
}
