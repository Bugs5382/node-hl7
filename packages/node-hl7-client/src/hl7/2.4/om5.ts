/** HL7 2.4 OM5 - Observation Batteries */
export interface HL7_2_4_OM5 {
  /** OM5.1 - Sequence Number (required) */
  om5_1: number | string;
  /** OM5.2 - Test/Observations Included Within an Ordered Test Battery */
  om5_2?: string;
  /** OM5.3 - Observation ID Suffixes */
  om5_3?: string;
}
