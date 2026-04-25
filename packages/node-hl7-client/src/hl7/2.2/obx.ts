import { HL7_2_1_OBX } from "@/hl7/2.1/obx";

/** HL7 2.2 OBX - extends 2.1 with fields 12-15 */
export interface HL7_2_2_OBX extends HL7_2_1_OBX {
  /** OBX.12 - Effective Date of Reference Range Values */
  obx_12?: Date | string;
  /** OBX.13 - User Defined Access Checks (max 20) */
  obx_13?: string;
  /** OBX.14 - Date/Time of the Observation */
  obx_14?: Date | string;
  /** OBX.15 - Producer's ID (max 60) */
  obx_15?: string;
}
