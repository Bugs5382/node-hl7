/** HL7 2.2 ODT - Diet Tray Instructions */
export interface HL7_2_2_ODT {
  /** ODT.1 - Tray Type (required) */
  odt_1: string;
  /** ODT.2 - Service Period */
  odt_2?: string;
  /** ODT.3 - Text Instruction */
  odt_3?: string;
}
