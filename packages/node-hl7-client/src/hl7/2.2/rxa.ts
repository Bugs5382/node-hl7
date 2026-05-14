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
/** HL7 2.2 RXA - Pharmacy/Treatment Administration */
export interface HL7_2_2_RXA {
  /** RXA.1 - Give Sub-ID Counter (required) */
  rxa_1: number | string;
  /** RXA.10 - Administering Provider (max 80) */
  rxa_10?: string;
  /** RXA.11 - Administered-at Location (max 12) */
  rxa_11?: string;
  /** RXA.12 - Administered Per (Time Unit) (max 20) */
  rxa_12?: string;
  /** RXA.2 - Administration Sub-ID Counter (required) */
  rxa_2: number | string;
  /** RXA.3 - Date/Time Start of Administration (required) */
  rxa_3: Date | string;
  /** RXA.4 - Date/Time End of Administration (required) */
  rxa_4: Date | string;
  /** RXA.5 - Administered Code (required, max 100) */
  rxa_5: string;
  /** RXA.6 - Administered Amount (required, max 20) */
  rxa_6: string;
  /** RXA.7 - Administered Units (max 60) */
  rxa_7?: string;
  /** RXA.8 - Administered Dosage Form (max 60) */
  rxa_8?: string;
  /** RXA.9 - Administration Notes (max 200) */
  rxa_9?: string;
}
