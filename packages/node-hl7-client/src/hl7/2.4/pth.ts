/** HL7 2.4 PTH - Pathway */
export interface HL7_2_4_PTH {
  /** PTH.1 - Action Code (required) */
  pth_1: "AD" | "DE" | "LI" | "UN";
  /** PTH.2 - Pathway ID (required) */
  pth_2: string;
  /** PTH.3 - Pathway Instance ID (required) */
  pth_3: string;
  /** PTH.4 - Pathway Established Date/Time (required) */
  pth_4: Date | string;
  /** PTH.5 - Pathway Life Cycle Status */
  pth_5?: string;
  /** PTH.6 - Change Pathway Life Cycle Status Date/Time */
  pth_6?: Date | string;
  /** PTH.7 - Mood Code */
  pth_7?: string;
}
