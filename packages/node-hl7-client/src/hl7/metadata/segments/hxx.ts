import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * Hxx — Any Hl7 Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/Hxx)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const Hxx_SPEC: SegmentSpec = {
  description: "Any Hl7 Segment",
  fields: [
    {
      hl7Type: "ST",
      name: "Hxx.1",
      num: 1,
      usage: { "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "Hxx",
  versions: ["2.7", "2.7.1", "2.8"],
};
