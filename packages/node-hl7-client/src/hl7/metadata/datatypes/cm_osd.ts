/**
 * CM_OSD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_OSD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_osd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_OSD {
  /** CM_OSD.1 - Sequence/results Flag */
  cm_osd_1?: string;
  sequenceResultsFlag?: string;
  /** CM_OSD.2 - Placer Order Number Entity Identifier */
  cm_osd_2?: string;
  placerOrderNumberEntityIdentifier?: string;
  /** CM_OSD.3 - Placer Order Number Namespace ID */
  cm_osd_3?: string;
  placerOrderNumberNamespaceId?: string;
  /** CM_OSD.4 - Filler Order Number Entity Identifier */
  cm_osd_4?: string;
  fillerOrderNumberEntityIdentifier?: string;
  /** CM_OSD.5 - Filler Order Number Namespace ID */
  cm_osd_5?: string;
  fillerOrderNumberNamespaceId?: string;
  /** CM_OSD.6 - Sequence Condition Value */
  cm_osd_6?: string;
  sequenceConditionValue?: string;
  /** CM_OSD.7 - Maximum Number Of Repeats */
  cm_osd_7?: string;
  maximumNumberOfRepeats?: string;
  /** CM_OSD.8 - Placer Order Number Universal ID */
  cm_osd_8?: string;
  placerOrderNumberUniversalId?: string;
  /** CM_OSD.9 - Placer Order Number Universal ID Type */
  cm_osd_9?: string;
  placerOrderNumberUniversalIdType?: string;
  /** CM_OSD.10 - Filler Order Number Universal ID */
  cm_osd_10?: string;
  fillerOrderNumberUniversalId?: string;
  /** CM_OSD.11 - Filler Order Number Universal ID Type */
  cm_osd_11?: string;
  fillerOrderNumberUniversalIdType?: string;
}
