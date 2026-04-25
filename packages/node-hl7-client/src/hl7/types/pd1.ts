/** HL7 PD1 - Patient Additional Demographic (added in HL7 2.3) */
export interface HL7_PD1 {
  /** PD1.1 - Living Dependency */
  pd1_1?: string;
  livingDependency?: string;
  /** PD1.2 - Living Arrangement */
  pd1_2?: string;
  livingArrangement?: string;
  /** PD1.3 - Patient Primary Facility */
  pd1_3?: string;
  patientPrimaryFacility?: string;
  /** PD1.4 - Patient Primary Care Provider */
  pd1_4?: string;
  patientPrimaryCareProvider?: string;
  /** PD1.5 - Student Indicator */
  pd1_5?: string;
  studentIndicator?: string;
  /** PD1.6 - Handicap */
  pd1_6?: string;
  handicap?: string;
  /** PD1.7 - Living Will Code */
  pd1_7?: string;
  livingWillCode?: string;
  /** PD1.8 - Organ Donor Code */
  pd1_8?: string;
  organDonorCode?: string;
  /** PD1.9 - Separate Bill */
  pd1_9?: string;
  separateBill?: string;
  /** PD1.10 - Duplicate Patient */
  pd1_10?: string;
  duplicatePatient?: string;
  /** PD1.11 - Publicity Code */
  pd1_11?: string;
  publicityCode?: string;
  /** PD1.12 - Protection Indicator */
  pd1_12?: string;
  protectionIndicator?: string;
}
