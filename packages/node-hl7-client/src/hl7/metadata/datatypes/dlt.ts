/**
 * DLT — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/DLT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`dlt_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_DLT {
  changeComputation?: string;
  /** DLT.1 - Range */
  dlt_1?: string;
  /** DLT.2 - Numeric Threshold */
  dlt_2?: string;
  /** DLT.3 - Change Computation */
  dlt_3?: string;
  /** DLT.4 - Length Of Time-days */
  dlt_4?: string;
  lengthOfTimeDays?: string;
  numericThreshold?: string;
  range?: string;
}
