/**
 * XCN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XCN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xcn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XCN {
  /** XCN.1 - Person Identifier */
  xcn_1?: string;
  personIdentifier?: string;
  /** XCN.2 - Family Name */
  xcn_2?: string;
  familyName?: string;
  /** XCN.3 - Given Name */
  xcn_3?: string;
  givenName?: string;
  /** XCN.4 - Second And Further Given Names Or Initials Thereof */
  xcn_4?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  /** XCN.5 - Suffix (e.g., Jr Or Iii) */
  xcn_5?: string;
  suffix?: string;
  /** XCN.6 - Prefix (e.g., Dr) */
  xcn_6?: string;
  prefix?: string;
  /** XCN.7 - Degree (e.g., Md) */
  xcn_7?: string;
  degree?: string;
  /** XCN.8 - Source Table */
  xcn_8?: string;
  sourceTable?: string;
  /** XCN.9 - Assigning Authority */
  xcn_9?: string;
  assigningAuthority?: string;
  /** XCN.10 - Name Type Code */
  xcn_10?: string;
  nameTypeCode?: string;
  /** XCN.11 - Identifier Check Digit */
  xcn_11?: string;
  identifierCheckDigit?: string;
  /** XCN.12 - Check Digit Scheme */
  xcn_12?: string;
  checkDigitScheme?: string;
  /** XCN.13 - Identifier Type Code */
  xcn_13?: string;
  identifierTypeCode?: string;
  /** XCN.14 - Assigning Facility */
  xcn_14?: string;
  assigningFacility?: string;
  /** XCN.15 - Name Representation Code */
  xcn_15?: string;
  nameRepresentationCode?: string;
  /** XCN.16 - Name Context */
  xcn_16?: string;
  nameContext?: string;
  /** XCN.17 - Name Validity Range */
  xcn_17?: string;
  nameValidityRange?: string;
  /** XCN.18 - Name Assembly Order */
  xcn_18?: string;
  nameAssemblyOrder?: string;
  /** XCN.19 - Effective Date */
  xcn_19?: string;
  effectiveDate?: string;
  /** XCN.20 - Expiration Date */
  xcn_20?: string;
  expirationDate?: string;
  /** XCN.21 - Professional Suffix */
  xcn_21?: string;
  professionalSuffix?: string;
  /** XCN.22 - Assigning Jurisdiction */
  xcn_22?: string;
  assigningJurisdiction?: string;
  /** XCN.23 - Assigning Agency Or Department */
  xcn_23?: string;
  assigningAgencyOrDepartment?: string;
  /** XCN.24 - Security Check */
  xcn_24?: string;
  securityCheck?: string;
  /** XCN.25 - Security Check Scheme */
  xcn_25?: string;
  securityCheckScheme?: string;
}
