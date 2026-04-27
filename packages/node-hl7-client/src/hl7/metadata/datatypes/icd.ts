/**
 * ICD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/ICD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`icd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_ICD {
  /** ICD.1 - Certification Patient Type */
  icd_1?: string;
  certificationPatientType?: string;
  /** ICD.2 - Certification Required */
  icd_2?: string;
  certificationRequired?: string;
  /** ICD.3 - Date/Time Certification Required */
  icd_3?: string;
  dateTimeCertificationRequired?: string;
}
