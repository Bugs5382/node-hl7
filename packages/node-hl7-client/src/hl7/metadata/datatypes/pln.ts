/**
 * PLN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PLN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pln_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PLN {
  expirationDate?: string;
  idNumber?: string;
  /** PLN.1 - ID Number */
  pln_1?: string;
  /** PLN.2 - Type Of ID Number */
  pln_2?: string;
  /** PLN.3 - State/other Qualifying Info */
  pln_3?: string;
  /** PLN.4 - Expiration Date */
  pln_4?: string;
  stateOtherQualifyingInfo?: string;
  typeOfIdNumber?: string;
}
