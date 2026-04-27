import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * TQ1 — Timing/quantity
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/TQ1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const TQ1_SPEC: SegmentSpec = {
  name: "TQ1",
  description: "Timing/quantity",
  versions: ["2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Tq1",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Quantity",
      hl7Type: "CQ",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "Units", hl7Type: "CWE", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 3,
      name: "Repeat Pattern",
      hl7Type: "RPT",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Repeat Pattern Code", hl7Type: "CWE", table: 335, usage: "R", rpt: "1" },
        { num: 2, name: "Calendar Alignment", hl7Type: "ID", length: { max: 2 }, table: 527, usage: "O", rpt: "1" },
        { num: 3, name: "Phase Range Begin Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 4, name: "Phase Range End Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 5, name: "Period Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 6, name: "Period Units", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 7, name: "Institution Specified Time", hl7Type: "ID", length: { max: 1 }, table: 136, usage: "O", rpt: "1" },
        { num: 8, name: "Event", hl7Type: "ID", length: { max: 3 }, table: 528, usage: "O", rpt: "1" },
        { num: 9, name: "Event Offset Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 10, name: "Event Offset Units", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 11, name: "General Timing Specification", hl7Type: "GTS", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Explicit Time",
      hl7Type: "TM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Relative Time And Units",
      hl7Type: "CQ",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "Units", hl7Type: "CWE", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 6,
      name: "Service Duration",
      hl7Type: "CQ",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "Units", hl7Type: "CWE", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 7,
      name: "Start Date/Time",
      hl7Type: "DTM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "End Date/Time",
      hl7Type: "DTM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Priority",
      hl7Type: "CWE",
      table: 485,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 7, name: "Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 8, name: "Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 9, name: "Original Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Second Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 11, name: "Second Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Name Of Second Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 13, name: "Second Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 14, name: "Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 15, name: "Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 16, name: "Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 17, name: "Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 18, name: "Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 19, name: "Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 20, name: "Second Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 21, name: "Second Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 22, name: "Second Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
      ],
    },
    {
      num: 10,
      name: "Condition Text",
      hl7Type: "TX",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Text Instruction",
      hl7Type: "TX",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Conjunction",
      hl7Type: "ID",
      length: { max: 1 },
      table: 472,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 13,
      name: "Occurrence Duration",
      hl7Type: "CQ",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Quantity", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "Units", hl7Type: "CWE", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 14,
      name: "Total Occurrences",
      hl7Type: "NM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
