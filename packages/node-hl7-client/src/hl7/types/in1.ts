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
import { TABLE_0001 } from "@/hl7/tables/0001";

/** HL7 IN1 - Insurance */
export interface HL7_IN1 {
  /** IN1.1 - Set ID */
  in1_1: number | string;
  /** IN1.10 - Insured's Group Employee ID */
  in1_10?: string;
  /** IN1.11 - Insured's Group Employee Name */
  in1_11?: string;
  /** IN1.12 - Plan Effective Date */
  in1_12?: Date | string;
  /** IN1.13 - Plan Expiration Date */
  in1_13?: Date | string;
  /** IN1.14 - Authorization Information */
  in1_14?: string;
  /** IN1.15 - Plan Type */
  in1_15?: string;
  /** IN1.16 - Name Of Insured */
  in1_16?: string;
  /** IN1.17 - Insured's Relationship To Patient */
  in1_17?: string;
  /** IN1.18 - Insured's Date Of Birth */
  in1_18?: Date | string;
  /** IN1.19 - Insured's Address */
  in1_19?: string;
  /** IN1.2 - Insurance Plan ID */
  in1_2: string;
  /** IN1.20 - Assignment Of Benefits */
  in1_20?: string;
  /** IN1.21 - Coordination Of Benefits */
  in1_21?: string;
  /** IN1.22 - Coordination Of Benefits - Priority */
  in1_22?: string;
  /** IN1.23 - Notice Of Admission Flag */
  in1_23?: string;
  /** IN1.24 - Notice Of Admission Date */
  in1_24?: Date | string;
  /** IN1.25 - Report Of Eligibility Flag */
  in1_25?: string;
  /** IN1.26 - Report Of Eligibility Date */
  in1_26?: Date | string;
  /** IN1.27 - Release Information Code */
  in1_27?: string;
  /** IN1.28 - Pre-Admit Certification */
  in1_28?: string;
  /** IN1.29 - Verification Date/Time */
  in1_29?: Date | string;
  /** IN1.3 - Insurance Company ID */
  in1_3: string;
  /** IN1.30 - Verification By */
  in1_30?: string;
  /** IN1.31 - Type Of Agreement Code */
  in1_31?: string;
  /** IN1.32 - Billing Status */
  in1_32?: string;
  /** IN1.33 - Lifetime Reserve Days */
  in1_33?: string;
  /** IN1.34 - Delay Before LR Day */
  in1_34?: string;
  /** IN1.35 - Company Plan Code */
  in1_35?: string;
  /** IN1.36 - Policy Number */
  in1_36?: string;
  /** IN1.37 - Policy Deductible */
  in1_37?: string;
  /** IN1.38 - Policy Limit - Amount */
  in1_38?: string;
  /** IN1.39 - Policy Limit - Days */
  in1_39?: string;
  /** IN1.4 - Insurance Company Name */
  in1_4?: string;
  /** IN1.40 - Room Rate - Semi-Private */
  in1_40?: string;
  /** IN1.41 - Room Rate - Private */
  in1_41?: string;
  /** IN1.42 - Insured's Employment Status */
  in1_42?: string;
  /** IN1.43 - Insured's Sex */
  in1_43?: Table0001Value;
  /** IN1.44 - Insured's Employer Address */
  in1_44?: string;
  /** IN1.5 - Insurance Company Address */
  in1_5?: string;
  /** IN1.6 - Insurance Company Contact Person */
  in1_6?: string;
  /** IN1.7 - Insurance Company Phone Number */
  in1_7?: string;
  /** IN1.8 - Group Number */
  in1_8?: string;
  /** IN1.9 - Group Name */
  in1_9?: string;
  insuranceCompanyId?: string;
  insurancePlanId?: string;
  setId?: number | string;
}

export type Table0001Value = (typeof TABLE_0001)[number];
