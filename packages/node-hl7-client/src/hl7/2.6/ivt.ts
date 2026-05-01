/** HL7 2.6 IVT - Material Location */
export interface HL7_2_6_IVT {
  /** IVT.1 - Set ID (required) */
  ivt_1: number | string;
  /** IVT.10 - Default Deny/Charge Type */
  ivt_10?: "N" | "Y";
  /** IVT.11 - Charge Code */
  ivt_11?: string;
  /** IVT.12 - Requisition Type */
  ivt_12?: "N" | "Y";
  /** IVT.13 - Requisition Order Identifier */
  ivt_13?: string;
  /** IVT.14 - Requisition Quantity */
  ivt_14?: string;
  /** IVT.15 - Requisition Unit of Measure */
  ivt_15?: string;
  /** IVT.16 - Patient Chargeable Indicator */
  ivt_16?: string;
  /** IVT.17 - Transaction Code */
  ivt_17?: string;
  /** IVT.18 - Transaction Amount – Unit */
  ivt_18?: string;
  /** IVT.19 - Stocked Item Indicator */
  ivt_19?: "N" | "Y";
  /** IVT.2 - Inventory Location Identifier (required) */
  ivt_2: string;
  /** IVT.20 - Supply Risk Codes */
  ivt_20?: string;
  /** IVT.21 - Taxable Item Indicator */
  ivt_21?: "N" | "Y";
  /** IVT.22 - Freight Charge Indicator */
  ivt_22?: "N" | "Y";
  /** IVT.23 - Item Set Indicator */
  ivt_23?: "N" | "Y";
  /** IVT.24 - Item Set Identifier */
  ivt_24?: string;
  /** IVT.25 - Track Department Usage Indicator */
  ivt_25?: "N" | "Y";
  /** IVT.3 - Inventory Location Name */
  ivt_3?: string;
  /** IVT.4 - Source Location Identifier */
  ivt_4?: string;
  /** IVT.5 - Source Location Name */
  ivt_5?: string;
  /** IVT.6 - Item Status */
  ivt_6?: "A" | "I" | "P";
  /** IVT.7 - Bin Location Identifier */
  ivt_7?: string;
  /** IVT.8 - Order Packaging */
  ivt_8?: string;
  /** IVT.9 - Issue Packaging */
  ivt_9?: string;
}
