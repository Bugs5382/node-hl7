/**
 * CM_LICENSE_NO — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_LICENSE_NO)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_license_no_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_LICENSE_NO {
  /** CM_LICENSE_NO.1 - License Number */
  cm_license_no_1?: string;
  /** CM_LICENSE_NO.2 - Issuing State,province,country */
  cm_license_no_2?: string;
  issuingStateProvinceCountry?: string;
  licenseNumber?: string;
}
