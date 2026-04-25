import { HL7_2_1_MSH } from "@/hl7/2.1/types";
import { HL7_2_3 } from "@/hl7/2.3";
import { TABLE_0356 } from "@/hl7/tables/0356";
import { ClientBuilderOptions_Hl7_2_3_1 } from "./types";
import { HL7_2_3_1_MSH } from "./msh";

export type { HL7_2_3_1_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_3_1 } from "./types";

/**
 * Hl7 Specification Version 2.3.1
 * @since 1.0.0
 */
export class HL7_2_3_1 extends HL7_2_3 {
  protected _table_0356: string[];

  constructor(props?: ClientBuilderOptions_Hl7_2_3_1) {
    super(props);
    this.version = "2.3.1";
    this._table_0356 = props?.table_0356 || TABLE_0356;
  }

  checkMSH(msh: HL7_2_3_1_MSH): boolean {
    return super.checkMSH(msh);
  }

  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
    super._buildMSH(props); // builds fields 1-18
    const msh = props as unknown as Partial<HL7_2_3_1_MSH>;
    this._validatorSetValue("19", msh.msh_19, { length: { min: 1, max: 60 } });
    this._validatorSetValue("20", msh.msh_20, { allowedValues: this._table_0356 });
  }
}
