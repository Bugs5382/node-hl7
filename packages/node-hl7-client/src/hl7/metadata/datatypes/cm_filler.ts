/**
 * CM_FILLER — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_FILLER)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_filler_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_FILLER {
  /** CM_FILLER.1 - Unique Filler Id */
  cm_filler_1?: string;
  /** CM_FILLER.2 - Filler Application Id */
  cm_filler_2?: string;
  fillerApplicationId?: string;
  uniqueFillerId?: string;
}
