import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * EQL — Embedded Query Language
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/EQL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const EQL_SPEC: SegmentSpec = {
  description: "Embedded Query Language",
  fields: [
    {
      hl7Type: "ST",
      length: { max: 32 },
      name: "Query Tag",
      num: 1,
      usage: {
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
      },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Query/Response Format Code",
      num: 2,
      table: 106,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
      },
    },
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "W" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "W" },
        {
          hl7Type: "ID",
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "W",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "W",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "W" },
        {
          hl7Type: "ID",
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "W",
        },
      ],
      hl7Type: "CE",
      length: { max: 250 },
      name: "EQL Query Name",
      num: 3,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
      },
    },
    {
      hl7Type: "ST",
      length: { max: 4096 },
      name: "EQL Query Statement",
      num: 4,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
      },
    },
  ],
  name: "EQL",
  versions: ["2.3", "2.3.1", "2.4", "2.5", "2.5.1", "2.6"],
};
