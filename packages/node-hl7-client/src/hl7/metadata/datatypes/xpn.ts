/**
 * XPN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XPN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xpn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XPN {
  /** XPN.1 - Family Name */
  xpn_1?: string;
  familyName?: string;
  /** XPN.2 - Given Name */
  xpn_2?: string;
  givenName?: string;
  /** XPN.3 - Second And Further Given Names Or Initials Thereof */
  xpn_3?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  /** XPN.4 - Suffix (e.g., Jr Or Iii) */
  xpn_4?: string;
  suffix?: string;
  /** XPN.5 - Prefix (e.g., Dr) */
  xpn_5?: string;
  prefix?: string;
  /** XPN.6 - Degree (e.g., Md) */
  xpn_6?: string;
  degree?: string;
  /** XPN.7 - Name Type Code */
  xpn_7?: string;
  nameTypeCode?: string;
  /** XPN.8 - Name Representation Code */
  xpn_8?: string;
  nameRepresentationCode?: string;
  /** XPN.9 - Name Context */
  xpn_9?: string;
  nameContext?: string;
  /** XPN.10 - Name Validity Range */
  xpn_10?: string;
  nameValidityRange?: string;
  /** XPN.11 - Name Assembly Order */
  xpn_11?: string;
  nameAssemblyOrder?: string;
  /** XPN.12 - Effective Date */
  xpn_12?: string;
  effectiveDate?: string;
  /** XPN.13 - Expiration Date */
  xpn_13?: string;
  expirationDate?: string;
  /** XPN.14 - Professional Suffix */
  xpn_14?: string;
  professionalSuffix?: string;
  /** XPN.15 - Called By */
  xpn_15?: string;
  calledBy?: string;
}
