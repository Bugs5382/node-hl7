/** HL7 2.2 RXD - Pharmacy/Treatment Dispense */
export interface HL7_2_2_RXD {
  /** RXD.1 - Dispense Sub-ID Counter (required) */
  rxd_1: string;
  /** RXD.2 - Dispense/Give Code (required) */
  rxd_2: string;
  /** RXD.3 - Date/Time Dispensed (required) */
  rxd_3: Date | string;
  /** RXD.4 - Actual Dispense Amount (required) */
  rxd_4: string;
  /** RXD.5 - Actual Dispense Units */
  rxd_5?: string;
  /** RXD.6 - Actual Dosage Form */
  rxd_6?: string;
  /** RXD.7 - Prescription Number (required) */
  rxd_7: string;
  /** RXD.8 - Number Of Refills Remaining */
  rxd_8?: string;
  /** RXD.9 - Dispense Notes */
  rxd_9?: string;
  /** RXD.10 - Dispensing Provider */
  rxd_10?: string;
  /** RXD.11 - Substitution Status */
  rxd_11?: string;
  /** RXD.12 - Total Daily Dose */
  rxd_12?: string;
  /** RXD.13 - Dispense-to Location */
  rxd_13?: string;
  /** RXD.14 - Needs Human Review */
  rxd_14?: "Y" | "N";
  /** RXD.15 - Pharmacy/Treatment Supplier's Special Dispensing Instructions */
  rxd_15?: string;
}
