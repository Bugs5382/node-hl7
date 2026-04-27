/**
 * CNN — composite HL7 data type.
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/CNN)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run
 * the generator instead.
 *
 * Both numeric (`cnn_<n>`) and camelCase keys are accepted; pick
 * whichever reads better. The runtime composer joins set components
 * with the HL7 component separator (`^`) and validates each piece.
 *
 * @since 4.0.0
 */
export interface HL7_CNN {
  /** CNN.1 - ID Number */
  cnn_1?: string;
  idNumber?: string;
  /** CNN.2 - Family Name */
  cnn_2?: string;
  familyName?: string;
  /** CNN.3 - Given Name */
  cnn_3?: string;
  givenName?: string;
  /** CNN.4 - Second And Further Given Names Or Initials Thereof */
  cnn_4?: string;
  secondAndFurtherGivenNamesOrInitialsThereof?: string;
  /** CNN.5 - Suffix */
  cnn_5?: string;
  suffix?: string;
  /** CNN.6 - Prefix */
  cnn_6?: string;
  prefix?: string;
  /** CNN.7 - Degree */
  cnn_7?: string;
  degree?: string;
  /** CNN.8 - Source Table */
  cnn_8?: string;
  sourceTable?: string;
  /** CNN.9 - Assigning Authority Namespace ID */
  cnn_9?: string;
  assigningAuthorityNamespaceId?: string;
  /** CNN.10 - Assigning Authority Universal ID */
  cnn_10?: string;
  assigningAuthorityUniversalId?: string;
  /** CNN.11 - Assigning Authority Universal ID Type */
  cnn_11?: string;
  assigningAuthorityUniversalIdType?: string;
}
