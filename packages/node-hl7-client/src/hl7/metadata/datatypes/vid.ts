/**
 * VID — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/VID)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`vid_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_VID {
  /** VID.1 - Version Id */
  vid_1?: string;
  versionId?: string;
  /** VID.2 - Internationalization Code */
  vid_2?: string;
  internationalizationCode?: string;
  /** VID.3 - International Version Id */
  vid_3?: string;
  internationalVersionId?: string;
}
