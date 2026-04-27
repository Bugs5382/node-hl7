/**
 * CCP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CCP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`ccp_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CCP {
  /** CCP.1 - Channel Calibration Sensitivity Correction Factor */
  ccp_1?: string;
  channelCalibrationSensitivityCorrectionFactor?: string;
  /** CCP.2 - Channel Calibration Baseline */
  ccp_2?: string;
  channelCalibrationBaseline?: string;
  /** CCP.3 - Channel Calibration Time Skew */
  ccp_3?: string;
  channelCalibrationTimeSkew?: string;
}
