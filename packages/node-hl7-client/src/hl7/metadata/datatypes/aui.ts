/**
 * AUI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/AUI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`aui_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_AUI {
  /** AUI.1 - Authorization Number */
  aui_1?: string;
  /** AUI.2 - Date */
  aui_2?: string;
  /** AUI.3 - Source */
  aui_3?: string;
  authorizationNumber?: string;
  date?: string;
  source?: string;
}
