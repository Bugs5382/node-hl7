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
export interface HL7_DG1 {
  /** Diagnosis Id
   * @since 4.0.0 */
  dg1_1?: string;
  /** Diagnosis Grouper Review Code
   * @since 4.0.0 */
  dg1_10?: string;
  /** Diagnosis Outlier Type
   * @since 4.0.0 */
  dg1_11?: string;
  /** Diagnosis Outlier Days
   * @since 4.0.0 */
  dg1_12?: string;
  /** Diagnosis Outlier Cost
   * @since 4.0.0 */
  dg1_13?: string;
  /** Diagnosis Grouper Version and Type
   * @since 4.0.0 */
  dg1_14?: string;
  /** Diagnosis Coding Method
   * @since 4.0.0 */
  dg1_2: string;
  /** Diagnosis Code
   * @since 4.0.0 */
  dg1_3?: string;
  /** Diagnosis Description
   * @since 4.0.0 */
  dg1_4?: string;
  /** Diagnosis Timestamp
   * @default Uses current new Date()
   * @since 4.0.0 */
  dg1_5?: Date;
  /** Diagnosis Type
   * @since 4.0.0 */
  dg1_6?: string;
  /** Diagnosis Major Category
   * @since 4.0.0 */
  dg1_7?: string;
  /** Diagnosis Related Group
   * @since 4.0.0 */
  dg1_8?: string;
  /** Diagnosis Approval Indicator
   * @since 4.0.0 */
  dg1_9?: string;
  /** Diagnosis Approval Indicator
   * @since 4.0.0 */
  diagnosisApprovalIndicator?: string;
  /** Diagnosis Code
   * @since 4.0.0 */
  diagnosisCode?: string;
  /** Diagnosis Coding Method
   * @since 4.0.0 */
  diagnosisCodingMethod?: string;
  /** Diagnosis Description
   * @since 4.0.0 */
  diagnosisDescription?: string;
  /** Diagnosis Grouper Review Code
   * @since 4.0.0 */
  diagnosisGrouperReviewCode?: string;
  /** Diagnosis Grouper Version and Type
   * @since 4.0.0 */
  diagnosisGrouperVersionAndType?: string;
  /** Diagnosis Id
   * @since 4.0.0 */
  diagnosisId?: string;
  /** Diagnosis Major Category
   * @since 4.0.0 */
  diagnosisMajorCategory?: string;
  /** Diagnosis Outlier Cost
   * @since 4.0.0 */
  diagnosisOutlierCost?: string;
  /** Diagnosis Outlier Days
   * @since 4.0.0 */
  diagnosisOutlierDays?: string;
  /** Diagnosis Outlier Type
   * @since 4.0.0 */
  diagnosisOutlierType?: string;
  /** Diagnosis Related Group
   * @since 4.0.0 */
  diagnosisRelatedGroup?: string;
  /** Diagnosis Type
   * @since 4.0.0 */
  diagnosisType?: string;
  /** Diagnosis Timestamp
   * @default Uses current new Date()
   * @since 4.0.0 */
  timeStamp?: Date;
}
