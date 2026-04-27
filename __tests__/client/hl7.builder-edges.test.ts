import { Message } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";
import { MSH_HEADER } from "./__data__/constants";

/**
 * Edge-case coverage for the low-level builder modules — Segment,
 * SegmentList, SubComponent, Component, Field. These code paths are not
 * exercised by the version-builder tests (which work through the high-level
 * `buildXXX` API) but are important for users who manipulate parsed
 * messages directly.
 */
describe("Segment.set — array values, numeric paths, bad input", () => {
  function freshSegment() {
    const m = new Message({ messageHeader: { ...MSH_HEADER, msh_10: "X" } });
    return { m, seg: m.addSegment("PID") };
  }

  test("string path + array value writes each element as a sub-component", () => {
    const { m, seg } = freshSegment();
    seg.set("3", ["MRN1", "MRN2", "MRN3"]);
    expect(m.get("PID.3.1").toString()).toBe("MRN1");
    expect(m.get("PID.3.2").toString()).toBe("MRN2");
    expect(m.get("PID.3.3").toString()).toBe("MRN3");
  });

  test("numeric path + array value writes a repeated field", () => {
    const { seg } = freshSegment();
    seg.set(5, ["DOE", "JANE"]);
    // Round-tripping via toString proves both elements were written.
    expect(seg.toString()).toContain("DOE");
    expect(seg.toString()).toContain("JANE");
  });

  test("numeric path + scalar value writes a single field", () => {
    const { m, seg } = freshSegment();
    seg.set(3, "MRN1");
    expect(m.get("PID.3").toString()).toContain("MRN1");
  });

});

describe("SegmentList — repeated segments expose read/write/path", () => {
  function withTwoEvns() {
    const m = new Message({ messageHeader: { ...MSH_HEADER, msh_10: "X" } });
    m.addSegment("EVN").set("1", "A01");
    m.addSegment("EVN").set("1", "A04");
    return m;
  }

  test("get('EVN').toString() returns the first segment", () => {
    const m = withTwoEvns();
    expect(m.get("EVN").toString()).toContain("EVN|A01");
  });

  test("get('EVN.1').toString() reads via the list to the first segment", () => {
    // Segment-name-prefixed paths route through SegmentList.read() on
    // top-level access. This exercises the read/pathCore code paths.
    const m = withTwoEvns();
    expect(m.get("EVN.1").toString()).toBe("A01");
  });

  test("set('EVN.1') writes through the list to the first segment", () => {
    const m = withTwoEvns();
    m.set("EVN.1", "A08");
    expect(m.get("EVN.1").toString()).toBe("A08");
  });
});

describe("SubComponent / Component / FieldRepetition — composite parsing", () => {
  // Build a parsed message with deeply nested values so we hit every level
  // of the path-resolution chain.
  const text =
    "MSH|^~\\&|||||20240101000000||ADT^A01|CTRL|D|2.7\r" +
    "PID|||MRN1^^^FAC&SYS&IDTYPE~MRN2^^^FAC2&SYS2";

  test("Component.read returns the named sub-component", () => {
    const m = new Message({ text });
    expect(m.get("PID.3.4.2").toString()).toBe("SYS");
  });

  test("FieldRepetition.read traverses repetition then sub-paths", () => {
    const m = new Message({ text });
    // PID.3 has two repetitions; .[1] is the second.
    expect(m.get("PID.3").get(1).get(0).toString()).toBe("MRN2");
  });

  test("SubComponent.isEmpty is true for missing depths", () => {
    const m = new Message({ text });
    // Reach for a sub-component that doesn't exist at this depth.
    expect(m.get("PID.3.4.99").isEmpty()).toBe(true);
  });

  test("SubComponent.isEmpty is false when value exists", () => {
    const m = new Message({ text });
    expect(m.get("PID.3.4.1").isEmpty()).toBe(false);
  });
});

describe("RootBase escape / unescape", () => {
  test("unescape passes through text with no escape character", () => {
    // Common case: no \E\ → fast path returns text untouched.
    const m = new Message({ messageHeader: { ...MSH_HEADER, msh_10: "X" } });
    m.set("PID.5.1", "DOE");
    expect(m.get("PID.5.1").toString()).toBe("DOE");
  });

  test("unescape decodes \\F\\, \\S\\, \\R\\, \\T\\, \\E\\ sequences", () => {
    // Build raw text containing each escape — \F\ → |, \S\ → ^, etc.
    const raw =
      "MSH|^~\\&|||||20240101000000||ADT^A01|CTRL|D|2.7\rNTE|1|L|A\\F\\B\\S\\C\\R\\D\\T\\E\\E\\F";
    const m = new Message({ text: raw });
    // The NTE.3 sub-field should expand the escapes back to delimiter chars.
    const out = m.get("NTE.3").toString();
    expect(out).toContain("A|B");
    expect(out).toContain("^C");
    expect(out).toContain("~D");
    expect(out).toContain("&E");
  });

  test("unescape decodes \\X..\\ hex sequences to characters", () => {
    // \X4869\ → "Hi"
    const raw =
      "MSH|^~\\&|||||20240101000000||ADT^A01|CTRL|D|2.7\rNTE|1|L|\\X4869\\";
    const m = new Message({ text: raw });
    expect(m.get("NTE.3").toString()).toBe("Hi");
  });

  test("unescape drops unsupported control codes (C/H/M/N/Z)", () => {
    const raw =
      "MSH|^~\\&|||||20240101000000||ADT^A01|CTRL|D|2.7\rNTE|1|L|A\\C\\B\\H\\C\\M\\D\\N\\E\\Z\\";
    const m = new Message({ text: raw });
    // The control sequences should collapse to empty string between chars.
    expect(m.get("NTE.3").toString()).toBe("ABCDE");
  });
});
