/**
 * CP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cp_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CP {
  /** CP.1 - Price */
  cp_1?: string;
  price?: string;
  /** CP.2 - Price Type */
  cp_2?: string;
  priceType?: string;
  /** CP.3 - From Value */
  cp_3?: string;
  fromValue?: string;
  /** CP.4 - To Value */
  cp_4?: string;
  toValue?: string;
  /** CP.5 - Range Units */
  cp_5?: string;
  rangeUnits?: string;
  /** CP.6 - Range Type */
  cp_6?: string;
  rangeType?: string;
}
