/** HL7 2.2 UB2 - Uniform Billing Data (UB-92) */
export interface HL7_2_2_UB2 {
  /** UB2.1 - Set ID (optional) */
  ub2_1?: number | string;
  /** UB2.2 - Co-Insurance Days (max 3) */
  ub2_2?: string;
  /** UB2.3 - Condition Code (max 14) */
  ub2_3?: string;
  /** UB2.4 - Covered Days (max 3) */
  ub2_4?: string;
  /** UB2.5 - Non-Covered Days (max 4) */
  ub2_5?: string;
  /** UB2.6 - Value Amount & Code */
  ub2_6?: string;
  /** UB2.7 - Occurrence Code & Date */
  ub2_7?: string;
  /** UB2.8 - Occurrence Span Code/Dates */
  ub2_8?: string;
  /** UB2.9 - UB92 Locator 2 (State) (max 29) */
  ub2_9?: string;
  /** UB2.10 - UB92 Locator 11 (State) (max 12) */
  ub2_10?: string;
  /** UB2.11 - UB92 Locator 31 (National) (max 5) */
  ub2_11?: string;
  /** UB2.12 - Document Control Number (max 23) */
  ub2_12?: string;
  /** UB2.13 - UB92 Locator 49 (National) (max 4) */
  ub2_13?: string;
  /** UB2.14 - UB92 Locator 56 (State) (max 14) */
  ub2_14?: string;
  /** UB2.15 - UB92 Locator 57 (National) (max 27) */
  ub2_15?: string;
  /** UB2.16 - UB92 Locator 78 (State) (max 2) */
  ub2_16?: string;
  /** UB2.17 - Special Visit Count (max 3) */
  ub2_17?: string;
}
