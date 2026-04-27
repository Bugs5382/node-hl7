/**
 * CM_RI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_RI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_ri_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_RI {
  /** CM_RI.1 - Repeat Pattern */
  cm_ri_1?: string;
  repeatPattern?: string;
  /** CM_RI.2 - Explicit Time Intevall */
  cm_ri_2?: string;
  explicitTimeIntevall?: string;
}
