/**
 * OSD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/OSD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`osd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_OSD {
  /** OSD.1 - Sequence/results Flag */
  osd_1?: string;
  sequenceResultsFlag?: string;
  /** OSD.2 - Placer Order Number: Entity Identifier */
  osd_2?: string;
  placerOrderNumberEntityIdentifier?: string;
  /** OSD.3 - Placer Order Number: Namespace ID */
  osd_3?: string;
  placerOrderNumberNamespaceId?: string;
  /** OSD.4 - Filler Order Number: Entity Identifier */
  osd_4?: string;
  fillerOrderNumberEntityIdentifier?: string;
  /** OSD.5 - Filler Order Number: Namespace ID */
  osd_5?: string;
  fillerOrderNumberNamespaceId?: string;
  /** OSD.6 - Sequence Condition Value */
  osd_6?: string;
  sequenceConditionValue?: string;
  /** OSD.7 - Maximum Number Of Repeats */
  osd_7?: string;
  maximumNumberOfRepeats?: string;
  /** OSD.8 - Placer Order Number: Universal ID */
  osd_8?: string;
  placerOrderNumberUniversalId?: string;
  /** OSD.9 - Placer Order Number; Universal ID Type */
  osd_9?: string;
  placerOrderNumberUniversalIdType?: string;
  /** OSD.10 - Filler Order Number: Universal ID */
  osd_10?: string;
  fillerOrderNumberUniversalId?: string;
  /** OSD.11 - Filler Order Number: Universal ID Type */
  osd_11?: string;
  fillerOrderNumberUniversalIdType?: string;
}
