/**
 * CX — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CX)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cx_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CX {
  /** CX.1 - Id Number */
  cx_1?: string;
  idNumber?: string;
  /** CX.2 - Identifier Check Digit */
  cx_2?: string;
  identifierCheckDigit?: string;
  /** CX.3 - Check Digit Scheme */
  cx_3?: string;
  checkDigitScheme?: string;
  /** CX.4 - Assigning Authority */
  cx_4?: string;
  assigningAuthority?: string;
  /** CX.5 - Identifier Type Code */
  cx_5?: string;
  identifierTypeCode?: string;
  /** CX.6 - Assigning Facility */
  cx_6?: string;
  assigningFacility?: string;
  /** CX.7 - Effective Date */
  cx_7?: string;
  effectiveDate?: string;
  /** CX.8 - Expiration Date */
  cx_8?: string;
  expirationDate?: string;
  /** CX.9 - Assigning Jurisdiction */
  cx_9?: string;
  assigningJurisdiction?: string;
  /** CX.10 - Assigning Agency Or Department */
  cx_10?: string;
  assigningAgencyOrDepartment?: string;
  /** CX.11 - Security Check */
  cx_11?: string;
  securityCheck?: string;
  /** CX.12 - Security Check Scheme */
  cx_12?: string;
  securityCheckScheme?: string;
}
