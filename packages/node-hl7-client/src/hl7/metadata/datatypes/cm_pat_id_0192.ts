/**
 * CM_PAT_ID_0192 — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PAT_ID_0192)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pat_id_0192_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PAT_ID_0192 {
  /** CM_PAT_ID_0192.1 - Patient Id */
  cm_pat_id_0192_1?: string;
  patientId?: string;
  /** CM_PAT_ID_0192.2 - Check Digit */
  cm_pat_id_0192_2?: string;
  checkDigit?: string;
  /** CM_PAT_ID_0192.3 - Check Digit Scheme */
  cm_pat_id_0192_3?: string;
  checkDigitScheme?: string;
  /** CM_PAT_ID_0192.4 - Facility Id */
  cm_pat_id_0192_4?: string;
  facilityId?: string;
  /** CM_PAT_ID_0192.5 - Type */
  cm_pat_id_0192_5?: string;
  type?: string;
}
