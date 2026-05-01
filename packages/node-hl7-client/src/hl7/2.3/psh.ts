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
