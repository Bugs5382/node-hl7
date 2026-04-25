/** HL7 2.7 ISD - Interaction Status Detail */
export interface HL7_2_7_ISD {
  /** ISD.1 - Reference Interaction Number (required) */
  isd_1: number | string;
  /** ISD.2 - Interaction Type Identifier */
  isd_2?: string;
  /** ISD.3 - Interaction Active State (required) */
  isd_3: string;
}
