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
  /** NDL.1 - OP Name */
  ndl_1?: string;
  opName?: string;
  /** NDL.2 - Start Date/time */
  ndl_2?: string;
  startDateTime?: string;
  /** NDL.3 - End Date/time */
  ndl_3?: string;
  endDateTime?: string;
  /** NDL.4 - Point Of Care */
  ndl_4?: string;
  pointOfCare?: string;
  /** NDL.5 - Room */
  ndl_5?: string;
  room?: string;
  /** NDL.6 - Bed */
  ndl_6?: string;
  bed?: string;
  /** NDL.7 - Facility */
  ndl_7?: string;
  facility?: string;
  /** NDL.8 - Location Status */
  ndl_8?: string;
  locationStatus?: string;
  /** NDL.9 - Person Location Type */
  ndl_9?: string;
  personLocationType?: string;
  /** NDL.10 - Building */
  ndl_10?: string;
  building?: string;
  /** NDL.11 - Floor */
  ndl_11?: string;
  floor?: string;
}
