/** HL7 2.2 RXG - Pharmacy/Treatment Give */
export interface HL7_2_2_RXG {
  /** RXG.1 - Give Sub-ID Counter (required) */
  rxg_1: string;
  /** RXG.10 - Substitution Status */
  rxg_10?: string;
  /** RXG.11 - Dispense-to Location */
  rxg_11?: string;
  /** RXG.12 - Needs Human Review */
  rxg_12?: "N" | "Y";
  /** RXG.13 - Special Administration Instructions */
  rxg_13?: string;
  /** RXG.14 - Give Per (Time Unit) */
  rxg_14?: string;
  /** RXG.15 - Give Rate Amount */
  rxg_15?: string;
  /** RXG.16 - Give Rate Units */
  rxg_16?: string;
  /** RXG.2 - Dispense Sub-ID Counter */
  rxg_2?: string;
  /** RXG.3 - Quantity/Timing */
  rxg_3?: string;
  /** RXG.4 - Give Code (required) */
  rxg_4: string;
  /** RXG.5 - Give Amount - Minimum (required) */
  rxg_5: string;
  /** RXG.6 - Give Amount - Maximum */
  rxg_6?: string;
  /** RXG.7 - Give Units (required) */
  rxg_7: string;
  /** RXG.8 - Give Dosage Form */
  rxg_8?: string;
  /** RXG.9 - Administration Notes */
  rxg_9?: string;
}
