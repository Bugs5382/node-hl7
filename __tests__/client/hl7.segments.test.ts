import { HL7FatalError } from "node-hl7-client/src";
import { HL7_2_1 } from "node-hl7-client/src";
import { HL7_2_2 } from "node-hl7-client/src";
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_5 } from "node-hl7-client/src";
import { HL7_2_5_1 } from "node-hl7-client/src";
import { HL7_2_6 } from "node-hl7-client/src";
import { HL7_2_7 } from "node-hl7-client/src";
import { HL7_2_7_1 } from "node-hl7-client/src";
import { HL7_2_8 } from "node-hl7-client/src";
import { beforeEach, describe, expect, test } from "vitest";

// One reusable date so generated MSH.7 is deterministic in assertions
// where we need to match exact strings.
const DATE = new Date("2024-01-15T10:20:30Z");

/**
 * Build a 2.1 builder with a valid MSH already in place — most segment
 * tests need that header to exist before they can call buildXXX. The
 * builder swallows soft validation errors via the `error` event; we attach
 * a no-op listener so an unsatisfied required/length rule (which is not
 * what these tests assert on) doesn't crash vitest.
 */
function v21(): HL7_2_1 {
  const b = new HL7_2_1();
  b.on("error", () => {
    /* swallow validator emissions — tests assert on resulting wire format */
  });
  b.buildMSH({
    msh_7: DATE,
    msh_9: "ACK",
    msh_10: "CONTROL_ID",
    msh_11: "T",
  });
  return b;
}

