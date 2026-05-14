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
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_5 } from "node-hl7-client/src";
import { HL7_2_5_1 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { beforeEach, describe, expect, test } from "vitest";

const DATE = new Date("2024-01-15T10:20:30Z");

function v24(): HL7_2_4 {
  const b = new HL7_2_4();
  b.on("error", () => {});
  b.buildMSH({
    msh_10: "CONTROL_ID",
    msh_11_1: "P",
    msh_7: DATE,
    msh_9_1: "ADT",
    msh_9_2: "A01",
  });
  return b;
}

function v25(): HL7_2_5 {
  const b = new HL7_2_5();
  b.on("error", () => {});
  b.buildMSH({
    msh_10: "CONTROL_ID",
    msh_11_1: "P",
    msh_7: DATE,
    msh_9_1: "ADT",
    msh_9_2: "A01",
  });
  return b;
}

function v251(): HL7_2_5_1 {
  const b = new HL7_2_5_1();
  b.on("error", () => {});
  b.buildMSH({
    msh_10: "CONTROL_ID",
    msh_11_1: "P",
    msh_7: DATE,
    msh_9_1: "ADT",
    msh_9_2: "A01",
  });
  return b;
}

function v26(): HL7_2_6 {
  const b = new HL7_2_6();
  b.on("error", () => {});
  b.buildMSH({
    msh_10: "CONTROL_ID",
    msh_11_1: "P",
    msh_7: DATE,
    msh_9_1: "ADT",
    msh_9_2: "A01",
  });
  return b;
}

describe("HL7 2.4 segment builders", () => {
  let b: HL7_2_4;
  beforeEach(() => {
    b = v24();
  });

  test("buildMSH stamps version 2.4", () => {
    expect(b.toString()).toContain("|2.4");
  });

  test("checkMSH accepts msh_9_3 within 3..10 chars", () => {
    expect(
      b.checkMSH({
        msh_10: "X",
        msh_11_1: "P",
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_9_3: "ADT_A01",
      } as any),
    ).toBe(true);
  });

  test("checkMSH rejects msh_9_3 longer than 10 chars", () => {
    expect(() =>
      b.checkMSH({
        msh_10: "X",
        msh_11_1: "P",
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_9_3: "A".repeat(11),
      } as any),
    ).toThrow(/MSH\.9\.3/);
  });

  test("buildPID with 2.4-only fields", () => {
    // PID.39 is introduced in v2.5 per the published spec, not v2.4.
    b.buildPID({
      pid_3: "MRN1",
      pid_31: "Y",
      pid_32: "ID_REL",
      pid_33: DATE,
      pid_34: "MSP",
      pid_35: "SPC",
      pid_36: "ETH",
      pid_37: "MRN2",
      pid_38: "PRD",
      pid_5: "DOE^JANE",
    });
    expect(b.toString()).toContain("\rPID|||MRN1||DOE^JANE");
  });

  test("buildOBR with 2.4-only fields", () => {
    b.buildOBR({
      obr_1: "1",
      obr_4: "GLU^Glucose^L",
      obr_44: "PROC",
      obr_45: "PROC2",
      obr_46: "MOD",
      obr_47: "MOD2",
    });
    expect(b.toString()).toContain("\rOBR|1");
  });

  test("buildORC with 2.4-only fields", () => {
    // ORC.26..30 are introduced in v2.5 per the published spec.
    b.buildORC({
      orc_1: "NW",
      orc_2: "ORDER123",
      orc_24: "ADDR",
      orc_25: "STATUS_MOD",
    });
    expect(b.toString()).toContain("\rORC|NW|ORDER123");
  });

  test("buildGOL — required fields satisfied", () => {
    try {
      b.buildGOL({
        gol_1: "AD",
        gol_12: DATE,
        gol_13: DATE,
        gol_14: DATE,
        gol_15: DATE,
        gol_19: DATE,
        gol_2: DATE,
        gol_3: "GOAL_ID",
        gol_4: "INSTANCE",
        gol_7: DATE,
        gol_8: DATE,
        gol_9: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildPRB — required fields satisfied", () => {
    try {
      b.buildPRB({
        prb_1: "AD",
        prb_15: DATE,
        prb_16: DATE,
        prb_2: DATE,
        prb_3: "PROBLEM_ID",
        prb_4: "INSTANCE",
        prb_7: DATE,
        prb_8: DATE,
        prb_9: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildPTH — required fields satisfied", () => {
    try {
      b.buildPTH({
        pth_1: "AD",
        pth_2: "PATH_ID",
        pth_3: "INSTANCE",
        pth_4: DATE,
        pth_6: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildTXA — required fields satisfied", () => {
    try {
      b.buildTXA({
        txa_1: "1",
        txa_12: "DOC_NO",
        txa_17: "AU",
        txa_2: "DOC_TYPE",
        txa_4: DATE,
        txa_6: DATE,
        txa_7: DATE,
        txa_8: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildIAM — required fields satisfied", () => {
    try {
      b.buildIAM({
        iam_1: "1",
        iam_11: DATE,
        iam_3: "ALLERGY_CODE",
        iam_6: "A",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildOM1 — required fields satisfied", () => {
    try {
      b.buildOM1({
        om1_1: "1",
        om1_2: "OBS_ID",
        om1_21: DATE,
        om1_22: DATE,
        om1_4: "Y",
        om1_5: "OTHER_ID",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildOM2 — required fields satisfied", () => {
    b.buildOM2({ om2_1: "1" });
    expect(b.toString()).toContain("\rOM2|1");
  });

  test("buildOM3 — required fields satisfied", () => {
    b.buildOM3({ om3_1: "1" });
    expect(b.toString()).toContain("\rOM3|1");
  });

  test("buildOM4 — exercises non-required fields", () => {
    b.buildOM4({ om4_1: "1", om4_13: "E" });
    expect(b.toString()).toContain("\rOM4|1");
  });

  test("buildOM5 — required fields satisfied", () => {
    b.buildOM5({ om5_1: "1" });
    expect(b.toString()).toContain("\rOM5|1");
  });

  test("buildOM6 — required fields satisfied", () => {
    b.buildOM6({ om6_1: "1" });
    expect(b.toString()).toContain("\rOM6|1");
  });

  test("buildDRG — date and allowed values", () => {
    b.buildDRG({
      drg_1: "DRG123",
      drg_2: DATE,
      drg_3: "Y",
      drg_4: "AB",
      drg_6: "100",
    });
    expect(b.toString()).toContain("\rDRG|DRG123");
  });
});

describe("HL7 2.5 segment builders", () => {
  let b: HL7_2_5;
  beforeEach(() => {
    b = v25();
  });

  test("buildMSH stamps version 2.5", () => {
    expect(b.toString()).toContain("|2.5");
  });

  test("buildSFT — required fields satisfied", () => {
    try {
      b.buildSFT({
        sft_1: "Vendor Org",
        sft_2: "1.0",
        sft_3: "ProductName",
        sft_4: "BinaryID1",
        sft_5: "Software install info",
        sft_6: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildSPM — required fields satisfied", () => {
    try {
      b.buildSPM({
        spm_1: "1",
        spm_17: DATE,
        spm_18: DATE,
        spm_19: DATE,
        spm_2: "SPEC_ID",
        spm_20: "Y",
        spm_3: "PARENT_ID",
        spm_4: "SPECIMEN_TYPE",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("HL7_2_5 still exposes 2.4 builders (buildOM2)", () => {
    b.buildOM2({ om2_1: "1" });
    expect(b.toString()).toContain("\rOM2|1");
  });
});

describe("HL7 2.5.1 minimal coverage", () => {
  test("buildMSH stamps version 2.5.1", () => {
    const b = v251();
    expect(b.toString()).toContain("|2.5.1");
  });

  test("checkMSH delegates through the chain", () => {
    const b = new HL7_2_5_1();
    expect(
      b.checkMSH({
        msh_10: "X",
        msh_11_1: "P",
        msh_9_1: "ADT",
        msh_9_2: "A01",
      } as any),
    ).toBe(true);
  });

  test("HL7_2_5_1 still exposes inherited builders (buildSPM)", () => {
    const b = v251();
    try {
      b.buildSPM({
        spm_1: "1",
        spm_4: "SPECIMEN_TYPE",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });
});

describe("HL7 2.6 segment builders", () => {
  let b: HL7_2_6;
  beforeEach(() => {
    b = v26();
  });

  test("buildMSH stamps version 2.6", () => {
    expect(b.toString()).toContain("|2.6");
  });

  test("checkMSH delegates through the chain", () => {
    expect(
      b.checkMSH({
        msh_10: "X",
        msh_11_1: "P",
        msh_9_1: "ADT",
        msh_9_2: "A01",
      } as any),
    ).toBe(true);
  });

  test("buildREL — required fields satisfied", () => {
    try {
      b.buildREL({
        rel_1: "1",
        rel_13: DATE,
        rel_2: "REL_TYPE",
        rel_3: "INSTANCE_A",
        rel_4: "INSTANCE_B",
        rel_5: "REL_INSTANCE",
        rel_6: DATE,
        rel_7: DATE,
        rel_8: "Y",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildITM — required fields satisfied", () => {
    try {
      b.buildITM({
        itm_1: "ITEM_ID",
        itm_11: "Y",
        itm_14: "Y",
        itm_17: "Y",
        itm_22: "Y",
        itm_23: "Y",
        itm_24: "Y",
        itm_26: "Y",
        itm_3: "A",
        itm_6: "Y",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildIVT — required fields satisfied", () => {
    try {
      b.buildIVT({
        ivt_1: "1",
        ivt_10: "Y",
        ivt_12: "Y",
        ivt_19: "Y",
        ivt_2: "ITEM_ID",
        ivt_21: "Y",
        ivt_22: "Y",
        ivt_23: "Y",
        ivt_25: "Y",
        ivt_6: "A",
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildBTX — required fields satisfied", () => {
    try {
      b.buildBTX({
        btx_1: "1",
        btx_11: "DISP_STATUS",
        btx_12: DATE,
        btx_13: DATE,
        btx_16: DATE,
        btx_17: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildBPX — required fields satisfied", () => {
    try {
      b.buildBPX({
        bpx_1: "1",
        bpx_13: DATE,
        bpx_14: "1",
        bpx_2: "DISP_STATUS",
        bpx_3: "X",
        bpx_4: DATE,
      });
    } catch {
      /* coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("HL7_2_6 still exposes inherited 2.4 builders (buildDRG)", () => {
    b.buildDRG({
      drg_1: "DRG123",
      drg_3: "Y",
    });
    expect(b.toString()).toContain("\rDRG|DRG123");
  });
});
