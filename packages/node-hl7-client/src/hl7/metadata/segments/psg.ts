import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PSG — Product/service Group
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PSG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PSG_SPEC: SegmentSpec = {
  name: "PSG",
  description: "Product/service Group",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Provider Product/Service Group Number",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Payer Product/Service Group Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Product/Service Group Sequence Number",
      hl7Type: "SI",
      length: 4,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Adjudicate As Group",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Product/Service Group Billed Amount",
      hl7Type: "CP",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Product/Service Group Description",
      hl7Type: "ST",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
  ],
};
