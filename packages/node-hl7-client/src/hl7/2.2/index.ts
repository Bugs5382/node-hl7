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
import { HL7_2_1 } from "@/hl7/2.1";
import {
  HL7_2_1_MSH,
  HL7_2_1_OBR,
  HL7_2_1_OBX,
  HL7_2_1_ORC,
  HL7_2_1_PID,
  HL7_2_1_PV1,
} from "@/hl7/2.1/types";
import { AL1_SPEC } from "@/hl7/metadata/segments/al1";
import { MFE_SPEC } from "@/hl7/metadata/segments/mfe";
import { MFI_SPEC } from "@/hl7/metadata/segments/mfi";
import { OBR_SPEC } from "@/hl7/metadata/segments/obr";
import { OBX_SPEC } from "@/hl7/metadata/segments/obx";
import { ODS_SPEC } from "@/hl7/metadata/segments/ods";
import { ODT_SPEC } from "@/hl7/metadata/segments/odt";
import { ORC_SPEC } from "@/hl7/metadata/segments/orc";
import { PID_SPEC } from "@/hl7/metadata/segments/pid";
import { PV1_SPEC } from "@/hl7/metadata/segments/pv1";
import { RXA_SPEC } from "@/hl7/metadata/segments/rxa";
import { RXD_SPEC } from "@/hl7/metadata/segments/rxd";
import { RXE_SPEC } from "@/hl7/metadata/segments/rxe";
import { RXG_SPEC } from "@/hl7/metadata/segments/rxg";
import { RXO_SPEC } from "@/hl7/metadata/segments/rxo";
import { RXR_SPEC } from "@/hl7/metadata/segments/rxr";
import { STF_SPEC } from "@/hl7/metadata/segments/stf";
import { UB2_SPEC } from "@/hl7/metadata/segments/ub2";
import { TABLE_0127 } from "@/hl7/tables/0127";
import { TABLE_0128 } from "@/hl7/tables/0128";
import { TABLE_0136 } from "@/hl7/tables/0136";
import { TABLE_0326 } from "@/hl7/tables/0326";
import { randomString } from "@/utils/randomString";

