import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * QRF — Withdrawn
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/QRF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const QRF_SPEC: SegmentSpec = {
  name: "QRF",
  description: "Withdrawn",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "QRF.1",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "When Data Start Date/Time",
      hl7Type: "DTM",
      length: { max: 24 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B"},
    },
    {
      num: 3,
      name: "When Data End Date/Time",
      hl7Type: "DTM",
      length: { max: 24 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B"},
    },
    {
      num: 4,
      name: "What User Qualifier",
      hl7Type: "ST",
      length: { max: 60 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 5,
      name: "Other QRY Subject Filter",
      hl7Type: "ST",
      length: { max: 60 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 6,
      name: "Which Date/Time Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 156,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 7,
      name: "Which Date/Time Status Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 157,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 8,
      name: "Date/Time Selection Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 158,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 9,
      name: "When Quantity/Timing Qualifier",
      hl7Type: "TQ",
      length: { max: 60 },
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B"},
    },
    {
      num: 10,
      name: "Search Confidence Threshold",
      hl7Type: "NM",
      length: { max: 10 },
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
  ],
};
