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
  additives?: string;
  bodySite?: string;
  collectionModifierMethodCode?: string;
  freetext?: string;
  siteModifier?: string;
  specimenRole?: string;
  specimenSourceNameOrCode?: string;
  /** SPS.1 - Specimen Source Name Or Code */
  sps_1?: string;
  /** SPS.2 - Additives */
  sps_2?: string;
  /** SPS.3 - Freetext */
  sps_3?: string;
  /** SPS.4 - Body Site */
  sps_4?: string;
  /** SPS.5 - Site Modifier */
  sps_5?: string;
  /** SPS.6 - Collection Modifier Method Code */
  sps_6?: string;
  /** SPS.7 - Specimen Role */
  sps_7?: string;
}
