import { randomString } from "@/utils/randomString";
import { HL7_2_1 } from "@/hl7/2.1";
import {
  HL7_2_1_MSH,
  HL7_2_1_OBR,
  HL7_2_1_OBX,
  HL7_2_1_ORC,
  HL7_2_1_PID,
  HL7_2_1_PV1,
} from "@/hl7/2.1/types";
import { TABLE_0127 } from "@/hl7/tables/0127";
import { TABLE_0128 } from "@/hl7/tables/0128";
import { TABLE_0136 } from "@/hl7/tables/0136";
import { TABLE_0326 } from "@/hl7/tables/0326";
import { ClientBuilderOptions_Hl7_2_2 } from "./types";
import { HL7_2_2_MSH } from "./msh";
import { HL7_2_2_AL1 } from "./al1";
import { HL7_2_2_UB2 } from "./ub2";
import { HL7_2_2_RXA } from "./rxa";
import { HL7_2_2_RXR } from "./rxr";
import { HL7_2_2_MFI } from "./mfi";
import { HL7_2_2_MFE } from "./mfe";
import { HL7_2_2_STF } from "./stf";
import { HL7_2_2_PID } from "./pid";
import { HL7_2_2_PV1 } from "./pv1";
import { HL7_2_2_OBX } from "./obx";
import { HL7_2_2_OBR } from "./obr";
import { HL7_2_2_ORC } from "./orc";
import { HL7_2_2_RXO } from "./rxo";
import { HL7_2_2_RXE } from "./rxe";
import { HL7_2_2_RXD } from "./rxd";
import { HL7_2_2_RXG } from "./rxg";
import { HL7_2_2_ODS } from "./ods";
import { HL7_2_2_ODT } from "./odt";

export type { HL7_2_2_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_2 } from "./types";

/**
 * Hl7 Specification Version 2.2
 * @remarks Used to build HL7 messages following the 2.2 specification.
 * @since 1.0.0
 */
export class HL7_2_2 extends HL7_2_1 {
  protected _table_0127: string[];
  protected _table_0128: string[];
  protected _table_0136: string[];
  protected _table_0326: string[];

  constructor(props?: ClientBuilderOptions_Hl7_2_2) {
    super(props);
    this.version = "2.2";
    this._table_0127 = props?.table_0127 || TABLE_0127;
    this._table_0128 = props?.table_0128 || TABLE_0128;
    this._table_0136 = props?.table_0136 || TABLE_0136;
    this._table_0326 = props?.table_0326 || TABLE_0326;
  }

