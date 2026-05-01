import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RFI — Request For Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RFI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RFI_SPEC: SegmentSpec = {
  description: "Request For Information",
  fields: [
    {
      hl7Type: "DTM",
      name: "Request Date",
      num: 1,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      hl7Type: "DTM",
      name: "Response Due Date",
      num: 2,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Patient Consent",
      num: 3,
      table: 136,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "DTM",
      name: "Date Additional Information Was Submitted",
      num: 4,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "RFI",
  versions: ["2.6", "2.7", "2.7.1", "2.8"],
};
