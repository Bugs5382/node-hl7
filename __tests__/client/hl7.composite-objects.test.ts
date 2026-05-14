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
import {
  DATA_TYPES,
  HL7_2_8,
  HL7_XAD,
  HL7_XPN,
  HL7ValidationError,
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
      msh_10: "X",
      msh_11_1: "P",
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
    });
    return b;
  }

  test("PID.11 (XAD) accepts a typed object with camelCase keys", () => {
    const b = builder();
    const addr: HL7_XAD = {
      city: "Springfield",
      stateOrProvince: "IL",
      streetAddress: "123 Elm St",
      zipOrPostalCode: "62701",
    };
    b.buildPID({ pid_11: addr as never, pid_3: "MRN1", pid_5: "DOE^JANE" });
    expect(b.toString()).toContain("123 Elm St^^Springfield^IL^62701");
  });

  test("camelCase object and pre-formatted string produce identical wire output", () => {
    const object = builder();
    object.buildPID({
      pid_11: {
        city: "Springfield",
        stateOrProvince: "IL",
        streetAddress: "123 Elm St",
        zipOrPostalCode: "62701",
      } as never,
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
    });

    const string_ = builder();
    string_.buildPID({
      pid_11: "123 Elm St^^Springfield^IL^62701",
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
    });

    expect(object.toString()).toBe(string_.toString());
  });

  test("PID.5 (XPN) accepts a typed object with both numeric and camelCase keys", () => {
    const b = builder();
    const name: HL7_XPN = {
      givenName: "JANE",
      // Mixing styles in a single object is allowed.
      xpn_1: "DOE",
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
      pid_11: {
        city: "Springfield",
        streetAddress: "123 Elm St",
      } as never,
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
    });
    expect(b.toString()).toContain("123 Elm St^^Springfield");
    expect(b.toString()).not.toMatch(/123 Elm St\^\^Springfield\^{15,}/);
  });

  test("max-length violation on a component is rejected", () => {
    const b = builder();
    // XAD.6 (Country) has length 3 max.
    expect(() =>
      b.buildPID({
        pid_11: {
          country: "UNITED_STATES_OF_AMERICA",
          streetAddress: "123 Elm St",
        } as never,
        pid_3: "MRN1",
        pid_5: "DOE^JANE",
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
          xpn_10: "shouldNotSet",
          xpn_2: "JANE",
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
    const xad1 = DATA_TYPES.XAD?.find((c: { num: number }) => c.num === 1);
    expect(xad1?.name).toBe("Street Address");
  });
});
