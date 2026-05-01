/**
 * CM_RMC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_RMC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_rmc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_RMC {
  amountType?: string;
  /** CM_RMC.1 - Room Type */
  cm_rmc_1?: string;
  /** CM_RMC.2 - Amount Type */
  cm_rmc_2?: string;
  /** CM_RMC.3 - Coverage Amount */
  cm_rmc_3?: string;
  coverageAmount?: string;
  roomType?: string;
}
