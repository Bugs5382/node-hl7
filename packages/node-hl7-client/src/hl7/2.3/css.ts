/** HL7 2.3 CSS - Clinical Study Data Schedule Segment */
export interface HL7_2_3_CSS {
  /** CSS.1 - Study Scheduled Time Point (required) */
  css_1: string;
  /** CSS.2 - Study Scheduled Patient Time Point */
  css_2?: Date | string;
  /** CSS.3 - Study Quality Control Codes */
  css_3?: string;
}
