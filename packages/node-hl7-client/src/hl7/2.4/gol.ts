/** HL7 2.4 GOL - Goal Detail */
export interface HL7_2_4_GOL {
  /** GOL.1 - Action Code (required) */
  gol_1: "AD" | "CO" | "DE" | "LI" | "UC" | "UN";
  /** GOL.2 - Action Date/Time (required) */
  gol_2: Date | string;
  /** GOL.3 - Goal ID (required) */
  gol_3: string;
  /** GOL.4 - Goal Instance ID */
  gol_4?: string;
  /** GOL.5 - Episode of Care ID */
  gol_5?: string;
  /** GOL.6 - Goal List Priority */
  gol_6?: number | string;
  /** GOL.7 - Goal Established Date/Time */
  gol_7?: Date | string;
  /** GOL.8 - Expected Goal Achieve Date/Time */
  gol_8?: Date | string;
  /** GOL.9 - Goal Classification */
  gol_9?: Date | string;
  /** GOL.10 - Goal Management Discipline */
  gol_10?: string;
  /** GOL.11 - Current Goal Review Status */
  gol_11?: string;
  /** GOL.12 - Current Goal Review Date/Time */
  gol_12?: Date | string;
  /** GOL.13 - Next Goal Review Date/Time */
  gol_13?: Date | string;
  /** GOL.14 - Previous Goal Review Date/Time */
  gol_14?: Date | string;
  /** GOL.15 - Goal Review Interval */
  gol_15?: Date | string;
  /** GOL.16 - Goal Evaluation */
  gol_16?: string;
  /** GOL.17 - Goal Evaluation Comment */
  gol_17?: string;
  /** GOL.18 - Goal Life Cycle Status */
  gol_18?: string;
  /** GOL.19 - Goal Life Cycle Status Date/Time */
  gol_19?: Date | string;
  /** GOL.20 - Goal Target Type */
  gol_20?: string;
  /** GOL.21 - Goal Target Name */
  gol_21?: string;
}
