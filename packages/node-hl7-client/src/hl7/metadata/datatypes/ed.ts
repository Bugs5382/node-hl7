/**
 * ED — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/ED)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ed_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_ED {
  /** ED.1 - Source Application */
  ed_1?: string;
  sourceApplication?: string;
  /** ED.2 - Type Of Data */
  ed_2?: string;
  typeOfData?: string;
  /** ED.3 - Data Subtype */
  ed_3?: string;
  dataSubtype?: string;
  /** ED.4 - Encoding */
  ed_4?: string;
  encoding?: string;
  /** ED.5 - Data */
  ed_5?: string;
  data?: string;
}
