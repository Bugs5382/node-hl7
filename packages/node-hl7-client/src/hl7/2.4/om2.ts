/** HL7 2.4 OM2 - Numeric Observations */
export interface HL7_2_4_OM2 {
  /** OM2.1 - Sequence Number (required) */
  om2_1: number | string;
  /** OM2.2 - Units of Measure */
  om2_2?: string;
  /** OM2.3 - Range of Decimal Precision */
  om2_3?: string;
  /** OM2.4 - Corresponding SI Units of Measure */
  om2_4?: string;
  /** OM2.5 - SI Conversion Factor */
  om2_5?: string;
  /** OM2.6 - Reference (Normal) Range for Ordinal/Continuous Observations */
  om2_6?: string;
  /** OM2.7 - Critical Range for Ordinal/Continuous Obs */
  om2_7?: string;
  /** OM2.8 - Absolute Range for Ordinal/Continuous Obs */
  om2_8?: string;
  /** OM2.9 - Delta Check Criteria */
  om2_9?: string;
  /** OM2.10 - Minimum Meaningful Increments */
  om2_10?: string;
}
