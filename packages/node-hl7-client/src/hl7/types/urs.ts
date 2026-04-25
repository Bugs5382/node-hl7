/** HL7 URS - Unsolicited Selection */
export interface HL7_URS {
  /** URS.1 - R/U Where Subject Definition */
  urs_1: string;
  ruWhereSubjectDefinition?: string;
  /** URS.2 - R/U When Data Start Date/Time */
  urs_2?: Date | string;
  /** URS.3 - R/U When Data End Date/Time */
  urs_3?: Date | string;
  /** URS.4 - R/U What User Qualifier */
  urs_4?: string;
  ruWhatUserQualifier?: string;
  /** URS.5 - R/U Other Results Subject Definition */
  urs_5?: string;
  /** URS.6 - R/U Which Date/Time Qualifier */
  urs_6?: string;
}
