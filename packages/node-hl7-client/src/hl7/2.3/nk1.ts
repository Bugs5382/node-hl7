import { HL7_2_1_NK1 } from "@/hl7/2.1/nk1";

/** HL7 2.3 NK1 - extends 2.1 with fields 6-20 */
export interface HL7_2_3_NK1 extends HL7_2_1_NK1 {
  /** NK1.6 - Business Phone Number */
  nk1_6?: string;
  /** NK1.7 - Contact Role */
  nk1_7?: string;
  /** NK1.8 - Start Date */
  nk1_8?: Date | string;
  /** NK1.9 - End Date */
  nk1_9?: Date | string;
  /** NK1.10 - Next of Kin/Associated Parties Job Title */
  nk1_10?: string;
  /** NK1.11 - Next of Kin/Associated Parties Job Code/Class */
  nk1_11?: string;
  /** NK1.12 - Next of Kin/Associated Parties Employee Number */
  nk1_12?: string;
  /** NK1.13 - Organization Name - NK1 */
  nk1_13?: string;
  /** NK1.14 - Marital Status */
  nk1_14?: string;
  /** NK1.15 - Administrative Sex */
  nk1_15?: string;
  /** NK1.16 - Date/Time of Birth */
  nk1_16?: Date | string;
  /** NK1.17 - Living Dependency */
  nk1_17?: string;
  /** NK1.18 - Ambulatory Status */
  nk1_18?: string;
  /** NK1.19 - Citizenship */
  nk1_19?: string;
  /** NK1.20 - Primary Language */
  nk1_20?: string;
}
