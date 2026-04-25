/** HL7 2.2 MFI - Master File Identification */
export interface HL7_2_2_MFI {
  /** MFI.1 - Master File Identifier (required, max 60) */
  mfi_1: string;
  /** MFI.2 - Master File Application Identifier (max 60) */
  mfi_2?: string;
  /** MFI.3 - File-Level Event Code (required) */
  mfi_3: "REP" | "UPD";
  /** MFI.4 - Entered Date/Time */
  mfi_4?: Date | string;
  /** MFI.5 - Effective Date/Time */
  mfi_5?: Date | string;
  /** MFI.6 - Response Level Code (required) */
  mfi_6: "AL" | "ER" | "NE" | "NR";
}
