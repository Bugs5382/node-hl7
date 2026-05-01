import { HL7_2_2_PID } from "@/hl7/2.2/pid";

/** HL7 2.3 PID - extends 2.2 with fields 27-30 */
export interface HL7_2_3_PID extends HL7_2_2_PID {
  /** PID.27 - Veterans Military Status */
  pid_27?: string;
  /** PID.28 - Nationality Code */
  pid_28?: string;
  /** PID.29 - Patient Death Date and Time */
  pid_29?: Date | string;
  /** PID.30 - Patient Death Indicator */
  pid_30?: "N" | "Y";
}
