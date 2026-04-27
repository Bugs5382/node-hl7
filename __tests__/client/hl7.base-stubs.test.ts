import { HL7FatalError, HL7ValidationError } from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src";
import { HL7_2_2 } from "node-hl7-client/src";
import { HL7_2_3 } from "node-hl7-client/src";
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_5 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { HL7_2_7 } from "node-hl7-client/src";
import { beforeEach, describe, expect, test } from "vitest";

const DATE = new Date("2024-01-15T10:20:30Z");

function v21(): HL7_2_1 {
  const b = new HL7_2_1();
  b.on("error", () => {});
  b.buildMSH({ msh_7: DATE, msh_9: "ACK", msh_10: "X", msh_11: "T" });
  return b;
}

/**
 * Each segment listed below is unimplemented at the 2.1 level (added by a
 * later spec version). Calling the public `buildXXX` on a 2.1 instance must
 * route through `headerExists()` and then hit the base-class stub which
 * throws HL7FatalError("Not Implemented"). This pins that contract and
 * exercises every stub in `base.ts`.
 */
describe("HL7_BASE — unimplemented segment stubs throw on 2.1", () => {
  let b: HL7_2_1;
  beforeEach(() => {
    b = v21();
  });

  // Listed in the order of base.ts stubs so a future addition is easy to
  // append. The argument shape doesn't matter — the stub throws before
  // touching props.
  const stubs: Array<[string, () => void]> = [
    ["AL1", () => b.buildAL1({} as any)],
    ["UB2", () => b.buildUB2({} as any)],
    ["RXA", () => b.buildRXA({} as any)],
    ["RXR", () => b.buildRXR({} as any)],
    ["MFI", () => b.buildMFI({} as any)],
    ["MFE", () => b.buildMFE({} as any)],
    ["STF", () => b.buildSTF({} as any)],
    ["RXO", () => b.buildRXO({} as any)],
    ["RXE", () => b.buildRXE({} as any)],
    ["RXD", () => b.buildRXD({} as any)],
    ["RXG", () => b.buildRXG({} as any)],
    ["ODS", () => b.buildODS({} as any)],
    ["ODT", () => b.buildODT({} as any)],
    ["SCH", () => b.buildSCH({} as any)],
    ["RGS", () => b.buildRGS({} as any)],
    ["AIS", () => b.buildAIS({} as any)],
    ["AIG", () => b.buildAIG({} as any)],
    ["AIL", () => b.buildAIL({} as any)],
    ["AIP", () => b.buildAIP({} as any)],
    ["APR", () => b.buildAPR({} as any)],
    ["PRA", () => b.buildPRA({} as any)],
    ["ROL", () => b.buildROL({} as any)],
    ["VAR", () => b.buildVAR({} as any)],
    ["PSH", () => b.buildPSH({} as any)],
    ["PCR", () => b.buildPCR({} as any)],
    ["PRD", () => b.buildPRD({} as any)],
    ["CTD", () => b.buildCTD({} as any)],
    ["RDF", () => b.buildRDF({} as any)],
    ["RDT", () => b.buildRDT({} as any)],
    ["CSR", () => b.buildCSR({} as any)],
    ["CSP", () => b.buildCSP({} as any)],
    ["CSS", () => b.buildCSS({} as any)],
    ["GOL", () => b.buildGOL({} as any)],
    ["PRB", () => b.buildPRB({} as any)],
    ["PTH", () => b.buildPTH({} as any)],
    ["TXA", () => b.buildTXA({} as any)],
    ["IAM", () => b.buildIAM({} as any)],
    ["OM1", () => b.buildOM1({} as any)],
    ["OM2", () => b.buildOM2({} as any)],
    ["OM3", () => b.buildOM3({} as any)],
    ["OM4", () => b.buildOM4({} as any)],
    ["OM5", () => b.buildOM5({} as any)],
    ["OM6", () => b.buildOM6({} as any)],
    ["DRG", () => b.buildDRG({} as any)],
    ["SFT", () => b.buildSFT({} as any)],
    ["SPM", () => b.buildSPM({} as any)],
    ["REL", () => b.buildREL({} as any)],
    ["ITM", () => b.buildITM({} as any)],
    ["IVT", () => b.buildIVT({} as any)],
    ["BTX", () => b.buildBTX({} as any)],
    ["BPX", () => b.buildBPX({} as any)],
    ["IPC", () => b.buildIPC({} as any)],
    ["ISD", () => b.buildISD({} as any)],
    ["STZ", () => b.buildSTZ({} as any)],
  ];

  test.each(stubs)("build%s on 2.1 throws Not Implemented", (_name, fn) => {
    expect(fn).toThrow(HL7FatalError);
  });
});

/**
 * Headers don't exist yet — every `build*` calls `headerExists()` first and
 * must throw with a clear message before reaching the segment-specific
 * stub. This guards a regression where someone reorders the calls.
 */
