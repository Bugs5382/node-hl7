/**
 * DR — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/DR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`dr_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_DR {
  /** DR.1 - Range Start Date/time */
  dr_1?: string;
  rangeStartDateTime?: string;
  /** DR.2 - Range End Date/time */
  dr_2?: string;
  rangeEndDateTime?: string;
}