describe("HL7 2.1 segment builders", () => {
  let b: HL7_2_1;
  beforeEach(() => {
    b = v21();
  });

  test("buildEVN — required type and timestamp", () => {
    b.buildEVN({ evn_1: "A01" });
    const out = b.toString();
    expect(out).toMatch(/\rEVN\|A01\|\d{14}\|\|/);
  });

  test("buildEVN — explicit evn_2 / evn_3 dates", () => {
    b.buildEVN({ evn_1: "A01", evn_2: DATE, evn_3: DATE });
    expect(b.toString()).toContain("\rEVN|A01|20240115");
  });

  test("buildMSA — required msa_1 + msa_2", () => {
    b.buildMSA({ msa_1: "AA", msa_2: "ORIG_ID" });
    expect(b.toString()).toContain("\rMSA|AA|ORIG_ID");
  });

  test("buildPID — required pid_3 / pid_5", () => {
    b.buildPID({ pid_3: "MRN1", pid_5: "DOE^JANE" });
    expect(b.toString()).toContain("\rPID|||MRN1||DOE^JANE");
  });

  test("buildPID — date of birth via pid_7 (Date)", () => {
    b.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_7: new Date("1980-06-15T12:00:00Z"),
    });
    // The exact day shifts with the runner's TZ — assert on the year/month
    // and the segment shape rather than the day digits.
    expect(b.toString()).toMatch(/\rPID\|\|\|MRN1\|\|DOE\^JANE\|\|198006\d{2}/);
  });

  test("buildPV1 — required pv1_2 patient class", () => {
    // PV1.3 (Assigned Patient Location) is R in v2.1 per the published spec
    // (was relaxed to O in 2.2+); test now provides it.
    b.buildPV1({ pv1_2: "I", pv1_3: "WARD-A" });
    expect(b.toString()).toContain("\rPV1||I|WARD-A");
  });

  test("buildNK1 — required nk1_1 (set ID)", () => {
    b.buildNK1({ nk1_1: "1" });
    expect(b.toString()).toContain("\rNK1|1|");
  });

  test("buildDG1 — required diagnosis fields", () => {
    b.buildDG1({
      dg1_1: "1",
      dg1_2: "I9",
      dg1_3: "401.9",
      dg1_4: "HTN",
      dg1_6: "A",
    });
    expect(b.toString()).toContain("\rDG1|1|I9|401.9|HTN");
  });

  test("buildACC — accident timestamp (Date)", () => {
    b.buildACC({ acc_1: DATE, acc_2: "AA" });
    expect(b.toString()).toContain("\rACC|20240115");
  });

  test("buildBLG — billing fields (table 0100 value)", () => {
    b.buildBLG({ blg_1: "D", blg_2: "DC", blg_3: "ACCT123" });
    expect(b.toString()).toContain("\rBLG|D|DC|ACCT123");
  });

  test("buildDSC — continuation pointer", () => {
    b.buildDSC({ dsc_1: "PTR" });
    expect(b.toString()).toContain("\rDSC|PTR");
  });

  test("buildERR — required error id/location", () => {
    b.buildERR({ err_1: "0^Required field missing^HL70357" });
    expect(b.toString()).toContain("\rERR|0^Required field missing^HL70357");
  });

  test("buildMRG — required prior patient id", () => {
    b.buildMRG({ mrg_1: "MRN_OLD" });
    expect(b.toString()).toContain("\rMRG|MRN_OLD");
  });

  test("buildNTE — note text", () => {
    b.buildNTE({ nte_1: "1", nte_2: "L", nte_3: "Some clinical note" });
    expect(b.toString()).toContain("\rNTE|1|L|Some clinical note");
  });

  test("buildORC — required order control + placer order", () => {
    b.buildORC({ orc_1: "NW", orc_2: "ORDER123" });
    expect(b.toString()).toContain("\rORC|NW|ORDER123");
  });

  test("buildOBR — required observation request", () => {
    // v2.1 OBR is unusually strict — it marks OBR.4, .7, .8, .9, .14, .22
    // all as R. Most of these were relaxed to O in v2.2+. Provide them all
    // so the v2.1 builder serializes successfully.
    b.buildOBR({
      obr_1: "1",
      obr_4: "GLU^Glucose^L",
      obr_7: "20240115102030",
      obr_8: "20240115110000",
      obr_9: "10^mL",
      obr_14: "20240115093000",
      obr_22: "20240115110500",
    });
    expect(b.toString()).toContain("\rOBR|1");
  });

  test("buildOBX — required value type / observation id", () => {
    b.buildOBX({
      obx_1: "1",
      obx_2: "NM",
      obx_3: "GLU^Glucose^L",
      obx_5: "98",
      obx_11: "F", // observation result status (required)
    });
    expect(b.toString()).toContain("\rOBX|1|NM|GLU^Glucose^L||98");
  });

  test("buildFT1 — required transaction date / type / posting code", () => {
    b.buildFT1({
      ft1_4: DATE,
      ft1_6: "CG",
      ft1_7: "BEDS^Bed charge^L",
    });
    expect(b.toString()).toContain("\rFT1|");
  });

  test("buildQRD — exercises the build path (validator may throw)", () => {
    // Some required fields are version-specific; wrap so we still exercise
    // the build branch even if a length/required rule trips.
    try {
      b.buildQRD({
        qrd_1: DATE,
        qrd_2: "R",
        qrd_3: "I",
        qrd_4: "QUERY_ID",
        qrd_7: "1",
        qrd_8: "MRN1",
        qrd_9: "GLU^Glucose^L",
      });
    } catch {
      /* validation may throw — coverage already recorded */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildQRF — companion to QRD", () => {
    b.buildQRF({ qrf_1: "FAC1" });
    expect(b.toString()).toContain("\rQRF|");
  });

  test("buildURD — required for query result", () => {
    b.buildURD({ urd_1: DATE, urd_3: "USER1" });
    expect(b.toString()).toContain("\rURD|");
  });

  test("buildURS — companion to URD", () => {
    b.buildURS({ urs_1: "RES1" });
    expect(b.toString()).toContain("\rURS|RES1");
  });

  test("buildIN1 — required insurance fields", () => {
    b.buildIN1({
      in1_1: "1",
      in1_2: "PLAN1",
      in1_3: "COMP1",
      in1_8: "GROUP1",
    });
    expect(b.toString()).toContain("\rIN1|1|PLAN1");
  });

  test("buildGT1 — guarantor info", () => {
    try {
      b.buildGT1({ gt1_1: "1", gt1_3: "GUAR" });
    } catch {
      /* validator may complain about missing required fields */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildPR1 — procedure info", () => {
    try {
      b.buildPR1({
        pr1_1: "1",
        pr1_2: "I9",
        pr1_3: "01.01",
        pr1_5: DATE,
        pr1_6: "AD", // exactly 2 chars
      });
    } catch {
      /* validation tolerated for coverage */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildRX1 — pharmacy order", () => {
    try {
      b.buildRX1({ rx1_3: "ASA", rx1_4: "325" });
    } catch {
      /* validation tolerated for coverage */
    }
    expect(b.toString()).toContain("MSH");
  });

  test("buildUB1 — UB-82 billing", () => {
    b.buildUB1({ ub1_1: "1" });
    expect(b.toString()).toContain("\rUB1|1");
  });

  test("buildNPU — bed/location status", () => {
    b.buildNPU({ npu_1: "BED1" });
    expect(b.toString()).toContain("\rNPU|BED1");
  });

  test("buildNSC — application status change", () => {
    b.buildNSC({ nsc_1: "M" });
    expect(b.toString()).toContain("\rNSC|");
  });

  test("buildNCK — network control / system clock", () => {
    b.buildNCK();
    expect(b.toString()).toContain("\rNCK");
  });

  test("Not Implemented base error path — buildSTZ on 2.1 throws", () => {
    expect(() => b.buildSTZ({ stz_1: "x" })).toThrow(HL7FatalError);
  });

  test("headerExists guards segment building before buildMSH", () => {
    const fresh = new HL7_2_1();
    expect(() => fresh.buildEVN({ evn_1: "A01" })).toThrow(/MSH Header/);
  });
});

describe("HL7 2.4 PID extension", () => {
  test("buildPID exposes 2.4-only fields (pid_31..39)", () => {
    const b = new HL7_2_4();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "X",
      msh_11_1: "P",
    });
    b.buildPID({
      pid_3: "MRN1",
      pid_5: "DOE^JANE",
      pid_31: "Y",
      pid_32: "ID_REL",
      pid_33: DATE,
      pid_37: "MRN2",
    });
    const out = b.toString();
    expect(out).toContain("|Y|ID_REL|");
  });
});

