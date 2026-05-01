/**
 * SAD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/SAD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`sad_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_SAD {
  dwellingNumber?: string;
  /** SAD.1 - Street Or Mailing Address */
  sad_1?: string;
  /** SAD.2 - Street Name */
  sad_2?: string;
  /** SAD.3 - Dwelling Number */
  sad_3?: string;
  streetName?: string;
  streetOrMailingAddress?: string;
}
