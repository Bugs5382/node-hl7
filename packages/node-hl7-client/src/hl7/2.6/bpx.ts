/** HL7 2.6 BPX - Blood Product Dispense Status */
export interface HL7_2_6_BPX {
  /** BPX.1 - Set ID (required) */
  bpx_1: number | string;
  /** BPX.10 - CP Lot Number */
  bpx_10?: string;
  /** BPX.11 - BP Blood Group */
  bpx_11?: string;
  /** BPX.12 - BC Special Testing */
  bpx_12?: string;
  /** BPX.13 - BP Expiration Date/Time of Status */
  bpx_13?: Date | string;
  /** BPX.14 - BP Quantity (required) */
  bpx_14: string;
  /** BPX.15 - BP Amount */
  bpx_15?: string;
  /** BPX.16 - BP Units */
  bpx_16?: string;
  /** BPX.17 - BP Unique ID */
  bpx_17?: string;
  /** BPX.2 - BP Dispense Status (required) */
  bpx_2: string;
  /** BPX.3 - BP Status (required) */
  bpx_3: string;
  /** BPX.4 - BP Date/Time of Status (required) */
  bpx_4: Date | string;
  /** BPX.5 - BC Donation ID */
  bpx_5?: string;
  /** BPX.6 - BC Component */
  bpx_6?: string;
  /** BPX.7 - BC Donation Type / Intended Use */
  bpx_7?: string;
  /** BPX.8 - CP Commercial Product */
  bpx_8?: string;
  /** BPX.9 - CP Manufacturer */
  bpx_9?: string;
}
