/** HL7 PR1 - Procedures */
export interface HL7_PR1 {
  anesthesiaCode?: string;
  anesthesiaMinutes?: number | string;
  anesthesiologist?: string;
  /** PR1.1 - Set ID */
  pr1_1: number | string;
  /** PR1.10 - Anesthesia Minutes */
  pr1_10?: number | string;
  /** PR1.11 - Surgeon */
  pr1_11?: string;
  /** PR1.2 - Procedure Coding Method */
  pr1_2: string;
  /** PR1.3 - Procedure Code */
  pr1_3: string;
  /** PR1.4 - Procedure Description */
  pr1_4?: string;
  /** PR1.5 - Procedure Date/Time */
  pr1_5: Date | string;
  /** PR1.6 - Procedure Type */
  pr1_6?: string;
  /** PR1.7 - Procedure Minutes */
  pr1_7?: number | string;
  /** PR1.8 - Anesthesiologist */
  pr1_8?: string;
  /** PR1.9 - Anesthesia Code */
  pr1_9?: string;
  procedureCode?: string;
  procedureCodingMethod?: string;
  procedureDateTime?: Date | string;
  procedureDescription?: string;
  procedureMinutes?: number | string;
  procedureType?: string;
  surgeon?: string;
}
