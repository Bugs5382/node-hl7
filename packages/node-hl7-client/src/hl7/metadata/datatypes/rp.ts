/**
 * RP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`rp_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RP {
  applicationId?: string;
  pointer?: string;
  /** RP.1 - Pointer */
  rp_1?: string;
  /** RP.2 - Application ID */
  rp_2?: string;
  /** RP.3 - Type Of Data */
  rp_3?: string;
  /** RP.4 - Subtype */
  rp_4?: string;
  subtype?: string;
  typeOfData?: string;
}
