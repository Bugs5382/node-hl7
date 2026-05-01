/** HL7 RX1 - Pharmacy/Treatment Order (HL7 2.1) */
export interface HL7_RX1 {
  allowSubstitutions?: string;
  deliverToLocation?: string;
  giveAmountMaximum?: number | string;
  giveAmountMinimum?: number | string;
  giveCode?: string;
  giveDosageForm?: string;
  givePer?: string;
  giveRateAmount?: number | string;
  giveRateUnits?: string;
  giveUnits?: string;
  pharmacistSpecialDispensingInstructions?: string;
  providersAdministrationInstructions?: string;
  providersPharmacyInstructions?: string;
  requestedDosageForm?: string;
  requestedGiveAmountMaximum?: number | string;
  requestedGiveAmountMinimum?: number | string;
  requestedGiveCode?: string;
  requestedGiveUnits?: string;
  /** RX1.1 - Unused */
  rx1_1?: string;
  /** RX1.10 - Allow Substitutions */
  rx1_10?: string;
  /** RX1.11 - Requested Give Code */
  rx1_11?: string;
  /** RX1.12 - Requested Give Amount - Minimum */
  rx1_12?: number | string;
  /** RX1.13 - Requested Give Amount - Maximum */
  rx1_13?: number | string;
  /** RX1.14 - Requested Give Units */
  rx1_14?: string;
  /** RX1.15 - Requested Dosage Form */
  rx1_15?: string;
  /** RX1.16 - Pharmacist Special Dispensing Instructions */
  rx1_16?: string;
  /** RX1.17 - Give Per */
  rx1_17?: string;
  /** RX1.18 - Give Rate Amount */
  rx1_18?: number | string;
  /** RX1.19 - Give Rate Units */
  rx1_19?: string;
  /** RX1.2 - Give Code */
  rx1_2: string;
  /** RX1.20 - Requested Give Rate Amount */
  rx1_20?: number | string;
  /** RX1.21 - Requested Give Rate Units */
  rx1_21?: string;
  /** RX1.22 - Total Daily Dose */
  rx1_22?: string;
  /** RX1.3 - Give Amount - Minimum */
  rx1_3: number | string;
  /** RX1.4 - Give Amount - Maximum */
  rx1_4?: number | string;
  /** RX1.5 - Give Units */
  rx1_5?: string;
  /** RX1.6 - Give Dosage Form */
  rx1_6?: string;
  /** RX1.7 - Provider's Pharmacy Instructions */
  rx1_7?: string;
  /** RX1.8 - Provider's Administration Instructions */
  rx1_8?: string;
  /** RX1.9 - Deliver-to Location */
  rx1_9?: string;
  totalDailyDose?: string;
}
