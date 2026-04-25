/** HL7 2.3 CTD - Contact Data */
export interface HL7_2_3_CTD {
  /** CTD.1 - Contact Role (required) */
  ctd_1: string;
  /** CTD.2 - Contact Name */
  ctd_2?: string;
  /** CTD.3 - Contact Address */
  ctd_3?: string;
  /** CTD.4 - Contact Location */
  ctd_4?: string;
  /** CTD.5 - Contact Communication Information */
  ctd_5?: string;
  /** CTD.6 - Preferred Method of Contact */
  ctd_6?: string;
  /** CTD.7 - Contact Identifiers */
  ctd_7?: string;
}
