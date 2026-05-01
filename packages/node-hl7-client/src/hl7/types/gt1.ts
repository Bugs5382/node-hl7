/** HL7 GT1 - Guarantor */
export interface HL7_GT1 {
  /** GT1.1 - Set ID */
  gt1_1?: number | string;
  /** GT1.10 - Guarantor Type */
  gt1_10?: string;
  /** GT1.11 - Guarantor Relationship */
  gt1_11?: string;
  /** GT1.12 - Guarantor SSN */
  gt1_12?: string;
  /** GT1.13 - Guarantor Date - Begin */
  gt1_13?: Date | string;
  /** GT1.14 - Guarantor Date - End */
  gt1_14?: Date | string;
  /** GT1.15 - Guarantor Priority */
  gt1_15?: string;
  /** GT1.16 - Guarantor Employer Name */
  gt1_16?: string;
  /** GT1.17 - Guarantor Employer Address */
  gt1_17?: string;
  /** GT1.18 - Guarantor Employment Status */
  gt1_18?: string;
  /** GT1.19 - Guarantor Organization */
  gt1_19?: string;
  /** GT1.2 - Guarantor ID */
  gt1_2?: string;
  /** GT1.20 - Guarantor Billing Hold Flag */
  gt1_20?: string;
  /** GT1.3 - Guarantor Name */
  gt1_3?: string;
  /** GT1.4 - Guarantor Spouse Name */
  gt1_4?: string;
  /** GT1.5 - Guarantor Address */
  gt1_5?: string;
  /** GT1.6 - Guarantor Phone Number - Home */
  gt1_6?: string;
  /** GT1.7 - Guarantor Phone Number - Business */
  gt1_7?: string;
  /** GT1.8 - Guarantor Date/Time of Birth */
  gt1_8?: Date | string;
  /** GT1.9 - Guarantor Sex */
  gt1_9?: string;
  guarantorName?: string;
}
