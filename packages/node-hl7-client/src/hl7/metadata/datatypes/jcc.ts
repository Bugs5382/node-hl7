/**
 * JCC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/JCC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`jcc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_JCC {
  /** JCC.1 - Job Code */
  jcc_1?: string;
  /** JCC.2 - Job Class */
  jcc_2?: string;
  /** JCC.3 - Job Description Text */
  jcc_3?: string;
  jobClass?: string;
  jobCode?: string;
  jobDescriptionText?: string;
}
