/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
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
