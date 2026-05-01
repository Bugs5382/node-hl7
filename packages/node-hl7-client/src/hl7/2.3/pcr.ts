/** HL7 2.3 PCR - Possible Causal Relationship */
export interface HL7_2_3_PCR {
  /** PCR.1 - Implicated Product (required) */
  pcr_1: string;
  /** PCR.10 - Indication For Product Use */
  pcr_10?: string;
  /** PCR.11 - Product Problem */
  pcr_11?: string;
  /** PCR.12 - Product Serial/Lot Number */
  pcr_12?: string;
  /** PCR.13 - Product Available For Inspection */
  pcr_13?: string;
  /** PCR.14 - Product Evaluation Performed */
  pcr_14?: string;
  /** PCR.15 - Product Evaluation Status */
  pcr_15?: string;
  /** PCR.16 - Product Evaluation Results */
  pcr_16?: string;
  /** PCR.17 - Evaluated Product Source */
  pcr_17?: string;
  /** PCR.18 - Date Product Returned To Manufacturer */
  pcr_18?: Date | string;
  /** PCR.19 - Device Operator Qualifications */
  pcr_19?: string;
  /** PCR.2 - Generic Product */
  pcr_2?: "N" | "NA" | "Y";
  /** PCR.20 - Relatedness Assessment */
  pcr_20?: string;
  /** PCR.21 - Action Taken In Response To The Event */
  pcr_21?: string;
  /** PCR.22 - Event Causality Observations */
  pcr_22?: string;
  /** PCR.23 - Indirect Exposure Mechanism */
  pcr_23?: string;
  /** PCR.3 - Product Class */
  pcr_3?: string;
  /** PCR.4 - Total Duration Of Therapy */
  pcr_4?: string;
  /** PCR.5 - Product Manufacture Date */
  pcr_5?: Date | string;
  /** PCR.6 - Product Expiration Date */
  pcr_6?: Date | string;
  /** PCR.7 - Product Implantation Date */
  pcr_7?: Date | string;
  /** PCR.8 - Product Explantation Date */
  pcr_8?: Date | string;
  /** PCR.9 - Single Use Device */
  pcr_9?: string;
}
