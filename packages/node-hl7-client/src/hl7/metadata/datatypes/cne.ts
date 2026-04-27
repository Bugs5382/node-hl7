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
  /** CNE.1 - Identifier */
  cne_1?: string;
  identifier?: string;
  /** CNE.2 - Text */
  cne_2?: string;
  text?: string;
  /** CNE.3 - Name Of Coding System */
  cne_3?: string;
  nameOfCodingSystem?: string;
  /** CNE.4 - Alternate Identifier */
  cne_4?: string;
  alternateIdentifier?: string;
  /** CNE.5 - Alternate Text */
  cne_5?: string;
  alternateText?: string;
  /** CNE.6 - Name Of Alternate Coding System */
  cne_6?: string;
  nameOfAlternateCodingSystem?: string;
  /** CNE.7 - Coding System Version Id */
  cne_7?: string;
  codingSystemVersionId?: string;
  /** CNE.8 - Alternate Coding System Version Id */
  cne_8?: string;
  alternateCodingSystemVersionId?: string;
  /** CNE.9 - Original Text */
  cne_9?: string;
  originalText?: string;
  /** CNE.10 - Second Alternate Identifier */
  cne_10?: string;
  secondAlternateIdentifier?: string;
  /** CNE.11 - Second Alternate Text */
  cne_11?: string;
  secondAlternateText?: string;
  /** CNE.12 - Name Of Second Alternate Coding System */
  cne_12?: string;
  nameOfSecondAlternateCodingSystem?: string;
  /** CNE.13 - Second Alternate Coding System Version Id */
  cne_13?: string;
  secondAlternateCodingSystemVersionId?: string;
  /** CNE.14 - Coding System Oid */
  cne_14?: string;
  codingSystemOid?: string;
  /** CNE.15 - Value Set Oid */
  cne_15?: string;
  valueSetOid?: string;
  /** CNE.16 - Value Set Version Id */
  cne_16?: string;
  valueSetVersionId?: string;
  /** CNE.17 - Alternate Coding System Oid */
  cne_17?: string;
  alternateCodingSystemOid?: string;
  /** CNE.18 - Alternate Value Set Oid */
  cne_18?: string;
  alternateValueSetOid?: string;
  /** CNE.19 - Alternate Value Set Version Id */
  cne_19?: string;
  alternateValueSetVersionId?: string;
  /** CNE.20 - Second Alternate Coding System Oid */
  cne_20?: string;
  secondAlternateCodingSystemOid?: string;
  /** CNE.21 - Second Alternate Value Set Oid */
  cne_21?: string;
  secondAlternateValueSetOid?: string;
  /** CNE.22 - Second Alternate Value Set Version Id */
  cne_22?: string;
  secondAlternateValueSetVersionId?: string;
}
