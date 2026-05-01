/** HL7 URD - Results/Update Definition */
export interface HL7_URD {
  reportPriority?: string;
  ruDateTime?: Date | string;
  ruWhatSubjectDefinition?: string;
  ruWhoSubjectDefinition?: string;
  /** URD.1 - R/U Date/Time */
  urd_1?: Date | string;
  /** URD.2 - Report Priority */
  urd_2?: string;
  /** URD.3 - R/U Who Subject Definition */
  urd_3: string;
  /** URD.4 - R/U What Subject Definition */
  urd_4?: string;
}
