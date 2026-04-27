/**
 * CM_PIP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CM_PIP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cm_pip_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CM_PIP {
  /** CM_PIP.1 - Privilege */
  cm_pip_1?: string;
  privilege?: string;
  /** CM_PIP.2 - Privilege Class */
  cm_pip_2?: string;
  privilegeClass?: string;
  /** CM_PIP.3 - Expiration Date */
  cm_pip_3?: string;
  expirationDate?: string;
  /** CM_PIP.4 - Activation Date */
  cm_pip_4?: string;
  activationDate?: string;
}
