import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DG1 — Diagnosis
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DG1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DG1_SPEC: SegmentSpec = {
  name: "DG1",
  description: "Diagnosis",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Dg1",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Diagnosis Coding Method",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 3,
      name: "Diagnosis Code - Dg1",
      hl7Type: "CWE",
      table: 51,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Diagnosis Description",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Diagnosis Date/Time",
      hl7Type: "DTM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Diagnosis Type",
      hl7Type: "CWE",
      table: 52,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 7,
      name: "Major Diagnostic Category",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 8,
      name: "Diagnostic Related Group",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 9,
      name: "Drg Approval Indicator",
      hl7Type: "ST",
      length: { max: 1 },
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 10,
      name: "Drg Grouper Review Code",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 11,
      name: "Outlier Type",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 12,
      name: "Outlier Days",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 13,
      name: "Outlier Cost",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 14,
      name: "Grouper Version And Type",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 15,
      name: "Diagnosis Priority",
      hl7Type: "NM",
      table: 359,
      usage: {"2.2":"O","2.3":"B","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Diagnosing Clinician",
      hl7Type: "XCN",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Diagnosis Classification",
      hl7Type: "CWE",
      table: 228,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Confidential Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Attestation Date/Time",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Diagnosis Identifier",
      hl7Type: "EI",
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 21,
      name: "Diagnosis Action Code",
      hl7Type: "ID",
      length: { max: 1 },
      table: 206,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 22,
      name: "Parent Diagnosis",
      hl7Type: "EI",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 23,
      name: "Drg Ccl Value Code",
      hl7Type: "CWE",
      table: 728,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Drg Grouping Usage",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Drg Diagnosis Determination Status",
      hl7Type: "CWE",
      table: 731,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Present On Admission (poa) Indicator",
      hl7Type: "CWE",
      table: 895,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
