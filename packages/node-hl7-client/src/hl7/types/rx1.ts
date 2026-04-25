/** HL7 RX1 - Pharmacy/Treatment Order (HL7 2.1) */
export interface HL7_RX1 {
  /** RX1.1 - Unused */
  rx1_1?: string;
  /** RX1.2 - Give Code */
  rx1_2: string;
  giveCode?: string;
  /** RX1.3 - Give Amount - Minimum */
  rx1_3: string | number;
  giveAmountMinimum?: string | number;
  /** RX1.4 - Give Amount - Maximum */
  rx1_4?: string | number;
  giveAmountMaximum?: string | number;
  /** RX1.5 - Give Units */
  rx1_5?: string;
  giveUnits?: string;
  /** RX1.6 - Give Dosage Form */
  rx1_6?: string;
  giveDosageForm?: string;
  /** RX1.7 - Provider's Pharmacy Instructions */
  rx1_7?: string;
  providersPharmacyInstructions?: string;
  /** RX1.8 - Provider's Administration Instructions */
  rx1_8?: string;
  providersAdministrationInstructions?: string;
  /** RX1.9 - Deliver-to Location */
  rx1_9?: string;
  deliverToLocation?: string;
  /** RX1.10 - Allow Substitutions */
  rx1_10?: string;
  allowSubstitutions?: string;
  /** RX1.11 - Requested Give Code */
  rx1_11?: string;
  requestedGiveCode?: string;
  /** RX1.12 - Requested Give Amount - Minimum */
  rx1_12?: string | number;
  requestedGiveAmountMinimum?: string | number;
  /** RX1.13 - Requested Give Amount - Maximum */
  rx1_13?: string | number;
  requestedGiveAmountMaximum?: string | number;
  /** RX1.14 - Requested Give Units */
  rx1_14?: string;
  requestedGiveUnits?: string;
  /** RX1.15 - Requested Dosage Form */
  rx1_15?: string;
  requestedDosageForm?: string;
  /** RX1.16 - Pharmacist Special Dispensing Instructions */
  rx1_16?: string;
  pharmacistSpecialDispensingInstructions?: string;
  /** RX1.17 - Give Per */
  rx1_17?: string;
  givePer?: string;
  /** RX1.18 - Give Rate Amount */
  rx1_18?: string | number;
  giveRateAmount?: string | number;
  /** RX1.19 - Give Rate Units */
  rx1_19?: string;
  giveRateUnits?: string;
  /** RX1.20 - Requested Give Rate Amount */
  rx1_20?: string | number;
  /** RX1.21 - Requested Give Rate Units */
  rx1_21?: string;
  /** RX1.22 - Total Daily Dose */
  rx1_22?: string;
  totalDailyDose?: string;
}
