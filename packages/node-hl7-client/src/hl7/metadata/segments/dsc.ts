import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DSC — Continuation Pointer
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DSC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DSC_SPEC: SegmentSpec = {
  description: "Continuation Pointer",
  fields: [
    {
      hl7Type: "ST",
      name: "Continuation Pointer",
      num: 1,
      usage: {
        "2.1": "O",
        "2.2": "O",
        "2.3": "O",
        "2.3.1": "O",
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
      hl7Type: "ID",
      length: { max: 1 },
      name: "Continuation Style",
      num: 2,
      table: 398,
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
  name: "DSC",
  versions: [
    "2.1",
    "2.2",
    "2.3",
    "2.3.1",
    "2.4",
    "2.5",
    "2.5.1",
    "2.6",
    "2.7",
    "2.7.1",
    "2.8",
  ],
};
