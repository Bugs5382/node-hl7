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
/** HL7 2.2 RXE - Pharmacy/Treatment Encoded Order */
export interface HL7_2_2_RXE {
  /** RXE.1 - Quantity/Timing */
  rxe_1?: string;
  /** RXE.10 - Dispense Amount */
  rxe_10?: string;
  /** RXE.11 - Dispense Units */
  rxe_11?: string;
  /** RXE.12 - Number Of Refills */
  rxe_12?: string;
  /** RXE.13 - Ordering Provider's DEA Number */
  rxe_13?: string;
  /** RXE.14 - Pharmacist/Treatment Supplier's Verifier ID */
  rxe_14?: string;
  /** RXE.15 - Prescription Number */
  rxe_15?: string;
  /** RXE.16 - Number Of Refills Remaining */
  rxe_16?: string;
  /** RXE.17 - Number Of Refills/Doses Dispensed */
  rxe_17?: string;
  /** RXE.18 - Date/Time of Most Recent Refill or Dose Dispensed */
  rxe_18?: Date | string;
  /** RXE.19 - Total Daily Dose */
  rxe_19?: string;
  /** RXE.2 - Give Code (required) */
  rxe_2: string;
  /** RXE.20 - Needs Human Review */
  rxe_20?: "N" | "Y";
  /** RXE.21 - Pharmacy/Treatment Supplier's Special Dispensing Instructions */
  rxe_21?: string;
  /** RXE.22 - Give Per (Time Unit) */
  rxe_22?: string;
  /** RXE.23 - Give Rate Amount */
  rxe_23?: string;
  /** RXE.24 - Give Rate Units */
  rxe_24?: string;
  /** RXE.3 - Give Amount - Minimum (required) */
  rxe_3: string;
  /** RXE.4 - Give Amount - Maximum */
  rxe_4?: string;
  /** RXE.5 - Give Units (required) */
  rxe_5: string;
  /** RXE.6 - Give Dosage Form */
  rxe_6?: string;
  /** RXE.7 - Provider's Administration Instructions */
  rxe_7?: string;
  /** RXE.8 - Deliver-to Location */
  rxe_8?: string;
  /** RXE.9 - Substitution Status */
  rxe_9?: string;
}
