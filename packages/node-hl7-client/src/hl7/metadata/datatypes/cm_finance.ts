/**
 * CM_FINANCE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_FINANCE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_finance_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_FINANCE {
  /** CM_FINANCE.1 - Financial Class Id */
  cm_finance_1?: string;
  /** CM_FINANCE.2 - Effective Date */
  cm_finance_2?: string;
  effectiveDate?: string;
  financialClassId?: string;
}
