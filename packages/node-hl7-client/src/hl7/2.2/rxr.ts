/** HL7 2.2 RXR - Pharmacy/Treatment Route */
export interface HL7_2_2_RXR {
  /** RXR.1 - Route (required, max 60) */
  rxr_1: string;
  /** RXR.2 - Administration Site (max 60) */
  rxr_2?: string;
  /** RXR.3 - Administration Device (max 60) */
  rxr_3?: string;
  /** RXR.4 - Administration Method (max 60) */
  rxr_4?: string;
}
