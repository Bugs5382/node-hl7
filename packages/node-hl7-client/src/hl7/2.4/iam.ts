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
/** HL7 2.4 IAM - Patient Adverse Reaction Information */
export interface HL7_2_4_IAM {
  /** IAM.1 - Set ID (required) */
  iam_1: number | string;
  /** IAM.10 - Allergen Group Code/Mnemonic/Description */
  iam_10?: string;
  /** IAM.11 - Onset Date */
  iam_11?: Date | string;
  /** IAM.2 - Allergen Type Code */
  iam_2?: string;
  /** IAM.3 - Allergen Code/Mnemonic/Description (required) */
  iam_3: string;
  /** IAM.4 - Allergy Severity Code */
  iam_4?: "MI" | "MO" | "SV" | "U";
  /** IAM.5 - Allergen Reaction Code */
  iam_5?: string;
  /** IAM.6 - Allergy Action Code (required) */
  iam_6: "A" | "D" | "U";
  /** IAM.7 - Allergy Unique Identifier */
  iam_7?: string;
  /** IAM.8 - Action Reason */
  iam_8?: string;
  /** IAM.9 - Sensitivity to Causative Agent Code */
  iam_9?: string;
}
