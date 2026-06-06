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
import { ClientBuilderOptions } from "@/modules/types";

export type { HL7_2_1_ACC } from "@/hl7/2.1/acc";
export type { HL7_2_1_BLG } from "@/hl7/2.1/blg";
export type { HL7_2_1_DG1 } from "@/hl7/2.1/dg1";
export type { HL7_2_1_DSC } from "@/hl7/2.1/dsc";
export type { HL7_2_1_ERR } from "@/hl7/2.1/err";
export type { HL7_2_1_EVN } from "@/hl7/2.1/evn";
export type { HL7_2_1_FT1 } from "@/hl7/2.1/ft1";
export type { HL7_2_1_GT1 } from "@/hl7/2.1/gt1";
export type { HL7_2_1_IN1 } from "@/hl7/2.1/in1";
export type { HL7_2_1_MRG } from "@/hl7/2.1/mrg";
export type { HL7_2_1_MSA } from "@/hl7/2.1/msa";
export type { HL7_2_1_MSH } from "@/hl7/2.1/msh";
export type { HL7_2_1_NK1 } from "@/hl7/2.1/nk1";
export type { HL7_2_1_NPU } from "@/hl7/2.1/npu";
export type { HL7_2_1_NSC } from "@/hl7/2.1/nsc";
export type { HL7_2_1_NTE } from "@/hl7/2.1/nte";
export type { HL7_2_1_OBR } from "@/hl7/2.1/obr";
export type { HL7_2_1_OBX } from "@/hl7/2.1/obx";
export type { HL7_2_1_ORC } from "@/hl7/2.1/orc";
export type { HL7_2_1_PID } from "@/hl7/2.1/pid";
export type { HL7_2_1_PR1 } from "@/hl7/2.1/pr1";
export type { HL7_2_1_PV1 } from "@/hl7/2.1/pv1";
export type { HL7_2_1_QRD } from "@/hl7/2.1/qrd";
export type { HL7_2_1_QRF } from "@/hl7/2.1/qrf";
export type { HL7_2_1_RX1 } from "@/hl7/2.1/rx1";
export type { HL7_2_1_UB1 } from "@/hl7/2.1/ub1";
export type { HL7_2_1_URD } from "@/hl7/2.1/urd";
export type { HL7_2_1_URS } from "@/hl7/2.1/urs";

export interface ClientBuilderOptions_Hl7_2_1 extends ClientBuilderOptions {
  table_0001?: string[];
  table_0002?: string[];
  table_0003?: string[];
  table_0004?: string[];
  table_0007?: string[];
  table_0008?: string[];
  table_0062?: string[];
  table_0074?: string[];
  table_0076?: string[];
  table_0078?: string[];
  table_0085?: string[];
  table_0100?: string[];
  table_0116?: string[];
  table_0119?: string[];
  table_0121?: string[];
  table_0123?: string[];
  table_0125?: string[];
  table_0127?: string[];
  table_0128?: string[];
  table_0136?: string[];
}
