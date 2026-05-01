/**
 * CM_OCD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_OCD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_ocd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_OCD {
  /** CM_OCD.1 - Occurrence Code */
  cm_ocd_1?: string;
  /** CM_OCD.2 - Occurrence Date */
  cm_ocd_2?: string;
  occurrenceCode?: string;
  occurrenceDate?: string;
}
