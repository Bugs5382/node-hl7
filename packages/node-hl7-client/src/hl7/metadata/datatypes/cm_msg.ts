/**
 * CM_MSG — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_MSG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_msg_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_MSG {
  /** CM_MSG.1 - Message Type */
  cm_msg_1?: string;
  messageType?: string;
  /** CM_MSG.2 - Trigger Event */
  cm_msg_2?: string;
  triggerEvent?: string;
}
