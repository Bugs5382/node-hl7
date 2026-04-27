/**
 * CWE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CWE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cwe_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CWE {
  /** CWE.1 - Identifier */
  cwe_1?: string;
  identifier?: string;
  /** CWE.2 - Text */
  cwe_2?: string;
  text?: string;
  /** CWE.3 - Name Of Coding System */
  cwe_3?: string;
  nameOfCodingSystem?: string;
  /** CWE.4 - Alternate Identifier */
  cwe_4?: string;
  alternateIdentifier?: string;
  /** CWE.5 - Alternate Text */
  cwe_5?: string;
  alternateText?: string;
  /** CWE.6 - Name Of Alternate Coding System */
  cwe_6?: string;
  nameOfAlternateCodingSystem?: string;
  /** CWE.7 - Coding System Version Id */
  cwe_7?: string;
  codingSystemVersionId?: string;
  /** CWE.8 - Alternate Coding System Version Id */
  cwe_8?: string;
  alternateCodingSystemVersionId?: string;
  /** CWE.9 - Original Text */
  cwe_9?: string;
  originalText?: string;
  /** CWE.10 - Second Alternate Identifier */
  cwe_10?: string;
  secondAlternateIdentifier?: string;
  /** CWE.11 - Second Alternate Text */
  cwe_11?: string;
  secondAlternateText?: string;
  /** CWE.12 - Name Of Second Alternate Coding System */
  cwe_12?: string;
  nameOfSecondAlternateCodingSystem?: string;
  /** CWE.13 - Second Alternate Coding System Version Id */
  cwe_13?: string;
  secondAlternateCodingSystemVersionId?: string;
  /** CWE.14 - Coding System Oid */
  cwe_14?: string;
  codingSystemOid?: string;
  /** CWE.15 - Value Set Oid */
  cwe_15?: string;
  valueSetOid?: string;
  /** CWE.16 - Value Set Version Id */
  cwe_16?: string;
  valueSetVersionId?: string;
  /** CWE.17 - Alternate Coding System Oid */
  cwe_17?: string;
  alternateCodingSystemOid?: string;
  /** CWE.18 - Alternate Value Set Oid */
  cwe_18?: string;
  alternateValueSetOid?: string;
  /** CWE.19 - Alternate Value Set Version Id */
  cwe_19?: string;
  alternateValueSetVersionId?: string;
  /** CWE.20 - Second Alternate Coding System Oid */
  cwe_20?: string;
  secondAlternateCodingSystemOid?: string;
  /** CWE.21 - Second Alternate Value Set Oid */
  cwe_21?: string;
  secondAlternateValueSetOid?: string;
  /** CWE.22 - Second Alternate Value Set Version Id */
  cwe_22?: string;
  secondAlternateValueSetVersionId?: string;
}
