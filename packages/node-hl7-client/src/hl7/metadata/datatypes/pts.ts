/**
 * PTS — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PTS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pts_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PTS {
  /** PTS.1 - Authentication person */
  pts_1?: string;
  authenticationPerson?: string;
  /** PTS.2 - Authentication time stamp */
  pts_2?: string;
  authenticationTimeStamp?: string;
}
