import { HL7_2_7 } from "@/hl7/2.7";
import { ClientBuilderOptions_Hl7_2_7_1 } from "./types";
import { HL7_2_7_1_MSH } from "./msh";

export type { HL7_2_7_1_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_7_1 } from "./types";

/**
 * Hl7 Specification Version 2.7.1
 * @since 1.0.0
 */
export class HL7_2_7_1 extends HL7_2_7 {
  constructor(props?: ClientBuilderOptions_Hl7_2_7_1) {
    super(props);
    this.version = "2.7.1";
  }

  checkMSH(msh: HL7_2_7_1_MSH): boolean {
    return super.checkMSH(msh);
  }
}
