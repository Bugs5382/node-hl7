/** HL7 2.3 AIL - Appointment Information - Location Resource */
export interface HL7_2_3_AIL {
  /** AIL.1 - Set ID (required) */
  ail_1: number | string;
  /** AIL.2 - Segment Action Code */
  ail_2?: "A" | "D" | "U";
  /** AIL.3 - Location Resource ID */
  ail_3?: string;
  /** AIL.4 - Location Type */
  ail_4?: string;
  /** AIL.5 - Location Group */
  ail_5?: string;
  /** AIL.6 - Start Date/Time */
  ail_6?: Date | string;
  /** AIL.7 - Start Date/Time Offset */
  ail_7?: string;
  /** AIL.8 - Start Date/Time Offset Units */
  ail_8?: string;
  /** AIL.9 - Duration */
  ail_9?: string;
  /** AIL.10 - Duration Units */
  ail_10?: string;
  /** AIL.11 - Allow Substitution Code */
  ail_11?: string;
  /** AIL.12 - Filler Status Code */
  ail_12?: string;
}
