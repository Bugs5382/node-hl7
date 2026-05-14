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
import { TABLE_0004 } from "@/hl7/tables/0004";
import { TABLE_0007 } from "@/hl7/tables/0007";
import { TABLE_0116 } from "@/hl7/tables/0116";

/** HL7 PV1 - Patient Visit */
export interface HL7_PV1 {
  admissionType?: Table0007Value;
  admitDateTime?: Date | string;
  admitSource?: string;
  admittingDoctor?: string;
  ambulatoryStatus?: string;
  assignedPatientLocation?: string;
  attendingDoctor?: string;
  bedStatus?: Table0116Value;
  consultingDoctor?: string;
  dischargeDisposition?: string;
  financialClass?: string;
  hospitalService?: string;
  patientClass?: Table0004Value;
  patientType?: string;
  preadmitNumber?: string;
  priorPatientLocation?: string;
  /** PV1.1 - Set ID */
  pv1_1?: number | string;
  /** PV1.10 - Hospital Service */
  pv1_10?: string;
  /** PV1.11 - Temporary Location */
  pv1_11?: string;
  /** PV1.12 - Preadmit Test Indicator */
  pv1_12?: string;
  /** PV1.13 - Readmission Indicator */
  pv1_13?: string;
  /** PV1.14 - Admit Source */
  pv1_14?: string;
  /** PV1.15 - Ambulatory Status */
  pv1_15?: string;
  /** PV1.16 - VIP Indicator */
  pv1_16?: string;
  /** PV1.17 - Admitting Doctor */
  pv1_17?: string;
  /** PV1.18 - Patient Type */
  pv1_18?: string;
  /** PV1.19 - Visit Number */
  pv1_19?: number | string;
  /** PV1.2 - Patient Class */
  pv1_2: Table0004Value;
  /** PV1.20 - Financial Class */
  pv1_20?: string;
  /** PV1.21 - Charge Price Indicator */
  pv1_21?: string;
  /** PV1.22 - Courtesy Code */
  pv1_22?: string;
  /** PV1.23 - Credit Rating */
  pv1_23?: string;
  /** PV1.24 - Contract Code */
  pv1_24?: string;
  /** PV1.25 - Contract Effective Date */
  pv1_25?: Date | string;
  /** PV1.26 - Contract Amount */
  pv1_26?: number | string;
  /** PV1.27 - Contract Period */
  pv1_27?: number | string;
  /** PV1.28 - Interest Code */
  pv1_28?: string;
  /** PV1.29 - Transfer to Bad Debt Code */
  pv1_29?: string;
  /** PV1.3 - Assigned Patient Location */
  pv1_3?: string;
  /** PV1.30 - Transfer to Bad Debt Date */
  pv1_30?: Date | string;
  /** PV1.31 - Bad Debt Agency Code */
  pv1_31?: string;
  /** PV1.32 - Bad Debt Transfer Amount */
  pv1_32?: number | string;
  /** PV1.33 - Bad Debt Recovery Amount */
  pv1_33?: number | string;
  /** PV1.34 - Delete Account Indicator */
  pv1_34?: string;
  /** PV1.35 - Delete Account Date */
  pv1_35?: Date | string;
  /** PV1.36 - Discharge Disposition */
  pv1_36?: string;
  /** PV1.37 - Discharged to Location */
  pv1_37?: string;
  /** PV1.38 - Diet Type */
  pv1_38?: string;
  /** PV1.39 - Servicing Facility */
  pv1_39?: string;
  /** PV1.4 - Admission Type */
  pv1_4?: Table0007Value;
  /** PV1.40 - Bed Status */
  pv1_40?: Table0116Value;
  /** PV1.41 - Account Status */
  pv1_41?: string;
  /** PV1.42 - Pending Location */
  pv1_42?: string;
  /** PV1.43 - Prior Temporary Location */
  pv1_43?: string;
  /** PV1.44 - Admit Date/Time */
  pv1_44?: Date | string;
  /** PV1.5 - Preadmit Number */
  pv1_5?: string;
  /** PV1.6 - Prior Patient Location */
  pv1_6?: string;
  /** PV1.7 - Attending Doctor */
  pv1_7?: string;
  /** PV1.8 - Referring Doctor */
  pv1_8?: string;
  /** PV1.9 - Consulting Doctor */
  pv1_9?: string;
  referringDoctor?: string;
  temporaryLocation?: string;
  vipIndicator?: string;
  visitNumber?: number | string;
}
export type Table0004Value = (typeof TABLE_0004)[number];
export type Table0007Value = (typeof TABLE_0007)[number];

export type Table0116Value = (typeof TABLE_0116)[number];
