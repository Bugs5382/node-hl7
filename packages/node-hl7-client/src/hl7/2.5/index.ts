import { HL7_2_4 } from "@/hl7/2.4";
import { ClientBuilderOptions_Hl7_2_5 } from "./types";
import { HL7_2_5_MSH } from "./msh";
import { HL7_2_5_SFT } from "./sft";
import { HL7_2_5_SPM } from "./spm";
import { SFT_SPEC } from "@/hl7/metadata/segments/sft";
import { SPM_SPEC } from "@/hl7/metadata/segments/spm";

export type { HL7_2_5_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_5 } from "./types";

/**
 * Hl7 Specification Version 2.5
 * @since 1.0.0
 */
export class HL7_2_5 extends HL7_2_4 {
  constructor(props?: ClientBuilderOptions_Hl7_2_5) {
    super(props);
    this.version = "2.5";
  }

  checkMSH(msh: HL7_2_5_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildSFT(props: Partial<HL7_2_5_SFT>): void {
    this._assertSegmentInVersion(SFT_SPEC);
    this._segment = this._message.addSegment("SFT");
    this._validatorSetField(SFT_SPEC,
    1,
    props.sft_1,
    { length: { min: 1, max: 567 } });
    this._validatorSetField(SFT_SPEC,
    2,
    props.sft_2,
    { length: { min: 1, max: 15 } });
    this._validatorSetField(SFT_SPEC,
    3,
    props.sft_3,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(SFT_SPEC,
    4,
    props.sft_4,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(SFT_SPEC,
    5,
    props.sft_5,
    { length: { min: 1, max: 1024 } });
    this._validatorSetField(
      SFT_SPEC,
    6,
    props.sft_6 instanceof Date && !isNaN(props.sft_6.getTime())
        ? this.setDate(props.sft_6, this._opt.date) : props.sft_6 ?? "",
    { type: "date" }
    );
  }

  protected _buildSPM(props: Partial<HL7_2_5_SPM>): void {
    this._assertSegmentInVersion(SPM_SPEC);
    this._segment = this._message.addSegment("SPM");
    this._validatorSetField(SPM_SPEC,
    1,
    String(props.spm_1 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(SPM_SPEC,
    2,
    props.spm_2,
    { length: { min: 1, max: 80 } });
    this._validatorSetField(SPM_SPEC,
    3,
    props.spm_3,
    { length: { min: 1, max: 80 } });
    this._validatorSetField(SPM_SPEC,
    4,
    props.spm_4,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    5,
    props.spm_5,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    6,
    props.spm_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    7,
    props.spm_7,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    8,
    props.spm_8,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    9,
    props.spm_9,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    10,
    props.spm_10,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    11,
    props.spm_11,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    12,
    props.spm_12,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(SPM_SPEC,
    13,
    String(props.spm_13 ?? ""),
    { length: { min: 1, max: 6 } });
    this._validatorSetField(SPM_SPEC,
    14,
    props.spm_14,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    15,
    props.spm_15,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    16,
    props.spm_16,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(
      SPM_SPEC,
    17,
    props.spm_17 instanceof Date && !isNaN(props.spm_17.getTime())
        ? this.setDate(props.spm_17, this._opt.date) : props.spm_17 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      SPM_SPEC,
    18,
    props.spm_18 instanceof Date && !isNaN(props.spm_18.getTime())
        ? this.setDate(props.spm_18, this._opt.date) : props.spm_18 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      SPM_SPEC,
    19,
    props.spm_19 instanceof Date && !isNaN(props.spm_19.getTime())
        ? this.setDate(props.spm_19, this._opt.date) : props.spm_19 ?? "",
    { type: "date" }
    );
    this._validatorSetField(SPM_SPEC,
    20,
    props.spm_20,
    { allowedValues: ["Y", "N"] });
    this._validatorSetField(SPM_SPEC,
    21,
    props.spm_21,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    22,
    props.spm_22,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    23,
    props.spm_23,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    24,
    props.spm_24,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(SPM_SPEC,
    25,
    props.spm_25,
    { length: { min: 1, max: 20 } });
    this._validatorSetField(SPM_SPEC,
    26,
    String(props.spm_26 ?? ""),
    { length: { min: 1, max: 4 } });
    this._validatorSetField(SPM_SPEC,
    27,
    props.spm_27,
    { length: { min: 1, max: 250 } });
  }
}
