import { TABLE_0001 } from "@/hl7/tables/0001";
import { TABLE_0002 } from "@/hl7/tables/0002";

/** HL7 PID - Patient Identification */
export interface HL7_PID {
  alternatePatientId?: string;
  countyCode?: string;
  dateOfBirth?: Date | string;
  language?: string;
  maritalStatus?: Table0002Value;
  mothersMaidenName?: string;
  patientAccountNumber?: string;
  patientAddress?: string;
  patientAlias?: string;
  patientIdExternal?: string;
  patientIdInternal?: string;
  patientName?: string;
  phoneNumberBusiness?: string;
  phoneNumberHome?: string;
  /** PID.1 - Set ID */
  pid_1?: number | string;
  /** PID.10 - Race */
  pid_10?: string;
  /** PID.11 - Patient Address */
  pid_11?: string;
  /** PID.12 - County Code */
  pid_12?: string;
  /** PID.13 - Phone Number - Home */
  pid_13?: string;
  /** PID.14 - Phone Number - Business */
  pid_14?: string;
  /** PID.15 - Language - Patient */
  pid_15?: string;
  /** PID.16 - Marital Status */
  pid_16?: Table0002Value;
  /** PID.17 - Religion */
  pid_17?: string;
  /** PID.18 - Patient Account Number */
  pid_18?: string;
  /** PID.19 - SSN Number - Patient */
  pid_19?: string;
  /** PID.2 - Patient ID (External) */
  pid_2?: string;
  /** PID.3 - Patient ID (Internal) */
  pid_3: string;
  /** PID.4 - Alternate Patient ID */
  pid_4?: string;
  /** PID.5 - Patient Name */
  pid_5: string;
  /** PID.6 - Mother's Maiden Name */
  pid_6?: string;
  /** PID.7 - Date of Birth */
  pid_7?: Date | string;
  /** PID.8 - Sex */
  pid_8?: Table0001Value;
  /** PID.9 - Patient Alias */
  pid_9?: string;
  race?: string;
  religion?: string;
  sex?: Table0001Value;
  ssn?: string;
}
export type Table0001Value = (typeof TABLE_0001)[number];

export type Table0002Value = (typeof TABLE_0002)[number];
