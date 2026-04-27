/**
 * PI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pi_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PI {
  /** PI.1 - ID Number */
  pi_1?: string;
  idNumber?: string;
  /** PI.2 - Type Of ID Number */
  pi_2?: string;
  typeOfIdNumber?: string;
  /** PI.3 - Other Qualifying Info */
  pi_3?: string;
  otherQualifyingInfo?: string;
}
