/**
 * RMC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RMC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`rmc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RMC {
  amountType?: string;
  coverageAmount?: string;
  moneyOrPercentage?: string;
  /** RMC.1 - Room Type */
  rmc_1?: string;
  /** RMC.2 - Amount Type */
  rmc_2?: string;
  /** RMC.3 - Coverage Amount */
  rmc_3?: string;
  /** RMC.4 - Money Or Percentage */
  rmc_4?: string;
  roomType?: string;
}
