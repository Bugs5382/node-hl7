/** HL7 FT1 - Financial Transaction */
export interface HL7_FT1 {
  /** FT1.1 - Set ID */
  ft1_1?: number | string;
  /** FT1.2 - Transaction ID */
  ft1_2?: string;
  /** FT1.3 - Transaction Batch ID */
  ft1_3?: string;
  /** FT1.4 - Transaction Date */
  ft1_4: Date | string;
  /** FT1.5 - Transaction Posting Date */
  ft1_5?: Date | string;
  /** FT1.6 - Transaction Type */
  ft1_6: string;
  transactionType?: string;
  /** FT1.7 - Transaction Code */
  ft1_7: string;
  transactionCode?: string;
  /** FT1.8 - Transaction Description */
  ft1_8?: string;
  /** FT1.9 - Transaction Description - Alt */
  ft1_9?: string;
  /** FT1.10 - Transaction Quantity */
  ft1_10?: string;
  /** FT1.11 - Transaction Amount - Extended */
  ft1_11?: string;
  /** FT1.12 - Transaction Amount - Unit */
  ft1_12?: string;
  /** FT1.13 - Department Code */
  ft1_13?: string;
  /** FT1.14 - Insurance Plan ID */
  ft1_14?: string;
  /** FT1.15 - Insurance Amount */
  ft1_15?: string;
  /** FT1.16 - Assigned Patient Location */
  ft1_16?: string;
  /** FT1.17 - Fee Schedule */
  ft1_17?: string;
  /** FT1.18 - Patient Type */
  ft1_18?: string;
  /** FT1.19 - Diagnosis Code */
  ft1_19?: string;
  /** FT1.20 - Performed By Code */
  ft1_20?: string;
  /** FT1.21 - Ordered By Code */
  ft1_21?: string;
  /** FT1.22 - Unit Cost */
  ft1_22?: string;
}
