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
/** HL7 2.2 RXD - Pharmacy/Treatment Dispense */
export interface HL7_2_2_RXD {
  /** RXD.1 - Dispense Sub-ID Counter (required) */
  rxd_1: string;
  /** RXD.10 - Dispensing Provider */
  rxd_10?: string;
  /** RXD.11 - Substitution Status */
  rxd_11?: string;
  /** RXD.12 - Total Daily Dose */
  rxd_12?: string;
  /** RXD.13 - Dispense-to Location */
  rxd_13?: string;
  /** RXD.14 - Needs Human Review */
  rxd_14?: "N" | "Y";
  /** RXD.15 - Pharmacy/Treatment Supplier's Special Dispensing Instructions */
  rxd_15?: string;
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
}
