import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * SPR — Stored Procedure Request Definition
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/SPR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const SPR_SPEC: SegmentSpec = {
  name: "SPR",
  description: "Stored Procedure Request Definition",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6"],
  fields: [
    {
      num: 1,
      name: "Query Tag",
      hl7Type: "ST",
      length: { max: 32 },
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 2,
      name: "Query/Response Format Code",
      hl7Type: "ID",
      length: { max: 1 },
      table: 106,
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 3,
      name: "Stored Procedure Name",
      hl7Type: "CE",
      length: { max: 250 },
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", table: 396, usage: "W", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", table: 396, usage: "W", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Input Parameter List",
      hl7Type: "QIP",
      length: { max: 256 },
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
      components: [
        { num: 1, name: "Segment Field Name", hl7Type: "ST", length: { max: 12 }, usage: "R", rpt: "1" },
        { num: 2, name: "Values", hl7Type: "ST", length: { max: 199 }, usage: "R", rpt: "1" },
      ],
    },
  ],
};
