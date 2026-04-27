import { HL7_2_4 } from "node-hl7-client/src/hl7/2.4";
import { HL7_2_8 } from "node-hl7-client/src/hl7/2.8";
import { describe, expect, test } from "vitest";

/**
 * Verifies the chainable builder API.
 *
 * `buildXXX(...)` returns `this` so users can either chain calls or use
 * the existing imperative style. Both styles must produce byte-identical
 * output — chaining is purely an ergonomics layer.
 */
describe("builder chaining", () => {
  const DATE = new Date("2024-01-15T10:20:30Z");

  test("buildXXX returns the builder instance", () => {
    const b = new HL7_2_8();
    const ret = b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    expect(ret).toBe(b);
  });

  test("chained calls preserve the version-specific class type", () => {
    // Compile-time check: chaining keeps the HL7_2_4 type so version-specific
    // methods (buildECD) remain accessible on the chain result.
    const out = new HL7_2_4()
      .buildMSH({
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      })
      .buildECD({
        ecd_1: "1",
        ecd_2: "RC",
      })
      .toString();

    expect(out).toContain("MSH|");
    expect(out).toContain("ECD|");
  });

  test("chained and imperative builds produce byte-identical output", () => {
    const chained = new HL7_2_4()
      .buildMSH({
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "ID1",
        msh_11_1: "P",
      })
      .buildECD({
        ecd_1: "1",
        ecd_2: "RC",
        ecd_3: "Y",
      })
      .toString();

    const imperative = new HL7_2_4();
    imperative.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "ID1",
      msh_11_1: "P",
    });
    imperative.buildECD({
      ecd_1: "1",
      ecd_2: "RC",
      ecd_3: "Y",
    });

    expect(chained).toBe(imperative.toString());
  });
});
