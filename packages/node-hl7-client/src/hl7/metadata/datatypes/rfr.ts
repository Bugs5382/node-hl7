/**
 * RFR — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/RFR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`rfr_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_RFR {
  administrativeSex?: string;
  ageRange?: string;
  conditions?: string;
  gestationalAgeRange?: string;
  numericRange?: string;
  raceSubspecies?: string;
  /** RFR.1 - Numeric Range */
  rfr_1?: string;
  /** RFR.2 - Administrative Sex */
  rfr_2?: string;
  /** RFR.3 - Age Range */
  rfr_3?: string;
  /** RFR.4 - Gestational Age Range */
  rfr_4?: string;
  /** RFR.5 - Species */
  rfr_5?: string;
  /** RFR.6 - Race/subspecies */
  rfr_6?: string;
  /** RFR.7 - Conditions */
  rfr_7?: string;
  species?: string;
}
