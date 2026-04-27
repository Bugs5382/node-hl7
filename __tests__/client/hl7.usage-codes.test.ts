import { HL7ValidationError } from "node-hl7-client/src";
import { HL7_BASE } from "node-hl7-client/src";
import { SegmentSpec } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

/**
 * Exercises the spec-driven validator (`_validatorSetField`) on every HL7
 * usage code: R, O, B, W, D, X, plus the "field not in this version" case.
 *
 * Uses a synthetic `TST` segment spec rather than a real HL7 segment so
 * each scenario can be tested in isolation.
 */

class TestBuilder extends HL7_BASE {
  version = "2.6";

  constructor() {
    super();
    // Without a listener, EventEmitter throws a generic Error on `emit("error", ...)`,
    // shadowing the HL7ValidationError the validator wants to throw.
    this.on("error", () => {});
  }

  /**
   * Set a field on the current synthetic segment. The segment is created
   * lazily on first call so dependsOn checks can find prior fields.
   */
  public callSetField(spec: SegmentSpec, num: number, value: unknown) {
    if (!this._segment || this._segment._name !== spec.name) {
      this._segment = this._message.addSegment(spec.name);
    }
    return this._validatorSetField(spec, num, value);
  }
}

const SPEC: SegmentSpec = {
  name: "TST",
  description: "Test",
  versions: ["2.4", "2.5", "2.5.1", "2.6", "2.7"],
  fields: [
    { num: 1, name: "Required Field", usage: { "2.6": "R" } },
    { num: 2, name: "Optional Field", usage: { "2.6": "O" } },
    {
      num: 3,
      name: "Backward Compat",
      usage: { "2.6": "B" },
      length: { min: 1, max: 5 },
    },
    { num: 4, name: "Withdrawn", usage: { "2.6": "W" } },
    { num: 5, name: "Not Supported", usage: { "2.6": "X" } },
    {
      num: 6,
      name: "Conditional",
      usage: { "2.6": "D" },
      dependsOn: { path: "1", mustBeSet: true },
    },
    { num: 7, name: "Future Field", usage: { "2.7": "O" } },
  ],
};

describe("usage codes — spec-driven validator", () => {
  test("R required field unset throws HL7ValidationError", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 1, undefined)).toThrow(
      HL7ValidationError,
    );
  });

  test("R required field with value succeeds", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 1, "OK")).not.toThrow();
  });

  test("O optional field unset is fine", () => {
    const b = new TestBuilder();
    expect(b.callSetField(SPEC, 2, undefined)).toEqual([]);
  });

  test("B backward-compat field warns but still serializes", () => {
    const b = new TestBuilder();
    let warning: string | undefined;
    b.on("warning", (m: string) => (warning = m));
    const errors = b.callSetField(SPEC, 3, "abc");
    expect(errors.length).toBeGreaterThan(0);
    expect(warning).toContain("deprecated");
    expect(b.toMessage().toString()).toContain("abc");
  });

  test("W withdrawn field throws even with hardError: false", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 4, "boom")).toThrow(
      /withdrawn in HL7 v2\.6/,
    );
  });

  test("X not-supported field throws", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 5, "boom")).toThrow(
      /not supported in HL7 v2\.6/,
    );
  });

  test("D conditional field — dependsOn unmet throws", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 6, "value")).toThrow(HL7ValidationError);
  });

  test("D conditional field — dependsOn satisfied succeeds", () => {
    const b = new TestBuilder();
    b.callSetField(SPEC, 1, "anchor");
    expect(() => b.callSetField(SPEC, 6, "value")).not.toThrow();
  });

  test("field not present in this version throws when set", () => {
    const b = new TestBuilder();
    expect(() => b.callSetField(SPEC, 7, "future")).toThrow(
      /not available in HL7 v2\.6/,
    );
  });

  test("field not present in this version + no value is a no-op", () => {
    const b = new TestBuilder();
    expect(b.callSetField(SPEC, 7, undefined)).toEqual([]);
  });
});
