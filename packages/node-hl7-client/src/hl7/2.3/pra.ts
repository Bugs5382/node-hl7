/** HL7 2.3 PRA - Practitioner Detail */
export interface HL7_2_3_PRA {
  /** PRA.1 - Primary Key Value - PRA */
  pra_1?: string;
  /** PRA.2 - Practitioner Group */
  pra_2?: string;
  /** PRA.3 - Practitioner Category */
  pra_3?: string;
  /** PRA.4 - Provider Billing */
  pra_4?: "I" | "O";
  /** PRA.5 - Specialty */
  pra_5?: string;
  /** PRA.6 - Practitioner ID Numbers */
  pra_6?: string;
  /** PRA.7 - Privileges */
  pra_7?: string;
  /** PRA.8 - Date Entered Practice */
  pra_8?: Date | string;
}
