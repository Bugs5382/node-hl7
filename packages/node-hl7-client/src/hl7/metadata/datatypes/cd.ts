/**
 * CD — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cd_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CD {
  calibrationParameters?: string;
  /** CD.1 - Channel Identifier */
  cd_1?: string;
  /** CD.2 - Waveform source */
  cd_2?: string;
  /** CD.3 - Channel Sensitivity/units */
  cd_3?: string;
  /** CD.4 - Calibration Parameters */
  cd_4?: string;
  /** CD.5 - Sampling Frequency */
  cd_5?: string;
  /** CD.6 - Minimum/maximum Data Values */
  cd_6?: string;
  channelIdentifier?: string;
  channelSensitivityUnits?: string;
  minimumMaximumDataValues?: string;
  samplingFrequency?: string;
  waveformSource?: string;
}
