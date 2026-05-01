/** HL7 2.6 ITM - Material Item Master */
export interface HL7_2_6_ITM {
  /** ITM.1 - Item Identifier (required) */
  itm_1: string;
  /** ITM.10 - Manufacturer Labeler Identifier */
  itm_10?: string;
  /** ITM.11 - Patient Chargeable Indicator */
  itm_11?: "N" | "Y";
  /** ITM.12 - Transaction Code */
  itm_12?: string;
  /** ITM.13 - Transaction Amount – Unit */
  itm_13?: string;
  /** ITM.14 - Stocked Item Indicator */
  itm_14?: "N" | "Y";
  /** ITM.15 - Supply Risk Codes */
  itm_15?: string;
  /** ITM.16 - Approving Regulatory Agency */
  itm_16?: string;
  /** ITM.17 - Latex Indicator */
  itm_17?: "N" | "Y";
  /** ITM.18 - Ruling Act */
  itm_18?: string;
  /** ITM.19 - Item Natural Account Code */
  itm_19?: string;
  /** ITM.2 - Item Description */
  itm_2?: string;
  /** ITM.20 - Approved To Buy Quantity */
  itm_20?: number | string;
  /** ITM.21 - Approved To Buy Price */
  itm_21?: string;
  /** ITM.22 - Taxable Item Indicator */
  itm_22?: "N" | "Y";
  /** ITM.23 - Freight Charge Indicator */
  itm_23?: "N" | "Y";
  /** ITM.24 - Item Set Indicator */
  itm_24?: "N" | "Y";
  /** ITM.25 - Item Set Identifier */
  itm_25?: string;
  /** ITM.26 - Track Department Usage Indicator */
  itm_26?: "N" | "Y";
  /** ITM.27 - Procedure Code */
  itm_27?: string;
  /** ITM.28 - Procedure Code Modifier */
  itm_28?: string;
  /** ITM.29 - Special Handling Code */
  itm_29?: string;
  /** ITM.3 - Item Status */
  itm_3?: "A" | "I" | "P";
  /** ITM.30 - Hazardous Indicator */
  itm_30?: string;
  /** ITM.31 - Sterile Indicator */
  itm_31?: string;
  /** ITM.32 - Material Data Safety Sheet Number */
  itm_32?: string;
  /** ITM.33 - United Nations Standard Products and Services Code */
  itm_33?: string;
  /** ITM.34 - Contract Date */
  itm_34?: string;
  /** ITM.35 - Manufacturer Contact Name */
  itm_35?: string;
  /** ITM.36 - Manufacturer Contact Information */
  itm_36?: string;
  /** ITM.37 - Class of Trade */
  itm_37?: string;
  /** ITM.38 - Field Level Event Code */
  itm_38?: string;
  /** ITM.4 - Item Type */
  itm_4?: string;
  /** ITM.5 - Item Category */
  itm_5?: string;
  /** ITM.6 - Subject to Expiration Indicator */
  itm_6?: "N" | "Y";
  /** ITM.7 - Manufacturer Identifier */
  itm_7?: string;
  /** ITM.8 - Manufacturer Name */
  itm_8?: string;
  /** ITM.9 - Manufacturer Catalog Number */
  itm_9?: string;
}
