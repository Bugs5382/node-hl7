import { HL7_2_2_MSH } from "@/hl7/2.2/msh";

/**
 * HL7 2.3 MSH Specification
 * @since 4.0.0
 */
export interface HL7_2_3_MSH extends HL7_2_2_MSH {
  /** Processing ID: D=Debugging, P=Production, T=Test */
  msh_11_1: "D" | "P" | "T";
  /** Processing Mode */
  msh_11_2?: "" | "A" | "I" | "R";
  /** MSH.13 - Sequence Number */
  msh_13?: string;
  /** MSH.14 - Continuation Pointer */
  msh_14?: string;
  /** MSH.15 - Accept Acknowledgment Type */
  msh_15?: "AL" | "ER" | "NE" | "SU";
  /** MSH.16 - Application Acknowledgment Type */
  msh_16?: "AL" | "ER" | "NE" | "SU";
  /** MSH.17 - Country Code */
  msh_17?: string;
  /** MSH.18 - Character Set */
  msh_18?: string;
}
