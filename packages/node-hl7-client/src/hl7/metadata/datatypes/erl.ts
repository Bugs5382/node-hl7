/**
 * ERL — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/ERL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`erl_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_ERL {
  componentNumber?: string;
  /** ERL.1 - Segment Id */
  erl_1?: string;
  /** ERL.2 - Segment Sequence */
  erl_2?: string;
  /** ERL.3 - Field Position */
  erl_3?: string;
  /** ERL.4 - Field Repetition */
  erl_4?: string;
  /** ERL.5 - Component Number */
  erl_5?: string;
  /** ERL.6 - Sub-component Number */
  erl_6?: string;
  fieldPosition?: string;
  fieldRepetition?: string;
  segmentId?: string;
  segmentSequence?: string;
  subComponentNumber?: string;
}
