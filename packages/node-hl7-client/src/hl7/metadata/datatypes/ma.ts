/**
 * MA — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/MA)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ma_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_MA {
  /** MA.1 - Sample 1 From Channel 1 */
  ma_1?: string;
  /** MA.2 - Sample 1 From Channel 2 */
  ma_2?: string;
  /** MA.3 - Sample 1 From Channel 3 */
  ma_3?: string;
  /** MA.4 - Sample 2 From Channel 1 */
  ma_4?: string;
  /** MA.5 - Sample 2 From Channel 2 */
  ma_5?: string;
  /** MA.6 - Sample 2 From Channel 3 */
  ma_6?: string;
  sample1FromChannel1?: string;
  sample1FromChannel2?: string;
  sample1FromChannel3?: string;
  sample2FromChannel1?: string;
  sample2FromChannel2?: string;
  sample2FromChannel3?: string;
}
