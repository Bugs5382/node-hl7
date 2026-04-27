/**
 * CM_VR — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_VR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_vr_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_VR {
  /** CM_VR.1 - First Data Code Value */
  cm_vr_1?: string;
  firstDataCodeValue?: string;
  /** CM_VR.2 - Last Data Code Calue */
  cm_vr_2?: string;
  lastDataCodeCalue?: string;
}
