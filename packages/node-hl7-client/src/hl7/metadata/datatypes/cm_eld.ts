/**
 * CM_ELD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_ELD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_eld_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_ELD {
  /** CM_ELD.1 - Segment-id */
  cm_eld_1?: string;
  segmentId?: string;
  /** CM_ELD.2 - Sequence */
  cm_eld_2?: string;
  sequence?: string;
  /** CM_ELD.3 - Field-position */
  cm_eld_3?: string;
  fieldPosition?: string;
  /** CM_ELD.4 - Code Identifying Error */
  cm_eld_4?: string;
  codeIdentifyingError?: string;
}
