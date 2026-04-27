import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * IAM — Patient Adverse Reaction Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/IAM)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const IAM_SPEC: SegmentSpec = {
  name: "IAM",
  description: "Patient Adverse Reaction Information",
  versions: ["2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Iam",
      hl7Type: "SI",
      length: 4,
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Allergen Type Code",
      hl7Type: "CWE",
      table: 127,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Allergen Code/Mnemonic/Description",
      hl7Type: "CWE",
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Allergy Severity Code",
      hl7Type: "CWE",
      table: 128,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Allergy Reaction Code",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Allergy Action Code",
      hl7Type: "CNE",
      table: 206,
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 7,
      name: "Allergy Unique Identifier",
      hl7Type: "EI",
      usage: {"2.4":"R","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 8,
      name: "Action Reason",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Sensitivity To Causative Agent Code",
      hl7Type: "CWE",
      table: 436,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Allergen Group Code/Mnemonic/Description",
      hl7Type: "CWE",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Onset Date",
      hl7Type: "DT",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Onset Date Text",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Reported Date/Time",
      hl7Type: "DTM",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Reported By",
      hl7Type: "XPN",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Relationship To Patient Code",
      hl7Type: "CWE",
      table: 63,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Alert Device Code",
      hl7Type: "CWE",
      table: 437,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Allergy Clinical Status Code",
      hl7Type: "CWE",
      table: 438,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Statused By Person",
      hl7Type: "XCN",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Statused By Organization",
      hl7Type: "XON",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Statused At Date/Time",
      hl7Type: "DTM",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Inactivated By Person",
      hl7Type: "XCN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Inactivated Date/Time",
      hl7Type: "DTM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Initially Recorded By Person",
      hl7Type: "XCN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Initially Recorded Date/Time",
      hl7Type: "DTM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Modified By Person",
      hl7Type: "XCN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Modified Date/Time",
      hl7Type: "DTM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Clinician Identified Code",
      hl7Type: "CWE",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Initially Recorded By Organization",
      hl7Type: "XON",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Modified By Organization",
      hl7Type: "XON",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Inactivated By Organization",
      hl7Type: "XON",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
