/**
 * CM_CD_ELECTRODE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_CD_ELECTRODE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_cd_electrode_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_CD_ELECTRODE {
  /** CM_CD_ELECTRODE.1 - Source Name 1 */
  cm_cd_electrode_1?: string;
  /** CM_CD_ELECTRODE.2 - Source Name 2 */
  cm_cd_electrode_2?: string;
  sourceName1?: string;
  sourceName2?: string;
}
