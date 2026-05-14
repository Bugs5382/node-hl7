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
import { HL7_2_5_1 } from "@/hl7/2.5.1";
import { BPX_SPEC } from "@/hl7/metadata/segments/bpx";
import { BTX_SPEC } from "@/hl7/metadata/segments/btx";
import { ITM_SPEC } from "@/hl7/metadata/segments/itm";
import { IVT_SPEC } from "@/hl7/metadata/segments/ivt";
import { REL_SPEC } from "@/hl7/metadata/segments/rel";

import { HL7_2_6_BPX } from "./bpx";
import { HL7_2_6_BTX } from "./btx";
import { HL7_2_6_ITM } from "./itm";
import { HL7_2_6_IVT } from "./ivt";
import { HL7_2_6_MSH } from "./msh";
import { HL7_2_6_REL } from "./rel";
import { ClientBuilderOptions_Hl7_2_6 } from "./types";

export type { HL7_2_6_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_6 } from "./types";

/**
 * Hl7 Specification Version 2.6
 * @since 1.0.0
 */
export class HL7_2_6 extends HL7_2_5_1 {
  constructor(properties?: ClientBuilderOptions_Hl7_2_6) {
    super(properties);
    this.version = "2.6";
  }

  checkMSH(msh: HL7_2_6_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildBPX(properties: Partial<HL7_2_6_BPX>): void {
    this._assertSegmentInVersion(BPX_SPEC);
    this._segment = this._message.addSegment("BPX");
    this._validatorSetField(BPX_SPEC,
    1,
    String(properties.bpx_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(BPX_SPEC,
    2,
    properties.bpx_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    3,
    properties.bpx_3,
    { length: { min: 1, max: 1 } });
    this._validatorSetField(
      BPX_SPEC,
    4,
    properties.bpx_4 instanceof Date && !isNaN(properties.bpx_4.getTime())
        ? this.setDate(properties.bpx_4, this._opt.date) : properties.bpx_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BPX_SPEC,
    5,
    properties.bpx_5,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BPX_SPEC,
    6,
    properties.bpx_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    7,
    properties.bpx_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    8,
    properties.bpx_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    9,
    properties.bpx_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    10,
    properties.bpx_10,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BPX_SPEC,
    11,
    properties.bpx_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    12,
    properties.bpx_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BPX_SPEC,
    13,
    properties.bpx_13 instanceof Date && !isNaN(properties.bpx_13.getTime())
        ? this.setDate(properties.bpx_13, this._opt.date) : properties.bpx_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BPX_SPEC,
    14,
    properties.bpx_14,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BPX_SPEC,
    15,
    properties.bpx_15,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BPX_SPEC,
    16,
    properties.bpx_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    17,
    properties.bpx_17,
    { length: { min: 1, max: 22 } });
  }

  protected _buildBTX(properties: Partial<HL7_2_6_BTX>): void {
    this._assertSegmentInVersion(BTX_SPEC);
    this._segment = this._message.addSegment("BTX");
    this._validatorSetField(BTX_SPEC,
    1,
    String(properties.btx_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(BTX_SPEC,
    2,
    properties.btx_2,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BTX_SPEC,
    3,
    properties.btx_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    4,
    properties.btx_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    5,
    properties.btx_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    6,
    properties.btx_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    7,
    properties.btx_7,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BTX_SPEC,
    8,
    properties.btx_8,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BTX_SPEC,
    9,
    properties.btx_9,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BTX_SPEC,
    10,
    properties.btx_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    11,
    properties.btx_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BTX_SPEC,
    12,
    properties.btx_12 instanceof Date && !isNaN(properties.btx_12.getTime())
        ? this.setDate(properties.btx_12, this._opt.date) : properties.btx_12 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      BTX_SPEC,
    13,
    properties.btx_13 instanceof Date && !isNaN(properties.btx_13.getTime())
        ? this.setDate(properties.btx_13, this._opt.date) : properties.btx_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BTX_SPEC,
    14,
    properties.btx_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    15,
    properties.btx_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BTX_SPEC,
    16,
    properties.btx_16 instanceof Date && !isNaN(properties.btx_16.getTime())
        ? this.setDate(properties.btx_16, this._opt.date) : properties.btx_16 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      BTX_SPEC,
    17,
    properties.btx_17 instanceof Date && !isNaN(properties.btx_17.getTime())
        ? this.setDate(properties.btx_17, this._opt.date) : properties.btx_17 ?? "",
      { type: "date" },
    );
  }

  protected _buildITM(properties: Partial<HL7_2_6_ITM>): void {
    this._assertSegmentInVersion(ITM_SPEC);
    this._segment = this._message.addSegment("ITM");
    this._validatorSetField(ITM_SPEC,
    1,
    properties.itm_1,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    2,
    properties.itm_2,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(ITM_SPEC,
    3,
    properties.itm_3,
    { allowedValues: ["A", "I", "P"] });
    this._validatorSetField(ITM_SPEC,
    4,
    properties.itm_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    5,
    properties.itm_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    6,
    properties.itm_6,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    7,
    properties.itm_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    8,
    properties.itm_8,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(ITM_SPEC,
    9,
    properties.itm_9,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(ITM_SPEC,
    10,
    properties.itm_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    11,
    properties.itm_11,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    12,
    properties.itm_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    13,
    properties.itm_13,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(ITM_SPEC,
    14,
    properties.itm_14,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    15,
    properties.itm_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    16,
    properties.itm_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    17,
    properties.itm_17,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    18,
    properties.itm_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    19,
    properties.itm_19,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(ITM_SPEC,
    20,
    String(properties.itm_20 ?? ""),
    { length: { min: 1, max: 6 } });
    this._validatorSetField(ITM_SPEC,
    21,
    properties.itm_21,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(ITM_SPEC,
    22,
    properties.itm_22,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    23,
    properties.itm_23,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    24,
    properties.itm_24,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    25,
    properties.itm_25,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    26,
    properties.itm_26,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    27,
    properties.itm_27,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    28,
    properties.itm_28,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    29,
    properties.itm_29,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    30,
    properties.itm_30,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    31,
    properties.itm_31,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    32,
    properties.itm_32,
    { length: { min: 1, max: 16 } });
    this._validatorSetField(ITM_SPEC,
    33,
    properties.itm_33,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(ITM_SPEC,
    34,
    properties.itm_34,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    35,
    properties.itm_35,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    36,
    properties.itm_36,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    37,
    properties.itm_37,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(ITM_SPEC,
    38,
    properties.itm_38,
    { length: { min: 1, max: 6 } });
  }

  protected _buildIVT(properties: Partial<HL7_2_6_IVT>): void {
    this._assertSegmentInVersion(IVT_SPEC);
    this._segment = this._message.addSegment("IVT");
    this._validatorSetField(IVT_SPEC,
    1,
    String(properties.ivt_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(IVT_SPEC,
    2,
    properties.ivt_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    3,
    properties.ivt_3,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(IVT_SPEC,
    4,
    properties.ivt_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    5,
    properties.ivt_5,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(IVT_SPEC,
    6,
    properties.ivt_6,
    { allowedValues: ["A", "I", "P"] });
    this._validatorSetField(IVT_SPEC,
    7,
    properties.ivt_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    8,
    properties.ivt_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    9,
    properties.ivt_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    10,
    properties.ivt_10,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    11,
    properties.ivt_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    12,
    properties.ivt_12,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    13,
    properties.ivt_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    14,
    properties.ivt_14,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(IVT_SPEC,
    15,
    properties.ivt_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    16,
    properties.ivt_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    17,
    properties.ivt_17,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    18,
    properties.ivt_18,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(IVT_SPEC,
    19,
    properties.ivt_19,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    20,
    properties.ivt_20,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    21,
    properties.ivt_21,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    22,
    properties.ivt_22,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    23,
    properties.ivt_23,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    24,
    properties.ivt_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    25,
    properties.ivt_25,
    { allowedValues: ["Y", "N"] });
  }

  protected _buildREL(properties: Partial<HL7_2_6_REL>): void {
    this._assertSegmentInVersion(REL_SPEC);
    this._segment = this._message.addSegment("REL");
    this._validatorSetField(REL_SPEC,
    1,
    String(properties.rel_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(REL_SPEC,
    2,
    properties.rel_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    3,
    properties.rel_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(REL_SPEC,
    4,
    properties.rel_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(REL_SPEC,
    5,
    properties.rel_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      REL_SPEC,
    6,
    properties.rel_6 instanceof Date && !isNaN(properties.rel_6.getTime())
        ? this.setDate(properties.rel_6, this._opt.date) : properties.rel_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      REL_SPEC,
    7,
    properties.rel_7 instanceof Date && !isNaN(properties.rel_7.getTime())
        ? this.setDate(properties.rel_7, this._opt.date) : properties.rel_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(REL_SPEC,
    8,
    properties.rel_8,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(REL_SPEC,
    9,
    properties.rel_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    10,
    properties.rel_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    11,
    properties.rel_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    12,
    properties.rel_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      REL_SPEC,
    13,
    properties.rel_13 instanceof Date && !isNaN(properties.rel_13.getTime())
        ? this.setDate(properties.rel_13, this._opt.date) : properties.rel_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(REL_SPEC,
    14,
    properties.rel_14,
    { length: { min: 1, max: 250 } });
  }
}
