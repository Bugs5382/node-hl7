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
import { HL7_2_1_MSH } from "@/hl7/2.1/types";
import { HL7_2_6 } from "@/hl7/2.6";
import { IPC_SPEC } from "@/hl7/metadata/segments/ipc";
import { ISD_SPEC } from "@/hl7/metadata/segments/isd";
import { randomString } from "@/utils/randomString";

import { HL7_2_7_IPC } from "./ipc";
import { HL7_2_7_ISD } from "./isd";
import { HL7_2_7_MSH } from "./msh";
import { ClientBuilderOptions_Hl7_2_7 } from "./types";

export type { HL7_2_7_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_7 } from "./types";

/**
 * Hl7 Specification Version 2.7
 * @remarks MSH.10 control ID max length grows to 199 in 2.7.
 * @since 1.0.0
 */
export class HL7_2_7 extends HL7_2_6 {
  constructor(properties?: ClientBuilderOptions_Hl7_2_7) {
    super(properties);
    this.version = "2.7";
  }

  checkMSH(msh: HL7_2_7_MSH): boolean {
    if (msh.msh_9_1 === undefined || msh.msh_9_2 === undefined) {
      throw new TypeError("MSH.9.1 & MSH 9.2 must be defined.");
    }

    if (msh.msh_9_1.length !== 3) {
      throw new Error("MSH.9.1 must be 3 characters in length.");
    }

    if (msh.msh_9_2.length !== 3) {
      throw new Error("MSH.9.2 must be 3 characters in length.");
    }

    if (msh.msh_10 !== undefined && msh.msh_10.length > 199) {
      throw new Error(
        "MSH.10 must be greater than 0 and less than 199 characters.",
      );
    }

    return true;
  }

  protected _buildIPC(properties: Partial<HL7_2_7_IPC>): void {
    this._assertSegmentInVersion(IPC_SPEC);
    this._segment = this._message.addSegment("IPC");
    this._validatorSetField(IPC_SPEC, 1, properties.ipc_1, {
      length: { max: 427, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 2, properties.ipc_2, {
      length: { max: 22, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 3, properties.ipc_3, {
      length: { max: 70, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 4, properties.ipc_4, {
      length: { max: 22, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 5, properties.ipc_5, {
      length: { max: 16, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 6, properties.ipc_6, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 7, properties.ipc_7, {
      length: { max: 22, min: 1 },
    });
    this._validatorSetField(IPC_SPEC, 8, properties.ipc_8, {
      length: { max: 250, min: 1 },
    });
  }

  protected _buildISD(properties: Partial<HL7_2_7_ISD>): void {
    this._assertSegmentInVersion(ISD_SPEC);
    this._segment = this._message.addSegment("ISD");
    this._validatorSetField(ISD_SPEC, 1, String(properties.isd_1 ?? ""), {
      length: { max: 10, min: 1 },
    });
    this._validatorSetField(ISD_SPEC, 2, properties.isd_2, {
      length: { max: 250, min: 1 },
    });
    this._validatorSetField(ISD_SPEC, 3, properties.isd_3, {
      length: { max: 250, min: 1 },
    });
  }

  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    const msh = properties as unknown as Partial<HL7_2_7_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { length: 4, required: true },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { max: 227, min: 1 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { max: 227, min: 1 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { max: 227, min: 1 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { max: 227, min: 1 },
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
    this._validatorSetValue(
      "9.3",
      msh.msh_9_3 === undefined ? `${msh.msh_9_1}_${msh.msh_9_2}` : msh.msh_9_3,
      { length: { max: 15, min: 3 } },
    );
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { max: 199, min: 1 },
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
}
