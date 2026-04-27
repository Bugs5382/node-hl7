/**
 * CM_PRACTITIONER — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PRACTITIONER)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_practitioner_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PRACTITIONER {
  /** CM_PRACTITIONER.1 - Procedure Practitioner  Id */
  cm_practitioner_1?: string;
  procedurePractitionerId?: string;
  /** CM_PRACTITIONER.2 - Procedure Practitioner Type */
  cm_practitioner_2?: string;
  procedurePractitionerType?: string;
}
