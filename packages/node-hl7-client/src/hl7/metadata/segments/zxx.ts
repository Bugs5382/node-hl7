import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * Zxx — Any Z Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/Zxx)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const Zxx_SPEC: SegmentSpec = {
  name: "Zxx",
  description: "Any Z Segment",
  versions: ["2.2","2.8"],
  fields: [
    {
      num: 1,
      name: "Zxx.1",
      hl7Type: "ST",
      usage: {"2.2":"O","2.8":"O"},
    },
  ],
};
