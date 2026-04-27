/**
 * PL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PL {
  /** PL.1 - Point Of Care */
  pl_1?: string;
  pointOfCare?: string;
  /** PL.2 - Room */
  pl_2?: string;
  room?: string;
  /** PL.3 - Bed */
  pl_3?: string;
  bed?: string;
  /** PL.4 - Facility */
  pl_4?: string;
  facility?: string;
  /** PL.5 - Location Status */
  pl_5?: string;
  locationStatus?: string;
  /** PL.6 - Person Location Type */
  pl_6?: string;
  personLocationType?: string;
  /** PL.7 - Building */
  pl_7?: string;
  building?: string;
  /** PL.8 - Floor */
  pl_8?: string;
  floor?: string;
  /** PL.9 - Location Description */
  pl_9?: string;
  locationDescription?: string;
  /** PL.10 - Comprehensive Location Identifier */
  pl_10?: string;
  comprehensiveLocationIdentifier?: string;
  /** PL.11 - Assigning Authority For Location */
  pl_11?: string;
  assigningAuthorityForLocation?: string;
}
