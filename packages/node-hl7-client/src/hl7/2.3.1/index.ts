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
import { HL7_2_3 } from "@/hl7/2.3";
import { TABLE_0356 } from "@/hl7/tables/0356";

import { HL7_2_3_1_MSH } from "./msh";
import { ClientBuilderOptions_Hl7_2_3_1 } from "./types";

export type { HL7_2_3_1_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_3_1 } from "./types";

/**
 * Hl7 Specification Version 2.3.1
 * @since 1.0.0
 */
export class HL7_2_3_1 extends HL7_2_3 {
  protected _table_0356: string[];

  constructor(properties?: ClientBuilderOptions_Hl7_2_3_1) {
    super(properties);
    this.version = "2.3.1";
    this._table_0356 = properties?.table_0356 || TABLE_0356;
  }

  checkMSH(msh: HL7_2_3_1_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    super._buildMSH(properties); // builds fields 1-18
    const msh = properties as unknown as Partial<HL7_2_3_1_MSH>;
    this._validatorSetValue("19", msh.msh_19, { length: { max: 60, min: 1 } });
    this._validatorSetValue("20", msh.msh_20, {
      allowedValues: this._table_0356,
    });
  }
}
