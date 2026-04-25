import { HL7_2_2_OBX } from "@/hl7/2.2/obx";

/** HL7 2.3 OBX - extends 2.2 with fields 16-17 */
export interface HL7_2_3_OBX extends HL7_2_2_OBX {
  /** OBX.16 - Responsible Observer (max 80) */
  obx_16?: string;
  /** OBX.17 - Observation Method (max 60) */
  obx_17?: string;
}
