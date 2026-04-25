/** HL7 2.4 OM3 - Categorical/Ordinal Test/Observation */
export interface HL7_2_4_OM3 {
  /** OM3.1 - Sequence Number (required) */
  om3_1: number | string;
  /** OM3.2 - Preferred Coding System */
  om3_2?: string;
  /** OM3.3 - Valid Coded Answers */
  om3_3?: string;
  /** OM3.4 - Normal Text/Codes for Categorical Observations */
  om3_4?: string;
  /** OM3.5 - Abnormal Text/Codes for Categorical Obs */
  om3_5?: string;
  /** OM3.6 - Critical Text/Codes for Categorical Obs */
  om3_6?: string;
  /** OM3.7 - Value Type */
  om3_7?: string;
  /** OM3.8 - Units of Measure for Counts */
  om3_8?: string;
  /** OM3.9 - Range of Decimal Precision for Counts */
  om3_9?: string;
}
