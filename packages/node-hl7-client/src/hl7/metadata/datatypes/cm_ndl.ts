/**
 * CM_NDL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_NDL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_ndl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_NDL {
  bed?: string;
  building?: string;
  /** CM_NDL.1 - OP Name */
  cm_ndl_1?: string;
  /** CM_NDL.10 - Building */
  cm_ndl_10?: string;
  /** CM_NDL.11 - Floor */
  cm_ndl_11?: string;
  /** CM_NDL.2 - Start Date/time */
  cm_ndl_2?: string;
  /** CM_NDL.3 - End Date/time */
  cm_ndl_3?: string;
  /** CM_NDL.4 - Point Of Care */
  cm_ndl_4?: string;
  /** CM_NDL.5 - Room */
  cm_ndl_5?: string;
  /** CM_NDL.6 - Bed */
  cm_ndl_6?: string;
  /** CM_NDL.7 - Facility */
  cm_ndl_7?: string;
  /** CM_NDL.8 - Location Status */
  cm_ndl_8?: string;
  /** CM_NDL.9 - Person Location Type */
  cm_ndl_9?: string;
  endDateTime?: string;
  facility?: string;
  floor?: string;
  locationStatus?: string;
  opName?: string;
  personLocationType?: string;
  pointOfCare?: string;
  room?: string;
  startDateTime?: string;
}
