import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ADJ — Adjustment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ADJ)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ADJ_SPEC: SegmentSpec = {
  name: "ADJ",
  description: "Adjustment",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Provider Adjustment Number",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Payer Adjustment Number",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Adjustment Sequence Number",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Adjustment Category",
      hl7Type: "CWE",
      table: 564,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Adjustment Amount",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Adjustment Quantity",
      hl7Type: "CQ",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Adjustment Reason Pa",
      hl7Type: "CWE",
      table: 565,
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 8,
      name: "Adjustment Description",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Original Value",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Substitute Value",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Adjustment Action",
      hl7Type: "CWE",
      table: 569,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Provider Adjustment Number Cross Reference",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Provider Product/Service Line Item Number Cross Reference",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Adjustment Date",
      hl7Type: "DTM",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 15,
      name: "Responsible Organization",
      hl7Type: "XON",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
