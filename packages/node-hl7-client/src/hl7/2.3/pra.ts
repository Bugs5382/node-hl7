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
/** HL7 2.3 PRA - Practitioner Detail */
export interface HL7_2_3_PRA {
  /** PRA.1 - Primary Key Value - PRA */
  pra_1?: string;
  /** PRA.2 - Practitioner Group */
  pra_2?: string;
  /** PRA.3 - Practitioner Category */
  pra_3?: string;
  /** PRA.4 - Provider Billing */
  pra_4?: "I" | "O";
  /** PRA.5 - Specialty */
  pra_5?: string;
  /** PRA.6 - Practitioner ID Numbers */
  pra_6?: string;
  /** PRA.7 - Privileges */
  pra_7?: string;
  /** PRA.8 - Date Entered Practice */
  pra_8?: Date | string;
}
