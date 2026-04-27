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
  /** CD.1 - Channel Identifier */
  cd_1?: string;
  channelIdentifier?: string;
  /** CD.2 - Waveform source */
  cd_2?: string;
  waveformSource?: string;
  /** CD.3 - Channel Sensitivity/units */
  cd_3?: string;
  channelSensitivityUnits?: string;
  /** CD.4 - Calibration Parameters */
  cd_4?: string;
  calibrationParameters?: string;
  /** CD.5 - Sampling Frequency */
  cd_5?: string;
  samplingFrequency?: string;
  /** CD.6 - Minimum/maximum Data Values */
  cd_6?: string;
  minimumMaximumDataValues?: string;
}