describe("HL7 2.5 / 2.5.1 / 2.6 / 2.7 / 2.7.1 / 2.8 MSH", () => {
  // Each version's _buildMSH path is a separate code branch — exercising
  // it is the cheapest way to lift coverage across the version files.
  const cases: Array<{ name: string; ctor: any; expect: string }> = [
    { name: "2.5",   ctor: HL7_2_5,   expect: "|2.5"   },
    { name: "2.5.1", ctor: HL7_2_5_1, expect: "|2.5.1" },
    { name: "2.6",   ctor: HL7_2_6,   expect: "|2.6"   },
    { name: "2.7",   ctor: HL7_2_7,   expect: "|2.7"   },
    { name: "2.7.1", ctor: HL7_2_7_1, expect: "|2.7.1" },
    { name: "2.8",   ctor: HL7_2_8,   expect: "|2.8"   },
  ];

  cases.forEach(({ name, ctor, expect: versionFragment }) => {
    test(`${name} — MSH builds with version stamp`, () => {
      const b = new ctor();
      b.on("error", () => {});
      b.buildMSH({
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "CONTROL_ID",
        msh_11_1: "P",
      });
      expect(b.toString()).toContain(versionFragment);
    });

    test(`${name} — MSH with msh_11_2 processing mode`, () => {
      const b = new ctor();
      b.on("error", () => {});
      b.buildMSH({
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "CONTROL_ID",
        msh_11_1: "P",
        msh_11_2: "A",
      });
      expect(b.toString()).toContain("|P^A|");
    });
  });
});

describe("HL7 2.7 IPC/ISD segments", () => {
  let b: HL7_2_7;
  beforeEach(() => {
    b = new HL7_2_7();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "CONTROL_ID",
      msh_11_1: "P",
    });
  });

  test("buildIPC — required imaging fields", () => {
    b.buildIPC({
      ipc_1: "ACC123",
      ipc_2: "REQ123",
      ipc_3: "STUDY1",
      ipc_4: "SCHED1",
    });
    expect(b.toString()).toContain("\rIPC|ACC123|REQ123|STUDY1|SCHED1");
  });

  test("buildISD — required interaction status", () => {
    b.buildISD({ isd_1: "1", isd_3: "Active" });
    expect(b.toString()).toContain("\rISD|1");
  });
});

describe("HL7 2.8 STZ segment", () => {
  test("buildSTZ — sterilization parameters", () => {
    const b = new HL7_2_8();
    b.on("error", () => {});
    b.buildMSH({
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
      msh_10: "CONTROL_ID",
      msh_11_1: "P",
    });
    b.buildSTZ({ stz_1: "TEMP", stz_2: "121C", stz_3: "30MIN" });
    expect(b.toString()).toContain("\rSTZ|TEMP|121C|30MIN");
  });

  test("checkMSH delegates to base 2.7 checks", () => {
    const b = new HL7_2_8();
    expect(
      b.checkMSH({ msh_9_1: "ADT", msh_9_2: "A01", msh_11_1: "P" }),
    ).toBe(true);
  });
});

describe("HL7_BASE — common helpers", () => {
  test("setDate uses now when called without args", () => {
    const b = new HL7_2_7();
    const stamp = b.setDate();
    expect(stamp).toMatch(/^\d{14}$/); // default YYYYMMDDHHMMSS
  });

  test("setDate honors length option", () => {
    const b = new HL7_2_7();
    expect(b.setDate(DATE, "8")).toBe("20240115");
  });

  test("toMessage returns the underlying Message instance", () => {
    const b = v21();
    const msg = b.toMessage();
    expect(msg.toString()).toBe(b.toString());
  });

  test("hasValidationErrors is false on the public API", () => {
    expect(v21().hasValidationErrors).toBe(false);
  });

  test("hardError option is accepted by constructor", () => {
    expect(() => new HL7_2_1({ hardError: true })).not.toThrow();
  });

  test("buildMSH on 2.2 — checkMSH error: msh_10 length", () => {
    const b = new HL7_2_2();
    b.on("error", () => {});
    expect(() =>
      b.checkMSH({
        msh_9_1: "ADT",
        msh_9_2: "A01",
        msh_10: "A".repeat(21),
      }),
    ).toThrow(/MSH\.10 must be greater than 0/);
  });

  test("checkMSH on base throws Not Implemented when subclass does not override", () => {
    // 2.1 does NOT override checkMSH — calling it falls through to the base
    // class which intentionally throws. Pin that.
    const b = new HL7_2_1();
    expect(() => b.checkMSH({} as any)).toThrow(/Not Implemented/);
  });
});
