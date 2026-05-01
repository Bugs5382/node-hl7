/** HL7 2.4 PRB - Problem Detail */
export interface HL7_2_4_PRB {
  /** PRB.1 - Action Code (required) */
  prb_1: "AD" | "CO" | "DE" | "LI" | "UC" | "UN";
  /** PRB.10 - Problem Classification */
  prb_10?: string;
  /** PRB.11 - Problem Management Discipline */
  prb_11?: string;
  /** PRB.12 - Problem Persistence */
  prb_12?: string;
  /** PRB.13 - Problem Confirmation Status */
  prb_13?: string;
  /** PRB.14 - Problem Life Cycle Status */
  prb_14?: string;
  /** PRB.15 - Problem Life Cycle Status Date/Time */
  prb_15?: Date | string;
  /** PRB.16 - Problem Date of Onset */
  prb_16?: Date | string;
  /** PRB.17 - Problem Onset Text */
  prb_17?: string;
  /** PRB.18 - Problem Ranking */
  prb_18?: string;
  /** PRB.19 - Certainty of Problem */
  prb_19?: string;
  /** PRB.2 - Action Date/Time (required) */
  prb_2: Date | string;
  /** PRB.20 - Probability of Problem (0-1) */
  prb_20?: number | string;
  /** PRB.21 - Individual Awareness of Problem */
  prb_21?: string;
  /** PRB.22 - Problem Prognosis */
  prb_22?: string;
  /** PRB.23 - Individual Awareness of Prognosis */
  prb_23?: string;
  /** PRB.24 - Family/Significant Other Awareness of Problem/Prognosis */
  prb_24?: string;
  /** PRB.25 - Security/Sensitivity */
  prb_25?: string;
  /** PRB.26 - Problem Severity */
  prb_26?: string;
  /** PRB.3 - Problem ID (required) */
  prb_3: string;
  /** PRB.4 - Problem Instance ID (required) */
  prb_4: string;
  /** PRB.5 - Episode of Care ID */
  prb_5?: string;
  /** PRB.6 - Problem List Priority */
  prb_6?: number | string;
  /** PRB.7 - Problem Established Date/Time */
  prb_7?: Date | string;
  /** PRB.8 - Anticipated Problem Resolution Date/Time */
  prb_8?: Date | string;
  /** PRB.9 - Actual Problem Resolution Date/Time */
  prb_9?: Date | string;
}
