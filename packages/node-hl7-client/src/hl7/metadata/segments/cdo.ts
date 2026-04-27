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
  name: "CDO",
  description: "Cumulative Dosage",
  versions: ["2.8"],
  fields: [
    {
      num: 1,
      name: "Set ID – CDO",
      hl7Type: "SI",
      usage: {"2.8":"O"},
    },
    {
      num: 2,
      name: "Action Code",
      hl7Type: "ID",
      table: 206,
      usage: {"2.8":"O"},
    },
    {
      num: 3,
      name: "Cumulative Dosage Limit",
      hl7Type: "CQ",
      usage: {"2.8":"O"},
    },
    {
      num: 4,
      name: "Cumulative Dosage Limit Time Interval",
      hl7Type: "CQ",
      table: 924,
      usage: {"2.8":"O"},
    },
  ],
};
