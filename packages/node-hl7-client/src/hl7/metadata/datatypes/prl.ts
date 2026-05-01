/**
 * PRL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PRL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`prl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PRL {
  obx3ObservationIdentifierOfParentResult?: string;
  obx4SubIdOfParentResult?: string;
  partOfObx5ObservationResultFromParent?: string;
  /** PRL.1 - OBX-3 Observation Identifier Of Parent Result */
  prl_1?: string;
  /** PRL.2 - OBX-4 Sub-ID Of Parent Result */
  prl_2?: string;
  /** PRL.3 - Part Of OBX-5 Observation Result From Parent */
  prl_3?: string;
}
