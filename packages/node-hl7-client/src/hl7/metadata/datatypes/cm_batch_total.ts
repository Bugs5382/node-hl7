/**
 * CM_BATCH_TOTAL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_BATCH_TOTAL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_batch_total_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_BATCH_TOTAL {
  /** CM_BATCH_TOTAL.1 - Batch Total 1 */
  cm_batch_total_1?: string;
  batchTotal1?: string;
  /** CM_BATCH_TOTAL.2 - Batch Total 2 */
  cm_batch_total_2?: string;
  batchTotal2?: string;
  /** CM_BATCH_TOTAL.3 - ... */
  cm_batch_total_3?: string;
  field3?: string;
}
