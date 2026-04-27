/**
 * CM_DLT — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_DLT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_dlt_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_DLT {
  /** CM_DLT.1 - Range */
  cm_dlt_1?: string;
  range?: string;
  /** CM_DLT.2 - Numeric Threshold */
  cm_dlt_2?: string;
  numericThreshold?: string;
  /** CM_DLT.3 - Change */
  cm_dlt_3?: string;
  change?: string;
  /** CM_DLT.4 - Length Of Time-days */
  cm_dlt_4?: string;
  lengthOfTimeDays?: string;
}
