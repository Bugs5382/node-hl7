/** HL7 URD - Results/Update Definition */
export interface HL7_URD {
  /** URD.1 - R/U Date/Time */
  urd_1?: Date | string;
  ruDateTime?: Date | string;
  /** URD.2 - Report Priority */
  urd_2?: string;
  reportPriority?: string;
  /** URD.3 - R/U Who Subject Definition */
  urd_3: string;
  ruWhoSubjectDefinition?: string;
  /** URD.4 - R/U What Subject Definition */
  urd_4?: string;
  ruWhatSubjectDefinition?: string;
}
