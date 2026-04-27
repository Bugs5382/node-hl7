import { HL7ValidationError } from "node-hl7-client/src";
import { HL7_2_3_1 } from "node-hl7-client/src";
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { HL7_2_8 } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

/**
 * ECD (Equipment Command) per-version behavior.
 *
 * - ECD did not exist before v2.4 → builder must reject the call.
 * - In v2.4–v2.5.1, ECD.4 is `O` (Optional) — settable.
 * - In v2.6–v2.7.1, ECD.4 is `B` (Backward Compatibility) — settable but
 *   emits a deprecation warning.
 * - In v2.8, ECD.4 is `W` (Withdrawn) — must throw if set, must succeed
 *   when omitted.
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

describe("ECD per-version availability", () => {
  test("v2.4 accepts ecd_4", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildECD({
      ecd_1: "1",
      ecd_2: "RC",
      ecd_4: "20260101",
    });
    const out = b.toString();
    expect(out).toContain("ECD|1|RC||20260101");
  });

  test("v2.6 accepts ecd_4 but warns it's deprecated", () => {
    const b = new HL7_2_6();
    let warned = "";
    b.on("warning", (m: string) => (warned += m));
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildECD({ ecd_1: "1", ecd_2: "RC", ecd_4: "20260101" });
    expect(warned).toMatch(/deprecated/);
    expect(b.toString()).toContain("ECD|1|RC||20260101");
  });

  test("v2.8 rejects ecd_4 with a hard error", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() =>
      b.buildECD({
        ecd_1: "1",
        ecd_2: "RC",
        // @ts-expect-error — ecd_4 is typed as `never` in v2.8
        ecd_4: "20260101",
      }),
    ).toThrow(HL7ValidationError);
  });

  test("v2.8 succeeds when ecd_4 is omitted", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH(header());
    b.buildECD({ ecd_1: "1", ecd_2: "RC" });
    expect(b.toString()).toContain("ECD|1|RC");
    expect(b.toString()).not.toContain("20260101");
  });

  test("v2.3.1 has no buildECD method (compile-time)", () => {
    const b = new HL7_2_3_1();
    // @ts-expect-error — buildECD is not a member of HL7_2_3_1
    expect(typeof b.buildECD).toBe("undefined");
  });

  test("required ECD.1 unset throws", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH(header());
    expect(() => b.buildECD({ ecd_2: "RC" })).toThrow(HL7ValidationError);
  });
});
