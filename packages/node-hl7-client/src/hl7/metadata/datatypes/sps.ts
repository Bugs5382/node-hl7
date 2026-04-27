/**
 * SPS — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/SPS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`sps_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_SPS {
  /** SPS.1 - Specimen Source Name Or Code */
  sps_1?: string;
  specimenSourceNameOrCode?: string;
  /** SPS.2 - Additives */
  sps_2?: string;
  additives?: string;
  /** SPS.3 - Freetext */
  sps_3?: string;
  freetext?: string;
  /** SPS.4 - Body Site */
  sps_4?: string;
  bodySite?: string;
  /** SPS.5 - Site Modifier */
  sps_5?: string;
  siteModifier?: string;
  /** SPS.6 - Collection Modifier Method Code */
  sps_6?: string;
  collectionModifierMethodCode?: string;
  /** SPS.7 - Specimen Role */
  sps_7?: string;
  specimenRole?: string;
}
