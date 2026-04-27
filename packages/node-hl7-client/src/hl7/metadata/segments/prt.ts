import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PRT — Participation Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PRT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PRT_SPEC: SegmentSpec = {
  name: "PRT",
  description: "Participation Information",
  versions: ["2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Participation Instance Id",
      hl7Type: "EI",
      length: { max: 4 },
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 2,
      name: "Action Code",
      hl7Type: "ID",
      length: { max: 2 },
      table: 287,
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Action Reason",
      hl7Type: "CWE",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Participation",
      hl7Type: "CWE",
      table: 912,
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Participation Person",
      hl7Type: "XCN",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Participation Person Provider Type",
      hl7Type: "CWE",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 7,
      name: "Participant Organization Unit Type",
      hl7Type: "CWE",
      table: 406,
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 8,
      name: "Participation Organization",
      hl7Type: "XON",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 9,
      name: "Participant Location",
      hl7Type: "PL",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 10,
      name: "Participation Device",
      hl7Type: "EI",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 11,
      name: "Participation Begin Date/Time (arrival Time)",
      hl7Type: "DTM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Participation End Date/Time (departure Time)",
      hl7Type: "DTM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Participation Qualitative Duration",
      hl7Type: "CWE",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Participation Address",
      hl7Type: "XAD",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 15,
      name: "Participant Telecommunication Address",
      hl7Type: "XTN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
