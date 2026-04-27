/**
 * MOP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/MOP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`mop_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_MOP {
  /** MOP.1 - Money Or Percentage Indicator */
  mop_1?: string;
  moneyOrPercentageIndicator?: string;
  /** MOP.2 - Money Or Percentage Quantity */
  mop_2?: string;
  moneyOrPercentageQuantity?: string;
  /** MOP.3 - Currency Denomination */
  mop_3?: string;
  currencyDenomination?: string;
}
