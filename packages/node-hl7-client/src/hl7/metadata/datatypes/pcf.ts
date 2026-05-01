/**
 * PCF — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PCF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pcf_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PCF {
  /** PCF.1 - Pre-certification Patient Type */
  pcf_1?: string;
  /** PCF.2 - Pre-certification Required */
  pcf_2?: string;
  /** PCF.3 - Pre-certification Window */
  pcf_3?: string;
  preCertificationPatientType?: string;
  preCertificationRequired?: string;
  preCertificationWindow?: string;
}
