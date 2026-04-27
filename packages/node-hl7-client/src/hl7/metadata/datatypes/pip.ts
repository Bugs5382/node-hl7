/**
 * PIP — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/PIP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`pip_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_PIP {
  /** PIP.1 - Privilege */
  pip_1?: string;
  privilege?: string;
  /** PIP.2 - Privilege Class */
  pip_2?: string;
  privilegeClass?: string;
  /** PIP.3 - Expiration Date */
  pip_3?: string;
  expirationDate?: string;
  /** PIP.4 - Activation Date */
  pip_4?: string;
  activationDate?: string;
  /** PIP.5 - Facility */
  pip_5?: string;
  facility?: string;
}
