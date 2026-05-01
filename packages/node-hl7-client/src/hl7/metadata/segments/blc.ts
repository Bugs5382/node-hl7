import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * BLC — Blood Code
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/BLC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const BLC_SPEC: SegmentSpec = {
  description: "Blood Code",
  fields: [
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Coding System Version Id",
          num: 7,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Version Id",
          num: 8,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Original Text", num: 9, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Second Alternate Identifier",
          num: 10,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Text",
          num: 11,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Second Alternate Coding System",
          num: 12,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Version Id",
          num: 13,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Coding System Oid",
          num: 14,
          rpt: "1",
          usage: "D",
        },
        { hl7Type: "ST", name: "Value Set Oid", num: 15, rpt: "1", usage: "O" },
        {
          hl7Type: "DTM",
          name: "Value Set Version Id",
          num: 16,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Oid",
          num: 17,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Value Set Oid",
          num: 18,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Alternate Value Set Version Id",
          num: 19,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Oid",
          num: 20,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Value Set Oid",
          num: 21,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Second Alternate Value Set Version Id",
          num: 22,
          rpt: "1",
          usage: "D",
        },
      ],
      hl7Type: "CWE",
      name: "Blood Product Code",
      num: 1,
      table: 426,
      usage: {
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Blood Amount",
      num: 2,
      usage: {
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
  ],
  name: "BLC",
  versions: ["2.4", "2.5", "2.5.1", "2.6", "2.7", "2.7.1", "2.8"],
};
