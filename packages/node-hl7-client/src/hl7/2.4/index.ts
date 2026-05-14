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
  HL7_2_1_MSH,
  HL7_2_1_PID,
  HL7_2_1_OBR,
  HL7_2_1_ORC,
} from "@/hl7/2.1/types";
import { HL7_2_3_1 } from "@/hl7/2.3.1";
import { DRG_SPEC } from "@/hl7/metadata/segments/drg";
import { ECD_SPEC } from "@/hl7/metadata/segments/ecd";
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
import { HL7_ECD } from "@/hl7/types/ecd";
import { randomString } from "@/utils/randomString";

import { HL7_2_4_DRG } from "./drg";
import { HL7_2_4_ECD } from "./ecd";
import { HL7_2_4_GOL } from "./gol";
import { HL7_2_4_IAM } from "./iam";
import { HL7_2_4_MSH } from "./msh";
import { HL7_2_4_OBR } from "./obr";
import { HL7_2_4_OM1 } from "./om1";
import { HL7_2_4_OM2 } from "./om2";
import { HL7_2_4_OM3 } from "./om3";
import { HL7_2_4_OM4 } from "./om4";
import { HL7_2_4_OM5 } from "./om5";
import { HL7_2_4_OM6 } from "./om6";
import { HL7_2_4_ORC } from "./orc";
import { HL7_2_4_PID } from "./pid";
import { HL7_2_4_PRB } from "./prb";
import { HL7_2_4_PTH } from "./pth";
import { HL7_2_4_TXA } from "./txa";
import { ClientBuilderOptions_Hl7_2_4 } from "./types";

export type { HL7_2_4_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_4 } from "./types";

/**
 * Hl7 Specification Version 2.4
 * @since 1.0.0
 */
