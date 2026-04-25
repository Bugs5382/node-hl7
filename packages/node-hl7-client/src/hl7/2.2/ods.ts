/** HL7 2.2 ODS - Dietary Orders, Supplements, and Preferences */
export interface HL7_2_2_ODS {
  /** ODS.1 - Type (required): D=Diet, S=Supplement, P=Preference */
  ods_1: "D" | "S" | "P";
  /** ODS.2 - Service Period */
  ods_2?: string;
  /** ODS.3 - Diet, Supplement, or Preference Code (required) */
  ods_3: string;
  /** ODS.4 - Text Instruction */
  ods_4?: string;
}
