import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * FTS — File Trailer
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/FTS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const FTS_SPEC: SegmentSpec = {
  description: "File Trailer",
  fields: [
    {
      hl7Type: "NM",
      name: "File Batch Count",
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
      hl7Type: "ST",
      name: "File Trailer Comment",
      num: 2,
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
  ],
  name: "FTS",
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
