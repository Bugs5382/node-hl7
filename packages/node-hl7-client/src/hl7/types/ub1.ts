/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
/** HL7 UB1 - UB82 Data */
export interface HL7_UB1 {
  bloodDeductible?: number | string;
  bloodFurnishedPints?: number | string;
  bloodNotReplacedPints?: number | string;
  bloodReplacedPints?: number | string;
  coInsuranceDays?: number | string;
  conditionCode?: string;
  coveredDays?: number | string;
  nonCoveredDays?: number | string;
  numberOfGraceDays?: number | string;
  occurrence?: string;
  occurrenceSpan?: string;
  specialProgramIndicator?: string;
  /** UB1.1 - Set ID */
  ub1_1?: number | string;
  /** UB1.10 - Value Amount and Code */
  ub1_10?: string;
  /** UB1.11 - Number of Grace Days */
  ub1_11?: number | string;
  /** UB1.12 - Special Program Indicator */
  ub1_12?: string;
  /** UB1.13 - PSRO/UR Approval Indicator */
  ub1_13?: string;
  /** UB1.14 - PSRO/UR Approved Stay - From */
  ub1_14?: Date | string;
  /** UB1.15 - PSRO/UR Approved Stay - To */
  ub1_15?: Date | string;
  /** UB1.16 - Occurrence */
  ub1_16?: string;
  /** UB1.17 - Occurrence Span */
  ub1_17?: string;
  /** UB1.18 - Occurrence Span Start Date */
  ub1_18?: Date | string;
  /** UB1.19 - Occurrence Span Stop Date */
  ub1_19?: Date | string;
  /** UB1.2 - Blood Deductible */
  ub1_2?: number | string;
  /** UB1.20 - UB-82 Locator 2 */
  ub1_20?: string;
  /** UB1.21 - UB-82 Locator 9 */
  ub1_21?: string;
  /** UB1.22 - UB-82 Locator 27 */
  ub1_22?: string;
  /** UB1.23 - UB-82 Locator 45 */
  ub1_23?: string;
  /** UB1.3 - Blood Furnished Pints */
  ub1_3?: number | string;
  /** UB1.4 - Blood Replaced Pints */
  ub1_4?: number | string;
  /** UB1.5 - Blood Not Replaced Pints */
  ub1_5?: number | string;
  /** UB1.6 - Co-Insurance Days */
  ub1_6?: number | string;
  /** UB1.7 - Condition Code */
  ub1_7?: string;
  /** UB1.8 - Covered Days */
  ub1_8?: number | string;
  /** UB1.9 - Non-Covered Days */
  ub1_9?: number | string;
  valueAmountCode?: string;
}
