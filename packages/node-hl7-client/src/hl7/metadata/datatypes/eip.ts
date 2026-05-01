/**
 * EIP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/EIP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`eip_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_EIP {
  /** EIP.1 - Parent s Placer Order Number */
  eip_1?: string;
  /** EIP.2 - Parent s Filler Order Number */
  eip_2?: string;
  parentSFillerOrderNumber?: string;
  parentSPlacerOrderNumber?: string;
}
