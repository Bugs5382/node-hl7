/**
 * DLN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/DLN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`dln_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_DLN {
  /** DLN.1 - Driver s License Number */
  dln_1?: string;
  /** DLN.2 - Issuing State, Province, Country */
  dln_2?: string;
  /** DLN.3 - Expiration Date */
  dln_3?: string;
  driverSLicenseNumber?: string;
  expirationDate?: string;
  issuingStateProvinceCountry?: string;
}
