/**
 * CM_GROUP_ID — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_GROUP_ID)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_group_id_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_GROUP_ID {
  /** CM_GROUP_ID.1 - Unique Group Id */
  cm_group_id_1?: string;
  uniqueGroupId?: string;
  /** CM_GROUP_ID.2 - Placer Application Id */
  cm_group_id_2?: string;
  placerApplicationId?: string;
}
