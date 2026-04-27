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
  /** PPN.1 - Person Identifier */
  ppn_1?: string;
  personIdentifier?: string;
  /** PPN.2 - Family Name */
  ppn_2?: string;
  familyName?: string;
  /** PPN.3 - Given Name */
  ppn_3?: string;
  givenName?: string;
  /** PPN.4 - Second And Further Given Names Or Initials Thereof */
  ppn_4?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  /** PPN.5 - Suffix (e.g., Jr Or Iii) */
  ppn_5?: string;
  suffix?: string;
  /** PPN.6 - Prefix (e.g., Dr) */
  ppn_6?: string;
  prefix?: string;
  /** PPN.7 - Degree (e.g., Md) */
  ppn_7?: string;
  degree?: string;
  /** PPN.8 - Source Table */
  ppn_8?: string;
  sourceTable?: string;
  /** PPN.9 - Assigning Authority */
  ppn_9?: string;
  assigningAuthority?: string;
  /** PPN.10 - Name Type Code */
  ppn_10?: string;
  nameTypeCode?: string;
  /** PPN.11 - Identifier Check Digit */
  ppn_11?: string;
  identifierCheckDigit?: string;
  /** PPN.12 - Check Digit Scheme */
  ppn_12?: string;
  checkDigitScheme?: string;
  /** PPN.13 - Identifier Type Code */
  ppn_13?: string;
  identifierTypeCode?: string;
  /** PPN.14 - Assigning Facility */
  ppn_14?: string;
  assigningFacility?: string;
  /** PPN.15 - Date/Time Action Performed */
  ppn_15?: string;
  dateTimeActionPerformed?: string;
  /** PPN.16 - Name Representation Code */
  ppn_16?: string;
  nameRepresentationCode?: string;
  /** PPN.17 - Name Context */
  ppn_17?: string;
  nameContext?: string;
  /** PPN.18 - Name Validity Range */
  ppn_18?: string;
  nameValidityRange?: string;
  /** PPN.19 - Name Assembly Order */
  ppn_19?: string;
  nameAssemblyOrder?: string;
  /** PPN.20 - Effective Date */
  ppn_20?: string;
  effectiveDate?: string;
  /** PPN.21 - Expiration Date */
  ppn_21?: string;
  expirationDate?: string;
  /** PPN.22 - Professional Suffix */
  ppn_22?: string;
  professionalSuffix?: string;
  /** PPN.23 - Assigning Jurisdiction */
  ppn_23?: string;
  assigningJurisdiction?: string;
  /** PPN.24 - Assigning Agency Or Department */
  ppn_24?: string;
  assigningAgencyOrDepartment?: string;
  /** PPN.25 - Security Check */
  ppn_25?: string;
  securityCheck?: string;
  /** PPN.26 - Security Check Scheme */
  ppn_26?: string;
  securityCheckScheme?: string;
}
