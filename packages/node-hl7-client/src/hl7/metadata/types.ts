/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
/**
 * Description of one sub-component inside a composite field.
 *
 * @remarks
 * For composite HL7 data types (e.g. `XAD` Extended Address, `XPN` Extended
 * Person Name, `CE`/`CWE` coded elements, `CX` Extended Composite Id), the
 * field value is a `^`-delimited list whose pieces each have their own
 * data type, length, optionality, and possibly table reference.
 *
 * `components` are populated automatically by the spec generator from the
 * Caristix DataType endpoint. They are documentation/metadata only — the
 * builder does not enforce per-component validation today (the user remains
 * responsible for assembling the composite string).
 *
 * @since 4.0.0
 */
export interface ComponentSpec {
  /** HL7 data type, e.g. `"ST"`, `"DTM"`, `"SAD"`. */
  hl7Type?: string;
  /** Exact length or min/max bounds. */
  length?: { max?: number; min?: number } | number;
  /** Human-readable component name. */
  name: string;
  /** Position within the field, 1-based (e.g. `XAD.3 City` -> 3). */
  num: number;
  /** Cardinality from Caristix (`"1"` = single, `"*"` = unbounded, etc.). */
  rpt?: string;
  /** Numeric HL7 table id, if the component is enumerated. String table
   * names (e.g. `"Street"`, `"City"`) used by Caristix as informal hints
   * are dropped during generation since they have no machine-readable
   * value list. */
  table?: number;
  /** HL7 usage code (R/O/B/W/D/X) at this component position, as published
   * for the parent data type or field. Sub-component usage isn't versioned
   * the same way fields are — composite types evolved less frequently —
   * so we store a single canonical value. */
  usage?: HL7UsageCode;
}

/**
 * Description of a single field within a segment, with per-version usage codes.
 *
 * A version that is missing from `usage` means the field does NOT exist in that
 * version of the spec — attempting to set it must be rejected at runtime.
 *
 * @since 4.0.0
 */
export interface FieldSpec {
  /** Restricted set of allowed string values. */
  allowedValues?: string[];
  /**
   * Sub-components for composite data types (XAD, XPN, CE, CWE, CX, ...).
   * Empty/absent for primitive fields (ST, NM, ID, DTM, ...). Generated
   * from the Caristix DataType endpoint per the latest version of the spec
   * where this segment exists.
   */
  components?: readonly ComponentSpec[];
  /**
   * Conditional dependency — used when usage code is `"D"`. If present, the
   * dependency must resolve before the field is considered satisfied.
   */
  dependsOn?: { mustBeSet?: boolean; mustEqual?: any; path: string };
  /** HL7 data type identifier, e.g. `"ST"`, `"NM"`, `"DTM"`, `"CWE"`. */
  hl7Type?: string;
  /** Exact length or min/max bounds for string values. */
  length?: { max?: number; min?: number } | number;
  /** Human-readable field name from the HL7 spec. */
  name: string;
  /** Field number within the segment, e.g. ECD.4 -> 4. */
  num: number;
  /** HL7 table id used to validate this field, if any. */
  table?: number;
  /**
   * Per-version usage code map. A version key being absent means the field is
   * not part of that version of the spec at all.
   */
  usage: Partial<Record<HL7Version, HL7UsageCode>>;
}

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
export type HL7UsageCode = "B" | "D" | "O" | "R" | "W" | "X";

/**
 * Supported HL7 v2 spec versions.
 * @since 4.0.0
 */
export type HL7Version =
  | "2.1"
  | "2.2"
  | "2.3.1"
  | "2.3"
  | "2.4"
  | "2.5.1"
  | "2.5"
  | "2.6"
  | "2.7.1"
  | "2.7"
  | "2.8";

/**
 * Description of an HL7 segment, with per-version availability and field set.
 * @since 4.0.0
 */
export interface SegmentSpec {
  /** Human-readable description of the segment. */
  description: string;
  /** All fields defined for this segment across any version. */
  fields: readonly FieldSpec[];
  /** Three-letter segment name, e.g. `"ECD"`. */
  name: string;
  /**
   * Versions of HL7 in which the segment exists at all. A builder for a version
   * not in this list must reject calls to build the segment.
   */
  versions: readonly HL7Version[];
}
