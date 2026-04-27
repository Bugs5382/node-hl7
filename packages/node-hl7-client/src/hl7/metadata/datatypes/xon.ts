/**
 * XON — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XON)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xon_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XON {
  /** XON.1 - Organization Name */
  xon_1?: string;
  organizationName?: string;
  /** XON.2 - Organization Name Type Code */
  xon_2?: string;
  organizationNameTypeCode?: string;
  /** XON.3 - Id Number */
  xon_3?: string;
  idNumber?: string;
  /** XON.4 - Check Digit */
  xon_4?: string;
  checkDigit?: string;
  /** XON.5 - Check Digit Scheme */
  xon_5?: string;
  checkDigitScheme?: string;
  /** XON.6 - Assigning Authority */
  xon_6?: string;
  assigningAuthority?: string;
  /** XON.7 - Identifier Type Code */
  xon_7?: string;
  identifierTypeCode?: string;
  /** XON.8 - Assigning Facility */
  xon_8?: string;
  assigningFacility?: string;
  /** XON.9 - Name Representation Code */
  xon_9?: string;
  nameRepresentationCode?: string;
  /** XON.10 - Organization Identifier */
  xon_10?: string;
  organizationIdentifier?: string;
}