export class HL7_2_4 extends HL7_2_3_1 {
  constructor(properties?: ClientBuilderOptions_Hl7_2_4) {
    super(properties);
    this.version = "2.4";
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
  buildECD(properties: Partial<HL7_2_4_ECD>): this {
    this.headerExists();
    this._buildECD(properties);
    return this;
  }

  checkMSH(msh: HL7_2_4_MSH): boolean {
    super.checkMSH(msh);
    if (
      msh.msh_9_3 !== undefined &&
      (msh.msh_9_3.length < 3 || msh.msh_9_3.length > 10)
    ) {
      throw new Error(
        "MSH.9.3 must be 3 to 10 characters in length if specified.",
      );
    }
    return true;
  }

  protected _buildDRG(properties: Partial<HL7_2_4_DRG>): void {
    this._assertSegmentInVersion(DRG_SPEC);
    this._segment = this._message.addSegment("DRG");
    this._validatorSetField(DRG_SPEC,
    1,
    properties.drg_1,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      DRG_SPEC,
    2,
    properties.drg_2 instanceof Date && !isNaN(properties.drg_2.getTime())
        ? this.setDate(properties.drg_2, this._opt.date) : properties.drg_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(DRG_SPEC,
    3,
    properties.drg_3,
    { allowedValues: ["Y", "N"], length: 1 });
    this._validatorSetField(DRG_SPEC,
    4,
    properties.drg_4,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(DRG_SPEC,
    5,
    properties.drg_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(DRG_SPEC,
    6,
    String(properties.drg_6 ?? ""),
    { length: { min: 1, max: 3 } });
    this._validatorSetField(DRG_SPEC,
    7,
    properties.drg_7,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(DRG_SPEC,
    8,
    properties.drg_8,
    { length: { min: 1, max: 250 } });
  }

  protected _buildECD(properties: Partial<HL7_ECD>): void {
    this._assertSegmentInVersion(ECD_SPEC);
    this._segment = this._message.addSegment("ECD");
    this._validatorSetField(
      ECD_SPEC,
      1,
      properties.ecd_1 ?? properties.referenceCommandNumber,
    );
    this._validatorSetField(
      ECD_SPEC,
      2,
      properties.ecd_2 ?? properties.remoteControlCommand,
    );
    this._validatorSetField(
      ECD_SPEC,
      3,
      properties.ecd_3 ?? properties.responseRequired,
    );
    this._validatorSetField(
      ECD_SPEC,
      4,
      properties.ecd_4 ?? properties.requestedCompletionTime,
    );
    this._validatorSetField(ECD_SPEC, 5, properties.ecd_5 ?? properties.parameters);
  }

  protected _buildGOL(properties: Partial<HL7_2_4_GOL>): void {
    this._assertSegmentInVersion(GOL_SPEC);
    this._segment = this._message.addSegment("GOL");
    this._validatorSetField(GOL_SPEC,
    1,
    properties.gol_1,
    { allowedValues: ["AD", "CO", "DE", "LI", "UC", "UN"] });
    this._validatorSetField(
      GOL_SPEC,
    2,
    properties.gol_2 instanceof Date && !isNaN(properties.gol_2.getTime())
        ? this.setDate(properties.gol_2, this._opt.date) : properties.gol_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    3,
    properties.gol_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    4,
    properties.gol_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(GOL_SPEC,
    5,
    properties.gol_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(GOL_SPEC,
    6,
    String(properties.gol_6 ?? ""),
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      GOL_SPEC,
    7,
    properties.gol_7 instanceof Date && !isNaN(properties.gol_7.getTime())
        ? this.setDate(properties.gol_7, this._opt.date) : properties.gol_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    8,
    properties.gol_8 instanceof Date && !isNaN(properties.gol_8.getTime())
        ? this.setDate(properties.gol_8, this._opt.date) : properties.gol_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    9,
    properties.gol_9 instanceof Date && !isNaN((properties.gol_9 as Date).getTime())
        ? this.setDate(properties.gol_9 as Date, this._opt.date) : properties.gol_9 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    10,
    properties.gol_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    11,
    properties.gol_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      GOL_SPEC,
    12,
    properties.gol_12 instanceof Date && !isNaN(properties.gol_12.getTime())
        ? this.setDate(properties.gol_12, this._opt.date) : properties.gol_12 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    13,
    properties.gol_13 instanceof Date && !isNaN(properties.gol_13.getTime())
        ? this.setDate(properties.gol_13, this._opt.date) : properties.gol_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    14,
    properties.gol_14 instanceof Date && !isNaN(properties.gol_14.getTime())
        ? this.setDate(properties.gol_14, this._opt.date) : properties.gol_14 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      GOL_SPEC,
    15,
    properties.gol_15 instanceof Date && !isNaN(properties.gol_15.getTime())
        ? this.setDate(properties.gol_15, this._opt.date) : properties.gol_15 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    16,
    properties.gol_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    17,
    properties.gol_17,
    { length: { min: 1, max: 300 } });
    this._validatorSetField(GOL_SPEC,
    18,
    properties.gol_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      GOL_SPEC,
    19,
    properties.gol_19 instanceof Date && !isNaN(properties.gol_19.getTime())
        ? this.setDate(properties.gol_19, this._opt.date) : properties.gol_19 ?? "",
    { type: "date" }
    );
    this._validatorSetField(GOL_SPEC,
    20,
    properties.gol_20,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(GOL_SPEC,
    21,
    properties.gol_21,
    { length: { min: 1, max: 250 } });
  }

  protected _buildIAM(properties: Partial<HL7_2_4_IAM>): void {
    this._assertSegmentInVersion(IAM_SPEC);
    this._segment = this._message.addSegment("IAM");
    this._validatorSetField(IAM_SPEC,
    1,
    String(properties.iam_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(IAM_SPEC,
    2,
    properties.iam_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    3,
    properties.iam_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    4,
    properties.iam_4,
    { allowedValues: ["MI", "MO", "SV", "U"] });
    this._validatorSetField(IAM_SPEC,
    5,
    properties.iam_5,
    { length: { min: 1, max: 15 } });
    this._validatorSetField(IAM_SPEC,
    6,
    properties.iam_6,
    { allowedValues: ["A", "D", "U"] });
    this._validatorSetField(IAM_SPEC,
    7,
    properties.iam_7,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(IAM_SPEC,
    8,
    properties.iam_8,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(IAM_SPEC,
    9,
    properties.iam_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IAM_SPEC,
    10,
    properties.iam_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      IAM_SPEC,
    11,
    properties.iam_11 instanceof Date && !isNaN(properties.iam_11.getTime())
        ? this.setDate(properties.iam_11, this._opt.date) : properties.iam_11 ?? "",
      { type: "date" },
    );
  }

  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    const msh = properties as unknown as Partial<HL7_2_4_MSH>;
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
      length: { min: 1, max: 3 },
      required: true,
    });
    this._validatorSetValue("9.2", msh.msh_9_2, {
      length: { min: 1, max: 3 },
      required: true,
    });
    this._validatorSetValue(
      "9.3",
      msh.msh_9_3 === undefined
        ? `${msh.msh_9_1}_${msh.msh_9_2}`
        : msh.msh_9_3,
      { length: { max: 15, min: 3 } },
    );
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue("11.1", msh.msh_11_1, {
      allowedValues: ["D", "P", "T"],
      length: 1,
      required: true,
    });
    if (msh.msh_11_2 !== undefined && msh.msh_11_2 !== "") {
      this._validatorSetValue("11.2", msh.msh_11_2, {
        allowedValues: ["A", "I", "R", "T"],
        length: 1,
      });
    }
    this._validatorSetValue("12", this.version, { required: true });
  }

  protected _buildOBR(properties: Partial<HL7_2_1_OBR>): void {
    this._assertSegmentInVersion(OBR_SPEC);
    super._buildOBR(properties);
    const obr = properties as unknown as Partial<HL7_2_4_OBR>;
    this._validatorSetField(OBR_SPEC, 44, obr.obr_44, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(OBR_SPEC, 45, obr.obr_45, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(OBR_SPEC, 46, obr.obr_46, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(OBR_SPEC, 47, obr.obr_47, {
      length: { min: 1, max: 250 },
    });
  }

  protected _buildOM1(properties: Partial<HL7_2_4_OM1>): void {
    this._assertSegmentInVersion(OM1_SPEC);
    this._segment = this._message.addSegment("OM1");
    this._validatorSetField(OM1_SPEC,
    1,
    String(properties.om1_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM1_SPEC,
    2,
    properties.om1_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    3,
    properties.om1_3,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(OM1_SPEC,
    4,
    properties.om1_4,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    5,
    properties.om1_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    6,
    properties.om1_6,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    7,
    properties.om1_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    8,
    properties.om1_8,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    9,
    properties.om1_9,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(OM1_SPEC,
    10,
    properties.om1_10,
    { length: { min: 1, max: 8 } });
    this._validatorSetField(OM1_SPEC,
    11,
    properties.om1_11,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    12,
    properties.om1_12,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    13,
    properties.om1_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    14,
    properties.om1_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    15,
    properties.om1_15,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(OM1_SPEC,
    16,
    properties.om1_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    17,
    properties.om1_17,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(OM1_SPEC,
    18,
    properties.om1_18,
    { allowedValues: ["A", "C", "E", "F", "P", "S"] });
    this._validatorSetField(OM1_SPEC,
    19,
    properties.om1_19,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    20,
    properties.om1_20,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(
      OM1_SPEC,
    21,
    properties.om1_21 instanceof Date && !isNaN(properties.om1_21.getTime())
        ? this.setDate(properties.om1_21, this._opt.date) : properties.om1_21 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      OM1_SPEC,
    22,
    properties.om1_22 instanceof Date && !isNaN(properties.om1_22.getTime())
        ? this.setDate(properties.om1_22, this._opt.date) : properties.om1_22 ?? "",
    { type: "date" }
    );
    this._validatorSetField(OM1_SPEC,
    23,
    properties.om1_23,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    24,
    String(properties.om1_24 ?? ""),
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM1_SPEC,
    25,
    properties.om1_25,
    { allowedValues: ["A", "B", "C", "P", "R", "S", "T"] });
    this._validatorSetField(OM1_SPEC,
    26,
    properties.om1_26,
    { allowedValues: ["C", "R"] });
    this._validatorSetField(OM1_SPEC,
    27,
    properties.om1_27,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    28,
    properties.om1_28,
    { length: { min: 1, max: 1000 } });
    this._validatorSetField(OM1_SPEC,
    29,
    properties.om1_29,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(OM1_SPEC,
    30,
    properties.om1_30,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    31,
    properties.om1_31,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    32,
    properties.om1_32,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    33,
    properties.om1_33,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    34,
    properties.om1_34,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    35,
    properties.om1_35,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    36,
    properties.om1_36,
    { length: { min: 1, max: 65536 } });
    this._validatorSetField(OM1_SPEC,
    37,
    properties.om1_37,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    38,
    properties.om1_38,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    39,
    properties.om1_39,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    40,
    properties.om1_40,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM1_SPEC,
    41,
    properties.om1_41,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    42,
    properties.om1_42,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    43,
    properties.om1_43,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM1_SPEC,
    44,
    properties.om1_44,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM1_SPEC,
    45,
    properties.om1_45,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    46,
    properties.om1_46,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM1_SPEC,
    47,
    properties.om1_47,
    { length: { min: 1, max: 250 } });
  }

  protected _buildOM2(properties: Partial<HL7_2_4_OM2>): void {
    this._assertSegmentInVersion(OM2_SPEC);
    this._segment = this._message.addSegment("OM2");
    this._validatorSetField(OM2_SPEC,
    1,
    String(properties.om2_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM2_SPEC,
    2,
    properties.om2_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    3,
    properties.om2_3,
    { length: { min: 1, max: 10 } });
    this._validatorSetField(OM2_SPEC,
    4,
    properties.om2_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    5,
    properties.om2_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM2_SPEC,
    6,
    properties.om2_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    7,
    properties.om2_7,
    { length: { min: 1, max: 205 } });
    this._validatorSetField(OM2_SPEC,
    8,
    properties.om2_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    9,
    properties.om2_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM2_SPEC,
    10,
    properties.om2_10,
    { length: { min: 1, max: 20 } });
  }

  protected _buildOM3(properties: Partial<HL7_2_4_OM3>): void {
    this._assertSegmentInVersion(OM3_SPEC);
    this._segment = this._message.addSegment("OM3");
    this._validatorSetField(OM3_SPEC,
    1,
    String(properties.om3_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM3_SPEC,
    2,
    properties.om3_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    3,
    properties.om3_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    4,
    properties.om3_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    5,
    properties.om3_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    6,
    properties.om3_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM3_SPEC,
    7,
    properties.om3_7,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(OM3_SPEC,
    8,
    properties.om3_8,
    { length: { min: 1, max: 250 } });
    // OM3.9 is not present in the published spec — drop the call.
  }

  protected _buildOM4(properties: Partial<HL7_2_4_OM4>): void {
    this._assertSegmentInVersion(OM4_SPEC);
    this._segment = this._message.addSegment("OM4");
    this._validatorSetField(OM4_SPEC,
    1,
    String(properties.om4_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM4_SPEC,
    2,
    properties.om4_2,
    { length: { min: 1, max: 1 } });
    this._validatorSetField(OM4_SPEC,
    3,
    properties.om4_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(OM4_SPEC,
    4,
    String(properties.om4_4 ?? ""),
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    5,
    properties.om4_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    6,
    properties.om4_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    7,
    properties.om4_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    8,
    properties.om4_8,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    9,
    properties.om4_9,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    10,
    properties.om4_10,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    11,
    properties.om4_11,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    12,
    properties.om4_12,
    { length: { min: 1, max: 10240 } });
    this._validatorSetField(OM4_SPEC,
    13,
    properties.om4_13,
    { allowedValues: ["E", "R", "S", "T"] });
    this._validatorSetField(OM4_SPEC,
    14,
    properties.om4_14,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(OM4_SPEC,
    15,
    properties.om4_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    16,
    properties.om4_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM4_SPEC,
    17,
    properties.om4_17,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(OM4_SPEC,
    18,
    properties.om4_18,
    { length: { min: 1, max: 250 } });
    // OM4.19 is not present in the published spec — drop the call.
  }

  protected _buildOM5(properties: Partial<HL7_2_4_OM5>): void {
    this._assertSegmentInVersion(OM5_SPEC);
    this._segment = this._message.addSegment("OM5");
    this._validatorSetField(OM5_SPEC,
    1,
    String(properties.om5_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM5_SPEC,
    2,
    properties.om5_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(OM5_SPEC,
    3,
    properties.om5_3,
    { length: { min: 1, max: 250 } });
  }

  protected _buildOM6(properties: Partial<HL7_2_4_OM6>): void {
    this._assertSegmentInVersion(OM6_SPEC);
    this._segment = this._message.addSegment("OM6");
    this._validatorSetField(OM6_SPEC,
    1,
    String(properties.om6_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OM6_SPEC,
    2,
    properties.om6_2,
    { length: { min: 1, max: 10240 } });
  }

  protected _buildORC(properties: Partial<HL7_2_1_ORC>): void {
    this._assertSegmentInVersion(ORC_SPEC);
    super._buildORC(properties);
    const orc = properties as unknown as Partial<HL7_2_4_ORC>;
    this._validatorSetField(ORC_SPEC, 24, orc.orc_24, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(ORC_SPEC, 25, orc.orc_25, {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(
      ORC_SPEC,
      26,
      orc.orc_26 instanceof Date && !isNaN(orc.orc_26.getTime())
        ? this.setDate(orc.orc_26, this._opt.date)
        : (orc.orc_26 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(ORC_SPEC, 27, orc.orc_27, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(ORC_SPEC, 28, orc.orc_28, {
      allowedValues: ["I", "O"],
      length: 1,
    });
    this._validatorSetField(ORC_SPEC, 29, orc.orc_29, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(ORC_SPEC, 30, orc.orc_30, {
      length: { min: 1, max: 250 },
    });
  }

  protected _buildPID(properties: Partial<HL7_2_1_PID>): void {
    this._assertSegmentInVersion(PID_SPEC);
    super._buildPID(properties);
    const pid = properties as unknown as Partial<HL7_2_4_PID>;
    this._validatorSetField(PID_SPEC, 31, pid.pid_31, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(PID_SPEC, 32, pid.pid_32, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(
      PID_SPEC,
      33,
      pid.pid_33 instanceof Date && !isNaN(pid.pid_33.getTime())
        ? this.setDate(pid.pid_33, this._opt.date)
        : (pid.pid_33 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PID_SPEC, 34, pid.pid_34, {
      length: { min: 1, max: 21 },
    });
    this._validatorSetField(PID_SPEC, 35, pid.pid_35, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(PID_SPEC, 36, pid.pid_36, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(PID_SPEC, 37, pid.pid_37, {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(PID_SPEC, 38, pid.pid_38, {
      length: { min: 1, max: 250 },
    });
    this._validatorSetField(PID_SPEC, 39, pid.pid_39, {
      length: { min: 1, max: 250 },
    });
  }

  protected _buildPRB(properties: Partial<HL7_2_4_PRB>): void {
    this._assertSegmentInVersion(PRB_SPEC);
    this._segment = this._message.addSegment("PRB");
    this._validatorSetField(PRB_SPEC,
    1,
    properties.prb_1,
    { allowedValues: ["AD", "CO", "DE", "LI", "UC", "UN"] });
    this._validatorSetField(
      PRB_SPEC,
    2,
    properties.prb_2 instanceof Date && !isNaN(properties.prb_2.getTime())
        ? this.setDate(properties.prb_2, this._opt.date) : properties.prb_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    3,
    properties.prb_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    4,
    properties.prb_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(PRB_SPEC,
    5,
    properties.prb_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(PRB_SPEC,
    6,
    String(properties.prb_6 ?? ""),
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      PRB_SPEC,
    7,
    properties.prb_7 instanceof Date && !isNaN(properties.prb_7.getTime())
        ? this.setDate(properties.prb_7, this._opt.date) : properties.prb_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    8,
    properties.prb_8 instanceof Date && !isNaN(properties.prb_8.getTime())
        ? this.setDate(properties.prb_8, this._opt.date) : properties.prb_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    9,
    properties.prb_9 instanceof Date && !isNaN(properties.prb_9.getTime())
        ? this.setDate(properties.prb_9, this._opt.date) : properties.prb_9 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    10,
    properties.prb_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    11,
    properties.prb_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    12,
    properties.prb_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    13,
    properties.prb_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    14,
    properties.prb_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      PRB_SPEC,
    15,
    properties.prb_15 instanceof Date && !isNaN(properties.prb_15.getTime())
        ? this.setDate(properties.prb_15, this._opt.date) : properties.prb_15 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      PRB_SPEC,
    16,
    properties.prb_16 instanceof Date && !isNaN(properties.prb_16.getTime())
        ? this.setDate(properties.prb_16, this._opt.date) : properties.prb_16 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PRB_SPEC,
    17,
    properties.prb_17,
    { length: { min: 1, max: 80 } });
    this._validatorSetField(PRB_SPEC,
    18,
    properties.prb_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    19,
    properties.prb_19,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    20,
    String(properties.prb_20 ?? ""),
    { length: { min: 1, max: 5 } });
    this._validatorSetField(PRB_SPEC,
    21,
    properties.prb_21,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    22,
    properties.prb_22,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    23,
    properties.prb_23,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    24,
    properties.prb_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    25,
    properties.prb_25,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PRB_SPEC,
    26,
    properties.prb_26,
    { length: { min: 1, max: 250 } });
  }

  protected _buildPTH(properties: Partial<HL7_2_4_PTH>): void {
    this._assertSegmentInVersion(PTH_SPEC);
    this._segment = this._message.addSegment("PTH");
    this._validatorSetField(PTH_SPEC,
    1,
    properties.pth_1,
    { allowedValues: ["AD", "DE", "LI", "UN"] });
    this._validatorSetField(PTH_SPEC,
    2,
    properties.pth_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(PTH_SPEC,
    3,
    properties.pth_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      PTH_SPEC,
    4,
    properties.pth_4 instanceof Date && !isNaN(properties.pth_4.getTime())
        ? this.setDate(properties.pth_4, this._opt.date) : properties.pth_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PTH_SPEC,
    5,
    properties.pth_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      PTH_SPEC,
    6,
    properties.pth_6 instanceof Date && !isNaN(properties.pth_6.getTime())
        ? this.setDate(properties.pth_6, this._opt.date) : properties.pth_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PTH_SPEC,
    7,
    properties.pth_7,
    { length: { min: 1, max: 250 } });
  }

  protected _buildTXA(properties: Partial<HL7_2_4_TXA>): void {
    this._assertSegmentInVersion(TXA_SPEC);
    this._segment = this._message.addSegment("TXA");
    this._validatorSetField(TXA_SPEC,
    1,
    String(properties.txa_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(TXA_SPEC,
    2,
    properties.txa_2,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    3,
    properties.txa_3,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(
      TXA_SPEC,
    4,
    properties.txa_4 instanceof Date && !isNaN(properties.txa_4.getTime())
        ? this.setDate(properties.txa_4, this._opt.date) : properties.txa_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(TXA_SPEC,
    5,
    properties.txa_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      TXA_SPEC,
    6,
    properties.txa_6 instanceof Date && !isNaN(properties.txa_6.getTime())
        ? this.setDate(properties.txa_6, this._opt.date) : properties.txa_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      TXA_SPEC,
    7,
    properties.txa_7 instanceof Date && !isNaN(properties.txa_7.getTime())
        ? this.setDate(properties.txa_7, this._opt.date) : properties.txa_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      TXA_SPEC,
    8,
    properties.txa_8 instanceof Date && !isNaN(properties.txa_8.getTime())
        ? this.setDate(properties.txa_8, this._opt.date) : properties.txa_8 ?? "",
    { type: "date" }
    );
    this._validatorSetField(TXA_SPEC,
    9,
    properties.txa_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    10,
    properties.txa_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    11,
    properties.txa_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    12,
    properties.txa_12,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    13,
    properties.txa_13,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    14,
    properties.txa_14,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(TXA_SPEC,
    15,
    properties.txa_15,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(TXA_SPEC,
    16,
    properties.txa_16,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(TXA_SPEC,
    17,
    properties.txa_17,
    {
            allowedValues: ["AU", "CA", "DO", "DT", "IN", "IP", "LA", "OB", "PA", "PR", "PY", "RD", "RV", "UN"],
    });
    this._validatorSetField(TXA_SPEC,
    18,
    properties.txa_18,
    { allowedValues: ["ET", "EMP", "UWL", "V", "R"] });
    this._validatorSetField(TXA_SPEC,
    19,
    properties.txa_19,
    { allowedValues: ["AV", "CA", "OB", "UN"] });
    this._validatorSetField(TXA_SPEC,
    20,
    properties.txa_20,
    { allowedValues: ["AC", "AA", "AH", "AL", "AR", "PU"] });
    this._validatorSetField(TXA_SPEC,
    21,
    properties.txa_21,
    { length: { min: 1, max: 200 } });
    this._validatorSetField(TXA_SPEC,
    22,
    properties.txa_22,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(TXA_SPEC,
    23,
    properties.txa_23,
    { length: { min: 1, max: 250 } });
  }
}
