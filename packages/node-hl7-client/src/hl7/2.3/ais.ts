/** HL7 2.3 AIS - Appointment Information - Service */
export interface HL7_2_3_AIS {
  /** AIS.1 - Set ID (required) */
  ais_1: number | string;
  /** AIS.10 - Filler Status Code */
  ais_10?: string;
  /** AIS.2 - Segment Action Code */
  ais_2?: "A" | "D" | "U";
  /** AIS.3 - Universal Service Identifier (required) */
  ais_3: string;
  /** AIS.4 - Start Date/Time */
  ais_4?: Date | string;
  /** AIS.5 - Start Date/Time Offset */
  ais_5?: string;
  /** AIS.6 - Start Date/Time Offset Units */
  ais_6?: string;
  /** AIS.7 - Duration */
  ais_7?: string;
  /** AIS.8 - Duration Units */
  ais_8?: string;
  /** AIS.9 - Allow Substitution Code */
  ais_9?: string;
}
