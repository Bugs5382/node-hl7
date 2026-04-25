/** HL7 UB1 - UB82 Data */
export interface HL7_UB1 {
  /** UB1.1 - Set ID */
  ub1_1?: string | number;
  /** UB1.2 - Blood Deductible */
  ub1_2?: string | number;
  bloodDeductible?: string | number;
  /** UB1.3 - Blood Furnished Pints */
  ub1_3?: string | number;
  bloodFurnishedPints?: string | number;
  /** UB1.4 - Blood Replaced Pints */
  ub1_4?: string | number;
  bloodReplacedPints?: string | number;
  /** UB1.5 - Blood Not Replaced Pints */
  ub1_5?: string | number;
  bloodNotReplacedPints?: string | number;
  /** UB1.6 - Co-Insurance Days */
  ub1_6?: string | number;
  coInsuranceDays?: string | number;
  /** UB1.7 - Condition Code */
  ub1_7?: string;
  conditionCode?: string;
  /** UB1.8 - Covered Days */
  ub1_8?: string | number;
  coveredDays?: string | number;
  /** UB1.9 - Non-Covered Days */
  ub1_9?: string | number;
  nonCoveredDays?: string | number;
  /** UB1.10 - Value Amount and Code */
  ub1_10?: string;
  valueAmountCode?: string;
  /** UB1.11 - Number of Grace Days */
  ub1_11?: string | number;
  numberOfGraceDays?: string | number;
  /** UB1.12 - Special Program Indicator */
  ub1_12?: string;
  specialProgramIndicator?: string;
  /** UB1.13 - PSRO/UR Approval Indicator */
  ub1_13?: string;
  /** UB1.14 - PSRO/UR Approved Stay - From */
  ub1_14?: Date | string;
  /** UB1.15 - PSRO/UR Approved Stay - To */
  ub1_15?: Date | string;
  /** UB1.16 - Occurrence */
  ub1_16?: string;
  occurrence?: string;
  /** UB1.17 - Occurrence Span */
  ub1_17?: string;
  occurrenceSpan?: string;
  /** UB1.18 - Occurrence Span Start Date */
  ub1_18?: Date | string;
  /** UB1.19 - Occurrence Span Stop Date */
  ub1_19?: Date | string;
  /** UB1.20 - UB-82 Locator 2 */
  ub1_20?: string;
  /** UB1.21 - UB-82 Locator 9 */
  ub1_21?: string;
  /** UB1.22 - UB-82 Locator 27 */
  ub1_22?: string;
  /** UB1.23 - UB-82 Locator 45 */
  ub1_23?: string;
}
