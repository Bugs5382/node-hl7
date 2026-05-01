import { HL7_2_1_PID } from "@/hl7/2.1/pid";
import { TABLE_0136 } from "@/hl7/tables/0136";

/** HL7 2.2 PID - extends 2.1 with fields 20-26 */
export interface HL7_2_2_PID extends HL7_2_1_PID {
  /** PID.20 - Driver's License Number - Patient */
  pid_20?: string;
  /** PID.21 - Mother's Identifier */
  pid_21?: string;
  /** PID.22 - Ethnic Group */
  pid_22?: string;
  /** PID.23 - Birth Place */
  pid_23?: string;
  /** PID.24 - Multiple Birth Indicator */
  pid_24?: Table0136Value;
  /** PID.25 - Birth Order */
  pid_25?: number | string;
  /** PID.26 - Citizenship */
  pid_26?: string;
}

export type Table0136Value = (typeof TABLE_0136)[number];
