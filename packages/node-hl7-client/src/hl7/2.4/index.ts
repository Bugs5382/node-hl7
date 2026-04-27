import { randomString } from "@/utils/randomString";
import { HL7_2_1_MSH, HL7_2_1_PID, HL7_2_1_OBR, HL7_2_1_ORC } from "@/hl7/2.1/types";
import { HL7_2_3_1 } from "@/hl7/2.3.1";
import { ClientBuilderOptions_Hl7_2_4 } from "./types";
import { HL7_2_4_MSH } from "./msh";
import { HL7_2_4_PID } from "./pid";
import { HL7_2_4_OBR } from "./obr";
import { HL7_2_4_ORC } from "./orc";
import { HL7_2_4_GOL } from "./gol";
import { HL7_2_4_PRB } from "./prb";
import { HL7_2_4_PTH } from "./pth";
import { HL7_2_4_TXA } from "./txa";
import { HL7_2_4_IAM } from "./iam";
import { HL7_2_4_OM1 } from "./om1";
import { HL7_2_4_OM2 } from "./om2";
import { HL7_2_4_OM3 } from "./om3";
import { HL7_2_4_OM4 } from "./om4";
import { HL7_2_4_OM5 } from "./om5";
import { HL7_2_4_OM6 } from "./om6";
import { HL7_2_4_DRG } from "./drg";
import { HL7_2_4_ECD } from "./ecd";
import { ECD_SPEC } from "@/hl7/metadata/segments/ecd";
import { HL7_ECD } from "@/hl7/types/ecd";
import { DRG_SPEC } from "@/hl7/metadata/segments/drg";
import { GOL_SPEC } from "@/hl7/metadata/segments/gol";
import { IAM_SPEC } from "@/hl7/metadata/segments/iam";
import { OBR_SPEC } from "@/hl7/metadata/segments/obr";
import { OM1_SPEC } from "@/hl7/metadata/segments/om1";
import { OM2_SPEC } from "@/hl7/metadata/segments/om2";
import { OM3_SPEC } from "@/hl7/metadata/segments/om3";
import { OM4_SPEC } from "@/hl7/metadata/segments/om4";
import { OM5_SPEC } from "@/hl7/metadata/segments/om5";
import { OM6_SPEC } from "@/hl7/metadata/segments/om6";
import { ORC_SPEC } from "@/hl7/metadata/segments/orc";
import { PID_SPEC } from "@/hl7/metadata/segments/pid";
import { PRB_SPEC } from "@/hl7/metadata/segments/prb";
import { PTH_SPEC } from "@/hl7/metadata/segments/pth";
import { TXA_SPEC } from "@/hl7/metadata/segments/txa";

export type { HL7_2_4_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_4 } from "./types";

/**
 * Hl7 Specification Version 2.4
 * @since 1.0.0
 */
export class HL7_2_4 extends HL7_2_3_1 {
  constructor(props?: ClientBuilderOptions_Hl7_2_4) {
    super(props);
    this.version = "2.4";
  }

  checkMSH(msh: HL7_2_4_MSH): boolean {
    super.checkMSH(msh);
    if (
      typeof msh.msh_9_3 !== "undefined" &&
      (msh.msh_9_3.length < 3 || msh.msh_9_3.length > 10)
    ) {
      throw new Error(
        "MSH.9.3 must be 3 to 10 characters in length if specified.",
      );
    }
    return true;
  }

  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
    const msh = props as unknown as Partial<HL7_2_4_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { required: true, length: 4 },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue(
      "7",
      msh.msh_7 instanceof Date && !isNaN(msh.msh_7.getTime())
        ? this.setDate(msh.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      { required: true, type: "date" },
    );
    this._validatorSetValue("8", msh.msh_8, { length: { min: 1, max: 40 } });
    this._validatorSetValue("9.1", msh.msh_9_1, {
      required: true,
      length: { min: 1, max: 3 },
    });
    this._validatorSetValue("9.2", msh.msh_9_2, {
      required: true,
      length: { min: 1, max: 3 },
    });
    this._validatorSetValue(
      "9.3",
      msh.msh_9_3 !== undefined
        ? msh.msh_9_3
        : `${msh.msh_9_1}_${msh.msh_9_2}`,
      { length: { min: 3, max: 15 } },
    );
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("11.1", msh.msh_11_1, {
      required: true,
      length: 1,
      allowedValues: ["D", "P", "T"],
    });
    if (msh.msh_11_2 !== undefined && msh.msh_11_2 !== "") {
      this._validatorSetValue("11.2", msh.msh_11_2, {
        length: 1,
        allowedValues: ["A", "I", "R", "T"],
      });
    }
    this._validatorSetValue("12", this.version, { required: true });
  }

