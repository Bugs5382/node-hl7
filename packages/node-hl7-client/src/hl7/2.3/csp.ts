/** HL7 2.3 CSP - Clinical Study Phase */
export interface HL7_2_3_CSP {
  /** CSP.1 - Study Phase Identifier (required) */
  csp_1: string;
  /** CSP.2 - Date/Time Study Phase Began (required) */
  csp_2: Date | string;
  /** CSP.3 - Date/Time Study Phase Ended */
  csp_3?: Date | string;
  /** CSP.4 - Study Phase Evaluability */
  csp_4?: string;
}
