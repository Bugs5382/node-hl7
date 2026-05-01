/**
 * CM_AUI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_AUI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_aui_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_AUI {
  authorizationNumber?: string;
  /** CM_AUI.1 - Authorization Number */
  cm_aui_1?: string;
  /** CM_AUI.2 - Date */
  cm_aui_2?: string;
  /** CM_AUI.3 - Source */
  cm_aui_3?: string;
  date?: string;
  source?: string;
}
