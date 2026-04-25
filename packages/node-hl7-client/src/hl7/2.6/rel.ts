/** HL7 2.6 REL - Clinical Relationship Segment */
export interface HL7_2_6_REL {
  /** REL.1 - Set ID */
  rel_1?: number | string;
  /** REL.2 - Relationship Type (required) */
  rel_2: string;
  /** REL.3 - This Relationship Instance Identifier (required) */
  rel_3: string;
  /** REL.4 - Source Information Instance Identifier (required) */
  rel_4: string;
  /** REL.5 - Target Information Instance Identifier (required) */
  rel_5: string;
  /** REL.6 - Assertion Date Range Begin */
  rel_6?: Date | string;
  /** REL.7 - Assertion Date Range End */
  rel_7?: Date | string;
  /** REL.8 - Asserting Entity Instance ID */
  rel_8?: "Y" | "N";
  /** REL.9 - Asserting Person */
  rel_9?: string;
  /** REL.10 - Asserting Organization */
  rel_10?: string;
  /** REL.11 - Assertor Address */
  rel_11?: string;
  /** REL.12 - Assertor Contact */
  rel_12?: string;
  /** REL.13 - Assertion Recorded Date/Time */
  rel_13?: Date | string;
  /** REL.14 - Assertion Expiration Date/Time */
  rel_14?: string;
}
