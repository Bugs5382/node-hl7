/** HL7 2.2 MFE - Master File Entry */
export interface HL7_2_2_MFE {
  /** MFE.1 - Record-Level Event Code (required) */
  mfe_1: "MAC" | "MAD" | "MDC" | "MDL" | "MUP";
  /** MFE.2 - MFN Control ID (max 20) */
  mfe_2?: string;
  /** MFE.3 - Effective Date/Time */
  mfe_3?: Date | string;
  /** MFE.4 - Primary Key Value - MFE (required, max 200) */
  mfe_4: string;
}
