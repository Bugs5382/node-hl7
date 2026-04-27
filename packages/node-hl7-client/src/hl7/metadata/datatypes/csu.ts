/**
 * CSU — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CSU)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`csu_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CSU {
  /** CSU.1 - Channel Sensitivity */
  csu_1?: string;
  channelSensitivity?: string;
  /** CSU.2 - Unit Of Measure Identifier */
  csu_2?: string;
  unitOfMeasureIdentifier?: string;
  /** CSU.3 - Unit Of Measure Description */
  csu_3?: string;
  unitOfMeasureDescription?: string;
  /** CSU.4 - Unit Of Measure Coding System */
  csu_4?: string;
  unitOfMeasureCodingSystem?: string;
  /** CSU.5 - Alternate Unit Of Measure Identifier */
  csu_5?: string;
  alternateUnitOfMeasureIdentifier?: string;
  /** CSU.6 - Alternate Unit Of Measure Description */
  csu_6?: string;
  alternateUnitOfMeasureDescription?: string;
  /** CSU.7 - Alternate Unit Of Measure Coding System */
  csu_7?: string;
  alternateUnitOfMeasureCodingSystem?: string;
  /** CSU.8 - Unit Of Measure Coding System Version Id */
  csu_8?: string;
  unitOfMeasureCodingSystemVersionId?: string;
  /** CSU.9 - Alternate Unit Of Measure Coding System Version Id */
  csu_9?: string;
  alternateUnitOfMeasureCodingSystemVersionId?: string;
  /** CSU.10 - Original Text */
  csu_10?: string;
  originalText?: string;
  /** CSU.11 - Second Alternate Unit Of Measure Identifier */
  csu_11?: string;
  secondAlternateUnitOfMeasureIdentifier?: string;
  /** CSU.12 - Second Alternate Unit Of Measure Text */
  csu_12?: string;
  secondAlternateUnitOfMeasureText?: string;
  /** CSU.13 - Name Of Second Alternate Unit Of Measure Coding Sy */
  csu_13?: string;
  nameOfSecondAlternateUnitOfMeasureCodingSy?: string;
  /** CSU.14 - Second Alternate Unit Of Measure Coding System Ver */
  csu_14?: string;
  secondAlternateUnitOfMeasureCodingSystemVer?: string;
  /** CSU.15 - Unit Of Measure Coding System Oid */
  csu_15?: string;
  unitOfMeasureCodingSystemOid?: string;
  /** CSU.16 - Unit Of Measure Value Set Oid */
  csu_16?: string;
  unitOfMeasureValueSetOid?: string;
  /** CSU.17 - Unit Of Measure Value Set Version Id */
  csu_17?: string;
  unitOfMeasureValueSetVersionId?: string;
  /** CSU.18 - Alternate Unit Of Measure Coding System Oid */
  csu_18?: string;
  alternateUnitOfMeasureCodingSystemOid?: string;
  /** CSU.19 - Alternate Unit Of Measure Value Set Oid */
  csu_19?: string;
  alternateUnitOfMeasureValueSetOid?: string;
  /** CSU.20 - Alternate Unit Of Measure Value Set Version Id */
  csu_20?: string;
  alternateUnitOfMeasureValueSetVersionId?: string;
  /** CSU.21 - Alternate Unit Of Measure Coding System Oid */
  csu_21?: string;
  alternateUnitOfMeasureCodingSystemOid21?: string;
  /** CSU.22 - Alternate Unit Of Measure Value Set Oid */
  csu_22?: string;
  alternateUnitOfMeasureValueSetOid22?: string;
  /** CSU.23 - Alternate Unit Of Measure Value Set Version Id */
  csu_23?: string;
  alternateUnitOfMeasureValueSetVersionId23?: string;
}
