import { HL7ValidationError } from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src";
import { HL7_2_3_1 } from "node-hl7-client/src";
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { HL7_2_7 } from "node-hl7-client/src";
import { HL7_2_8 } from "node-hl7-client/src";
import {
  ECD_SPEC,
  SEGMENT_SPECS,
} from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

/**
 * End-to-end coverage for the auto-generated `SegmentSpec` catalogue.
 *
 * The generator (scripts/generate-segment-specs.mjs) sources from the
 * Caristix HL7 Definition API. These tests verify a representative slice
 * of the data: total counts, version coverage, the canonical user-flagged
 * ECD.4 = W in v2.8 case, and `buildSegment(...)` runtime behavior across
 * multiple versions.
 */

const DATE = new Date("2024-01-15T10:20:30Z");

function header() {
  return {
    msh_7: DATE,
    msh_9_1: "ADT",
    msh_9_2: "A01",
    msh_10: "X",
    msh_11_1: "P" as const,
  };
}

describe("SegmentSpec catalogue coverage", () => {
  test("catalogue covers a substantial number of segments", () => {
    const names = Object.keys(SEGMENT_SPECS);
    expect(names.length).toBeGreaterThan(150);
  });

  test("every spec lists at least one supported version", () => {
    for (const [name, spec] of Object.entries(SEGMENT_SPECS)) {
      expect(spec.versions.length, `segment ${name}`).toBeGreaterThan(0);
    }
  });

  test("every field's usage map only references declared segment versions", () => {
    for (const [name, spec] of Object.entries(SEGMENT_SPECS)) {
      const declared = new Set(spec.versions);
      for (const f of spec.fields) {
        for (const v of Object.keys(f.usage)) {
          expect(declared.has(v as never), `${name}.${f.num} v${v}`).toBe(true);
        }
      }
    }
  });

  test("ECD spec — ECD.4 is W in v2.8 (the user-flagged canonical case)", () => {
    const ecd4 = ECD_SPEC.fields.find((f) => f.num === 4);
    expect(ecd4).toBeDefined();
    expect(ecd4!.usage["2.8"]).toBe("W");
    // ECD did not exist before v2.4
    expect(ECD_SPEC.versions).not.toContain("2.3.1");
    expect(ECD_SPEC.versions).not.toContain("2.1");
  });

  test("composite fields carry sub-component metadata (PID.11 / XAD)", () => {
    const pid11 = SEGMENT_SPECS.PID.fields.find((f) => f.num === 11);
    expect(pid11?.hl7Type).toBe("XAD");
    expect(pid11?.components?.length ?? 0).toBeGreaterThan(5);

    const byName = (n: string) =>
      pid11!.components!.find((c) => c.name.toLowerCase() === n.toLowerCase());
    expect(byName("Street Address")).toBeDefined();
    expect(byName("City")).toBeDefined();
    expect(byName("State Or Province")).toBeDefined();
    expect(byName("Zip Or Postal Code")).toBeDefined();
  });

  test("primitive fields have no sub-components", () => {
    // PID.1 is SI (primitive) — no decomposition.
    const pid1 = SEGMENT_SPECS.PID.fields.find((f) => f.num === 1);
    expect(pid1?.hl7Type).toMatch(/SI|NM/);
    expect(pid1?.components).toBeUndefined();
  });

  test("composite components track HL7 tables when applicable", () => {
    // XAD.6 (Country) is an ID field validated against table 399.
    const pid11 = SEGMENT_SPECS.PID.fields.find((f) => f.num === 11);
    const country = pid11?.components?.find((c) => c.name === "Country");
    expect(country?.table).toBe(399);
  });
});

describe("buildSegment — generic spec-driven builder", () => {
  test("v2.4 builds ECD with required fields", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildSegment("ECD", { ecd_1: "1", ecd_2: "RC" });
    expect(b.toString()).toContain("ECD|1|RC");
  });

  test("v2.4 → v2.8 chained build with multiple segments", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    const out = b
      .buildMSH(header())
      .buildSegment("ECD", { ecd_1: "1", ecd_2: "RC" })
      .toString();
    expect(out).toContain("MSH|");
    expect(out).toContain("ECD|");
  });

  test("v2.8 rejects ECD.4 (W) via buildSegment", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() =>
      b.buildSegment("ECD", { ecd_1: "1", ecd_2: "RC", ecd_4: "20260101" }),
    ).toThrow(HL7ValidationError);
  });

  test("v2.3.1 rejects ECD entirely (segment not in version)", () => {
    const b = new HL7_2_3_1();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() => b.buildSegment("ECD", { ecd_1: "1" })).toThrow(
      /not part of HL7 v2\.3\.1/,
    );
  });

  test("v2.1 rejects ECD entirely (introduced in v2.4)", () => {
    const b = new HL7_2_1();
    b.on("error", () => {});
    b.buildMSH({
      msh_3: "APP",
      msh_5: "RECV_APP",
      msh_7: DATE,
      msh_9: "ACK",
      msh_10: "X",
      msh_11: "T",
    });
    expect(() => b.buildSegment("ECD", { ecd_1: "1" })).toThrow(
      /not part of HL7 v2\.1/,
    );
  });

  test("buildSegment refuses unknown segment names", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() => b.buildSegment("XYZ", {})).toThrow(/Unknown HL7 segment/);
  });

  test("buildSegment refuses MSH (must use buildMSH)", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() => b.buildSegment("MSH", {})).toThrow(/Use buildMSH/);
  });

  test("buildSegment is chainable (returns this)", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH(header());
    const ret = b.buildSegment("ECD", { ecd_1: "1", ecd_2: "RC" });
    expect(ret).toBe(b);
  });

  test("v2.6 emits B warning for ECD.4 (Backward Compatibility)", () => {
    const b = new HL7_2_6();
    let warned = "";
    b.on("warning", (m: string) => (warned += m));
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildSegment("ECD", { ecd_1: "1", ecd_2: "RC", ecd_4: "20260101" });
    expect(warned).toMatch(/deprecated/);
  });

  test("v2.7 rejects ECD.4 (W) — withdrawn earlier than v2.8", () => {
    const b = new HL7_2_7();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() =>
      b.buildSegment("ECD", { ecd_1: "1", ecd_2: "RC", ecd_4: "20260101" }),
    ).toThrow(/withdrawn in HL7 v2\.7/);
  });

  test("buildSegment accepts numeric-string keys as well as <name>_<n> keys", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildSegment("ECD", { 1: "1", 2: "RC" });
    expect(b.toString()).toContain("ECD|1|RC");
  });
});
