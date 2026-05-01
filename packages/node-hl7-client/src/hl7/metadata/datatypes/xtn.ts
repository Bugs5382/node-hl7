/**
 * XTN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XTN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xtn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XTN {
  anyText?: string;
  areaCityCode?: string;
  communicationAddress?: string;
  countryCode?: string;
  effectiveStartDate?: string;
  expirationDate?: string;
  expirationReason?: string;
  extension?: string;
  extensionPrefix?: string;
  localNumber?: string;
  preferenceOrder?: string;
  protectionCode?: string;
  sharedTelecommunicationIdentifier?: string;
  speedDialCode?: string;
  telecommunicationEquipmentType?: string;
  telecommunicationUseCode?: string;
  telephoneNumber?: string;
  unformattedTelephoneNumber?: string;
  /** XTN.1 - Telephone Number */
  xtn_1?: string;
  /** XTN.10 - Extension Prefix */
  xtn_10?: string;
  /** XTN.11 - Speed Dial Code */
  xtn_11?: string;
  /** XTN.12 - Unformatted Telephone Number */
  xtn_12?: string;
  /** XTN.13 - Effective Start Date */
  xtn_13?: string;
  /** XTN.14 - Expiration Date */
  xtn_14?: string;
  /** XTN.15 - Expiration Reason */
  xtn_15?: string;
  /** XTN.16 - Protection Code */
  xtn_16?: string;
  /** XTN.17 - Shared Telecommunication Identifier */
  xtn_17?: string;
  /** XTN.18 - Preference Order */
  xtn_18?: string;
  /** XTN.2 - Telecommunication Use Code */
  xtn_2?: string;
  /** XTN.3 - Telecommunication Equipment Type */
  xtn_3?: string;
  /** XTN.4 - Communication Address */
  xtn_4?: string;
  /** XTN.5 - Country Code */
  xtn_5?: string;
  /** XTN.6 - Area/City Code */
  xtn_6?: string;
  /** XTN.7 - Local Number */
  xtn_7?: string;
  /** XTN.8 - Extension */
  xtn_8?: string;
  /** XTN.9 - Any Text */
  xtn_9?: string;
}
