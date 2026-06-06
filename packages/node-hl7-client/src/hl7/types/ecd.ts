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
 * v2.8 narrowing of `HL7_ECD`. ECD.4 was withdrawn in v2.8 — typing it as
 * `never` makes assignment a compile-time error.
 *
 * @since 4.0.0
 */
export type HL7_2_8_ECD = {
  ecd_4?: never;
  requestedCompletionTime?: never;
} & Omit<HL7_ECD, "ecd_4" | "requestedCompletionTime">;

/**
 * HL7 ECD — Equipment Command segment.
 *
 * Field availability differs per HL7 spec version. The base `HL7_ECD`
 * interface lists every field that exists in any version (introduced in v2.4).
 * Per-version aliases narrow this set by typing fields as `never` when they
 * are withdrawn (W) or not supported (X) in that version, so the IDE flags
 * them at compile time.
 *
 * @since 4.0.0
 */
export interface HL7_ECD {
  /** ECD.1 — Reference Command Number (NM, R). */
  ecd_1: number | string;
  /** ECD.2 — Remote Control Command (CWE, R, table 0368). */
  ecd_2: string;
  /** ECD.3 — Response Required (ID, O, table 0136). */
  ecd_3?: "N" | "Y";
  /**
   * ECD.4 — Requested Completion Time (TQ).
   *
   * Available as `O` in v2.4–v2.5.1, `B` (Backward Compatibility) in
   * v2.6–v2.7.1, and **Withdrawn (`W`) in v2.8**. The v2.8 narrowed type
   * removes this field from the IDE's autocomplete and flags any attempt
   * to set it as a TypeScript error. Runtime check enforces the same.
   */
  ecd_4?: string;
  /** ECD.5 — Parameters (TX, O, repeatable). */
  ecd_5?: string;
  parameters?: string;
  referenceCommandNumber?: number | string;
  remoteControlCommand?: string;
  requestedCompletionTime?: string;
  responseRequired?: "N" | "Y";
}
