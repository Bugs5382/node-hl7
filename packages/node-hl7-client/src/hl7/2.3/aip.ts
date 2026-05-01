/** HL7 2.3 AIP - Appointment Information - Personnel Resource */
export interface HL7_2_3_AIP {
  /** AIP.1 - Set ID (required) */
  aip_1: number | string;
  /** AIP.10 - Duration Units */
  aip_10?: string;
  /** AIP.11 - Allow Substitution Code */
  aip_11?: string;
  /** AIP.12 - Filler Status Code */
  aip_12?: string;
  /** AIP.2 - Segment Action Code */
  aip_2?: "A" | "D" | "U";
  /** AIP.3 - Personnel Resource ID */
  aip_3?: string;
  /** AIP.4 - Resource Role (required) */
  aip_4: string;
  /** AIP.5 - Resource Group */
  aip_5?: string;
  /** AIP.6 - Start Date/Time */
  aip_6?: Date | string;
  /** AIP.7 - Start Date/Time Offset */
  aip_7?: string;
  /** AIP.8 - Start Date/Time Offset Units */
  aip_8?: string;
  /** AIP.9 - Duration */
  aip_9?: string;
}
