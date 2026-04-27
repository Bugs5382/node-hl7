/**
 * LA1 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/LA1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`la1_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_LA1 {
  /** LA1.1 - Point Of Care */
  la1_1?: string;
  pointOfCare?: string;
  /** LA1.2 - Room */
  la1_2?: string;
  room?: string;
  /** LA1.3 - Bed */
  la1_3?: string;
  bed?: string;
  /** LA1.4 - Facility */
  la1_4?: string;
  facility?: string;
  /** LA1.5 - Location Status */
  la1_5?: string;
  locationStatus?: string;
  /** LA1.6 - Person Location Type */
  la1_6?: string;
  personLocationType?: string;
  /** LA1.7 - Building */
  la1_7?: string;
  building?: string;
  /** LA1.8 - Floor */
  la1_8?: string;
  floor?: string;
  /** LA1.9 - Address */
  la1_9?: string;
  address?: string;
}
