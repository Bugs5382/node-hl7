import { HL7_2_2_ORC } from "@/hl7/2.2/orc";

/** HL7 2.3 ORC - extends 2.2 with fields 21-23 */
export interface HL7_2_3_ORC extends HL7_2_2_ORC {
  /** ORC.21 - Ordering Facility Name */
  orc_21?: string;
  /** ORC.22 - Ordering Facility Address */
  orc_22?: string;
  /** ORC.23 - Ordering Facility Phone Number */
  orc_23?: string;
}
