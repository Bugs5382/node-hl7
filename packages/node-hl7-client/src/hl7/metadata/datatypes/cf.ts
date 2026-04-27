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
  /** CF.1 - Identifier */
  cf_1?: string;
  identifier?: string;
  /** CF.2 - Formatted Text */
  cf_2?: string;
  formattedText?: string;
  /** CF.3 - Name Of Coding System */
  cf_3?: string;
  nameOfCodingSystem?: string;
  /** CF.4 - Alternate Identifier */
  cf_4?: string;
  alternateIdentifier?: string;
  /** CF.5 - Alternate Formatted Text */
  cf_5?: string;
  alternateFormattedText?: string;
  /** CF.6 - Name Of Alternate Coding System */
  cf_6?: string;
  nameOfAlternateCodingSystem?: string;
  /** CF.7 - Coding System Version Id */
  cf_7?: string;
  codingSystemVersionId?: string;
  /** CF.8 - Alternate Coding System Version Id */
  cf_8?: string;
  alternateCodingSystemVersionId?: string;
  /** CF.9 - Original Text */
  cf_9?: string;
  originalText?: string;
  /** CF.10 - Second Alternate Identifier */
  cf_10?: string;
  secondAlternateIdentifier?: string;
  /** CF.11 - Second Alternate Formatted Text */
  cf_11?: string;
  secondAlternateFormattedText?: string;
  /** CF.12 - Name Of Second Alternate Coding System */
  cf_12?: string;
  nameOfSecondAlternateCodingSystem?: string;
  /** CF.13 - Second Alternate Coding System Version Id */
  cf_13?: string;
  secondAlternateCodingSystemVersionId?: string;
  /** CF.14 - Coding System Oid */
  cf_14?: string;
  codingSystemOid?: string;
  /** CF.15 - Value Set Oid */
  cf_15?: string;
  valueSetOid?: string;
  /** CF.16 - Value Set Version Id */
  cf_16?: string;
  valueSetVersionId?: string;
  /** CF.17 - Alternate Coding System Oid */
  cf_17?: string;
  alternateCodingSystemOid?: string;
  /** CF.18 - Alternate Value Set Oid */
  cf_18?: string;
  alternateValueSetOid?: string;
  /** CF.19 - Alternate Value Set Version Id */
  cf_19?: string;
  alternateValueSetVersionId?: string;
  /** CF.20 - Second Alternate Coding System Oid */
  cf_20?: string;
  secondAlternateCodingSystemOid?: string;
  /** CF.21 - Second Alternate Value Set Oid */
  cf_21?: string;
  secondAlternateValueSetOid?: string;
  /** CF.22 - Second Alternate Value Set Version Id */
  cf_22?: string;
  secondAlternateValueSetVersionId?: string;
}
