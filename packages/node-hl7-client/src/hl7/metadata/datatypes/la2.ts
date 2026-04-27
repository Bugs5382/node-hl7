/**
 * LA2 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/LA2)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`la2_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_LA2 {
  /** LA2.1 - Point Of Care */
  la2_1?: string;
  pointOfCare?: string;
  /** LA2.2 - Room */
  la2_2?: string;
  room?: string;
  /** LA2.3 - Bed */
  la2_3?: string;
  bed?: string;
  /** LA2.4 - Facility */
  la2_4?: string;
  facility?: string;
  /** LA2.5 - Location Status */
  la2_5?: string;
  locationStatus?: string;
  /** LA2.6 - Person Location Type */
  la2_6?: string;
  personLocationType?: string;
  /** LA2.7 - Building */
  la2_7?: string;
  building?: string;
  /** LA2.8 - Floor */
  la2_8?: string;
  floor?: string;
  /** LA2.9 - Street Address */
  la2_9?: string;
  streetAddress?: string;
  /** LA2.10 - Other Designation */
  la2_10?: string;
  otherDesignation?: string;
  /** LA2.11 - City */
  la2_11?: string;
  city?: string;
  /** LA2.12 - State Or Province */
  la2_12?: string;
  stateOrProvince?: string;
  /** LA2.13 - Zip Or Postal Code */
  la2_13?: string;
  zipOrPostalCode?: string;
  /** LA2.14 - Country */
  la2_14?: string;
  country?: string;
  /** LA2.15 - Address Type */
  la2_15?: string;
  addressType?: string;
  /** LA2.16 - Other Geographic Designation */
  la2_16?: string;
  otherGeographicDesignation?: string;
}
