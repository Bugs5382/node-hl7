import {
  DATA_TYPES,
  HL7ValidationError,
  HL7_2_8,
  HL7_XAD,
  HL7_XPN,
} from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

/**
 * Verifies that composite HL7 fields (XAD, XPN, CWE, …) accept structured
 * objects in addition to pre-formatted `^`-delimited strings, and that the
 * runtime composer validates each component (R required, W/X rejected,
 * length-checked) and produces byte-identical output to the equivalent
 * string.
 */
describe("composite-object inputs (typed components)", () => {
  const DATE = new Date("2024-01-15T10:20:30Z");

  function builder(): HL7_2_8 {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    return b;
  }

  test("PID.11 (XAD) accepts a typed object with camelCase keys", () => {
    const b = builder();
    const addr: HL7_XAD = {
      streetAddress: "123 Elm St",
      city: "Springfield",
      stateOrProvince: "IL",
      zipOrPostalCode: "62701",
    };
    b.buildPID({ pid_3: "MRN1", pid_5: "DOE^JANE", pid_11: addr as never });
    expect(b.toString()).toContain("123 Elm St^^Springfield^IL^62701");
  });

  test("camelCase object and pre-formatted string produce identical wire output", () => {
    const obj = builder();
    obj.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_11: {
        streetAddress: "123 Elm St",
        city: "Springfield",
        stateOrProvince: "IL",
        zipOrPostalCode: "62701",
      } as never,
    });

    const str = builder();
    str.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_11: "123 Elm St^^Springfield^IL^62701",
    });

    expect(obj.toString()).toBe(str.toString());
  });

  test("PID.5 (XPN) accepts a typed object with both numeric and camelCase keys", () => {
    const b = builder();
    const name: HL7_XPN = {
      // Mixing styles in a single object is allowed.
      xpn_1: "DOE",
      givenName: "JANE",
      xpn_3: "M",
    };
    b.buildPID({ pid_3: "MRN1", pid_5: name as never });
    expect(b.toString()).toContain("PID|||MRN1||DOE^JANE^M");
  });

  test("trailing empty components are trimmed for clean wire output", () => {
    const b = builder();
    // Only first three populated; the 23-component XAD definition shouldn't
    // emit 20 trailing carets.
    b.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_11: {
        streetAddress: "123 Elm St",
        city: "Springfield",
      } as never,
    });
    expect(b.toString()).toContain("123 Elm St^^Springfield");
    expect(b.toString()).not.toMatch(/123 Elm St\^\^Springfield\^{15,}/);
  });

  test("max-length violation on a component is rejected", () => {
    const b = builder();
    // XAD.6 (Country) has length 3 max.
    expect(() =>
      b.buildPID({
        pid_3: "MRN1",
        pid_5: "DOE^JANE",
        pid_11: {
          streetAddress: "123 Elm St",
          country: "UNITED_STATES_OF_AMERICA",
        } as never,
      }),
    ).toThrow(HL7ValidationError);
  });

  test("withdrawn component (W) is rejected when set", () => {
    // XPN.10 (Name Validity Range) is W in v2.8.
    const b = builder();
    expect(() =>
      b.buildPID({
        pid_3: "MRN1",
        pid_5: {
          xpn_1: "DOE",
          xpn_2: "JANE",
          xpn_10: "shouldNotSet",
        } as never,
      }),
    ).toThrow(/withdrawn/);
  });

  test("primitive fields still accept plain strings", () => {
    const b = builder();
    // PID.7 (DTM) is primitive — composite logic doesn't kick in.
    b.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_7: "19800101120000",
    });
    expect(b.toString()).toContain("19800101");
  });

  test("DATA_TYPES catalogue exposes component layout for composite types", () => {
    expect(DATA_TYPES.XAD?.length).toBeGreaterThanOrEqual(20);
    expect(DATA_TYPES.XPN?.length).toBeGreaterThanOrEqual(10);
    const xad1 = DATA_TYPES.XAD?.find((c: { num: number; }) => c.num === 1);
    expect(xad1?.name).toBe("Street Address");
  });
});
