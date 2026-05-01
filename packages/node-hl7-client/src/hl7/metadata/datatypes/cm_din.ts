/**
 * CM_DIN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_DIN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_din_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_DIN {
  /** CM_DIN.1 - Date */
  cm_din_1?: string;
  /** CM_DIN.2 - Institution Name */
  cm_din_2?: string;
  date?: string;
  institutionName?: string;
}
