import { TABLE_0001 } from "@/hl7/tables/0001";
import { TABLE_0002 } from "@/hl7/tables/0002";

export type Table0001Value = (typeof TABLE_0001)[number];
export type Table0002Value = (typeof TABLE_0002)[number];

/** HL7 PID - Patient Identification */
export interface HL7_PID {
  /** PID.1 - Set ID */
  pid_1?: string | number;
  /** PID.2 - Patient ID (External) */
  pid_2?: string;
  patientIdExternal?: string;
  /** PID.3 - Patient ID (Internal) */
  pid_3: string;
  patientIdInternal?: string;
  /** PID.4 - Alternate Patient ID */
  pid_4?: string;
  alternatePatientId?: string;
  /** PID.5 - Patient Name */
  pid_5: string;
  patientName?: string;
  /** PID.6 - Mother's Maiden Name */
  pid_6?: string;
  mothersMaidenName?: string;
  /** PID.7 - Date of Birth */
  pid_7?: Date | string;
  dateOfBirth?: Date | string;
  /** PID.8 - Sex */
  pid_8?: Table0001Value;
  sex?: Table0001Value;
  /** PID.9 - Patient Alias */
  pid_9?: string;
  patientAlias?: string;
  /** PID.10 - Race */
  pid_10?: string;
  race?: string;
  /** PID.11 - Patient Address */
  pid_11?: string;
  patientAddress?: string;
  /** PID.12 - County Code */
  pid_12?: string;
  countyCode?: string;
  /** PID.13 - Phone Number - Home */
  pid_13?: string;
  phoneNumberHome?: string;
  /** PID.14 - Phone Number - Business */
  pid_14?: string;
  phoneNumberBusiness?: string;
  /** PID.15 - Language - Patient */
  pid_15?: string;
  language?: string;
  /** PID.16 - Marital Status */
  pid_16?: Table0002Value;
  maritalStatus?: Table0002Value;
  /** PID.17 - Religion */
  pid_17?: string;
  religion?: string;
  /** PID.18 - Patient Account Number */
  pid_18?: string;
  patientAccountNumber?: string;
  /** PID.19 - SSN Number - Patient */
  pid_19?: string;
  ssn?: string;
}
