/** HL7 2.4 TXA - Transcription Document Header */
export interface HL7_2_4_TXA {
  /** TXA.1 - Set ID (required) */
  txa_1: number | string;
  /** TXA.10 - Assigned Document Authenticator */
  txa_10?: string;
  /** TXA.11 - Transcriptionist Code/Name */
  txa_11?: string;
  /** TXA.12 - Unique Document Number (required) */
  txa_12: string;
  /** TXA.13 - Parent Document Number */
  txa_13?: string;
  /** TXA.14 - Placer Order Number */
  txa_14?: string;
  /** TXA.15 - Filler Order Number */
  txa_15?: string;
  /** TXA.16 - Unique Document File Name */
  txa_16?: string;
  /** TXA.17 - Document Completion Status (required) */
  txa_17:
    | "AU"
    | "CA"
    | "DO"
    | "DT"
    | "IN"
    | "IP"
    | "LA"
    | "OB"
    | "PA"
    | "PR"
    | "PY"
    | "RD"
    | "RV"
    | "UN";
  /** TXA.18 - Document Confidentiality Status */
  txa_18?: "EMP" | "ET" | "R" | "UWL" | "V";
  /** TXA.19 - Document Availability Status */
  txa_19?: "AV" | "CA" | "OB" | "UN";
  /** TXA.2 - Document Type (required) */
  txa_2: string;
  /** TXA.20 - Document Storage Status */
  txa_20?: "AA" | "AC" | "AH" | "AL" | "AR" | "PU";
  /** TXA.21 - Document Change Reason */
  txa_21?: string;
  /** TXA.22 - Authentication Person, Time Stamp */
  txa_22?: string;
  /** TXA.23 - Distributed Copies */
  txa_23?: string;
  /** TXA.3 - Document Content Presentation */
  txa_3?: string;
  /** TXA.4 - Activity Date/Time */
  txa_4?: Date | string;
  /** TXA.5 - Primary Activity Provider Code/Name */
  txa_5?: string;
  /** TXA.6 - Origination Date/Time */
  txa_6?: Date | string;
  /** TXA.7 - Transcription Date/Time */
  txa_7?: Date | string;
  /** TXA.8 - Edit Date/Time */
  txa_8?: Date | string;
  /** TXA.9 - Originator Code/Name */
  txa_9?: string;
}
