/**
 * CM_RFR — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_RFR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_rfr_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_RFR {
  ageRange?: string;
  /** CM_RFR.1 - Reference Range */
  cm_rfr_1?: string;
  /** CM_RFR.2 - Sex */
  cm_rfr_2?: string;
  /** CM_RFR.3 - Age Range */
  cm_rfr_3?: string;
  /** CM_RFR.4 - Gestational Age Range */
  cm_rfr_4?: string;
  /** CM_RFR.5 - Species */
  cm_rfr_5?: string;
  /** CM_RFR.6 - Race / Subspecies */
  cm_rfr_6?: string;
  /** CM_RFR.7 - Text Condition */
  cm_rfr_7?: string;
  gestationalAgeRange?: string;
  raceSubspecies?: string;
  referenceRange?: string;
  sex?: string;
  species?: string;
  textCondition?: string;
}
