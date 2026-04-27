import { randomString } from "@/utils/randomString";
import { HL7_2_1_MSH } from "@/hl7/2.1/types";
import { HL7_2_6 } from "@/hl7/2.6";
import { ClientBuilderOptions_Hl7_2_7 } from "./types";
import { HL7_2_7_MSH } from "./msh";
import { HL7_2_7_IPC } from "./ipc";
import { HL7_2_7_ISD } from "./isd";
import { IPC_SPEC } from "@/hl7/metadata/segments/ipc";
import { ISD_SPEC } from "@/hl7/metadata/segments/isd";

export type { HL7_2_7_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_7 } from "./types";

/**
 * Hl7 Specification Version 2.7
 * @remarks MSH.10 control ID max length grows to 199 in 2.7.
 * @since 1.0.0
 */
export class HL7_2_7 extends HL7_2_6 {
  constructor(props?: ClientBuilderOptions_Hl7_2_7) {
    super(props);
    this.version = "2.7";
  }

  checkMSH(msh: HL7_2_7_MSH): boolean {
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

    if (typeof msh.msh_10 !== "undefined" && msh.msh_10.length > 199) {
      throw new Error(
        "MSH.10 must be greater than 0 and less than 199 characters.",
      );
    }

    return true;
  }

  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
    const msh = props as unknown as Partial<HL7_2_7_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { required: true, length: 4 },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { min: 1, max: 227 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { min: 1, max: 227 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { min: 1, max: 227 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { min: 1, max: 227 },
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
      length: { min: 1, max: 199 },
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

  protected _buildIPC(props: Partial<HL7_2_7_IPC>): void {
    this._assertSegmentInVersion(IPC_SPEC);
    this._segment = this._message.addSegment("IPC");
    this._validatorSetField(IPC_SPEC,
    1,
    props.ipc_1,
    { length: { min: 1, max: 427 } });
    this._validatorSetField(IPC_SPEC,
    2,
    props.ipc_2,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(IPC_SPEC,
    3,
    props.ipc_3,
    { length: { min: 1, max: 70 } });
    this._validatorSetField(IPC_SPEC,
    4,
    props.ipc_4,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(IPC_SPEC,
    5,
    props.ipc_5,
    { length: { min: 1, max: 16 } });
    this._validatorSetField(IPC_SPEC,
    6,
    props.ipc_6,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(IPC_SPEC,
    7,
    props.ipc_7,
    { length: { min: 1, max: 22 } });
    this._validatorSetField(IPC_SPEC,
    8,
    props.ipc_8,
    { length: { min: 1, max: 250 } });
  }

  protected _buildISD(props: Partial<HL7_2_7_ISD>): void {
    this._assertSegmentInVersion(ISD_SPEC);
    this._segment = this._message.addSegment("ISD");
    this._validatorSetField(ISD_SPEC,
    1,
    String(props.isd_1 ?? ""),
    { length: { min: 1, max: 10 } });
    this._validatorSetField(ISD_SPEC,
    2,
    props.isd_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(ISD_SPEC,
    3,
    props.isd_3,
    { length: { min: 1, max: 250 } });
  }
}
