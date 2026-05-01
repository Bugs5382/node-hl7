/**
 * NDL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/NDL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ndl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_NDL {
  bed?: string;
  building?: string;
  endDateTime?: string;
  facility?: string;
  floor?: string;
  locationStatus?: string;
  /** NDL.1 - OP Name */
  ndl_1?: string;
  /** NDL.10 - Building */
  ndl_10?: string;
  /** NDL.11 - Floor */
  ndl_11?: string;
  /** NDL.2 - Start Date/time */
  ndl_2?: string;
  /** NDL.3 - End Date/time */
  ndl_3?: string;
  /** NDL.4 - Point Of Care */
  ndl_4?: string;
  /** NDL.5 - Room */
  ndl_5?: string;
  /** NDL.6 - Bed */
  ndl_6?: string;
  /** NDL.7 - Facility */
  ndl_7?: string;
  /** NDL.8 - Location Status */
  ndl_8?: string;
  /** NDL.9 - Person Location Type */
  ndl_9?: string;
  opName?: string;
  personLocationType?: string;
  pointOfCare?: string;
  room?: string;
  startDateTime?: string;
}
