/**
 * HL7 v2 spec usage code as defined by the HL7 standard.
 *
 * - `R` Required — field must be populated.
 * - `O` Optional — field may or may not be present.
 * - `B` Backward Compatibility — kept for older versions, profiled to "X" in modern impls.
 * - `W` Withdrawn — element is not to be used; treated as "X" (Not Supported).
 * - `D` Dependent / Conditional — usage depends on another field or trigger event.
 * - `X` Not Supported — element cannot be present.
 *
 * @since 4.0.0
 */
export type HL7UsageCode = "R" | "O" | "B" | "W" | "D" | "X";

/**
 * Supported HL7 v2 spec versions.
 * @since 4.0.0
 */
export type HL7Version =
  | "2.1"
  | "2.2"
  | "2.3"
  | "2.3.1"
  | "2.4"
  | "2.5"
  | "2.5.1"
  | "2.6"
  | "2.7"
  | "2.7.1"
  | "2.8";

/**
 * Description of a single field within a segment, with per-version usage codes.
 *
 * A version that is missing from `usage` means the field does NOT exist in that
 * version of the spec — attempting to set it must be rejected at runtime.
 *
 * @since 4.0.0
 */
export interface FieldSpec {
  /** Field number within the segment, e.g. ECD.4 -> 4. */
  num: number;
  /** Human-readable field name from the HL7 spec. */
  name: string;
  /** HL7 data type identifier, e.g. `"ST"`, `"NM"`, `"DTM"`, `"CWE"`. */
  hl7Type?: string;
  /** Exact length or min/max bounds for string values. */
  length?: number | { min?: number; max?: number };
  /** Restricted set of allowed string values. */
  allowedValues?: string[];
  /** HL7 table id used to validate this field, if any. */
  table?: number;
  /**
   * Conditional dependency — used when usage code is `"D"`. If present, the
   * dependency must resolve before the field is considered satisfied.
   */
  dependsOn?: { path: string; mustBeSet?: boolean; mustEqual?: any };
  /**
   * Per-version usage code map. A version key being absent means the field is
   * not part of that version of the spec at all.
   */
  usage: Partial<Record<HL7Version, HL7UsageCode>>;
}

/**
 * Description of an HL7 segment, with per-version availability and field set.
 * @since 4.0.0
 */
export interface SegmentSpec {
  /** Three-letter segment name, e.g. `"ECD"`. */
  name: string;
  /** Human-readable description of the segment. */
  description: string;
  /**
   * Versions of HL7 in which the segment exists at all. A builder for a version
   * not in this list must reject calls to build the segment.
   */
  versions: readonly HL7Version[];
  /** All fields defined for this segment across any version. */
  fields: readonly FieldSpec[];
}
