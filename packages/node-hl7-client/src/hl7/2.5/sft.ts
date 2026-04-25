/** HL7 2.5 SFT - Software Segment */
export interface HL7_2_5_SFT {
  /** SFT.1 - Software Vendor Organization (required) */
  sft_1: string;
  /** SFT.2 - Software Certified Version or Release Number (required) */
  sft_2: string;
  /** SFT.3 - Software Product Name (required) */
  sft_3: string;
  /** SFT.4 - Software Binary ID (required) */
  sft_4: string;
  /** SFT.5 - Software Product Information */
  sft_5?: string;
  /** SFT.6 - Software Install Date */
  sft_6?: Date | string;
}
