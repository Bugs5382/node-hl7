/**
 * DLD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/DLD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`dld_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_DLD {
  dischargeLocation?: string;
  /** DLD.1 - Discharge Location */
  dld_1?: string;
  /** DLD.2 - Effective Date */
  dld_2?: string;
  effectiveDate?: string;
}
