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
  /** RFR.1 - Numeric Range */
  rfr_1?: string;
  numericRange?: string;
  /** RFR.2 - Administrative Sex */
  rfr_2?: string;
  administrativeSex?: string;
  /** RFR.3 - Age Range */
  rfr_3?: string;
  ageRange?: string;
  /** RFR.4 - Gestational Age Range */
  rfr_4?: string;
  gestationalAgeRange?: string;
  /** RFR.5 - Species */
  rfr_5?: string;
  species?: string;
  /** RFR.6 - Race/subspecies */
  rfr_6?: string;
  raceSubspecies?: string;
  /** RFR.7 - Conditions */
  rfr_7?: string;
  conditions?: string;
}
