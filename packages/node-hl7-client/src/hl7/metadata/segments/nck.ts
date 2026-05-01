import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * NCK — System Clock
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/NCK)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const NCK_SPEC: SegmentSpec = {
  description: "System Clock",
  fields: [
    {
      hl7Type: "DTM",
      length: { max: 24 },
      name: "System Date/Time",
      num: 1,
      usage: {
        "2.1": "R",
        "2.2": "R",
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
  ],
  name: "NCK",
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
