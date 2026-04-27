import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ORG — Practitioner Organization Unit
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ORG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ORG_SPEC: SegmentSpec = {
  name: "ORG",
  description: "Practitioner Organization Unit",
  versions: ["2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Org",
      hl7Type: "SI",
      length: 4,
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Organization Unit Code",
      hl7Type: "CWE",
      table: 405,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Organization Unit Type Code",
      hl7Type: "CWE",
      table: 474,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Primary Org Unit Indicator",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Practitioner Org Unit Identifier",
      hl7Type: "CX",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Health Care Provider Type Code",
      hl7Type: "CWE",
      table: 452,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Health Care Provider Classification Code",
      hl7Type: "CWE",
      table: 453,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Health Care Provider Area Of Specialization Code",
      hl7Type: "CWE",
      table: 454,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Effective Date Range",
      hl7Type: "DR",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Employment Status Code",
      hl7Type: "CWE",
      table: 66,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Board Approval Indicator",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Primary Care Physician Indicator",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Cost Center Code",
      hl7Type: "CWE",
      table: 539,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
