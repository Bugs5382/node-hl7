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
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "Payer Product/Service Group Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 3,
      name: "Product/Service Group Sequence Number",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Adjudicate As Group",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Product/Service Group Billed Amount",
      hl7Type: "CP",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Price", hl7Type: "MO", usage: "R", rpt: "1" },
        { num: 2, name: "Price Type", hl7Type: "ID", length: { max: 2 }, table: 205, usage: "O", rpt: "1" },
        { num: 3, name: "From Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 4, name: "To Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 5, name: "Range Units", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 6, name: "Range Type", hl7Type: "ID", length: { max: 1 }, table: 298, usage: "O", rpt: "1" },
      ],
    },
    {
      num: 6,
      name: "Product/Service Group Description",
      hl7Type: "ST",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
  ],
};
