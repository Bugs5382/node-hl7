/**
 * PN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PN {
  degree?: string;
  familiyName?: string;
  givenName?: string;
  middleInitialOrName?: string;
  /** PN.1 - Familiy Name */
  pn_1?: string;
  /** PN.2 - Given Name */
  pn_2?: string;
  /** PN.3 - Middle Initial Or Name */
  pn_3?: string;
  /** PN.4 - Suffix (e.g. Jr Or Iii) */
  pn_4?: string;
  /** PN.5 - Prefix (e.g. Dr) */
  pn_5?: string;
  /** PN.6 - Degree (e.g. Md) */
  pn_6?: string;
  prefix?: string;
  suffix?: string;
}
