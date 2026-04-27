import { HL7_2_5_1 } from "@/hl7/2.5.1";
import { ClientBuilderOptions_Hl7_2_6 } from "./types";
import { HL7_2_6_MSH } from "./msh";
import { HL7_2_6_REL } from "./rel";
import { HL7_2_6_ITM } from "./itm";
import { HL7_2_6_IVT } from "./ivt";
import { HL7_2_6_BTX } from "./btx";
import { HL7_2_6_BPX } from "./bpx";
import { BPX_SPEC } from "@/hl7/metadata/segments/bpx";
import { BTX_SPEC } from "@/hl7/metadata/segments/btx";
import { ITM_SPEC } from "@/hl7/metadata/segments/itm";
import { IVT_SPEC } from "@/hl7/metadata/segments/ivt";
import { REL_SPEC } from "@/hl7/metadata/segments/rel";

export type { HL7_2_6_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_6 } from "./types";

/**
 * Hl7 Specification Version 2.6
 * @since 1.0.0
 */
export class HL7_2_6 extends HL7_2_5_1 {
  constructor(props?: ClientBuilderOptions_Hl7_2_6) {
    super(props);
    this.version = "2.6";
  }

  checkMSH(msh: HL7_2_6_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildREL(props: Partial<HL7_2_6_REL>): void {
    this._assertSegmentInVersion(REL_SPEC);
    this._segment = this._message.addSegment("REL");
    this._validatorSetField(REL_SPEC,
    1,
    String(props.rel_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(REL_SPEC,
    2,
    props.rel_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    3,
    props.rel_3,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(REL_SPEC,
    4,
    props.rel_4,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(REL_SPEC,
    5,
    props.rel_5,
    { length: { min: 1, max: 60 } });
    this._validatorSetField(
      REL_SPEC,
    6,
    props.rel_6 instanceof Date && !isNaN(props.rel_6.getTime())
        ? this.setDate(props.rel_6, this._opt.date) : props.rel_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      REL_SPEC,
    7,
    props.rel_7 instanceof Date && !isNaN(props.rel_7.getTime())
        ? this.setDate(props.rel_7, this._opt.date) : props.rel_7 ?? "",
    { type: "date" }
    );
    this._validatorSetField(REL_SPEC,
    8,
    props.rel_8,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(REL_SPEC,
    9,
    props.rel_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    10,
    props.rel_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    11,
    props.rel_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(REL_SPEC,
    12,
    props.rel_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      REL_SPEC,
    13,
    props.rel_13 instanceof Date && !isNaN(props.rel_13.getTime())
        ? this.setDate(props.rel_13, this._opt.date) : props.rel_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(REL_SPEC,
    14,
    props.rel_14,
    { length: { min: 1, max: 250 } });
  }

  protected _buildITM(props: Partial<HL7_2_6_ITM>): void {
    this._assertSegmentInVersion(ITM_SPEC);
    this._segment = this._message.addSegment("ITM");
    this._validatorSetField(ITM_SPEC,
    1,
    props.itm_1,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    2,
    props.itm_2,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(ITM_SPEC,
    3,
    props.itm_3,
    { allowedValues: ["A", "I", "P"] });
    this._validatorSetField(ITM_SPEC,
    4,
    props.itm_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    5,
    props.itm_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    6,
    props.itm_6,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    7,
    props.itm_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    8,
    props.itm_8,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(ITM_SPEC,
    9,
    props.itm_9,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(ITM_SPEC,
    10,
    props.itm_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    11,
    props.itm_11,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    12,
    props.itm_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    13,
    props.itm_13,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(ITM_SPEC,
    14,
    props.itm_14,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    15,
    props.itm_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    16,
    props.itm_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    17,
    props.itm_17,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    18,
    props.itm_18,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    19,
    props.itm_19,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(ITM_SPEC,
    20,
    String(props.itm_20 ?? ""),
    { length: { min: 1, max: 6 } });
    this._validatorSetField(ITM_SPEC,
    21,
    props.itm_21,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(ITM_SPEC,
    22,
    props.itm_22,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    23,
    props.itm_23,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    24,
    props.itm_24,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    25,
    props.itm_25,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    26,
    props.itm_26,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(ITM_SPEC,
    27,
    props.itm_27,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    28,
    props.itm_28,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    29,
    props.itm_29,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    30,
    props.itm_30,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    31,
    props.itm_31,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    32,
    props.itm_32,
    { length: { min: 1, max: 16 } });
    this._validatorSetField(ITM_SPEC,
    33,
    props.itm_33,
    { length: { min: 1, max: 30 } });
    this._validatorSetField(ITM_SPEC,
    34,
    props.itm_34,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    35,
    props.itm_35,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    36,
    props.itm_36,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ITM_SPEC,
    37,
    props.itm_37,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(ITM_SPEC,
    38,
    props.itm_38,
    { length: { min: 1, max: 6 } });
  }

  protected _buildIVT(props: Partial<HL7_2_6_IVT>): void {
    this._assertSegmentInVersion(IVT_SPEC);
    this._segment = this._message.addSegment("IVT");
    this._validatorSetField(IVT_SPEC,
    1,
    String(props.ivt_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(IVT_SPEC,
    2,
    props.ivt_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    3,
    props.ivt_3,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(IVT_SPEC,
    4,
    props.ivt_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    5,
    props.ivt_5,
    { length: { min: 1, max: 999 } });
    this._validatorSetField(IVT_SPEC,
    6,
    props.ivt_6,
    { allowedValues: ["A", "I", "P"] });
    this._validatorSetField(IVT_SPEC,
    7,
    props.ivt_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    8,
    props.ivt_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    9,
    props.ivt_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    10,
    props.ivt_10,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    11,
    props.ivt_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    12,
    props.ivt_12,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    13,
    props.ivt_13,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    14,
    props.ivt_14,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(IVT_SPEC,
    15,
    props.ivt_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    16,
    props.ivt_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    17,
    props.ivt_17,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    18,
    props.ivt_18,
    { length: { min: 1, max: 12 } });
    this._validatorSetField(IVT_SPEC,
    19,
    props.ivt_19,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    20,
    props.ivt_20,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    21,
    props.ivt_21,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    22,
    props.ivt_22,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    23,
    props.ivt_23,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(IVT_SPEC,
    24,
    props.ivt_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IVT_SPEC,
    25,
    props.ivt_25,
    { allowedValues: ["Y", "N"] });
  }

  protected _buildBTX(props: Partial<HL7_2_6_BTX>): void {
    this._assertSegmentInVersion(BTX_SPEC);
    this._segment = this._message.addSegment("BTX");
    this._validatorSetField(BTX_SPEC,
    1,
    String(props.btx_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(BTX_SPEC,
    2,
    props.btx_2,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BTX_SPEC,
    3,
    props.btx_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    4,
    props.btx_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    5,
    props.btx_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    6,
    props.btx_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    7,
    props.btx_7,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BTX_SPEC,
    8,
    props.btx_8,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BTX_SPEC,
    9,
    props.btx_9,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BTX_SPEC,
    10,
    props.btx_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    11,
    props.btx_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BTX_SPEC,
    12,
    props.btx_12 instanceof Date && !isNaN(props.btx_12.getTime())
        ? this.setDate(props.btx_12, this._opt.date) : props.btx_12 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      BTX_SPEC,
    13,
    props.btx_13 instanceof Date && !isNaN(props.btx_13.getTime())
        ? this.setDate(props.btx_13, this._opt.date) : props.btx_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BTX_SPEC,
    14,
    props.btx_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BTX_SPEC,
    15,
    props.btx_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BTX_SPEC,
    16,
    props.btx_16 instanceof Date && !isNaN(props.btx_16.getTime())
        ? this.setDate(props.btx_16, this._opt.date) : props.btx_16 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      BTX_SPEC,
    17,
    props.btx_17 instanceof Date && !isNaN(props.btx_17.getTime())
        ? this.setDate(props.btx_17, this._opt.date) : props.btx_17 ?? "",
    { type: "date" }
    );
  }

  protected _buildBPX(props: Partial<HL7_2_6_BPX>): void {
    this._assertSegmentInVersion(BPX_SPEC);
    this._segment = this._message.addSegment("BPX");
    this._validatorSetField(BPX_SPEC,
    1,
    String(props.bpx_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(BPX_SPEC,
    2,
    props.bpx_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    3,
    props.bpx_3,
    { length: { min: 1, max: 1 } });
    this._validatorSetField(
      BPX_SPEC,
    4,
    props.bpx_4 instanceof Date && !isNaN(props.bpx_4.getTime())
        ? this.setDate(props.bpx_4, this._opt.date) : props.bpx_4 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BPX_SPEC,
    5,
    props.bpx_5,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BPX_SPEC,
    6,
    props.bpx_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    7,
    props.bpx_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    8,
    props.bpx_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    9,
    props.bpx_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    10,
    props.bpx_10,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(BPX_SPEC,
    11,
    props.bpx_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    12,
    props.bpx_12,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      BPX_SPEC,
    13,
    props.bpx_13 instanceof Date && !isNaN(props.bpx_13.getTime())
        ? this.setDate(props.bpx_13, this._opt.date) : props.bpx_13 ?? "",
    { type: "date" }
    );
    this._validatorSetField(BPX_SPEC,
    14,
    props.bpx_14,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BPX_SPEC,
    15,
    props.bpx_15,
    { length: { min: 1, max: 5 } });
    this._validatorSetField(BPX_SPEC,
    16,
    props.bpx_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(BPX_SPEC,
    17,
    props.bpx_17,
    { length: { min: 1, max: 22 } });
  }
}
