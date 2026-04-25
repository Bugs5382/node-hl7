/** HL7 2.3 VAR - Variance */
export interface HL7_2_3_VAR {
  /** VAR.1 - Variance Instance ID (required) */
  var_1: string;
  /** VAR.2 - Documented Date/Time (required) */
  var_2: Date | string;
  /** VAR.3 - Stated Variance Date/Time */
  var_3?: Date | string;
  /** VAR.4 - Variance Originator */
  var_4?: string;
  /** VAR.5 - Variance Classification */
  var_5?: string;
  /** VAR.6 - Variance Description */
  var_6?: string;
}
