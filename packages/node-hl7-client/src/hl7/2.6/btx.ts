/** HL7 2.6 BTX - Blood Product Transfusion/Disposition */
export interface HL7_2_6_BTX {
  /** BTX.1 - Set ID (required) */
  btx_1: number | string;
  /** BTX.10 - BP Units */
  btx_10?: string;
  /** BTX.11 - BP Transfusion/Disposition Status (required) */
  btx_11: string;
  /** BTX.12 - BP Message Status (required) */
  btx_12: Date | string;
  /** BTX.13 - BP Date/Time of Status */
  btx_13?: Date | string;
  /** BTX.14 - BP Transfusion Administrator */
  btx_14?: string;
  /** BTX.15 - BP Transfusion Verifier */
  btx_15?: string;
  /** BTX.16 - BP Transfusion Start Date/Time of Status */
  btx_16?: Date | string;
  /** BTX.17 - BP Transfusion End Date/Time of Status */
  btx_17?: Date | string;
  /** BTX.2 - BC Donation ID */
  btx_2?: string;
  /** BTX.3 - BC Component */
  btx_3?: string;
  /** BTX.4 - BC Blood Group */
  btx_4?: string;
  /** BTX.5 - CP Commercial Product */
  btx_5?: string;
  /** BTX.6 - CP Manufacturer */
  btx_6?: string;
  /** BTX.7 - CP Lot Number */
  btx_7?: string;
  /** BTX.8 - BP Quantity (required) */
  btx_8?: string;
  /** BTX.9 - BP Amount */
  btx_9?: string;
}
