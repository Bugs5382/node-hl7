import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * SHP — Shipment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/SHP)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const SHP_SPEC: SegmentSpec = {
  name: "SHP",
  description: "Shipment",
  versions: ["2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Shipment Id",
      hl7Type: "EI",
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Internal Shipment Id",
      hl7Type: "EI",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Shipment Status",
      hl7Type: "CWE",
      table: 905,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Shipment Status Date/Time",
      hl7Type: "DTM",
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Shipment Status Reason",
      hl7Type: "TX",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Shipment Priority",
      hl7Type: "CWE",
      table: 906,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Shipment Confidentiality",
      hl7Type: "CWE",
      table: 907,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Number Of Packages In Shipment",
      hl7Type: "NM",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Shipment Condition",
      hl7Type: "CWE",
      table: 544,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Shipment Handling Code",
      hl7Type: "CWE",
      table: 376,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Shipment Risk Code",
      hl7Type: "CWE",
      table: 489,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
