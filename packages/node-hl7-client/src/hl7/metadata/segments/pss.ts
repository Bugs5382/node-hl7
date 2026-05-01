import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PSS — Product/service Section
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PSS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PSS_SPEC: SegmentSpec = {
  description: "Product/service Section",
  fields: [
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Provider Product/Service Section Number",
      num: 1,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Payer Product/Service Section Number",
      num: 2,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "SI",
      length: { max: 4 },
      name: "Product/Service Section Sequence Number",
      num: 3,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      components: [
        { hl7Type: "MO", name: "Price", num: 1, rpt: "1", usage: "R" },
        {
          hl7Type: "ID",
          length: { max: 2 },
          name: "Price Type",
          num: 2,
          rpt: "1",
          table: 205,
          usage: "O",
        },
        { hl7Type: "NM", name: "From Value", num: 3, rpt: "1", usage: "O" },
        { hl7Type: "NM", name: "To Value", num: 4, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Range Units", num: 5, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 1 },
          name: "Range Type",
          num: 6,
          rpt: "1",
          table: 298,
          usage: "O",
        },
      ],
      hl7Type: "CP",
      name: "Billed Amount",
      num: 4,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      hl7Type: "ST",
      name: "Section Description Or Heading",
      num: 5,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
  ],
  name: "PSS",
  versions: ["2.6", "2.7", "2.7.1", "2.8"],
};
