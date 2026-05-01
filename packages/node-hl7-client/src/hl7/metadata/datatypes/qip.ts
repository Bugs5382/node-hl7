/**
 * QIP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/QIP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`qip_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_QIP {
  fieldName?: string;
  /** QIP.1 - Field Name */
  qip_1?: string;
  /** QIP.2 - Value1&value2&value3 */
  qip_2?: string;
  value1Value2Value3?: string;
}
