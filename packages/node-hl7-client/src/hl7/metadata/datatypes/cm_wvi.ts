/**
 * CM_WVI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_WVI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_wvi_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_WVI {
  /** CM_WVI.1 - Channel Number */
  cm_wvi_1?: string;
  channelNumber?: string;
  /** CM_WVI.2 - Channel Name */
  cm_wvi_2?: string;
  channelName?: string;
}
