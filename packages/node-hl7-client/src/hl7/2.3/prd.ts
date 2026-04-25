/** HL7 2.3 PRD - Provider Data */
export interface HL7_2_3_PRD {
  /** PRD.1 - Provider Role (required) */
  prd_1: string;
  /** PRD.2 - Provider Name */
  prd_2?: string;
  /** PRD.3 - Provider Address */
  prd_3?: string;
  /** PRD.4 - Provider Location */
  prd_4?: string;
  /** PRD.5 - Provider Communication Information */
  prd_5?: string;
  /** PRD.6 - Preferred Method of Contact */
  prd_6?: string;
  /** PRD.7 - Provider Identifiers */
  prd_7?: string;
  /** PRD.8 - Effective Start Date of Provider Role */
  prd_8?: Date | string;
  /** PRD.9 - Effective End Date of Provider Role */
  prd_9?: Date | string;
}
