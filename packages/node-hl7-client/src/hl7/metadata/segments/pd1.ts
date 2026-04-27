import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PD1 — Patient Additional Demographic
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PD1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PD1_SPEC: SegmentSpec = {
  name: "PD1",
  description: "Patient Additional Demographic",
  versions: ["2.1","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Living Dependency",
      hl7Type: "CWE",
      table: 223,
      usage: {"2.1":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Living Arrangement",
      hl7Type: "CWE",
      table: 220,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Patient Primary Facility",
      hl7Type: "XON",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Patient Primary Care Provider Name & Id No.",
      hl7Type: "ST",
      usage: {"2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Student Indicator",
      hl7Type: "CWE",
      table: 231,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Handicap",
      hl7Type: "CWE",
      table: 295,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Living Will Code",
      hl7Type: "CWE",
      table: 315,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Organ Donor Code",
      hl7Type: "CWE",
      table: 316,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Separate Bill",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Duplicate Patient",
      hl7Type: "CX",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Publicity Code",
      hl7Type: "CWE",
      table: 215,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Protection Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 13,
      name: "Protection Indicator Effective Date",
      hl7Type: "DT",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 14,
      name: "Place Of Worship",
      hl7Type: "XON",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Advance Directive Code",
      hl7Type: "CWE",
      table: 435,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 16,
      name: "Immunization Registry Status",
      hl7Type: "CWE",
      table: 441,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Immunization Registry Status Effective Date",
      hl7Type: "DT",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Publicity Code Effective Date",
      hl7Type: "DT",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Military Branch",
      hl7Type: "CWE",
      table: 140,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Military Rank/Grade",
      hl7Type: "CWE",
      table: 141,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Military Status",
      hl7Type: "CWE",
      table: 142,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Advance Directive Last Verified Date",
      hl7Type: "DT",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
