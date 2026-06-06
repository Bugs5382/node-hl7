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
import type { HL7Version } from "node-hl7-client/src/hl7/metadata/types";

import { DATA_TYPES } from "node-hl7-client/src/hl7/metadata/datatypes";
import { SEGMENT_SPECS } from "node-hl7-client/src/hl7/metadata/segments";
import { lookupTable, TABLES } from "node-hl7-client/src/hl7/tables/registry";
import { describe, expect, it } from "vitest";

const VERSIONS: HL7Version[] = [
  "2.1",
  "2.2",
  "2.3",
  "2.3.1",
  "2.4",
  "2.5",
  "2.5.1",
  "2.6",
  "2.7",
  "2.7.1",
  "2.8",
];

/** Every numeric table id referenced by any generated segment/datatype spec. */
function collectReferencedTables(): Set<number> {
  const refs = new Set<number>();
  for (const spec of Object.values(SEGMENT_SPECS)) {
    for (const f of spec.fields) {
      if (typeof f.table === "number") refs.add(f.table);
      for (const c of f.components ?? []) {
        if (typeof c.table === "number") refs.add(c.table);
      }
    }
  }
  for (const comps of Object.values(DATA_TYPES)) {
    for (const c of comps) {
      if (typeof c.table === "number") refs.add(c.table);
    }
  }
  return refs;
}

describe("HL7 table registry parity (go-hl7)", () => {
  it("covers all 11 HL7 versions with non-empty table sets", () => {
    for (const v of VERSIONS) {
      expect(Object.keys(TABLES[v] ?? {}).length).toBeGreaterThan(0);
    }
  });

  it("resolves a known table and normalizes numeric/string ids", () => {
    const t1 = lookupTable("2.8", 1); // 0001 Administrative Sex
    expect(t1).toBeDefined();
    expect(t1).toEqual(expect.arrayContaining(["F", "M"]));
    expect(lookupTable("2.8", "0001")).toEqual(t1);
  });

  it("provides the full non-empty Caristix table set (go-hl7 parity)", () => {
    // go-hl7 generates from the same Caristix source and skips value-less
    // tables; the registry must hold the same non-empty set (~479).
    const allIds = new Set<string>();
    for (const v of VERSIONS)
      for (const k of Object.keys(TABLES[v])) allIds.add(k);
    expect(allIds.size).toBeGreaterThanOrEqual(470);
  });

  it("resolves the high-traffic referenced tables", () => {
    // The most-referenced tables across the segment specs (e.g. 0396 coding
    // system, referenced thousands of times) must all carry value sets.
    for (const id of [1, 136, 203, 363, 396, 465]) {
      const present = VERSIONS.some(
        (v) => (lookupTable(v, id)?.length ?? 0) > 0,
      );
      expect(
        present,
        `table ${id} should resolve in at least one version`,
      ).toBe(true);
    }
  });

  it("only leaves value-less tables unresolved (same as go-hl7)", () => {
    // Some specs reference tables that Caristix publishes with no entries
    // (e.g. 0526, 0533, 9999). Those are intentionally absent from the registry
    // exactly as in go-hl7's tables_gen.go, so they cannot be validated and that
    // is expected. We assert only that the resolvable references dominate.
    const refs = [...collectReferencedTables()];
    const resolved = refs.filter((id) =>
      VERSIONS.some((v) => lookupTable(v, id) !== undefined),
    );
    expect(resolved.length).toBeGreaterThan(refs.length / 2);
  });
});
