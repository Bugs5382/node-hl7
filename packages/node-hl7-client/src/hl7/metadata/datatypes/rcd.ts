/**
 * RCD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RCD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`rcd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RCD {
  /** RCD.1 - HL7 Item Number */
  rcd_1?: string;
  hl7ItemNumber?: string;
  /** RCD.2 - HL7 Date Type */
  rcd_2?: string;
  hl7DateType?: string;
  /** RCD.3 - Maximum Column Width */
  rcd_3?: string;
  maximumColumnWidth?: string;
}
