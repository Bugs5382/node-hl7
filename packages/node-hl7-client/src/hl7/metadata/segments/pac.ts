import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PAC — Shipment Package
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PAC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PAC_SPEC: SegmentSpec = {
  name: "PAC",
  description: "Shipment Package",
  versions: ["2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pac",
      hl7Type: "SI",
      length: 4,
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Package Id",
      hl7Type: "EI",
      usage: {"2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Parent Package Id",
      hl7Type: "EI",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Position In Parent Package",
      hl7Type: "NA",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Package Type",
      hl7Type: "CWE",
      table: 908,
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Package Condition",
      hl7Type: "CWE",
      table: 544,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Package Handling Code",
      hl7Type: "CWE",
      table: 376,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Package Risk Code",
      hl7Type: "CWE",
      table: 489,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
