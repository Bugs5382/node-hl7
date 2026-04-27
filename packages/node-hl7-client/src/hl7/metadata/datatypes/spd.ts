/**
 * SPD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/SPD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`spd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_SPD {
  /** SPD.1 - Specialty Name */
  spd_1?: string;
  specialtyName?: string;
  /** SPD.2 - Governing Board */
  spd_2?: string;
  governingBoard?: string;
  /** SPD.3 - Eligible Or Certified */
  spd_3?: string;
  eligibleOrCertified?: string;
  /** SPD.4 - Date Of Certification */
  spd_4?: string;
  dateOfCertification?: string;
}
