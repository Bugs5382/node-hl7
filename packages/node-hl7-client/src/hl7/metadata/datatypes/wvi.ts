/**
 * WVI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/WVI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`wvi_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_WVI {
  /** WVI.1 - Channel Number */
  wvi_1?: string;
  channelNumber?: string;
  /** WVI.2 - Channel Name */
  wvi_2?: string;
  channelName?: string;
}
