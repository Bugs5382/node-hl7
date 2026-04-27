/**
 * XAD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/XAD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`xad_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_XAD {
  /** XAD.1 - Street Address */
  xad_1?: string;
  streetAddress?: string;
  /** XAD.2 - Other Designation */
  xad_2?: string;
  otherDesignation?: string;
  /** XAD.3 - City */
  xad_3?: string;
  city?: string;
  /** XAD.4 - State Or Province */
  xad_4?: string;
  stateOrProvince?: string;
  /** XAD.5 - Zip Or Postal Code */
  xad_5?: string;
  zipOrPostalCode?: string;
  /** XAD.6 - Country */
  xad_6?: string;
  country?: string;
  /** XAD.7 - Address Type */
  xad_7?: string;
  addressType?: string;
  /** XAD.8 - Other Geographic Designation */
  xad_8?: string;
  otherGeographicDesignation?: string;
  /** XAD.9 - County/Parish Code */
  xad_9?: string;
  countyParishCode?: string;
  /** XAD.10 - Census Tract */
  xad_10?: string;
  censusTract?: string;
  /** XAD.11 - Address Representation Code */
  xad_11?: string;
  addressRepresentationCode?: string;
  /** XAD.12 - Address Validity Range */
  xad_12?: string;
  addressValidityRange?: string;
  /** XAD.13 - Effective Date */
  xad_13?: string;
  effectiveDate?: string;
  /** XAD.14 - Expiration Date */
  xad_14?: string;
  expirationDate?: string;
  /** XAD.15 - Expiration Reason */
  xad_15?: string;
  expirationReason?: string;
  /** XAD.16 - Temporary Indicator */
  xad_16?: string;
  temporaryIndicator?: string;
  /** XAD.17 - Bad Address Indicator */
  xad_17?: string;
  badAddressIndicator?: string;
  /** XAD.18 - Address Usage */
  xad_18?: string;
  addressUsage?: string;
  /** XAD.19 - Addressee */
  xad_19?: string;
  addressee?: string;
  /** XAD.20 - Comment */
  xad_20?: string;
  comment?: string;
  /** XAD.21 - Preference Order */
  xad_21?: string;
  preferenceOrder?: string;
  /** XAD.22 - Protection Code */
  xad_22?: string;
  protectionCode?: string;
  /** XAD.23 - Address Identifier */
  xad_23?: string;
  addressIdentifier?: string;
}
