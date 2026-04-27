/**
 * CM_PRL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PRL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_prl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PRL {
  /** CM_PRL.1 - OBX-3-observation identifier of parent result */
  cm_prl_1?: string;
  obx3ObservationIdentifierOfParentResult?: string;
  /** CM_PRL.2 - OBX-4-sub-ID of parent result */
  cm_prl_2?: string;
  obx4SubIdOfParentResult?: string;
  /** CM_PRL.3 - OBX-5-observation results from parent */
  cm_prl_3?: string;
  obx5ObservationResultsFromParent?: string;
}
