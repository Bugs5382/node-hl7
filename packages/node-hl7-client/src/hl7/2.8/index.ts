import { HL7_2_7_1 } from "@/hl7/2.7.1";
import { ClientBuilderOptions_Hl7_2_8 } from "./types";
import { HL7_2_8_MSH } from "./msh";
import { HL7_2_8_STZ } from "./stz";
import { HL7_2_8_ECD } from "./ecd";

export type { HL7_2_8_MSH } from "./msh";
export type { HL7_2_8_ECD } from "./ecd";
export type { ClientBuilderOptions_Hl7_2_8 } from "./types";

/**
 * Hl7 Specification Version 2.8
 * @since 1.0.0
 */
export class HL7_2_8 extends HL7_2_7_1 {
  constructor(props?: ClientBuilderOptions_Hl7_2_8) {
    super(props);
    this.version = "2.8";
  }

  checkMSH(msh: HL7_2_8_MSH): boolean {
    return super.checkMSH(msh);
  }

  /**
   * v2.8 narrowing of `buildECD` — `ecd_4` is typed as `never` so the IDE
   * rejects any attempt to set it. Runtime check enforces the same.
   *
   * @since 4.0.0
   */
  buildECD(props: Partial<HL7_2_8_ECD>): this {
    return super.buildECD(props as Partial<HL7_2_8_ECD>);
  }

  protected _buildSTZ(props: Partial<HL7_2_8_STZ>): void {
    this._segment = this._message.addSegment("STZ");
    this._validatorSetValue("1", props.stz_1, { length: { min: 1, max: 250 } });
    this._validatorSetValue("2", props.stz_2, { length: { min: 1, max: 250 } });
    this._validatorSetValue("3", props.stz_3, { length: { min: 1, max: 250 } });
    this._validatorSetValue("4", props.stz_4, { length: { min: 1, max: 250 } });
    this._validatorSetValue("5", props.stz_5, { length: { min: 1, max: 250 } });
  }
}
