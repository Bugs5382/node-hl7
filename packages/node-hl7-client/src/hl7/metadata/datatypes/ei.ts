/**
 * EI — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/EI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ei_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_EI {
  /** EI.1 - Entity Identifier */
  ei_1?: string;
  /** EI.2 - Namespace ID */
  ei_2?: string;
  /** EI.3 - Universal ID */
  ei_3?: string;
  /** EI.4 - Universal ID Type */
  ei_4?: string;
  entityIdentifier?: string;
  namespaceId?: string;
  universalId?: string;
  universalIdType?: string;
}
