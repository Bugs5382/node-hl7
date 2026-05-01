/**
 * AD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/AD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ad_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_AD {
  /** AD.1 - Street Address */
  ad_1?: string;
  /** AD.2 - Other Designation */
  ad_2?: string;
  /** AD.3 - City */
  ad_3?: string;
  /** AD.4 - State Or Province */
  ad_4?: string;
  /** AD.5 - Zip Or Postal Code */
  ad_5?: string;
  /** AD.6 - Country */
  ad_6?: string;
  /** AD.7 - Type */
  ad_7?: string;
  /** AD.8 - Other Geographic Designation */
  ad_8?: string;
  city?: string;
  country?: string;
  otherDesignation?: string;
  otherGeographicDesignation?: string;
  stateOrProvince?: string;
  streetAddress?: string;
  type?: string;
  zipOrPostalCode?: string;
}
