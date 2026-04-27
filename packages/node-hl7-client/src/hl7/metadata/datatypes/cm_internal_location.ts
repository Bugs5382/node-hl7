/**
 * CM_INTERNAL_LOCATION — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_INTERNAL_LOCATION)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_internal_location_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_INTERNAL_LOCATION {
  /** CM_INTERNAL_LOCATION.1 - Nurse Unit (station) */
  cm_internal_location_1?: string;
  nurseUnit?: string;
  /** CM_INTERNAL_LOCATION.2 - Room */
  cm_internal_location_2?: string;
  room?: string;
  /** CM_INTERNAL_LOCATION.3 - Bed */
  cm_internal_location_3?: string;
  bed?: string;
  /** CM_INTERNAL_LOCATION.4 - Facility Id */
  cm_internal_location_4?: string;
  facilityId?: string;
  /** CM_INTERNAL_LOCATION.5 - Bed Status */
  cm_internal_location_5?: string;
  bedStatus?: string;
}
