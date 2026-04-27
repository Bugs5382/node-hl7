/**
 * QSC — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/QSC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`qsc_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_QSC {
  /** QSC.1 - Name Of Field */
  qsc_1?: string;
  nameOfField?: string;
  /** QSC.2 - Relational Operator */
  qsc_2?: string;
  relationalOperator?: string;
  /** QSC.3 - Value */
  qsc_3?: string;
  value?: string;
  /** QSC.4 - Relational Conjunction */
  qsc_4?: string;
  relationalConjunction?: string;
}
