/** HL7 2.4 OM4 - Observations Requiring Specimens */
export interface HL7_2_4_OM4 {
  /** OM4.1 - Sequence Number */
  om4_1?: number | string;
  /** OM4.10 - Normal Collection Volume */
  om4_10?: string;
  /** OM4.11 - Minimum Collection Volume */
  om4_11?: string;
  /** OM4.12 - Specimen Requirements */
  om4_12?: string;
  /** OM4.13 - Specimen Priorities */
  om4_13?: "E" | "R" | "S" | "T";
  /** OM4.14 - Specimen Retention Time */
  om4_14?: string;
  /** OM4.15 - Specimen Handling Code */
  om4_15?: string;
  /** OM4.16 - Specimen Condition */
  om4_16?: string;
  /** OM4.17 - Minimum Volume */
  om4_17?: string;
  /** OM4.18 - Reject if No Performer Reason */
  om4_18?: string;
  /** OM4.19 - Specimen Collection Site */
  om4_19?: string;
  /** OM4.2 - Derived Specimen */
  om4_2?: string;
  /** OM4.3 - Container Description */
  om4_3?: string;
  /** OM4.4 - Container Volume */
  om4_4?: number | string;
  /** OM4.5 - Container Units */
  om4_5?: string;
  /** OM4.6 - Specimen */
  om4_6?: string;
  /** OM4.7 - Additive */
  om4_7?: string;
  /** OM4.8 - Preparation */
  om4_8?: string;
  /** OM4.9 - Special Handling Requirements */
  om4_9?: string;
}
