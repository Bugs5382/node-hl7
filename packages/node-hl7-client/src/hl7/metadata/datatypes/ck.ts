/**
 * CK — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CK)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ck_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CK {
  assigningFacilityId?: string;
  checkDigit?: string;
  /** CK.1 - ID Number */
  ck_1?: string;
  /** CK.2 - Check Digit */
  ck_2?: string;
  /** CK.3 - Code Identifying the Check Digit Scheme Employed  */
  ck_3?: string;
  /** CK.4 - Assigning Facility ID */
  ck_4?: string;
  codeIdentifyingTheCheckDigitSchemeEmployed?: string;
  idNumber?: string;
}
