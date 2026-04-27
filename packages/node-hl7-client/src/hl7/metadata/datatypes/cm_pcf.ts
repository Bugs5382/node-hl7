/**
 * CM_PCF — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PCF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pcf_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PCF {
  /** CM_PCF.1 - Pre-certification Patient Type */
  cm_pcf_1?: string;
  preCertificationPatientType?: string;
  /** CM_PCF.2 - Pre-certication Required */
  cm_pcf_2?: string;
  preCerticationRequired?: string;
  /** CM_PCF.3 - Pre-certification Window */
  cm_pcf_3?: string;
  preCertificationWindow?: string;
}
