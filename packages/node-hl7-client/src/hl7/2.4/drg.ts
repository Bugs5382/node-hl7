/** HL7 2.4 DRG - Diagnosis Related Group */
export interface HL7_2_4_DRG {
  /** DRG.1 - Diagnostic Related Group */
  drg_1?: string;
  /** DRG.2 - DRG Assigned Date/Time */
  drg_2?: Date | string;
  /** DRG.3 - DRG Approval Indicator */
  drg_3?: "Y" | "N";
  /** DRG.4 - DRG Grouper Review Code */
  drg_4?: string;
  /** DRG.5 - Outlier Type */
  drg_5?: string;
  /** DRG.6 - Outlier Days */
  drg_6?: number | string;
  /** DRG.7 - Outlier Cost */
  drg_7?: string;
  /** DRG.8 - DRG Payor */
  drg_8?: string;
}
