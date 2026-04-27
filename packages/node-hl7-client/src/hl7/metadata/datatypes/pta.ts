/**
 * PTA — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PTA)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pta_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PTA {
  /** PTA.1 - Policy Type */
  pta_1?: string;
  policyType?: string;
  /** PTA.2 - Amount Class */
  pta_2?: string;
  amountClass?: string;
  /** PTA.3 - Money Or Percentage Quantity */
  pta_3?: string;
  moneyOrPercentageQuantity?: string;
  /** PTA.4 - Money Or Percentage */
  pta_4?: string;
  moneyOrPercentage?: string;
}
