/**
 * CNE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CNE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cne_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CNE {
  alternateCodingSystemOid?: string;
  alternateCodingSystemVersionId?: string;
  alternateIdentifier?: string;
  alternateText?: string;
  alternateValueSetOid?: string;
  alternateValueSetVersionId?: string;
  /** CNE.1 - Identifier */
  cne_1?: string;
  /** CNE.10 - Second Alternate Identifier */
  cne_10?: string;
  /** CNE.11 - Second Alternate Text */
  cne_11?: string;
  /** CNE.12 - Name Of Second Alternate Coding System */
  cne_12?: string;
  /** CNE.13 - Second Alternate Coding System Version Id */
  cne_13?: string;
  /** CNE.14 - Coding System Oid */
  cne_14?: string;
  /** CNE.15 - Value Set Oid */
  cne_15?: string;
  /** CNE.16 - Value Set Version Id */
  cne_16?: string;
  /** CNE.17 - Alternate Coding System Oid */
  cne_17?: string;
  /** CNE.18 - Alternate Value Set Oid */
  cne_18?: string;
  /** CNE.19 - Alternate Value Set Version Id */
  cne_19?: string;
  /** CNE.2 - Text */
  cne_2?: string;
  /** CNE.20 - Second Alternate Coding System Oid */
  cne_20?: string;
  /** CNE.21 - Second Alternate Value Set Oid */
  cne_21?: string;
  /** CNE.22 - Second Alternate Value Set Version Id */
  cne_22?: string;
  /** CNE.3 - Name Of Coding System */
  cne_3?: string;
  /** CNE.4 - Alternate Identifier */
  cne_4?: string;
  /** CNE.5 - Alternate Text */
  cne_5?: string;
  /** CNE.6 - Name Of Alternate Coding System */
  cne_6?: string;
  /** CNE.7 - Coding System Version Id */
  cne_7?: string;
  /** CNE.8 - Alternate Coding System Version Id */
  cne_8?: string;
  /** CNE.9 - Original Text */
  cne_9?: string;
  codingSystemOid?: string;
  codingSystemVersionId?: string;
  identifier?: string;
  nameOfAlternateCodingSystem?: string;
  nameOfCodingSystem?: string;
  nameOfSecondAlternateCodingSystem?: string;
  originalText?: string;
  secondAlternateCodingSystemOid?: string;
  secondAlternateCodingSystemVersionId?: string;
  secondAlternateIdentifier?: string;
  secondAlternateText?: string;
  secondAlternateValueSetOid?: string;
  secondAlternateValueSetVersionId?: string;
  text?: string;
  valueSetOid?: string;
  valueSetVersionId?: string;
}
