import { TABLE_0116 } from "@/hl7/tables/0116";

export type Table0116Value = (typeof TABLE_0116)[number];

/** HL7 NPU - Bed Status Update */
export interface HL7_NPU {
  /** NPU.1 - Bed Location */
  npu_1: string;
  bedLocation?: string;
  /** NPU.2 - Bed Status */
  npu_2?: Table0116Value;
  bedStatus?: Table0116Value;
}
