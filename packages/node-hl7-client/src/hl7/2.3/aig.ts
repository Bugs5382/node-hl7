/** HL7 2.3 AIG - Appointment Information - General Resource */
export interface HL7_2_3_AIG {
  /** AIG.1 - Set ID (required) */
  aig_1: number | string;
  /** AIG.10 - Start Date/Time Offset Units */
  aig_10?: string;
  /** AIG.11 - Duration */
  aig_11?: string;
  /** AIG.12 - Duration Units */
  aig_12?: string;
  /** AIG.13 - Allow Substitution Code */
  aig_13?: string;
  /** AIG.14 - Filler Status Code */
  aig_14?: string;
  /** AIG.2 - Segment Action Code */
  aig_2?: "A" | "D" | "U";
  /** AIG.3 - Resource ID */
  aig_3?: string;
  /** AIG.4 - Resource Type (required) */
  aig_4: string;
  /** AIG.5 - Resource Group */
  aig_5?: string;
  /** AIG.6 - Resource Quantity */
  aig_6?: string;
  /** AIG.7 - Resource Quantity Units */
  aig_7?: string;
  /** AIG.8 - Start Date/Time */
  aig_8?: Date | string;
  /** AIG.9 - Start Date/Time Offset */
  aig_9?: string;
}
