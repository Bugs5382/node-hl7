/** HL7 MRG - Merge Patient Information */
export interface HL7_MRG {
  /** MRG.1 - Prior Patient ID - Internal */
  mrg_1: string;
  priorPatientIdInternal?: string;
  /** MRG.2 - Prior Alternate Patient ID */
  mrg_2?: string;
  /** MRG.3 - Prior Patient Account Number */
  mrg_3?: string;
}
