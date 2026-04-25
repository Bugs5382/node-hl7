/** HL7 2.3 PD1 - Patient Additional Demographic */
export interface HL7_2_3_PD1 {
  /** PD1.1 - Living Dependency */
  pd1_1?: string;
  /** PD1.2 - Living Arrangement */
  pd1_2?: string;
  /** PD1.3 - Patient Primary Facility */
  pd1_3?: string;
  /** PD1.4 - Patient Primary Care Provider Name & ID No. */
  pd1_4?: string;
  /** PD1.5 - Student Indicator */
  pd1_5?: string;
  /** PD1.6 - Handicap */
  pd1_6?: string;
  /** PD1.7 - Living Will Code */
  pd1_7?: string;
  /** PD1.8 - Organ Donor Code */
  pd1_8?: string;
  /** PD1.9 - Separate Bill */
  pd1_9?: "Y" | "N";
  /** PD1.10 - Duplicate Patient */
  pd1_10?: string;
  /** PD1.11 - Publicity Code */
  pd1_11?: string;
  /** PD1.12 - Protection Indicator */
  pd1_12?: "Y" | "N";
}