  protected _buildPID(props: Partial<HL7_2_1_PID>): void {
    this._assertSegmentInVersion(PID_SPEC);
    super._buildPID(props);
    const pid = props as unknown as Partial<HL7_2_4_PID>;
    this._validatorSetField(PID_SPEC,
    31,
    pid.pid_31,
    { allowedValues: ["Y", "N"], length: 1 });
    this._validatorSetField(PID_SPEC,
    32,
    pid.pid_32,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(
      PID_SPEC,
    33,
    pid.pid_33 instanceof Date && !isNaN(pid.pid_33.getTime())
        ? this.setDate(pid.pid_33, this._opt.date) : pid.pid_33 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PID_SPEC,
    34,
    pid.pid_34,
    { length: { min: 1, max: 21 } });
    this._validatorSetField(PID_SPEC,
    35,
    pid.pid_35,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PID_SPEC,
    36,
    pid.pid_36,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PID_SPEC,
    37,
    pid.pid_37,
    { length: { min: 1, max: 80 } });
    this._validatorSetField(PID_SPEC,
    38,
    pid.pid_38,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PID_SPEC,
    39,
    pid.pid_39,
    { length: { min: 1, max: 250 } });
  }

  protected _buildOBR(props: Partial<HL7_2_1_OBR>): void {
    this._assertSegmentInVersion(OBR_SPEC);
    super._buildOBR(props);
    const obr = props as unknown as Partial<HL7_2_4_OBR>;
    this._validatorSetField(OBR_SPEC,
    44,
    obr.obr_44,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OBR_SPEC,
    45,
    obr.obr_45,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OBR_SPEC,
    46,
    obr.obr_46,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OBR_SPEC,
    47,
    obr.obr_47,
    { length: { min: 1, max: 250 } });
  }

  protected _buildORC(props: Partial<HL7_2_1_ORC>): void {
    this._assertSegmentInVersion(ORC_SPEC);
    super._buildORC(props);
    const orc = props as unknown as Partial<HL7_2_4_ORC>;
    this._validatorSetField(ORC_SPEC,
    24,
    orc.orc_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ORC_SPEC,
    25,
    orc.orc_25,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(
      ORC_SPEC,
    26,
    orc.orc_26 instanceof Date && !isNaN(orc.orc_26.getTime())
        ? this.setDate(orc.orc_26, this._opt.date) : orc.orc_26 ?? "",
    { type: "date" }
    );
    this._validatorSetField(ORC_SPEC,
    27,
    orc.orc_27,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ORC_SPEC,
    28,
    orc.orc_28,
    { allowedValues: ["I", "O"], length: 1 });
    this._validatorSetField(ORC_SPEC,
    29,
    orc.orc_29,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ORC_SPEC,
    30,
    orc.orc_30,
    { length: { min: 1, max: 250 } });
  }

  protected _buildGOL(props: Partial<HL7_2_4_GOL>): void {
    this._assertSegmentInVersion(GOL_SPEC);
    this._segment = this._message.addSegment("GOL");
    this._validatorSetField(GOL_SPEC,
    1,
    props.gol_1,
    { allowedValues: ["AD", "CO", "DE", "LI", "UC", "UN"] });
    this._validatorSetField(
      GOL_SPEC,
    2,
    props.gol_2 instanceof Date && !isNaN(props.gol_2.getTime())
        ? this.setDate(props.gol_2, this._opt.date) : props.gol_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    3,
    props.gol_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    4,
    props.gol_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(GOL_SPEC,
    5,
    props.gol_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(GOL_SPEC,
    6,
    String(props.gol_6 ?? ""),
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      GOL_SPEC,
    7,
    props.gol_7 instanceof Date && !isNaN(props.gol_7.getTime())
        ? this.setDate(props.gol_7, this._opt.date) : props.gol_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    8,
    props.gol_8 instanceof Date && !isNaN(props.gol_8.getTime())
        ? this.setDate(props.gol_8, this._opt.date) : props.gol_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    9,
    props.gol_9 instanceof Date && !isNaN((props.gol_9 as Date).getTime())
        ? this.setDate(props.gol_9 as Date, this._opt.date) : props.gol_9 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    10,
    props.gol_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    11,
    props.gol_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      GOL_SPEC,
    12,
    props.gol_12 instanceof Date && !isNaN(props.gol_12.getTime())
        ? this.setDate(props.gol_12, this._opt.date) : props.gol_12 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    13,
    props.gol_13 instanceof Date && !isNaN(props.gol_13.getTime())
        ? this.setDate(props.gol_13, this._opt.date) : props.gol_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    14,
    props.gol_14 instanceof Date && !isNaN(props.gol_14.getTime())
        ? this.setDate(props.gol_14, this._opt.date) : props.gol_14 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    15,
    props.gol_15 instanceof Date && !isNaN(props.gol_15.getTime())
        ? this.setDate(props.gol_15, this._opt.date) : props.gol_15 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    16,
    props.gol_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    17,
    props.gol_17,
    { length: { min: 1, max: 300 } });
    this._validatorSetField(GOL_SPEC,
    18,
    props.gol_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      GOL_SPEC,
    19,
    props.gol_19 instanceof Date && !isNaN(props.gol_19.getTime())
        ? this.setDate(props.gol_19, this._opt.date) : props.gol_19 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    20,
    props.gol_20,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    21,
    props.gol_21,
    { length: { min: 1, max: 250 } });
  }

  protected _buildPRB(props: Partial<HL7_2_4_PRB>): void {
    this._assertSegmentInVersion(PRB_SPEC);
    this._segment = this._message.addSegment("PRB");
    this._validatorSetField(PRB_SPEC,
    1,
    props.prb_1,
    { allowedValues: ["AD", "CO", "DE", "LI", "UC", "UN"] });
    this._validatorSetField(
      PRB_SPEC,
    2,
    props.prb_2 instanceof Date && !isNaN(props.prb_2.getTime())
        ? this.setDate(props.prb_2, this._opt.date) : props.prb_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    3,
    props.prb_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    4,
    props.prb_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(PRB_SPEC,
    5,
    props.prb_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(PRB_SPEC,
    6,
    String(props.prb_6 ?? ""),
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      PRB_SPEC,
    7,
    props.prb_7 instanceof Date && !isNaN(props.prb_7.getTime())
        ? this.setDate(props.prb_7, this._opt.date) : props.prb_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    8,
    props.prb_8 instanceof Date && !isNaN(props.prb_8.getTime())
        ? this.setDate(props.prb_8, this._opt.date) : props.prb_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    9,
    props.prb_9 instanceof Date && !isNaN(props.prb_9.getTime())
        ? this.setDate(props.prb_9, this._opt.date) : props.prb_9 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    10,
    props.prb_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    11,
    props.prb_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    12,
    props.prb_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    13,
    props.prb_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    14,
    props.prb_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      PRB_SPEC,
    15,
    props.prb_15 instanceof Date && !isNaN(props.prb_15.getTime())
        ? this.setDate(props.prb_15, this._opt.date) : props.prb_15 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    16,
    props.prb_16 instanceof Date && !isNaN(props.prb_16.getTime())
        ? this.setDate(props.prb_16, this._opt.date) : props.prb_16 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    17,
    props.prb_17,
    { length: { min: 1, max: 80 } });
    this._validatorSetField(PRB_SPEC,
    18,
    props.prb_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    19,
    props.prb_19,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    20,
    String(props.prb_20 ?? ""),
    { length: { min: 1, max: 5 } });
    this._validatorSetField(PRB_SPEC,
    21,
    props.prb_21,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    22,
    props.prb_22,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    23,
    props.prb_23,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    24,
    props.prb_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    25,
    props.prb_25,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    26,
    props.prb_26,
    { length: { min: 1, max: 250 } });
  }

  protected _buildPTH(props: Partial<HL7_2_4_PTH>): void {
    this._assertSegmentInVersion(PTH_SPEC);
    this._segment = this._message.addSegment("PTH");
    this._validatorSetField(PTH_SPEC,
    1,
    props.pth_1,
    { allowedValues: ["AD", "DE", "LI", "UN"] });
    this._validatorSetField(PTH_SPEC,
    2,
    props.pth_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PTH_SPEC,
    3,
    props.pth_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      PTH_SPEC,
    4,
    props.pth_4 instanceof Date && !isNaN(props.pth_4.getTime())
        ? this.setDate(props.pth_4, this._opt.date) : props.pth_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PTH_SPEC,
    5,
    props.pth_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      PTH_SPEC,
    6,
    props.pth_6 instanceof Date && !isNaN(props.pth_6.getTime())
        ? this.setDate(props.pth_6, this._opt.date) : props.pth_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PTH_SPEC,
    7,
    props.pth_7,
    { length: { min: 1, max: 250 } });
  }

  protected _buildTXA(props: Partial<HL7_2_4_TXA>): void {
    this._assertSegmentInVersion(TXA_SPEC);
    this._segment = this._message.addSegment("TXA");
    this._validatorSetField(TXA_SPEC,
    1,
    String(props.txa_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(TXA_SPEC,
    2,
    props.txa_2,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    3,
    props.txa_3,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(
      TXA_SPEC,
    4,
    props.txa_4 instanceof Date && !isNaN(props.txa_4.getTime())
        ? this.setDate(props.txa_4, this._opt.date) : props.txa_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(TXA_SPEC,
    5,
    props.txa_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      TXA_SPEC,
    6,
    props.txa_6 instanceof Date && !isNaN(props.txa_6.getTime())
        ? this.setDate(props.txa_6, this._opt.date) : props.txa_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      TXA_SPEC,
    7,
    props.txa_7 instanceof Date && !isNaN(props.txa_7.getTime())
        ? this.setDate(props.txa_7, this._opt.date) : props.txa_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      TXA_SPEC,
    8,
    props.txa_8 instanceof Date && !isNaN(props.txa_8.getTime())
        ? this.setDate(props.txa_8, this._opt.date) : props.txa_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(TXA_SPEC,
    9,
    props.txa_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    10,
    props.txa_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    11,
    props.txa_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    12,
    props.txa_12,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    13,
    props.txa_13,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    14,
    props.txa_14,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(TXA_SPEC,
    15,
    props.txa_15,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(TXA_SPEC,
    16,
    props.txa_16,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    17,
    props.txa_17,
    {
            allowedValues: ["AU", "CA", "DO", "DT", "IN", "IP", "LA", "OB", "PA", "PR", "PY", "RD", "RV", "UN"],
    });
    this._validatorSetField(TXA_SPEC,
    18,
    props.txa_18,
    { allowedValues: ["ET", "EMP", "UWL", "V", "R"] });
    this._validatorSetField(TXA_SPEC,
    19,
    props.txa_19,
    { allowedValues: ["AV", "CA", "OB", "UN"] });
    this._validatorSetField(TXA_SPEC,
    20,
    props.txa_20,
    { allowedValues: ["AC", "AA", "AH", "AL", "AR", "PU"] });
    this._validatorSetField(TXA_SPEC,
    21,
    props.txa_21,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(TXA_SPEC,
    22,
    props.txa_22,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    23,
    props.txa_23,
    { length: { min: 1, max: 250 } });
  }

  protected _buildIAM(props: Partial<HL7_2_4_IAM>): void {
    this._assertSegmentInVersion(IAM_SPEC);
    this._segment = this._message.addSegment("IAM");
    this._validatorSetField(IAM_SPEC,
    1,
    String(props.iam_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(IAM_SPEC,
    2,
    props.iam_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    3,
    props.iam_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    4,
    props.iam_4,
    { allowedValues: ["MI", "MO", "SV", "U"] });
    this._validatorSetField(IAM_SPEC,
    5,
    props.iam_5,
    { length: { min: 1, max: 15 } });
    this._validatorSetField(IAM_SPEC,
    6,
    props.iam_6,
    { allowedValues: ["A", "D", "U"] });
    this._validatorSetField(IAM_SPEC,
    7,
    props.iam_7,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(IAM_SPEC,
    8,
    props.iam_8,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(IAM_SPEC,
    9,
    props.iam_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    10,
    props.iam_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      IAM_SPEC,
    11,
    props.iam_11 instanceof Date && !isNaN(props.iam_11.getTime())
        ? this.setDate(props.iam_11, this._opt.date) : props.iam_11 ?? "",
    { type: "date" }
    );
  }

  protected _buildOM1(props: Partial<HL7_2_4_OM1>): void {
    this._assertSegmentInVersion(OM1_SPEC);
    this._segment = this._message.addSegment("OM1");
    this._validatorSetField(OM1_SPEC,
    1,
    String(props.om1_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM1_SPEC,
    2,
    props.om1_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    3,
    props.om1_3,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(OM1_SPEC,
    4,
    props.om1_4,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    5,
    props.om1_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    6,
    props.om1_6,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    7,
    props.om1_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    8,
    props.om1_8,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    9,
    props.om1_9,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(OM1_SPEC,
    10,
    props.om1_10,
    { length: { min: 1, max: 8 } });
    this._validatorSetField(OM1_SPEC,
    11,
    props.om1_11,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    12,
    props.om1_12,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    13,
    props.om1_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    14,
    props.om1_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    15,
    props.om1_15,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    16,
    props.om1_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    17,
    props.om1_17,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(OM1_SPEC,
    18,
    props.om1_18,
    { allowedValues: ["A", "C", "E", "F", "P", "S"] });
    this._validatorSetField(OM1_SPEC,
    19,
    props.om1_19,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    20,
    props.om1_20,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(
      OM1_SPEC,
    21,
    props.om1_21 instanceof Date && !isNaN(props.om1_21.getTime())
        ? this.setDate(props.om1_21, this._opt.date) : props.om1_21 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      OM1_SPEC,
    22,
    props.om1_22 instanceof Date && !isNaN(props.om1_22.getTime())
        ? this.setDate(props.om1_22, this._opt.date) : props.om1_22 ?? "",
    { type: "date" }
    );
    this._validatorSetField(OM1_SPEC,
    23,
    props.om1_23,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    24,
    String(props.om1_24 ?? ""),
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    25,
    props.om1_25,
    { allowedValues: ["A", "B", "C", "P", "R", "S", "T"] });
    this._validatorSetField(OM1_SPEC,
    26,
    props.om1_26,
    { allowedValues: ["C", "R"] });
    this._validatorSetField(OM1_SPEC,
    27,
    props.om1_27,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    28,
    props.om1_28,
    { length: { min: 1, max: 1000 } });
    this._validatorSetField(OM1_SPEC,
    29,
    props.om1_29,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(OM1_SPEC,
    30,
    props.om1_30,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    31,
    props.om1_31,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    32,
    props.om1_32,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    33,
    props.om1_33,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    34,
    props.om1_34,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    35,
    props.om1_35,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    36,
    props.om1_36,
    { length: { min: 1, max: 65536 } });
    this._validatorSetField(OM1_SPEC,
    37,
    props.om1_37,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    38,
    props.om1_38,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    39,
    props.om1_39,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    40,
    props.om1_40,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM1_SPEC,
    41,
    props.om1_41,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    42,
    props.om1_42,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    43,
    props.om1_43,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM1_SPEC,
    44,
    props.om1_44,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    45,
    props.om1_45,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    46,
    props.om1_46,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    47,
    props.om1_47,
    { length: { min: 1, max: 250 } });
  }

  protected _buildOM2(props: Partial<HL7_2_4_OM2>): void {
    this._assertSegmentInVersion(OM2_SPEC);
    this._segment = this._message.addSegment("OM2");
    this._validatorSetField(OM2_SPEC,
    1,
    String(props.om2_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM2_SPEC,
    2,
    props.om2_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    3,
    props.om2_3,
    { length: { min: 1, max: 10 } });
    this._validatorSetField(OM2_SPEC,
    4,
    props.om2_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    5,
    props.om2_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM2_SPEC,
    6,
    props.om2_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    7,
    props.om2_7,
    { length: { min: 1, max: 205 } });
    this._validatorSetField(OM2_SPEC,
    8,
    props.om2_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    9,
    props.om2_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    10,
    props.om2_10,
    { length: { min: 1, max: 20 } });
  }

  protected _buildOM3(props: Partial<HL7_2_4_OM3>): void {
    this._assertSegmentInVersion(OM3_SPEC);
    this._segment = this._message.addSegment("OM3");
    this._validatorSetField(OM3_SPEC,
    1,
    String(props.om3_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM3_SPEC,
    2,
    props.om3_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    3,
    props.om3_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    4,
    props.om3_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    5,
    props.om3_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    6,
    props.om3_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    7,
    props.om3_7,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(OM3_SPEC,
    8,
    props.om3_8,
    { length: { min: 1, max: 250 } });
    // OM3.9 is not present in the published spec — drop the call.
  }

  protected _buildOM4(props: Partial<HL7_2_4_OM4>): void {
    this._assertSegmentInVersion(OM4_SPEC);
    this._segment = this._message.addSegment("OM4");
    this._validatorSetField(OM4_SPEC,
    1,
    String(props.om4_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM4_SPEC,
    2,
    props.om4_2,
    { length: { min: 1, max: 1 } });
    this._validatorSetField(OM4_SPEC,
    3,
    props.om4_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM4_SPEC,
    4,
    String(props.om4_4 ?? ""),
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    5,
    props.om4_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    6,
    props.om4_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    7,
    props.om4_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    8,
    props.om4_8,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    9,
    props.om4_9,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    10,
    props.om4_10,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    11,
    props.om4_11,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    12,
    props.om4_12,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    13,
    props.om4_13,
    { allowedValues: ["E", "R", "S", "T"] });
    this._validatorSetField(OM4_SPEC,
    14,
    props.om4_14,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM4_SPEC,
    15,
    props.om4_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    16,
    props.om4_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    17,
    props.om4_17,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    18,
    props.om4_18,
    { length: { min: 1, max: 250 } });
    // OM4.19 is not present in the published spec — drop the call.
  }

  protected _buildOM5(props: Partial<HL7_2_4_OM5>): void {
    this._assertSegmentInVersion(OM5_SPEC);
    this._segment = this._message.addSegment("OM5");
    this._validatorSetField(OM5_SPEC,
    1,
    String(props.om5_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM5_SPEC,
    2,
    props.om5_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM5_SPEC,
    3,
    props.om5_3,
    { length: { min: 1, max: 250 } });
  }

  protected _buildOM6(props: Partial<HL7_2_4_OM6>): void {
    this._assertSegmentInVersion(OM6_SPEC);
    this._segment = this._message.addSegment("OM6");
    this._validatorSetField(OM6_SPEC,
    1,
    String(props.om6_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM6_SPEC,
    2,
    props.om6_2,
    { length: { min: 1, max: 10240 } });
  }

  protected _buildDRG(props: Partial<HL7_2_4_DRG>): void {
    this._assertSegmentInVersion(DRG_SPEC);
    this._segment = this._message.addSegment("DRG");
    this._validatorSetField(DRG_SPEC,
    1,
    props.drg_1,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      DRG_SPEC,
    2,
    props.drg_2 instanceof Date && !isNaN(props.drg_2.getTime())
        ? this.setDate(props.drg_2, this._opt.date) : props.drg_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(DRG_SPEC,
    3,
    props.drg_3,
    { allowedValues: ["Y", "N"], length: 1 });
    this._validatorSetField(DRG_SPEC,
    4,
    props.drg_4,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(DRG_SPEC,
    5,
    props.drg_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(DRG_SPEC,
    6,
    String(props.drg_6 ?? ""),
    { length: { min: 1, max: 3 } });
    this._validatorSetField(DRG_SPEC,
    7,
    props.drg_7,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(DRG_SPEC,
    8,
    props.drg_8,
    { length: { min: 1, max: 250 } });
  }

  /**
   * Build the ECD (Equipment Command) segment.
   *
   * @remarks
   * Introduced in HL7 v2.4. Field-level validation (R/O/B/W/D) is driven by
   * `ECD_SPEC` and the per-version `usage` map, so the same method body
   * automatically does the right thing in derived classes (v2.5 → v2.8). For
   * example, on a v2.8 builder, attempting to set `ecd_4` throws because that
   * field is `W` (Withdrawn) in v2.8.
   *
   * @since 4.0.0
   */
  buildECD(props: Partial<HL7_2_4_ECD>): this {
    this.headerExists();
    this._buildECD(props);
    return this;
  }

  protected _buildECD(props: Partial<HL7_ECD>): void {
    this._assertSegmentInVersion(ECD_SPEC);
    this._segment = this._message.addSegment("ECD");
    this._validatorSetField(
      ECD_SPEC,
      1,
      props.ecd_1 ?? props.referenceCommandNumber,
    );
    this._validatorSetField(
      ECD_SPEC,
      2,
      props.ecd_2 ?? props.remoteControlCommand,
    );
    this._validatorSetField(
      ECD_SPEC,
      3,
      props.ecd_3 ?? props.responseRequired,
    );
    this._validatorSetField(
      ECD_SPEC,
      4,
      props.ecd_4 ?? props.requestedCompletionTime,
    );
    this._validatorSetField(ECD_SPEC, 5, props.ecd_5 ?? props.parameters);
  }
}
