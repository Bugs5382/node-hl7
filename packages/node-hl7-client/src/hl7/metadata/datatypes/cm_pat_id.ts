/**
 * CM_PAT_ID — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PAT_ID)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pat_id_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PAT_ID {
  checkDigit?: string;
  checkDigitScheme?: string;
  /** CM_PAT_ID.1 - Patient Id */
  cm_pat_id_1?: string;
  /** CM_PAT_ID.2 - Check Digit */
  cm_pat_id_2?: string;
  /** CM_PAT_ID.3 - Check Digit Scheme */
  cm_pat_id_3?: string;
  /** CM_PAT_ID.4 - Facility Id */
  cm_pat_id_4?: string;
  /** CM_PAT_ID.5 - Type */
  cm_pat_id_5?: string;
  facilityId?: string;
  patientId?: string;
  type?: string;
}
