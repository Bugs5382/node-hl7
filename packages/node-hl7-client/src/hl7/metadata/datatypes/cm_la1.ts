/**
 * CM_LA1 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_LA1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_la1_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_LA1 {
  /** CM_LA1.1 - Dispense / Deliver To Location */
  cm_la1_1?: string;
  /** CM_LA1.2 - Location */
  cm_la1_2?: string;
  dispenseDeliverToLocation?: string;
  location?: string;
}
