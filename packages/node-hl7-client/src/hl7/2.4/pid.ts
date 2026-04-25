import { HL7_2_3_PID } from "@/hl7/2.3/pid";

/** HL7 2.4 PID - extends 2.3 with fields 31-39 */
export interface HL7_2_4_PID extends HL7_2_3_PID {
  /** PID.31 - Identity Unknown Indicator */
  pid_31?: "Y" | "N";
  /** PID.32 - Identity Reliability Code */
  pid_32?: string;
  /** PID.33 - Last Update Date/Time */
  pid_33?: Date | string;
  /** PID.34 - Last Update Facility */
  pid_34?: string;
  /** PID.35 - Species Code */
  pid_35?: string;
  /** PID.36 - Breed Code */
  pid_36?: string;
  /** PID.37 - Strain */
  pid_37?: string;
  /** PID.38 - Production Class Code */
  pid_38?: string;
  /** PID.39 - Tribal Citizenship */
  pid_39?: string;
}
