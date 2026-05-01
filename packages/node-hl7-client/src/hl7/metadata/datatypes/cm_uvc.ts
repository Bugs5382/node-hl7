/**
 * CM_UVC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_UVC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_uvc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_UVC {
  /** CM_UVC.1 - Value Code */
  cm_uvc_1?: string;
  /** CM_UVC.2 - Value Amount */
  cm_uvc_2?: string;
  valueAmount?: string;
  valueCode?: string;
}
