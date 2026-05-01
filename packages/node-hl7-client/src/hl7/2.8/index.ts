import { HL7_2_7_1 } from "@/hl7/2.7.1";
import { STZ_SPEC } from "@/hl7/metadata/segments/stz";

import { HL7_2_8_ECD } from "./ecd";
import { HL7_2_8_MSH } from "./msh";
import { HL7_2_8_STZ } from "./stz";
import { ClientBuilderOptions_Hl7_2_8 } from "./types";

export type { HL7_2_8_ECD } from "./ecd";
export type { HL7_2_8_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_8 } from "./types";

/**
 * Hl7 Specification Version 2.8
 * @since 1.0.0
 */
export class HL7_2_8 extends HL7_2_7_1 {
  constructor(properties?: ClientBuilderOptions_Hl7_2_8) {
    super(properties);
    this.version = "2.8";
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

  checkMSH(msh: HL7_2_8_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildSTZ(properties: Partial<HL7_2_8_STZ>): void {
    this._assertSegmentInVersion(STZ_SPEC);
    this._segment = this._message.addSegment("STZ");
    this._validatorSetField(STZ_SPEC,
    1,
    properties.stz_1,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(STZ_SPEC,
    2,
    properties.stz_2,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(STZ_SPEC,
    3,
    properties.stz_3,
    { length: { min: 1, max: 250 } });
    this._validatorSetField(STZ_SPEC,
    4,
    properties.stz_4,
      length: { min: 1, max: 250 },
    });
    // STZ.5 was present in early-draft tooling but Caristix v2.8 publishes
    // only 4 fields for STZ; the spec is authoritative, so don't emit a 5th.
  }
}