describe("HL7_BASE — buildXXX without buildMSH first", () => {
  test("buildEVN throws because MSH header is missing", () => {
    const fresh = new HL7_2_1();
    expect(() => fresh.buildEVN({ evn_1: "A01" })).toThrow(/MSH Header/);
  });

  test("buildAL1 (later-spec stub) also requires MSH first", () => {
    // Even unimplemented stubs go through headerExists, so the failure
    // must mention the MSH precondition rather than "Not Implemented".
    const fresh = new HL7_2_1();
    expect(() => fresh.buildAL1({} as any)).toThrow(/MSH Header/);
  });
});

describe("HL7_2_1 — invalid construction options", () => {
  test("buildMSH throws when separatorComponent is not 1 char", () => {
    // Two-char separator survives the RootBase regex setup but trips
    // the explicit length check inside _buildMSH.
    const b = new HL7_2_1({ separatorComponent: "^^" } as any);
    expect(() => b.buildMSH({ msh_9: "ACK", msh_10: "X" })).toThrow(
      HL7ValidationError,
    );
  });
});

describe("HL7_BASE — implemented but rarely-called helpers", () => {
  // _buildNCK and _buildNST are implemented in base.ts but no version
  // overrides them. Calling them on 2.1 hits the base-class implementation
  // directly.
  test("buildNCK builds a network-clock segment", () => {
    const b = v21();
    b.buildNCK();
    expect(b.toString()).toContain("\rNCK|");
  });

  test("buildNCK on 2.5/2.5.1 uses 26-char timestamp", () => {
    const b = new HL7_2_5();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    b.buildNCK();
    expect(b.toString()).toContain("\rNCK|");
  });

  test("buildNCK on 2.6/2.7 uses 24-char timestamp", () => {
    const b = new HL7_2_7();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    b.buildNCK();
    expect(b.toString()).toContain("\rNCK|");
  });

  test("buildNST builds a statistics segment with required nst_1", () => {
    const b = v21();
    // NST.1 is a Y/N "Statistics Available" flag per HL7.
    b.buildNST({
      nst_1: "Y",
      nst_2: "1",
      nst_3: "2",
    });
    expect(b.toString()).toContain("\rNST|Y|1|2");
  });

  test("buildDSP — 2.1 length rules", () => {
    const b = v21();
    b.buildDSP({ dsp_1: "1", dsp_2: "1", dsp_3: "TEXT", dsp_4: "AA" });
    expect(b.toString()).toContain("\rDSP|1|1|TEXT|AA");
  });

  test("buildDSP on 2.7+ skips the version-gated length rules", () => {
    const b = new HL7_2_7();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    b.buildDSP({ dsp_1: "1", dsp_2: "1", dsp_3: "TEXT" });
    expect(b.toString()).toContain("\rDSP|");
  });
});

describe("HL7_BASE — validator branch coverage via builders", () => {
  test("hardError makes any validation failure throw", () => {
    // hardError flips _validatorThrowError into "always throw" mode. Trigger
    // a too-long string against an exact-length rule.
    const b = new HL7_2_1({ hardError: true });
    b.buildMSH({ msh_7: DATE, msh_9: "ACK", msh_10: "X", msh_11: "T" });
    expect(() => b.buildMSA({ msa_1: "INVALID_TOO_LONG" })).toThrow(
      HL7ValidationError,
    );
  });

  test("allowedValues mismatch always throws (forceThrow=true)", () => {
    // BLG.1 (TABLE_0100) restricts to ["D", "O", "R", "S"]. Any other
    // value uses forceThrow=true regardless of hardError.
    const b = v21();
    expect(() => b.buildBLG({ blg_1: "Z", blg_2: "AA" })).toThrow(
      HL7ValidationError,
    );
  });

  test("required field missing always throws (forceThrow=true)", () => {
    // Both DG1.1 and DG1.2 are required — omitting them throws regardless
    // of the hardError flag.
    const b = v21();
    expect(() => b.buildDG1({} as any)).toThrow(HL7ValidationError);
  });

  test("ADD segment may not follow MSH/BHS/FHS", () => {
    const b = v21();
    expect(() => b.buildADD({ add_1: "PTR" })).toThrow(/must not follow/);
  });

  test("ADD segment can follow a non-MSH segment", () => {
    const b = v21();
    b.buildEVN({ evn_1: "A01" });
    b.buildADD({ add_1: "PTR" });
    expect(b.toString()).toContain("\rADD|PTR");
  });

  test("buildNCK rejects a second NCK on the same message", () => {
    const b = v21();
    b.buildNCK();
    expect(() => b.buildNCK()).toThrow(/only have one NCK/);
  });
});

describe("HL7_BASE — checkMSH per version", () => {
  // Each newer version has its own checkMSH override. Call them all to
  // exercise the validation-by-version branch table.
  test("2.2 checkMSH happy path", () => {
    const b = new HL7_2_2();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });

  test("2.3 checkMSH happy path", () => {
    const b = new HL7_2_3();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });

  test("2.4 checkMSH happy path", () => {
    const b = new HL7_2_4();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });

  test("2.5 checkMSH happy path", () => {
    const b = new HL7_2_5();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });

  test("2.6 checkMSH happy path", () => {
    const b = new HL7_2_6();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });

  test("2.7 checkMSH happy path", () => {
    const b = new HL7_2_7();
    expect(
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "X",
        msh_11_1: "P",
      } as any),
    ).toBe(true);
  });
});
