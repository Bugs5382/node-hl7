/**
 * FC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/FC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`fc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_FC {
  /** FC.1 - Financial Class */
  fc_1?: string;
  financialClass?: string;
  /** FC.2 - Effective Date */
  fc_2?: string;
  effectiveDate?: string;
}
