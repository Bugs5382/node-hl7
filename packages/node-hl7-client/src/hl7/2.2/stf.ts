import { TABLE_0001 } from "@/hl7/tables/0001";

/** HL7 2.2 STF - Staff Identification */
export interface HL7_2_2_STF {
  /** STF.2 alias */
  staffIdCode?: string;
  /** STF.3 alias */
  staffName?: string;
  /** STF.1 - Primary Key Value - STF (max 60) */
  stf_1?: string;
  /** STF.10 - Phone (max 40) */
  stf_10?: string;
  /** STF.11 - Office/Home Address (max 106) */
  stf_11?: string;
  /** STF.12 - Institution Activation Date */
  stf_12?: Date | string;
  /** STF.13 - Institution Inactivation Date */
  stf_13?: Date | string;
  /** STF.14 - Backup Person ID (max 60) */
  stf_14?: string;
  /** STF.2 - Staff ID Code (required, max 60) */
  stf_2: string;
  /** STF.3 - Staff Name (max 48) */
  stf_3?: string;
  /** STF.4 - Staff Type (max 2) */
  stf_4?: string;
  /** STF.5 - Sex (max 1) */
  stf_5?: Table0001Value;
  /** STF.6 - Date/Time of Birth */
  stf_6?: Date | string;
  /** STF.7 - Active/Inactive Flag */
  stf_7?: "A" | "I";
  /** STF.8 - Department (max 200) */
  stf_8?: string;
  /** STF.9 - Hospital Service - STF (max 200) */
  stf_9?: string;
}

export type Table0001Value = (typeof TABLE_0001)[number];
