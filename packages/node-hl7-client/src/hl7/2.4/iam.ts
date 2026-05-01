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
