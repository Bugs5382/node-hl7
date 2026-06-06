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
/** HL7 2.2 RXO - Pharmacy/Treatment Prescription Order */
export interface HL7_2_2_RXO {
  /** RXO.1 - Requested Give Code (required) */
  rxo_1: string;
  /** RXO.10 - Requested Dispense Code */
  rxo_10?: string;
  /** RXO.11 - Requested Dispense Amount */
  rxo_11?: string;
  /** RXO.12 - Requested Dispense Units */
  rxo_12?: string;
  /** RXO.13 - Number Of Refills */
  rxo_13?: string;
  /** RXO.14 - Ordering Provider's DEA Number */
  rxo_14?: string;
  /** RXO.15 - Pharmacist/Treatment Supplier's Verifier ID */
  rxo_15?: string;
  /** RXO.16 - Needs Human Review */
  rxo_16?: "N" | "Y";
  /** RXO.17 - Requested Give Per (Time Unit) */
  rxo_17?: string;
  /** RXO.2 - Requested Give Amount - Minimum (required) */
  rxo_2: string;
  /** RXO.3 - Requested Give Amount - Maximum */
  rxo_3?: string;
  /** RXO.4 - Requested Give Units */
  rxo_4?: string;
  /** RXO.5 - Requested Dosage Form */
  rxo_5?: string;
  /** RXO.6 - Provider's Pharmacy/Treatment Instructions */
  rxo_6?: string;
  /** RXO.7 - Provider's Administration Instructions */
  rxo_7?: string;
  /** RXO.8 - Deliver-to Location */
  rxo_8?: string;
  /** RXO.9 - Allow Substitutions */
  rxo_9?: "G" | "N";
}
