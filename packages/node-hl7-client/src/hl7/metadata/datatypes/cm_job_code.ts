/**
 * CM_JOB_CODE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_JOB_CODE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_job_code_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_JOB_CODE {
  /** CM_JOB_CODE.1 - Job Code */
  cm_job_code_1?: string;
  /** CM_JOB_CODE.2 - Employee Classification */
  cm_job_code_2?: string;
  employeeClassification?: string;
  jobCode?: string;
}
