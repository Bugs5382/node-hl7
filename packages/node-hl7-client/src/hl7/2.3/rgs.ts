/** HL7 2.3 RGS - Resource Group */
export interface HL7_2_3_RGS {
  /** RGS.1 - Set ID (required) */
  rgs_1: number | string;
  /** RGS.2 - Segment Action Code */
  rgs_2?: "A" | "D" | "U";
  /** RGS.3 - Resource Group ID */
  rgs_3?: string;
}
