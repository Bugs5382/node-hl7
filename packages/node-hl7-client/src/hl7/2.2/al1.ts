import { TABLE_0127 } from "@/hl7/tables/0127";
import { TABLE_0128 } from "@/hl7/tables/0128";
import { TABLE_0136 } from "@/hl7/tables/0136";

export type Table0127Value = (typeof TABLE_0127)[number];
export type Table0128Value = (typeof TABLE_0128)[number];
export type Table0136Value = (typeof TABLE_0136)[number];

/** HL7 2.2 AL1 - Patient Allergy Information */
export interface HL7_2_2_AL1 {
  /** AL1.1 - Set ID (required) */
  al1_1: number | string;
  /** AL1.2 - Allergy Type */
  al1_2?: Table0127Value;
  /** AL1.3 - Allergy Code/Mnemonic/Description (required) */
  al1_3: string;
  /** AL1.4 - Allergy Severity */
  al1_4?: Table0128Value;
  /** AL1.5 - Allergy Reaction */
  al1_5?: string;
  /** AL1.6 - Identification Date */
  al1_6?: Date | string;
}
