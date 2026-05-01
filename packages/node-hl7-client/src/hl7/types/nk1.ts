/** HL7 NK1 - Next of Kin */
export interface HL7_NK1 {
  /** NK1.1 - Set ID */
  nk1_1: number | string;
  /** NK1.2 - Name */
  nk1_2?: string;
  /** NK1.3 - Relationship */
  nk1_3?: string;
  /** NK1.4 - Address */
  nk1_4?: string;
  /** NK1.5 - Phone Number */
  nk1_5?: string;
  setId?: number | string;
}
