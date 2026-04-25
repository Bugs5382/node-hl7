import { HL7_2_1_ORC } from "@/hl7/2.1/orc";

/** HL7 2.2 ORC - extends 2.1 with fields 15-20 */
export interface HL7_2_2_ORC extends HL7_2_1_ORC {
  /** ORC.15 - Order Effective Date/Time */
  orc_15?: Date | string;
  /** ORC.16 - Order Control Code Reason (max 200) */
  orc_16?: string;
  /** ORC.17 - Entering Organization (max 60) */
  orc_17?: string;
  /** ORC.18 - Entering Device (max 60) */
  orc_18?: string;
  /** ORC.19 - Action By (max 80) */
  orc_19?: string;
  /** ORC.20 - Advanced Beneficiary Notice Code (max 40) */
  orc_20?: string;
}
