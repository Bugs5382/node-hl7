/**
 * CM_CCP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_CCP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_ccp_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_CCP {
  /** CM_CCP.1 - Sensitivity Correction Factor */
  cm_ccp_1?: string;
  sensitivityCorrectionFactor?: string;
  /** CM_CCP.2 - Baseline */
  cm_ccp_2?: string;
  baseline?: string;
  /** CM_CCP.3 - Time Skew */
  cm_ccp_3?: string;
  timeSkew?: string;
}
