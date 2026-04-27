import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * OBX — Observation/result
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/OBX)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const OBX_SPEC: SegmentSpec = {
  name: "OBX",
  description: "Observation/result",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Obx",
      hl7Type: "SI",
      length: 4,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Value Type",
      hl7Type: "ID",
      length: 3,
      table: 125,
      usage: {"2.1":"O","2.2":"R","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Observation Identifier",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Observation Sub-id",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Observation Value",
      hl7Type: "varies",
      usage: {"2.1":"R","2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "References Range",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Interpretation Codes",
      hl7Type: "CWE",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Probability",
      hl7Type: "NM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Nature Of Abnormal Test",
      hl7Type: "ID",
      length: 2,
      table: 80,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Observation Result Status",
      hl7Type: "ID",
      length: 1,
      table: 85,
      usage: {"2.1":"O","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 12,
      name: "Effective Date Of Reference Range",
      hl7Type: "DTM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "User Defined Access Checks",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Date/Time Of The Observation",
      hl7Type: "DTM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Producer's Id",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 16,
      name: "Responsible Observer",
      hl7Type: "XCN",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 17,
      name: "Observation Method",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Equipment Instance Identifier",
      hl7Type: "EI",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 19,
      name: "Date/Time Of The Analysis",
      hl7Type: "DTM",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Observation Site",
      hl7Type: "CWE",
      table: 163,
      usage: {"2.5.1":"X","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Observation Instance Identifier",
      hl7Type: "EI",
      usage: {"2.5.1":"X","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Mood Code",
      hl7Type: "CNE",
      table: 725,
      usage: {"2.5.1":"X","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 23,
      name: "Performing Organization Name",
      hl7Type: "XON",
      usage: {"2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 24,
      name: "Performing Organization Address",
      hl7Type: "XAD",
      usage: {"2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 25,
      name: "Performing Organization Medical Director",
      hl7Type: "XCN",
      usage: {"2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 26,
      name: "Patient Results Release Category",
      hl7Type: "ID",
      length: 10,
      table: 909,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Root Cause",
      hl7Type: "CWE",
      table: 914,
      usage: {"2.8":"O"},
    },
    {
      num: 28,
      name: "Local Process Control",
      hl7Type: "CWE",
      table: 915,
      usage: {"2.8":"O"},
    },
  ],
};
