/**
 * HD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/HD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`hd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_HD {
  /** HD.1 - Namespace ID */
  hd_1?: string;
  namespaceId?: string;
  /** HD.2 - Universal ID */
  hd_2?: string;
  universalId?: string;
  /** HD.3 - Universal ID Type */
  hd_3?: string;
  universalIdType?: string;
}
