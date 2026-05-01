/**
 * CM_DDI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_DDI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_ddi_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_DDI {
  amount?: string;
  /** CM_DDI.1 - Delay Days */
  cm_ddi_1?: string;
  /** CM_DDI.2 - Amount */
  cm_ddi_2?: string;
  /** CM_DDI.3 - Number Of Days */
  cm_ddi_3?: string;
  delayDays?: string;
  numberOfDays?: string;
}
