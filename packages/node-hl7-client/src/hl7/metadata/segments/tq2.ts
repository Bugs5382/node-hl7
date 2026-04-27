import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * TQ2 — Timing/quantity Relationship
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/TQ2)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const TQ2_SPEC: SegmentSpec = {
  name: "TQ2",
  description: "Timing/quantity Relationship",
  versions: ["2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Tq2",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Sequence/Results Flag",
      hl7Type: "ID",
      length: { max: 1 },
      table: 503,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Related Placer Number",
      hl7Type: "EI",
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Related Filler Number",
      hl7Type: "EI",
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 5,
      name: "Related Placer Group Number",
      hl7Type: "EI",
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 6,
      name: "Sequence Condition Code",
      hl7Type: "ID",
      table: 504,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 7,
      name: "Cyclic Entry/Exit Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 505,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 8,
      name: "Sequence Condition Time Interval",
      hl7Type: "CQ",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "Units", hl7Type: "CWE", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 9,
      name: "Cyclic Group Maximum Number Of Repeats",
      hl7Type: "NM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Special Service Request Relationship",
      hl7Type: "ID",
      length: { max: 1 },
      table: 506,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
  ],
};
