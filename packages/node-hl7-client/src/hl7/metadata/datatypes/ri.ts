/**
 * RI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ri_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RI {
  explicitTimeInterval?: string;
  repeatPattern?: string;
  /** RI.1 - Repeat Pattern */
  ri_1?: string;
  /** RI.2 - Explicit Time Interval */
  ri_2?: string;
}
