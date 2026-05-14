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
    { length: { min: 1, max: 250 } });
    // STZ.5 was present in early-draft tooling but Caristix v2.8 publishes
    // only 4 fields for STZ; the spec is authoritative, so don't emit a 5th.
  }
}
