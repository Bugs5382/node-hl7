/**
 * CM_ABS_RANGE — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_ABS_RANGE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_abs_range_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_ABS_RANGE {
  /** CM_ABS_RANGE.1 - Range */
  cm_abs_range_1?: string;
  range?: string;
  /** CM_ABS_RANGE.2 - Numeric Change */
  cm_abs_range_2?: string;
  numericChange?: string;
  /** CM_ABS_RANGE.3 - Percent Per Change */
  cm_abs_range_3?: string;
  percentPerChange?: string;
  /** CM_ABS_RANGE.4 - Days */
  cm_abs_range_4?: string;
  days?: string;
}
