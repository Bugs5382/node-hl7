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
  assigningAgencyOrDepartment?: string;
  assigningAuthority?: string;
  assigningFacility?: string;
  assigningJurisdiction?: string;
  checkDigitScheme?: string;
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
  prefix?: string;
  professionalSuffix?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  securityCheck?: string;
  securityCheckScheme?: string;
  sourceTable?: string;
  suffix?: string;
  /** XCN.1 - Person Identifier */
  xcn_1?: string;
  /** XCN.10 - Name Type Code */
  xcn_10?: string;
  /** XCN.11 - Identifier Check Digit */
  xcn_11?: string;
  /** XCN.12 - Check Digit Scheme */
  xcn_12?: string;
  /** XCN.13 - Identifier Type Code */
  xcn_13?: string;
  /** XCN.14 - Assigning Facility */
  xcn_14?: string;
  /** XCN.15 - Name Representation Code */
  xcn_15?: string;
  /** XCN.16 - Name Context */
  xcn_16?: string;
  /** XCN.17 - Name Validity Range */
  xcn_17?: string;
  /** XCN.18 - Name Assembly Order */
  xcn_18?: string;
  /** XCN.19 - Effective Date */
  xcn_19?: string;
  /** XCN.2 - Family Name */
  xcn_2?: string;
  /** XCN.20 - Expiration Date */
  xcn_20?: string;
  /** XCN.21 - Professional Suffix */
  xcn_21?: string;
  /** XCN.22 - Assigning Jurisdiction */
  xcn_22?: string;
  /** XCN.23 - Assigning Agency Or Department */
  xcn_23?: string;
  /** XCN.24 - Security Check */
  xcn_24?: string;
  /** XCN.25 - Security Check Scheme */
  xcn_25?: string;
  /** XCN.3 - Given Name */
  xcn_3?: string;
  /** XCN.4 - Second And Further Given Names Or Initials Thereof */
  xcn_4?: string;
  /** XCN.5 - Suffix (e.g., Jr Or Iii) */
  xcn_5?: string;
  /** XCN.6 - Prefix (e.g., Dr) */
  xcn_6?: string;
  /** XCN.7 - Degree (e.g., Md) */
  xcn_7?: string;
  /** XCN.8 - Source Table */
  xcn_8?: string;
  /** XCN.9 - Assigning Authority */
  xcn_9?: string;
}
