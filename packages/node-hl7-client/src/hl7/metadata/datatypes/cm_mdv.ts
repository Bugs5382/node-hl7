/**
 * CM_MDV — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_MDV)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_mdv_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_MDV {
  /** CM_MDV.1 - Minimum Value */
  cm_mdv_1?: string;
  /** CM_MDV.2 - Maximum Value */
  cm_mdv_2?: string;
  maximumValue?: string;
  minimumValue?: string;
}
