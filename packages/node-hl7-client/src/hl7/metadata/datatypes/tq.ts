/**
 * TQ — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/TQ)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`tq_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_TQ {
  /** TQ.1 - Quantity */
  tq_1?: string;
  quantity?: string;
  /** TQ.2 - Interval */
  tq_2?: string;
  interval?: string;
  /** TQ.3 - Duration */
  tq_3?: string;
  duration?: string;
  /** TQ.4 - Start Date/time */
  tq_4?: string;
  startDateTime?: string;
  /** TQ.5 - End Date/time */
  tq_5?: string;
  endDateTime?: string;
  /** TQ.6 - Priority */
  tq_6?: string;
  priority?: string;
  /** TQ.7 - Condition */
  tq_7?: string;
  condition?: string;
  /** TQ.8 - Text */
  tq_8?: string;
  text?: string;
  /** TQ.9 - Conjunction */
  tq_9?: string;
  conjunction?: string;
  /** TQ.10 - Order Sequencing */
  tq_10?: string;
  orderSequencing?: string;
  /** TQ.11 - Occurrence Duration */
  tq_11?: string;
  occurrenceDuration?: string;
  /** TQ.12 - Total Occurences */
  tq_12?: string;
  totalOccurences?: string;
}
