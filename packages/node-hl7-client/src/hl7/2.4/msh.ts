import { HL7_2_3_1_MSH } from "@/hl7/2.3.1/msh";

/**
 * HL7 2.4 MSH Specification
 * @since 1.0.0
 */
export type HL7_2_4_MSH = {
  /** Processing Mode — adds "T" in 2.4 */
  msh_11_2?: "" | "A" | "I" | "R" | "T";
  /** Message Structure (e.g. "ADT_A01")
   * @default Combination of msh_9_1 and msh_9_2 with underscore */
  msh_9_3?: string;
} & HL7_2_3_1_MSH;
