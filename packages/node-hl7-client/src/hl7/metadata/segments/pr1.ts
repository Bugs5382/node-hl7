import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PR1 — Procedures
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PR1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PR1_SPEC: SegmentSpec = {
  name: "PR1",
  description: "Procedures",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pr1",
      hl7Type: "SI",
      length: 4,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Procedure Coding Method",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 3,
      name: "Procedure Code",
      hl7Type: "CNE",
      table: 88,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Procedure Description",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Procedure Date/Time",
      hl7Type: "DTM",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Procedure Functional Type",
      hl7Type: "CWE",
      table: 230,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Procedure Minutes",
      hl7Type: "NM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Anesthesiologist",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"B","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 9,
      name: "Anesthesia Code",
      hl7Type: "CWE",
      table: 19,
      usage: {"2.1":"O","2.2":"B","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Anesthesia Minutes",
      hl7Type: "NM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Surgeon",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"B","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 12,
      name: "Procedure Practitioner",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 13,
      name: "Consent Code",
      hl7Type: "CWE",
      table: 59,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Procedure Priority",
      hl7Type: "NM",
      length: 2,
      table: 418,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Associated Diagnosis Code",
      hl7Type: "CWE",
      table: 51,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Procedure Code Modifier",
      hl7Type: "CNE",
      table: 340,
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Procedure Drg Type",
      hl7Type: "CWE",
      table: 416,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Tissue Type Code",
      hl7Type: "CWE",
      table: 417,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Procedure Identifier",
      hl7Type: "EI",
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 20,
      name: "Procedure Action Code",
      hl7Type: "ID",
      length: 1,
      table: 206,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 21,
      name: "Drg Procedure Determination Status",
      hl7Type: "CWE",
      table: 761,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Drg Procedure Relevance",
      hl7Type: "CWE",
      table: 763,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Treating Organizational Unit",
      hl7Type: "PL",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Respiratory Within Surgery",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Parent Procedure Id",
      hl7Type: "EI",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
