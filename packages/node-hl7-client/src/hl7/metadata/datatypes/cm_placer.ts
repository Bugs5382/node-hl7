/**
 * CM_PLACER — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PLACER)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_placer_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PLACER {
  /** CM_PLACER.1 - Unique Placer Id */
  cm_placer_1?: string;
  uniquePlacerId?: string;
  /** CM_PLACER.2 - Placer Application */
  cm_placer_2?: string;
  placerApplication?: string;
}
