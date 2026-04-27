/**
 * CN_PHYSICIAN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CN_PHYSICIAN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cn_physician_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CN_PHYSICIAN {
  /** CN_PHYSICIAN.1 - Physician Id */
  cn_physician_1?: string;
  physicianId?: string;
  /** CN_PHYSICIAN.2 - Familiy Name */
  cn_physician_2?: string;
  familiyName?: string;
  /** CN_PHYSICIAN.3 - Given Name */
  cn_physician_3?: string;
  givenName?: string;
  /** CN_PHYSICIAN.4 - Middle Initial Or Name */
  cn_physician_4?: string;
  middleInitialOrName?: string;
  /** CN_PHYSICIAN.5 - Suffix (e.g. Jr Or Iii) */
  cn_physician_5?: string;
  suffix?: string;
  /** CN_PHYSICIAN.6 - Prefix (e.g. Dr) */
  cn_physician_6?: string;
  prefix?: string;
  /** CN_PHYSICIAN.7 - Degree (e.g. Md) */
  cn_physician_7?: string;
  degree?: string;
  /** CN_PHYSICIAN.8 - Source Table Id */
  cn_physician_8?: string;
  sourceTableId?: string;
}
