import { HL7_2_4 } from "@/hl7/2.4";
import { ClientBuilderOptions_Hl7_2_5 } from "./types";
import { HL7_2_5_MSH } from "./msh";
import { HL7_2_5_SFT } from "./sft";
import { HL7_2_5_SPM } from "./spm";

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
    this._segment = this._message.addSegment("SFT");
    this._validatorSetValue("1", props.sft_1, { required: true, length: { min: 1, max: 567 } });
    this._validatorSetValue("2", props.sft_2, { required: true, length: { min: 1, max: 15 } });
    this._validatorSetValue("3", props.sft_3, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("4", props.sft_4, { required: true, length: { min: 1, max: 20 } });
    this._validatorSetValue("5", props.sft_5, { length: { min: 1, max: 1024 } });
    this._validatorSetValue(
      "6",
      props.sft_6 instanceof Date && !isNaN(props.sft_6.getTime())
        ? this.setDate(props.sft_6, this._opt.date) : props.sft_6 ?? "",
      { type: "date" },
    );
  }

  protected _buildSPM(props: Partial<HL7_2_5_SPM>): void {
    this._segment = this._message.addSegment("SPM");
    this._validatorSetValue("1", String(props.spm_1 ?? ""), { length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.spm_2, { length: { min: 1, max: 80 } });
    this._validatorSetValue("3", props.spm_3, { length: { min: 1, max: 80 } });
    this._validatorSetValue("4", props.spm_4, { required: true, length: { min: 1, max: 250 } });
    this._validatorSetValue("5", props.spm_5, { length: { min: 1, max: 250 } });
    this._validatorSetValue("6", props.spm_6, { length: { min: 1, max: 250 } });
    this._validatorSetValue("7", props.spm_7, { length: { min: 1, max: 250 } });
    this._validatorSetValue("8", props.spm_8, { length: { min: 1, max: 250 } });
    this._validatorSetValue("9", props.spm_9, { length: { min: 1, max: 250 } });
    this._validatorSetValue("10", props.spm_10, { length: { min: 1, max: 250 } });
    this._validatorSetValue("11", props.spm_11, { length: { min: 1, max: 250 } });
    this._validatorSetValue("12", props.spm_12, { length: { min: 1, max: 20 } });
    this._validatorSetValue("13", String(props.spm_13 ?? ""), { length: { min: 1, max: 6 } });
    this._validatorSetValue("14", props.spm_14, { length: { min: 1, max: 250 } });
    this._validatorSetValue("15", props.spm_15, { length: { min: 1, max: 250 } });
    this._validatorSetValue("16", props.spm_16, { length: { min: 1, max: 250 } });
    this._validatorSetValue(
      "17",
      props.spm_17 instanceof Date && !isNaN(props.spm_17.getTime())
        ? this.setDate(props.spm_17, this._opt.date) : props.spm_17 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "18",
      props.spm_18 instanceof Date && !isNaN(props.spm_18.getTime())
        ? this.setDate(props.spm_18, this._opt.date) : props.spm_18 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "19",
      props.spm_19 instanceof Date && !isNaN(props.spm_19.getTime())
        ? this.setDate(props.spm_19, this._opt.date) : props.spm_19 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("20", props.spm_20, { allowedValues: ["Y", "N"] });
    this._validatorSetValue("21", props.spm_21, { length: { min: 1, max: 250 } });
    this._validatorSetValue("22", props.spm_22, { length: { min: 1, max: 250 } });
    this._validatorSetValue("23", props.spm_23, { length: { min: 1, max: 250 } });
    this._validatorSetValue("24", props.spm_24, { length: { min: 1, max: 250 } });
    this._validatorSetValue("25", props.spm_25, { length: { min: 1, max: 20 } });
    this._validatorSetValue("26", String(props.spm_26 ?? ""), { length: { min: 1, max: 4 } });
    this._validatorSetValue("27", props.spm_27, { length: { min: 1, max: 250 } });
  }
}
