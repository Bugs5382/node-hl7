/**
 * HL7 2.2 MSH Specification
 * @since 4.0.0
 */
export interface HL7_2_2_MSH {
  /** Message Control ID (max 20 chars)
   * @default Random string */
  msh_10?: string;
  /** Processing ID: P=Production, T=Test */
  msh_11?: "P" | "T";
  /** Sending Application */
  msh_3?: string;
  /** Sending Facility */
  msh_4?: string;
  /** Receiving Application */
  msh_5?: string;
  /** Receiving Facility */
  msh_6?: string;
  /** Message Date/Time */
  msh_7?: Date;
  /** Security */
  msh_8?: string;
  /** Message Code (e.g. "ADT") */
  msh_9_1: string;
  /** Trigger Event (e.g. "A01") */
  msh_9_2: string;
  receivingApplication?: string;
  receivingFacility?: string;
  sendingApplication?: string;
  sendingFacility?: string;
}
