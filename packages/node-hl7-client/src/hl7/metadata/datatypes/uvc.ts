/**
 * UVC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/UVC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`uvc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_UVC {
  nonMonetaryValueAmountQuantity?: string;
  nonMonetaryValueAmountUnits?: string;
  /** UVC.1 - Value Code */
  uvc_1?: string;
  /** UVC.2 - Value Amount */
  uvc_2?: string;
  /** UVC.3 - Non-monetary Value Amount / Quantity */
  uvc_3?: string;
  /** UVC.4 - Non-monetary Value Amount / Units */
  uvc_4?: string;
  valueAmount?: string;
  valueCode?: string;
}
