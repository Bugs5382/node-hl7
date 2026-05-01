/**
 * VH — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/VH)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`vh_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_VH {
  endDayRange?: string;
  endHourRange?: string;
  startDayRange?: string;
  startHourRange?: string;
  /** VH.1 - Start Day Range */
  vh_1?: string;
  /** VH.2 - End Day Range */
  vh_2?: string;
  /** VH.3 - Start Hour Range */
  vh_3?: string;
  /** VH.4 - End Hour Range */
  vh_4?: string;
}
