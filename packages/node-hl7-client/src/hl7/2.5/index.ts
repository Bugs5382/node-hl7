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
import { HL7_2_4 } from "@/hl7/2.4";
import { SFT_SPEC } from "@/hl7/metadata/segments/sft";
import { SPM_SPEC } from "@/hl7/metadata/segments/spm";

import { HL7_2_5_MSH } from "./msh";
import { HL7_2_5_SFT } from "./sft";
import { HL7_2_5_SPM } from "./spm";
import { ClientBuilderOptions_Hl7_2_5 } from "./types";

export type { HL7_2_5_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_5 } from "./types";

/**
 * Hl7 Specification Version 2.5
 * @since 1.0.0
 */
export class HL7_2_5 extends HL7_2_4 {
  constructor(properties?: ClientBuilderOptions_Hl7_2_5) {
    super(properties);
    this.version = "2.5";
  }

  checkMSH(msh: HL7_2_5_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildSFT(properties: Partial<HL7_2_5_SFT>): void {
    this._assertSegmentInVersion(SFT_SPEC);
    this._segment = this._message.addSegment("SFT");
    this._validatorSetField(SFT_SPEC, 1, properties.sft_1, {
      length: { max: 567, min: 1 },
    });
    this._validatorSetField(SFT_SPEC, 2, properties.sft_2, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetField(SFT_SPEC, 3, properties.sft_3, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(SFT_SPEC, 4, properties.sft_4, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(SFT_SPEC, 5, properties.sft_5, {
      length: { max: 1024, min: 1 },
    });
    this._validatorSetField(
      SFT_SPEC,
      6,
      properties.sft_6 instanceof Date && !isNaN(properties.sft_6.getTime())
        ? this.setDate(properties.sft_6, this._opt.date)
        : (properties.sft_6 ?? ""),
      { type: "date" },
    );
  }

  protected _buildSPM(properties: Partial<HL7_2_5_SPM>): void {
    this._assertSegmentInVersion(SPM_SPEC);
    this._segment = this._message.addSegment("SPM");
    this._validatorSetField(SPM_SPEC, 1, String(properties.spm_1 ?? ""), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 2, properties.spm_2, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 3, properties.spm_3, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 4, properties.spm_4, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 5, properties.spm_5, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 6, properties.spm_6, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 7, properties.spm_7, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 8, properties.spm_8, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 9, properties.spm_9, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 10, properties.spm_10, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 11, properties.spm_11, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 12, properties.spm_12, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 13, String(properties.spm_13 ?? ""), {
      length: { max: 6, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 14, properties.spm_14, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 15, properties.spm_15, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 16, properties.spm_16, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(
      SPM_SPEC,
      17,
      properties.spm_17 instanceof Date && !isNaN(properties.spm_17.getTime())
        ? this.setDate(properties.spm_17, this._opt.date)
        : (properties.spm_17 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      SPM_SPEC,
      18,
      properties.spm_18 instanceof Date && !isNaN(properties.spm_18.getTime())
        ? this.setDate(properties.spm_18, this._opt.date)
        : (properties.spm_18 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      SPM_SPEC,
      19,
      properties.spm_19 instanceof Date && !isNaN(properties.spm_19.getTime())
        ? this.setDate(properties.spm_19, this._opt.date)
        : (properties.spm_19 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(SPM_SPEC, 20, properties.spm_20, {
      allowedValues: ["Y", "N"],
    });
    this._validatorSetField(SPM_SPEC, 21, properties.spm_21, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 22, properties.spm_22, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 23, properties.spm_23, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 24, properties.spm_24, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 25, properties.spm_25, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 26, String(properties.spm_26 ?? ""), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(SPM_SPEC, 27, properties.spm_27, {
      length: { max: 250, min: 1 },
    });
  }
}
