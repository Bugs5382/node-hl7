/**
 * CN_PERSON — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CN_PERSON)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cn_person_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CN_PERSON {
  /** CN_PERSON.1 - Id Number */
  cn_person_1?: string;
  idNumber?: string;
  /** CN_PERSON.2 - Familiy Name */
  cn_person_2?: string;
  familiyName?: string;
  /** CN_PERSON.3 - Given Name */
  cn_person_3?: string;
  givenName?: string;
  /** CN_PERSON.4 - Middle Initial Or Name */
  cn_person_4?: string;
  middleInitialOrName?: string;
  /** CN_PERSON.5 - Suffix (e.g. Jr Or Iii) */
  cn_person_5?: string;
  suffix?: string;
  /** CN_PERSON.6 - Prefix (e.g. Dr) */
  cn_person_6?: string;
  prefix?: string;
  /** CN_PERSON.7 - Degree (e.g. Md) */
  cn_person_7?: string;
  degree?: string;
  /** CN_PERSON.8 - Source Table Id */
  cn_person_8?: string;
  sourceTableId?: string;
}
