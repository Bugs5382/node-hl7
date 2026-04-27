/**
 * CCD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CCD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ccd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CCD {
  /** CCD.1 - When To Charge Code */
  ccd_1?: string;
  whenToChargeCode?: string;
  /** CCD.2 - Date/time */
  ccd_2?: string;
  dateTime?: string;
}