  /**
   * Check MSH Header Properties for HL7 2.2
   * @since 1.0.0
   */
  checkMSH(msh: HL7_2_2_MSH): boolean {
    if (
      typeof msh.msh_9_1 === "undefined" ||
      typeof msh.msh_9_2 === "undefined"
    ) {
      throw new Error("MSH.9.1 & MSH 9.2 must be defined.");
    }
    if (msh.msh_9_1.length !== 3) {
      throw new Error("MSH.9.1 must be 3 characters in length.");
    }
    if (msh.msh_9_2.length !== 3) {
      throw new Error("MSH.9.2 must be 3 characters in length.");
    }
    if (
      typeof msh.msh_10 !== "undefined" &&
      (msh.msh_10.length < 1 || msh.msh_10.length > 20)
    ) {
      throw new Error(
        "MSH.10 must be greater than 0 and less than 20 characters.",
      );
    }
    return true;
  }

  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
    const msh = props as unknown as Partial<HL7_2_2_MSH>;
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
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("11", msh.msh_11, {
      required: true,
      length: 1,
      allowedValues: ["P", "T"],
    });
    this._validatorSetValue("12", this.version, { required: true });
  }

  protected _buildAL1(props: Partial<HL7_2_2_AL1>): void {
    this._segment = this._message.addSegment("AL1");
    this._validatorSetValue("1", String(props.al1_1), {
      required: true,
      length: { min: 1, max: 4 },
    });
    this._validatorSetValue("2", props.al1_2, {
      allowedValues: this._table_0127,
    });
    this._validatorSetValue("3", props.al1_3, {
      required: true,
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("4", props.al1_4, {
      allowedValues: this._table_0128,
    });
    this._validatorSetValue("5", props.al1_5, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue(
      "6",
      props.al1_6 instanceof Date && !isNaN(props.al1_6.getTime())
        ? this.setDate(props.al1_6, this._opt.date)
        : props.al1_6 ?? "",
      { type: "date" },
    );
  }

  protected _buildUB2(props: Partial<HL7_2_2_UB2>): void {
    this._segment = this._message.addSegment("UB2");
    this._validatorSetValue(
      "1",
      props.ub2_1 !== undefined ? String(props.ub2_1) : undefined,
      { length: { min: 1, max: 4 } },
    );
    this._validatorSetValue("2", props.ub2_2, { length: { min: 1, max: 3 } });
    this._validatorSetValue("3", props.ub2_3, { length: { min: 1, max: 14 } });
    this._validatorSetValue("4", props.ub2_4, { length: { min: 1, max: 3 } });
    this._validatorSetValue("5", props.ub2_5, { length: { min: 1, max: 4 } });
    this._validatorSetValue("6", props.ub2_6);
    this._validatorSetValue("7", props.ub2_7);
    this._validatorSetValue("8", props.ub2_8);
    this._validatorSetValue("9", props.ub2_9, { length: { min: 1, max: 29 } });
    this._validatorSetValue("10", props.ub2_10, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("11", props.ub2_11, {
      length: { min: 1, max: 5 },
    });
    this._validatorSetValue("12", props.ub2_12, {
      length: { min: 1, max: 23 },
    });
    this._validatorSetValue("13", props.ub2_13, {
      length: { min: 1, max: 4 },
    });
    this._validatorSetValue("14", props.ub2_14, {
      length: { min: 1, max: 14 },
    });
    this._validatorSetValue("15", props.ub2_15, {
      length: { min: 1, max: 27 },
    });
    this._validatorSetValue("16", props.ub2_16, { length: { min: 1, max: 2 } });
    this._validatorSetValue("17", props.ub2_17, { length: { min: 1, max: 3 } });
  }

  protected _buildRXA(props: Partial<HL7_2_2_RXA>): void {
    this._segment = this._message.addSegment("RXA");
    this._validatorSetValue(
      "1",
      props.rxa_1 !== undefined ? String(props.rxa_1) : undefined,
      { required: true, length: { min: 1, max: 4 } },
    );
    this._validatorSetValue(
      "2",
      props.rxa_2 !== undefined ? String(props.rxa_2) : undefined,
      { required: true },
    );
    this._validatorSetValue(
      "3",
      props.rxa_3 instanceof Date && !isNaN(props.rxa_3.getTime())
        ? this.setDate(props.rxa_3, this._opt.date)
        : props.rxa_3 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue(
      "4",
      props.rxa_4 instanceof Date && !isNaN(props.rxa_4.getTime())
        ? this.setDate(props.rxa_4, this._opt.date)
        : props.rxa_4 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue("5", props.rxa_5, {
      required: true,
      length: { min: 1, max: 100 },
    });
    this._validatorSetValue("6", props.rxa_6, {
      required: true,
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("7", props.rxa_7, { length: { min: 1, max: 60 } });
    this._validatorSetValue("8", props.rxa_8, { length: { min: 1, max: 60 } });
    this._validatorSetValue("9", props.rxa_9, {
      length: { min: 1, max: 200 },
    });
    this._validatorSetValue("10", props.rxa_10, {
      length: { min: 1, max: 80 },
    });
    this._validatorSetValue("11", props.rxa_11, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("12", props.rxa_12, {
      length: { min: 1, max: 20 },
    });
  }

  protected _buildRXR(props: Partial<HL7_2_2_RXR>): void {
    this._segment = this._message.addSegment("RXR");
    this._validatorSetValue("1", props.rxr_1, {
      required: true,
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("2", props.rxr_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.rxr_3, { length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.rxr_4, { length: { min: 1, max: 60 } });
  }

  protected _buildMFI(props: Partial<HL7_2_2_MFI>): void {
    this._segment = this._message.addSegment("MFI");
    this._validatorSetValue("1", props.mfi_1, {
      required: true,
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("2", props.mfi_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.mfi_3, {
      required: true,
      allowedValues: ["REP", "UPD"],
    });
    this._validatorSetValue(
      "4",
      props.mfi_4 instanceof Date && !isNaN(props.mfi_4.getTime())
        ? this.setDate(props.mfi_4, this._opt.date)
        : props.mfi_4 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "5",
      props.mfi_5 instanceof Date && !isNaN(props.mfi_5.getTime())
        ? this.setDate(props.mfi_5, this._opt.date)
        : props.mfi_5 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("6", props.mfi_6, {
      required: true,
      allowedValues: ["AL", "ER", "NE", "NR"],
    });
  }

  protected _buildMFE(props: Partial<HL7_2_2_MFE>): void {
    this._segment = this._message.addSegment("MFE");
    this._validatorSetValue("1", props.mfe_1, {
      required: true,
      allowedValues: ["MAD", "MDC", "MDL", "MUP", "MAC"],
    });
    this._validatorSetValue("2", props.mfe_2, { length: { min: 1, max: 20 } });
    this._validatorSetValue(
      "3",
      props.mfe_3 instanceof Date && !isNaN(props.mfe_3.getTime())
        ? this.setDate(props.mfe_3, this._opt.date)
        : props.mfe_3 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("4", props.mfe_4, {
      required: true,
      length: { min: 1, max: 200 },
    });
  }

  protected _buildSTF(props: Partial<HL7_2_2_STF>): void {
    this._segment = this._message.addSegment("STF");
    this._validatorSetValue("1", props.stf_1, { length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.stf_2 || props.staffIdCode, {
      required: true,
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("3", props.stf_3 || props.staffName, {
      length: { min: 1, max: 48 },
    });
    this._validatorSetValue("4", props.stf_4, { length: { min: 1, max: 2 } });
    this._validatorSetValue("5", props.stf_5, {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetValue(
      "6",
      props.stf_6 instanceof Date && !isNaN(props.stf_6.getTime())
        ? this.setDate(props.stf_6, this._opt.date)
        : props.stf_6 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("7", props.stf_7, {
      allowedValues: ["A", "I"],
      length: 1,
    });
    this._validatorSetValue("8", props.stf_8, {
      length: { min: 1, max: 200 },
    });
    this._validatorSetValue("9", props.stf_9, {
      length: { min: 1, max: 200 },
    });
    this._validatorSetValue("10", props.stf_10, {
      length: { min: 1, max: 40 },
    });
    this._validatorSetValue("11", props.stf_11, {
      length: { min: 1, max: 106 },
    });
    this._validatorSetValue(
      "12",
      props.stf_12 instanceof Date && !isNaN(props.stf_12.getTime())
        ? this.setDate(props.stf_12, this._opt.date)
        : props.stf_12 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "13",
      props.stf_13 instanceof Date && !isNaN(props.stf_13.getTime())
        ? this.setDate(props.stf_13, this._opt.date)
        : props.stf_13 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("14", props.stf_14, {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildPID(props: Partial<HL7_2_1_PID>): void {
    super._buildPID(props);
    const pid = props as unknown as Partial<HL7_2_2_PID>;
    this._validatorSetValue("20", pid.pid_20, { length: { min: 1, max: 25 } });
    this._validatorSetValue("21", pid.pid_21, { length: { min: 1, max: 20 } });
    this._validatorSetValue("22", pid.pid_22, { length: { min: 1, max: 3 } });
    this._validatorSetValue("23", pid.pid_23, { length: { min: 1, max: 25 } });
    this._validatorSetValue("24", pid.pid_24, {
      allowedValues: this._table_0136,
      length: 1,
    });
    this._validatorSetValue(
      "25",
      pid.pid_25 !== undefined ? String(pid.pid_25) : undefined,
      { length: 2 },
    );
    this._validatorSetValue("26", pid.pid_26, { length: { min: 1, max: 4 } });
  }

  protected _buildPV1(props: Partial<HL7_2_1_PV1>): void {
    super._buildPV1(props);
    const pv1 = props as unknown as Partial<HL7_2_2_PV1>;
    this._validatorSetValue(
      "45",
      pv1.pv1_45 instanceof Date && !isNaN(pv1.pv1_45.getTime())
        ? this.setDate(pv1.pv1_45, this._opt.date)
        : pv1.pv1_45 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("46", pv1.pv1_46, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("47", pv1.pv1_47, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("48", pv1.pv1_48, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("49", pv1.pv1_49, {
      length: { min: 1, max: 12 },
    });
    this._validatorSetValue("50", pv1.pv1_50, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue("51", pv1.pv1_51, {
      allowedValues: this._table_0326,
      length: 1,
    });
    this._validatorSetValue("52", pv1.pv1_52, {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildOBX(props: Partial<HL7_2_1_OBX>): void {
    super._buildOBX(props);
    const obx = props as unknown as Partial<HL7_2_2_OBX>;
    this._validatorSetValue(
      "12",
      obx.obx_12 instanceof Date && !isNaN(obx.obx_12.getTime())
        ? this.setDate(obx.obx_12, this._opt.date)
        : obx.obx_12 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("13", obx.obx_13, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue(
      "14",
      obx.obx_14 instanceof Date && !isNaN(obx.obx_14.getTime())
        ? this.setDate(obx.obx_14, this._opt.date)
        : obx.obx_14 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("15", obx.obx_15, {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildOBR(props: Partial<HL7_2_1_OBR>): void {
    super._buildOBR(props);
    const obr = props as unknown as Partial<HL7_2_2_OBR>;
    this._validatorSetValue("26", obr.obr_26, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("27", obr.obr_27, {
      length: { min: 1, max: 200 },
    });
    this._validatorSetValue("28", obr.obr_28, {
      length: { min: 1, max: 150 },
    });
    this._validatorSetValue("29", obr.obr_29, {
      length: { min: 1, max: 150 },
    });
    this._validatorSetValue("30", obr.obr_30, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("31", obr.obr_31, {
      length: { min: 1, max: 300 },
    });
    this._validatorSetValue("32", obr.obr_32, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("33", obr.obr_33, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("34", obr.obr_34, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("35", obr.obr_35, {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildORC(props: Partial<HL7_2_1_ORC>): void {
    super._buildORC(props);
    const orc = props as unknown as Partial<HL7_2_2_ORC>;
    this._validatorSetValue(
      "15",
      orc.orc_15 instanceof Date && !isNaN(orc.orc_15.getTime())
        ? this.setDate(orc.orc_15, this._opt.date)
        : orc.orc_15 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("16", orc.orc_16, {
      length: { min: 1, max: 200 },
    });
    this._validatorSetValue("17", orc.orc_17, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("18", orc.orc_18, {
      length: { min: 1, max: 60 },
    });
    this._validatorSetValue("19", orc.orc_19, {
      length: { min: 1, max: 80 },
    });
    this._validatorSetValue("20", orc.orc_20, {
      length: { min: 1, max: 40 },
    });
  }

  protected _buildRXO(props: Partial<HL7_2_2_RXO>): void {
    this._segment = this._message.addSegment("RXO");
    this._validatorSetValue("1", props.rxo_1, { required: true, length: { min: 1, max: 100 } });
    this._validatorSetValue("2", props.rxo_2, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("3", props.rxo_3, { length: { min: 1, max: 20 } });
    this._validatorSetValue("4", props.rxo_4, { length: { min: 1, max: 60 } });
    this._validatorSetValue("5", props.rxo_5, { length: { min: 1, max: 60 } });
    this._validatorSetValue("6", props.rxo_6, { length: { min: 1, max: 200 } });
    this._validatorSetValue("7", props.rxo_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue("8", props.rxo_8, { length: { min: 1, max: 12 } });
    this._validatorSetValue("9", props.rxo_9, { length: 1, allowedValues: ["G", "N"] });
    this._validatorSetValue("10", props.rxo_10, { length: { min: 1, max: 100 } });
    this._validatorSetValue("11", props.rxo_11, { length: { min: 1, max: 20 } });
    this._validatorSetValue("12", props.rxo_12, { length: { min: 1, max: 60 } });
    this._validatorSetValue("13", props.rxo_13, { length: { min: 1, max: 3 } });
    this._validatorSetValue("14", props.rxo_14, { length: { min: 1, max: 60 } });
    this._validatorSetValue("15", props.rxo_15, { length: { min: 1, max: 60 } });
    this._validatorSetValue("16", props.rxo_16, { length: 1, allowedValues: ["Y", "N"] });
    this._validatorSetValue("17", props.rxo_17, { length: { min: 1, max: 20 } });
  }

  protected _buildRXE(props: Partial<HL7_2_2_RXE>): void {
    this._segment = this._message.addSegment("RXE");
    this._validatorSetValue("1", props.rxe_1, { length: { min: 1, max: 200 } });
    this._validatorSetValue("2", props.rxe_2, { required: true, length: { min: 1, max: 100 } });
    this._validatorSetValue("3", props.rxe_3, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("4", props.rxe_4, { length: { min: 1, max: 20 } });
    this._validatorSetValue("5", props.rxe_5, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("6", props.rxe_6, { length: { min: 1, max: 60 } });
    this._validatorSetValue("7", props.rxe_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue("8", props.rxe_8, { length: { min: 1, max: 12 } });
    this._validatorSetValue("9", props.rxe_9, { length: { min: 1, max: 1 } });
    this._validatorSetValue("10", props.rxe_10, { length: { min: 1, max: 20 } });
    this._validatorSetValue("11", props.rxe_11, { length: { min: 1, max: 60 } });
    this._validatorSetValue("12", props.rxe_12, { length: { min: 1, max: 3 } });
    this._validatorSetValue("13", props.rxe_13, { length: { min: 1, max: 60 } });
    this._validatorSetValue("14", props.rxe_14, { length: { min: 1, max: 60 } });
    this._validatorSetValue("15", props.rxe_15, { length: { min: 1, max: 20 } });
    this._validatorSetValue("16", props.rxe_16, { length: { min: 1, max: 20 } });
    this._validatorSetValue("17", props.rxe_17, { length: { min: 1, max: 20 } });
    this._validatorSetValue(
      "18",
      props.rxe_18 instanceof Date && !isNaN(props.rxe_18.getTime())
        ? this.setDate(props.rxe_18, this._opt.date) : props.rxe_18 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("19", props.rxe_19, { length: { min: 1, max: 20 } });
    this._validatorSetValue("20", props.rxe_20, { length: 1, allowedValues: ["Y", "N"] });
    this._validatorSetValue("21", props.rxe_21, { length: { min: 1, max: 200 } });
    this._validatorSetValue("22", props.rxe_22, { length: { min: 1, max: 20 } });
    this._validatorSetValue("23", props.rxe_23, { length: { min: 1, max: 6 } });
    this._validatorSetValue("24", props.rxe_24, { length: { min: 1, max: 60 } });
  }

  protected _buildRXD(props: Partial<HL7_2_2_RXD>): void {
    this._segment = this._message.addSegment("RXD");
    this._validatorSetValue("1", props.rxd_1, { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.rxd_2, { required: true, length: { min: 1, max: 100 } });
    this._validatorSetValue(
      "3",
      props.rxd_3 instanceof Date && !isNaN(props.rxd_3.getTime())
        ? this.setDate(props.rxd_3, this._opt.date) : props.rxd_3 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue("4", props.rxd_4, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("5", props.rxd_5, { length: { min: 1, max: 60 } });
    this._validatorSetValue("6", props.rxd_6, { length: { min: 1, max: 60 } });
    this._validatorSetValue("7", props.rxd_7, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("8", props.rxd_8, { length: { min: 1, max: 20 } });
    this._validatorSetValue("9", props.rxd_9, { length: { min: 1, max: 200 } });
    this._validatorSetValue("10", props.rxd_10, { length: { min: 1, max: 200 } });
    this._validatorSetValue("11", props.rxd_11, { length: { min: 1, max: 1 } });
    this._validatorSetValue("12", props.rxd_12, { length: { min: 1, max: 20 } });
    this._validatorSetValue("13", props.rxd_13, { length: { min: 1, max: 12 } });
    this._validatorSetValue("14", props.rxd_14, { length: 1, allowedValues: ["Y", "N"] });
    this._validatorSetValue("15", props.rxd_15, { length: { min: 1, max: 200 } });
  }

  protected _buildRXG(props: Partial<HL7_2_2_RXG>): void {
    this._segment = this._message.addSegment("RXG");
    this._validatorSetValue("1", props.rxg_1, { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.rxg_2, { length: { min: 1, max: 4 } });
    this._validatorSetValue("3", props.rxg_3, { length: { min: 1, max: 200 } });
    this._validatorSetValue("4", props.rxg_4, { required: true, length: { min: 1, max: 100 } });
    this._validatorSetValue("5", props.rxg_5, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("6", props.rxg_6, { length: { min: 1, max: 20 } });
    this._validatorSetValue("7", props.rxg_7, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("8", props.rxg_8, { length: { min: 1, max: 60 } });
    this._validatorSetValue("9", props.rxg_9, { length: { min: 1, max: 200 } });
    this._validatorSetValue("10", props.rxg_10, { length: { min: 1, max: 1 } });
    this._validatorSetValue("11", props.rxg_11, { length: { min: 1, max: 12 } });
    this._validatorSetValue("12", props.rxg_12, { length: 1, allowedValues: ["Y", "N"] });
    this._validatorSetValue("13", props.rxg_13, { length: { min: 1, max: 200 } });
    this._validatorSetValue("14", props.rxg_14, { length: { min: 1, max: 20 } });
    this._validatorSetValue("15", props.rxg_15, { length: { min: 1, max: 6 } });
    this._validatorSetValue("16", props.rxg_16, { length: { min: 1, max: 60 } });
  }

  protected _buildODS(props: Partial<HL7_2_2_ODS>): void {
    this._segment = this._message.addSegment("ODS");
    this._validatorSetValue("1", props.ods_1, { required: true, length: 1, allowedValues: ["D", "S", "P"] });
    this._validatorSetValue("2", props.ods_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.ods_3, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.ods_4, { length: { min: 1, max: 60 } });
  }

  protected _buildODT(props: Partial<HL7_2_2_ODT>): void {
    this._segment = this._message.addSegment("ODT");
    this._validatorSetValue("1", props.odt_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.odt_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.odt_3, { length: { min: 1, max: 60 } });
  }
}
