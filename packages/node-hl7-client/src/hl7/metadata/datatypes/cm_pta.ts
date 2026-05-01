/**
 * CM_PTA — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PTA)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pta_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PTA {
  amount?: string;
  amountClass?: string;
  /** CM_PTA.1 - Policy Type */
  cm_pta_1?: string;
  /** CM_PTA.2 - Amount Class */
  cm_pta_2?: string;
  /** CM_PTA.3 - Amount */
  cm_pta_3?: string;
  policyType?: string;
}
