/**
 * PPN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PPN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ppn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PPN {
  assigningAgencyOrDepartment?: string;
  assigningAuthority?: string;
  assigningFacility?: string;
  assigningJurisdiction?: string;
  checkDigitScheme?: string;
  dateTimeActionPerformed?: string;
  degree?: string;
  effectiveDate?: string;
  expirationDate?: string;
  familyName?: string;
  givenName?: string;
  identifierCheckDigit?: string;
  identifierTypeCode?: string;
  nameAssemblyOrder?: string;
  nameContext?: string;
  nameRepresentationCode?: string;
  nameTypeCode?: string;
  nameValidityRange?: string;
  personIdentifier?: string;
  /** PPN.1 - Person Identifier */
  ppn_1?: string;
  /** PPN.10 - Name Type Code */
  ppn_10?: string;
  /** PPN.11 - Identifier Check Digit */
  ppn_11?: string;
  /** PPN.12 - Check Digit Scheme */
  ppn_12?: string;
  /** PPN.13 - Identifier Type Code */
  ppn_13?: string;
  /** PPN.14 - Assigning Facility */
  ppn_14?: string;
  /** PPN.15 - Date/Time Action Performed */
  ppn_15?: string;
  /** PPN.16 - Name Representation Code */
  ppn_16?: string;
  /** PPN.17 - Name Context */
  ppn_17?: string;
  /** PPN.18 - Name Validity Range */
  ppn_18?: string;
  /** PPN.19 - Name Assembly Order */
  ppn_19?: string;
  /** PPN.2 - Family Name */
  ppn_2?: string;
  /** PPN.20 - Effective Date */
  ppn_20?: string;
  /** PPN.21 - Expiration Date */
  ppn_21?: string;
  /** PPN.22 - Professional Suffix */
  ppn_22?: string;
  /** PPN.23 - Assigning Jurisdiction */
  ppn_23?: string;
  /** PPN.24 - Assigning Agency Or Department */
  ppn_24?: string;
  /** PPN.25 - Security Check */
  ppn_25?: string;
  /** PPN.26 - Security Check Scheme */
  ppn_26?: string;
  /** PPN.3 - Given Name */
  ppn_3?: string;
  /** PPN.4 - Second And Further Given Names Or Initials Thereof */
  ppn_4?: string;
  /** PPN.5 - Suffix (e.g., Jr Or Iii) */
  ppn_5?: string;
  /** PPN.6 - Prefix (e.g., Dr) */
  ppn_6?: string;
  /** PPN.7 - Degree (e.g., Md) */
  ppn_7?: string;
  /** PPN.8 - Source Table */
  ppn_8?: string;
  /** PPN.9 - Assigning Authority */
  ppn_9?: string;
  prefix?: string;
  professionalSuffix?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  securityCheck?: string;
  securityCheckScheme?: string;
  sourceTable?: string;
  suffix?: string;
}
