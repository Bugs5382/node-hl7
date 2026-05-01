import { TABLE_0116 } from "@/hl7/tables/0116";

/** HL7 NPU - Bed Status Update */
export interface HL7_NPU {
  bedLocation?: string;
  bedStatus?: Table0116Value;
  /** NPU.1 - Bed Location */
  npu_1: string;
  /** NPU.2 - Bed Status */
  npu_2?: Table0116Value;
}

export type Table0116Value = (typeof TABLE_0116)[number];
