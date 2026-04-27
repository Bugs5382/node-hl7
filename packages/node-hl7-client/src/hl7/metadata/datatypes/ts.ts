/**
 * TS — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/TS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ts_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_TS {
  /** TS.1 - Time Of An Event */
  ts_1?: string;
  timeOfAnEvent?: string;
  /** TS.2 - Degree Of Precision */
  ts_2?: string;
  degreeOfPrecision?: string;
}