import { HL7_2_2_AL1 } from "./al1";
import { HL7_2_2_MFE } from "./mfe";
import { HL7_2_2_MFI } from "./mfi";
import { HL7_2_2_MSH } from "./msh";
import { HL7_2_2_OBR } from "./obr";
import { HL7_2_2_OBX } from "./obx";
import { HL7_2_2_ODS } from "./ods";
import { HL7_2_2_ODT } from "./odt";
import { HL7_2_2_ORC } from "./orc";
import { HL7_2_2_PID } from "./pid";
import { HL7_2_2_PV1 } from "./pv1";
import { HL7_2_2_RXA } from "./rxa";
import { HL7_2_2_RXD } from "./rxd";
import { HL7_2_2_RXE } from "./rxe";
import { HL7_2_2_RXG } from "./rxg";
import { HL7_2_2_RXO } from "./rxo";
import { HL7_2_2_RXR } from "./rxr";
import { HL7_2_2_STF } from "./stf";
import { ClientBuilderOptions_Hl7_2_2 } from "./types";
import { HL7_2_2_UB2 } from "./ub2";

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

  constructor(properties?: ClientBuilderOptions_Hl7_2_2) {
    super(properties);
    this.version = "2.2";
    this._table_0127 = properties?.table_0127 || TABLE_0127;
    this._table_0128 = properties?.table_0128 || TABLE_0128;
    this._table_0136 = properties?.table_0136 || TABLE_0136;
    this._table_0326 = properties?.table_0326 || TABLE_0326;
  }

  /**
   * Check MSH Header Properties for HL7 2.2
   * @since 1.0.0
   */
  checkMSH(msh: HL7_2_2_MSH): boolean {
    if (msh.msh_9_1 === undefined || msh.msh_9_2 === undefined) {
      throw new TypeError("MSH.9.1 & MSH 9.2 must be defined.");
    }
    if (msh.msh_9_1.length !== 3) {
      throw new Error("MSH.9.1 must be 3 characters in length.");
    }
    if (msh.msh_9_2.length !== 3) {
      throw new Error("MSH.9.2 must be 3 characters in length.");
    }
    if (
      msh.msh_10 !== undefined &&
      (msh.msh_10.length === 0 || msh.msh_10.length > 20)
    ) {
      throw new Error(
        "MSH.10 must be greater than 0 and less than 20 characters.",
      );
    }
    return true;
  }

  protected _buildAL1(properties: Partial<HL7_2_2_AL1>): void {
    this._assertSegmentInVersion(AL1_SPEC);
    this._segment = this._message.addSegment("AL1");
    this._validatorSetField(AL1_SPEC, 1, String(properties.al1_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(AL1_SPEC, 2, properties.al1_2, {
      allowedValues: this._table_0127,
    });
    this._validatorSetField(AL1_SPEC, 3, properties.al1_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(AL1_SPEC, 4, properties.al1_4, {
      allowedValues: this._table_0128,
    });
    this._validatorSetField(AL1_SPEC, 5, properties.al1_5, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetField(
      AL1_SPEC,
      6,
      properties.al1_6 instanceof Date && !isNaN(properties.al1_6.getTime())
        ? this.setDate(properties.al1_6, this._opt.date)
        : (properties.al1_6 ?? ""),
      { type: "date" },
    );
  }

  protected _buildMFE(properties: Partial<HL7_2_2_MFE>): void {
    this._assertSegmentInVersion(MFE_SPEC);
    this._segment = this._message.addSegment("MFE");
    this._validatorSetField(MFE_SPEC, 1, properties.mfe_1, {
      allowedValues: ["MAD", "MDC", "MDL", "MUP", "MAC"],
    });
    this._validatorSetField(MFE_SPEC, 2, properties.mfe_2, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(
      MFE_SPEC,
      3,
      properties.mfe_3 instanceof Date && !isNaN(properties.mfe_3.getTime())
        ? this.setDate(properties.mfe_3, this._opt.date)
        : (properties.mfe_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(MFE_SPEC, 4, properties.mfe_4, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildMFI(properties: Partial<HL7_2_2_MFI>): void {
    this._assertSegmentInVersion(MFI_SPEC);
    this._segment = this._message.addSegment("MFI");
    this._validatorSetField(MFI_SPEC, 1, properties.mfi_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(MFI_SPEC, 2, properties.mfi_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(MFI_SPEC, 3, properties.mfi_3, {
      allowedValues: ["REP", "UPD"],
    });
    this._validatorSetField(
      MFI_SPEC,
      4,
      properties.mfi_4 instanceof Date && !isNaN(properties.mfi_4.getTime())
        ? this.setDate(properties.mfi_4, this._opt.date)
        : (properties.mfi_4 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      MFI_SPEC,
      5,
      properties.mfi_5 instanceof Date && !isNaN(properties.mfi_5.getTime())
        ? this.setDate(properties.mfi_5, this._opt.date)
        : (properties.mfi_5 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(MFI_SPEC, 6, properties.mfi_6, {
      allowedValues: ["AL", "ER", "NE", "NR"],
    });
  }

  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    const msh = properties as unknown as Partial<HL7_2_2_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { length: 4, required: true },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue(
      "7",
      msh.msh_7 instanceof Date && !isNaN(msh.msh_7.getTime())
        ? this.setDate(msh.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      { required: true, type: "date" },
    );
    this._validatorSetValue("8", msh.msh_8, { length: { max: 40, min: 1 } });
    this._validatorSetValue("9.1", msh.msh_9_1, {
      length: { max: 3, min: 1 },
      required: true,
    });
    this._validatorSetValue("9.2", msh.msh_9_2, {
      length: { max: 3, min: 1 },
      required: true,
    });
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue("11", msh.msh_11, {
      allowedValues: ["P", "T"],
      length: 1,
      required: true,
    });
    this._validatorSetValue("12", this.version, { required: true });
  }

  protected _buildOBR(properties: Partial<HL7_2_1_OBR>): void {
    this._assertSegmentInVersion(OBR_SPEC);
    super._buildOBR(properties);
    const obr = properties as unknown as Partial<HL7_2_2_OBR>;
    this._validatorSetField(OBR_SPEC, 26, obr.obr_26, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 27, obr.obr_27, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 28, obr.obr_28, {
      length: { max: 150, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 29, obr.obr_29, {
      length: { max: 150, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 30, obr.obr_30, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 31, obr.obr_31, {
      length: { max: 300, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 32, obr.obr_32, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 33, obr.obr_33, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 34, obr.obr_34, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 35, obr.obr_35, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildOBX(properties: Partial<HL7_2_1_OBX>): void {
    this._assertSegmentInVersion(OBX_SPEC);
    super._buildOBX(properties);
    const obx = properties as unknown as Partial<HL7_2_2_OBX>;
    this._validatorSetField(
      OBX_SPEC,
      12,
      obx.obx_12 instanceof Date && !isNaN(obx.obx_12.getTime())
        ? this.setDate(obx.obx_12, this._opt.date)
        : (obx.obx_12 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(OBX_SPEC, 13, obx.obx_13, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(
      OBX_SPEC,
      14,
      obx.obx_14 instanceof Date && !isNaN(obx.obx_14.getTime())
        ? this.setDate(obx.obx_14, this._opt.date)
        : (obx.obx_14 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(OBX_SPEC, 15, obx.obx_15, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildODS(properties: Partial<HL7_2_2_ODS>): void {
    this._assertSegmentInVersion(ODS_SPEC);
    this._segment = this._message.addSegment("ODS");
    this._validatorSetField(ODS_SPEC, 1, properties.ods_1, {
      allowedValues: ["D", "S", "P"],
      length: 1,
    });
    this._validatorSetField(ODS_SPEC, 2, properties.ods_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ODS_SPEC, 3, properties.ods_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ODS_SPEC, 4, properties.ods_4, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildODT(properties: Partial<HL7_2_2_ODT>): void {
    this._assertSegmentInVersion(ODT_SPEC);
    this._segment = this._message.addSegment("ODT");
    this._validatorSetField(ODT_SPEC, 1, properties.odt_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ODT_SPEC, 2, properties.odt_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ODT_SPEC, 3, properties.odt_3, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildORC(properties: Partial<HL7_2_1_ORC>): void {
    this._assertSegmentInVersion(ORC_SPEC);
    super._buildORC(properties);
    const orc = properties as unknown as Partial<HL7_2_2_ORC>;
    this._validatorSetField(
      ORC_SPEC,
      15,
      orc.orc_15 instanceof Date && !isNaN(orc.orc_15.getTime())
        ? this.setDate(orc.orc_15, this._opt.date)
        : (orc.orc_15 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(ORC_SPEC, 16, orc.orc_16, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 17, orc.orc_17, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 18, orc.orc_18, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 19, orc.orc_19, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 20, orc.orc_20, {
      length: { max: 40, min: 1 },
    });
  }

  protected _buildPID(properties: Partial<HL7_2_1_PID>): void {
    this._assertSegmentInVersion(PID_SPEC);
    super._buildPID(properties);
    const pid = properties as unknown as Partial<HL7_2_2_PID>;
    this._validatorSetField(PID_SPEC, 20, pid.pid_20, {
      length: { max: 25, min: 1 },
    });
    this._validatorSetField(PID_SPEC, 21, pid.pid_21, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(PID_SPEC, 22, pid.pid_22, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(PID_SPEC, 23, pid.pid_23, {
      length: { max: 25, min: 1 },
    });
    this._validatorSetField(PID_SPEC, 24, pid.pid_24, {
      allowedValues: this._table_0136,
      length: 1,
    });
    this._validatorSetField(
      PID_SPEC,
      25,
      pid.pid_25 === undefined ? undefined : String(pid.pid_25),
      { length: 2 },
    );
    this._validatorSetField(PID_SPEC, 26, pid.pid_26, {
      length: { max: 4, min: 1 },
    });
  }

  protected _buildPV1(properties: Partial<HL7_2_1_PV1>): void {
    this._assertSegmentInVersion(PV1_SPEC);
    super._buildPV1(properties);
    const pv1 = properties as unknown as Partial<HL7_2_2_PV1>;
    this._validatorSetField(
      PV1_SPEC,
      45,
      pv1.pv1_45 instanceof Date && !isNaN(pv1.pv1_45.getTime())
        ? this.setDate(pv1.pv1_45, this._opt.date)
        : (pv1.pv1_45 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PV1_SPEC, 46, pv1.pv1_46, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 47, pv1.pv1_47, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 48, pv1.pv1_48, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 49, pv1.pv1_49, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 50, pv1.pv1_50, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 51, pv1.pv1_51, {
      allowedValues: this._table_0326,
      length: 1,
    });
    this._validatorSetField(PV1_SPEC, 52, pv1.pv1_52, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildRXA(properties: Partial<HL7_2_2_RXA>): void {
    this._assertSegmentInVersion(RXA_SPEC);
    this._segment = this._message.addSegment("RXA");
    this._validatorSetField(
      RXA_SPEC,
      1,
      properties.rxa_1 === undefined ? undefined : String(properties.rxa_1),
      { length: { max: 4, min: 1 } },
    );
    this._validatorSetField(
      RXA_SPEC,
      2,
      properties.rxa_2 === undefined ? undefined : String(properties.rxa_2),
    );
    this._validatorSetField(
      RXA_SPEC,
      3,
      properties.rxa_3 instanceof Date && !isNaN(properties.rxa_3.getTime())
        ? this.setDate(properties.rxa_3, this._opt.date)
        : (properties.rxa_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      RXA_SPEC,
      4,
      properties.rxa_4 instanceof Date && !isNaN(properties.rxa_4.getTime())
        ? this.setDate(properties.rxa_4, this._opt.date)
        : (properties.rxa_4 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(RXA_SPEC, 5, properties.rxa_5, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 6, properties.rxa_6, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 7, properties.rxa_7, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 8, properties.rxa_8, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 9, properties.rxa_9, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 10, properties.rxa_10, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 11, properties.rxa_11, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(RXA_SPEC, 12, properties.rxa_12, {
      length: { max: 20, min: 1 },
    });
  }

  protected _buildRXD(properties: Partial<HL7_2_2_RXD>): void {
    this._assertSegmentInVersion(RXD_SPEC);
    this._segment = this._message.addSegment("RXD");
    this._validatorSetField(RXD_SPEC, 1, properties.rxd_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 2, properties.rxd_2, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(
      RXD_SPEC,
      3,
      properties.rxd_3 instanceof Date && !isNaN(properties.rxd_3.getTime())
        ? this.setDate(properties.rxd_3, this._opt.date)
        : (properties.rxd_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(RXD_SPEC, 4, properties.rxd_4, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 5, properties.rxd_5, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 6, properties.rxd_6, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 7, properties.rxd_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 8, properties.rxd_8, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 9, properties.rxd_9, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 10, properties.rxd_10, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 11, properties.rxd_11, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 12, properties.rxd_12, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 13, properties.rxd_13, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(RXD_SPEC, 14, properties.rxd_14, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(RXD_SPEC, 15, properties.rxd_15, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildRXE(properties: Partial<HL7_2_2_RXE>): void {
    this._assertSegmentInVersion(RXE_SPEC);
    this._segment = this._message.addSegment("RXE");
    this._validatorSetField(RXE_SPEC, 1, properties.rxe_1, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 2, properties.rxe_2, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 3, properties.rxe_3, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 4, properties.rxe_4, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 5, properties.rxe_5, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 6, properties.rxe_6, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 7, properties.rxe_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 8, properties.rxe_8, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 9, properties.rxe_9, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 10, properties.rxe_10, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 11, properties.rxe_11, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 12, properties.rxe_12, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 13, properties.rxe_13, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 14, properties.rxe_14, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 15, properties.rxe_15, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 16, properties.rxe_16, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 17, properties.rxe_17, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(
      RXE_SPEC,
      18,
      properties.rxe_18 instanceof Date && !isNaN(properties.rxe_18.getTime())
        ? this.setDate(properties.rxe_18, this._opt.date)
        : (properties.rxe_18 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(RXE_SPEC, 19, properties.rxe_19, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 20, properties.rxe_20, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(RXE_SPEC, 21, properties.rxe_21, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 22, properties.rxe_22, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 23, properties.rxe_23, {
      length: { max: 6, min: 1 },
    });
    this._validatorSetField(RXE_SPEC, 24, properties.rxe_24, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildRXG(properties: Partial<HL7_2_2_RXG>): void {
    this._assertSegmentInVersion(RXG_SPEC);
    this._segment = this._message.addSegment("RXG");
    this._validatorSetField(RXG_SPEC, 1, properties.rxg_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 2, properties.rxg_2, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 3, properties.rxg_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 4, properties.rxg_4, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 5, properties.rxg_5, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 6, properties.rxg_6, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 7, properties.rxg_7, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 8, properties.rxg_8, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 9, properties.rxg_9, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 10, properties.rxg_10, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 11, properties.rxg_11, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 12, properties.rxg_12, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(RXG_SPEC, 13, properties.rxg_13, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 14, properties.rxg_14, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 15, properties.rxg_15, {
      length: { max: 6, min: 1 },
    });
    this._validatorSetField(RXG_SPEC, 16, properties.rxg_16, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildRXO(properties: Partial<HL7_2_2_RXO>): void {
    this._assertSegmentInVersion(RXO_SPEC);
    this._segment = this._message.addSegment("RXO");
    this._validatorSetField(RXO_SPEC, 1, properties.rxo_1, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 2, properties.rxo_2, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 3, properties.rxo_3, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 4, properties.rxo_4, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 5, properties.rxo_5, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 6, properties.rxo_6, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 7, properties.rxo_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 8, properties.rxo_8, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 9, properties.rxo_9, {
      allowedValues: ["G", "N"],
      length: 1,
    });
    this._validatorSetField(RXO_SPEC, 10, properties.rxo_10, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 11, properties.rxo_11, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 12, properties.rxo_12, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 13, properties.rxo_13, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 14, properties.rxo_14, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 15, properties.rxo_15, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXO_SPEC, 16, properties.rxo_16, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(RXO_SPEC, 17, properties.rxo_17, {
      length: { max: 20, min: 1 },
    });
  }

  protected _buildRXR(properties: Partial<HL7_2_2_RXR>): void {
    this._assertSegmentInVersion(RXR_SPEC);
    this._segment = this._message.addSegment("RXR");
    this._validatorSetField(RXR_SPEC, 1, properties.rxr_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXR_SPEC, 2, properties.rxr_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXR_SPEC, 3, properties.rxr_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(RXR_SPEC, 4, properties.rxr_4, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildSTF(properties: Partial<HL7_2_2_STF>): void {
    this._assertSegmentInVersion(STF_SPEC);
    this._segment = this._message.addSegment("STF");
    this._validatorSetField(STF_SPEC, 1, properties.stf_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      STF_SPEC,
      2,
      properties.stf_2 || properties.staffIdCode,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      STF_SPEC,
      3,
      properties.stf_3 || properties.staffName,
      {
        length: { max: 48, min: 1 },
      },
    );
    this._validatorSetField(STF_SPEC, 4, properties.stf_4, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(STF_SPEC, 5, properties.stf_5, {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetField(
      STF_SPEC,
      6,
      properties.stf_6 instanceof Date && !isNaN(properties.stf_6.getTime())
        ? this.setDate(properties.stf_6, this._opt.date)
        : (properties.stf_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(STF_SPEC, 7, properties.stf_7, {
      allowedValues: ["A", "I"],
      length: 1,
    });
    this._validatorSetField(STF_SPEC, 8, properties.stf_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(STF_SPEC, 9, properties.stf_9, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(STF_SPEC, 10, properties.stf_10, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(STF_SPEC, 11, properties.stf_11, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(
      STF_SPEC,
      12,
      properties.stf_12 instanceof Date && !isNaN(properties.stf_12.getTime())
        ? this.setDate(properties.stf_12, this._opt.date)
        : (properties.stf_12 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      STF_SPEC,
      13,
      properties.stf_13 instanceof Date && !isNaN(properties.stf_13.getTime())
        ? this.setDate(properties.stf_13, this._opt.date)
        : (properties.stf_13 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(STF_SPEC, 14, properties.stf_14, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildUB2(properties: Partial<HL7_2_2_UB2>): void {
    this._assertSegmentInVersion(UB2_SPEC);
    this._segment = this._message.addSegment("UB2");
    this._validatorSetField(
      UB2_SPEC,
      1,
      properties.ub2_1 === undefined ? undefined : String(properties.ub2_1),
      { length: { max: 4, min: 1 } },
    );
    this._validatorSetField(UB2_SPEC, 2, properties.ub2_2, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 3, properties.ub2_3, {
      length: { max: 14, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 4, properties.ub2_4, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 5, properties.ub2_5, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 6, properties.ub2_6);
    this._validatorSetField(UB2_SPEC, 7, properties.ub2_7);
    this._validatorSetField(UB2_SPEC, 8, properties.ub2_8);
    this._validatorSetField(UB2_SPEC, 9, properties.ub2_9, {
      length: { max: 29, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 10, properties.ub2_10, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 11, properties.ub2_11, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 12, properties.ub2_12, {
      length: { max: 23, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 13, properties.ub2_13, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 14, properties.ub2_14, {
      length: { max: 14, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 15, properties.ub2_15, {
      length: { max: 27, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 16, properties.ub2_16, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(UB2_SPEC, 17, properties.ub2_17, {
      length: { max: 3, min: 1 },
    });
  }
}
