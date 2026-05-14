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
/** HL7 2.3 PSH - Product Summary Header */
export interface HL7_2_3_PSH {
  /** PSH.1 - Report Type (required) */
  psh_1: string;
  /** PSH.10 - Quantity in Use */
  psh_10?: string;
  /** PSH.11 - Quantity in Use Method */
  psh_11?: "A" | "E";
  /** PSH.12 - Quantity in Use Comment */
  psh_12?: string;
  /** PSH.13 - Number of Product Experience Reports Filed by Facility */
  psh_13?: string;
  /** PSH.14 - Number of Product Experience Reports Filed by Distributor */
  psh_14?: string;
  /** PSH.2 - Report Form Identifier */
  psh_2?: string;
  /** PSH.3 - Report Date (required) */
  psh_3: Date | string;
  /** PSH.4 - Report Interval Start Date */
  psh_4?: Date | string;
  /** PSH.5 - Report Interval End Date */
  psh_5?: Date | string;
  /** PSH.6 - Quantity Manufactured */
  psh_6?: string;
  /** PSH.7 - Quantity Distributed */
  psh_7?: string;
  /** PSH.8 - Quantity Distributed Method */
  psh_8?: "A" | "E";
  /** PSH.9 - Quantity Distributed Comment */
  psh_9?: string;
}
