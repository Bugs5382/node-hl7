/**
 * CF — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cf_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CF {
  alternateCodingSystemOid?: string;
  alternateCodingSystemVersionId?: string;
  alternateFormattedText?: string;
  alternateIdentifier?: string;
  alternateValueSetOid?: string;
  alternateValueSetVersionId?: string;
  /** CF.1 - Identifier */
  cf_1?: string;
  /** CF.10 - Second Alternate Identifier */
  cf_10?: string;
  /** CF.11 - Second Alternate Formatted Text */
  cf_11?: string;
  /** CF.12 - Name Of Second Alternate Coding System */
  cf_12?: string;
  /** CF.13 - Second Alternate Coding System Version Id */
  cf_13?: string;
  /** CF.14 - Coding System Oid */
  cf_14?: string;
  /** CF.15 - Value Set Oid */
  cf_15?: string;
  /** CF.16 - Value Set Version Id */
  cf_16?: string;
  /** CF.17 - Alternate Coding System Oid */
  cf_17?: string;
  /** CF.18 - Alternate Value Set Oid */
  cf_18?: string;
  /** CF.19 - Alternate Value Set Version Id */
  cf_19?: string;
  /** CF.2 - Formatted Text */
  cf_2?: string;
  /** CF.20 - Second Alternate Coding System Oid */
  cf_20?: string;
  /** CF.21 - Second Alternate Value Set Oid */
  cf_21?: string;
  /** CF.22 - Second Alternate Value Set Version Id */
  cf_22?: string;
  /** CF.3 - Name Of Coding System */
  cf_3?: string;
  /** CF.4 - Alternate Identifier */
  cf_4?: string;
  /** CF.5 - Alternate Formatted Text */
  cf_5?: string;
  /** CF.6 - Name Of Alternate Coding System */
  cf_6?: string;
  /** CF.7 - Coding System Version Id */
  cf_7?: string;
  /** CF.8 - Alternate Coding System Version Id */
  cf_8?: string;
  /** CF.9 - Original Text */
  cf_9?: string;
  codingSystemOid?: string;
  codingSystemVersionId?: string;
  formattedText?: string;
  identifier?: string;
  nameOfAlternateCodingSystem?: string;
  nameOfCodingSystem?: string;
  nameOfSecondAlternateCodingSystem?: string;
  originalText?: string;
  secondAlternateCodingSystemOid?: string;
  secondAlternateCodingSystemVersionId?: string;
  secondAlternateFormattedText?: string;
  secondAlternateIdentifier?: string;
  secondAlternateValueSetOid?: string;
  secondAlternateValueSetVersionId?: string;
  valueSetOid?: string;
  valueSetVersionId?: string;
}
