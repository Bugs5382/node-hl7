import { HL7_2_3_MSH } from "@/hl7/2.3/msh";
import { TABLE_0356 } from "@/hl7/tables/0356";

export type Table0356Value = (typeof TABLE_0356)[number];

/** HL7 2.3.1 MSH - extends 2.3 with fields 19-20 */
export interface HL7_2_3_1_MSH extends HL7_2_3_MSH {
  /** MSH.19 - Principal Language of Message */
  msh_19?: string;
  /** MSH.20 - Alternate Character Set Handling Scheme */
  msh_20?: Table0356Value;
}
