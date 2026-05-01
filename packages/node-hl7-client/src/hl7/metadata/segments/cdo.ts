import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * CDO — Cumulative Dosage
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/CDO)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const CDO_SPEC: SegmentSpec = {
  description: "Cumulative Dosage",
  fields: [
    {
      hl7Type: "SI",
      name: "Set ID – CDO",
      num: 1,
      usage: { "2.8": "O" },
    },
    {
      hl7Type: "ID",
      name: "Action Code",
      num: 2,
      table: 206,
      usage: { "2.8": "O" },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Cumulative Dosage Limit",
      num: 3,
      usage: { "2.8": "O" },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Cumulative Dosage Limit Time Interval",
      num: 4,
      table: 924,
      usage: { "2.8": "O" },
    },
  ],
  name: "CDO",
  versions: ["2.8"],
};
