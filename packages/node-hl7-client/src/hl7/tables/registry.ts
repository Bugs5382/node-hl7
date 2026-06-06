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
 * Per-version HL7 value tables (code sets) — full parity with go-hl7, generated
 * from the Caristix HL7 Definition tables by scripts/generate-tables.mjs. Do not
 * edit by hand — re-run the generator. Data lives in registry.data.js (kept out
 * of the type-checked program; a literal this large hangs typescript-eslint).
 *
 * @since 4.0.0
 */
import { HL7Version } from "@/hl7/metadata/types";

import { RAW_TABLES } from "./registry.data.js";

export const TABLES = RAW_TABLES as Readonly<
  Record<HL7Version, Readonly<Record<string, readonly string[]>>>
>;

/**
 * Look up an HL7 value table's allowed values for a given version. Accepts a
 * numeric id (e.g. `396`) or string id (e.g. `"0396"`); ids normalize to
 * 4-char zero-padded form. Returns undefined when the version lacks the table.
 *
 * @since 4.0.0
 */
export function lookupTable(
  version: HL7Version,
  id: number | string,
): readonly string[] | undefined {
  const key =
    typeof id === "number" ? String(id).padStart(4, "0") : id.padStart(4, "0");
  return TABLES[version]?.[key];
}
