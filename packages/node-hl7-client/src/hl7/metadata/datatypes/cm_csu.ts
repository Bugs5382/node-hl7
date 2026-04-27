/**
 * CM_CSU — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_CSU)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_csu_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_CSU {
  /** CM_CSU.1 - Sensitivity */
  cm_csu_1?: string;
  sensitivity?: string;
  /** CM_CSU.2 - Unit Identifier */
  cm_csu_2?: string;
  unitIdentifier?: string;
  /** CM_CSU.3 - Unit Text */
  cm_csu_3?: string;
  unitText?: string;
  /** CM_CSU.4 - Units Name Of Coding System */
  cm_csu_4?: string;
  unitsNameOfCodingSystem?: string;
  /** CM_CSU.5 - Units Alternate Identifier */
  cm_csu_5?: string;
  unitsAlternateIdentifier?: string;
  /** CM_CSU.6 - Units Alternate Text */
  cm_csu_6?: string;
  unitsAlternateText?: string;
  /** CM_CSU.7 - Units Name Of Alternate Coding System */
  cm_csu_7?: string;
  unitsNameOfAlternateCodingSystem?: string;
}
