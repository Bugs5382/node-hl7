/**
 * CM_MOC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_MOC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_moc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_MOC {
  /** CM_MOC.1 - Dollar Amount */
  cm_moc_1?: string;
  dollarAmount?: string;
  /** CM_MOC.2 - Charge Code */
  cm_moc_2?: string;
  chargeCode?: string;
}
