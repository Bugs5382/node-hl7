/**
 * CM_SPD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_SPD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_spd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_SPD {
  /** CM_SPD.1 - Specialty Name */
  cm_spd_1?: string;
  specialtyName?: string;
  /** CM_SPD.2 - Governing Board */
  cm_spd_2?: string;
  governingBoard?: string;
  /** CM_SPD.3 - Eligible Or Certified */
  cm_spd_3?: string;
  eligibleOrCertified?: string;
  /** CM_SPD.4 - Date Of Certification */
  cm_spd_4?: string;
  dateOfCertification?: string;
}
