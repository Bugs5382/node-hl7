/**
 * CE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ce_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CE {
  alternateIdentifier?: string;
  alternateText?: string;
  /** CE.1 - Identifier */
  ce_1?: string;
  /** CE.2 - Text */
  ce_2?: string;
  /** CE.3 - Name Of Coding System */
  ce_3?: string;
  /** CE.4 - Alternate Identifier */
  ce_4?: string;
  /** CE.5 - Alternate Text */
  ce_5?: string;
  /** CE.6 - Name Of Alternate Coding System */
  ce_6?: string;
  identifier?: string;
  nameOfAlternateCodingSystem?: string;
  nameOfCodingSystem?: string;
  text?: string;
}
