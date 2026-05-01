/**
 * SN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/SN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`sn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_SN {
  comparator?: string;
  num1?: string;
  num2?: string;
  separatorOrSuffix?: string;
  /** SN.1 - Comparator */
  sn_1?: string;
  /** SN.2 - Num1 */
  sn_2?: string;
  /** SN.3 - Separator Or Suffix */
  sn_3?: string;
  /** SN.4 - Num2 */
  sn_4?: string;
}
