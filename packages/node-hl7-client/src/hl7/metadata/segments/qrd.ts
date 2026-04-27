import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * QRD — Withdrawn
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/QRD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const QRD_SPEC: SegmentSpec = {
  name: "QRD",
  description: "Withdrawn",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "QRD.1",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Query Format Code",
      hl7Type: "ID",
      length: { max: 1 },
      table: 106,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 3,
      name: "Query Priority",
      hl7Type: "ID",
      length: { max: 1 },
      table: 91,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 4,
      name: "Query ID",
      hl7Type: "ST",
      length: { max: 10 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 5,
      name: "Deferred Response Type",
      hl7Type: "ID",
      length: { max: 1 },
      table: 107,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 6,
      name: "Deferred Response Date/Time",
      hl7Type: "DTM",
      length: { max: 24 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 7,
      name: "Quantity Limited Request",
      hl7Type: "CQ",
      length: { max: 10 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 8,
      name: "Who Subject Filter",
      hl7Type: "XCN",
      length: { max: 250 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 9,
      name: "What Subject Filter",
      hl7Type: "CWE",
      length: { max: 250 },
      table: 48,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 10,
      name: "What Department Data Code",
      hl7Type: "CWE",
      length: { max: 250 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 11,
      name: "What Data Code Value Qual.",
      hl7Type: "VR",
      length: { max: 20 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 12,
      name: "Query Results Level",
      hl7Type: "ID",
      length: { max: 1 },
      table: 108,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
  ],
};
