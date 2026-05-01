/**
 * FN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/FN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`fn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_FN {
  /** FN.1 - Surname */
  fn_1?: string;
  /** FN.2 - Own Surname Prefix */
  fn_2?: string;
  /** FN.3 - Own Surname */
  fn_3?: string;
  /** FN.4 - Surname Prefix From Partner/Spouse */
  fn_4?: string;
  /** FN.5 - Surname From Partner/Spouse */
  fn_5?: string;
  ownSurname?: string;
  ownSurnamePrefix?: string;
  surname?: string;
  surnameFromPartnerSpouse?: string;
  surnamePrefixFromPartnerSpouse?: string;
}
