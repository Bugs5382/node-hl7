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
  name: "Hxx",
  description: "Any Hl7 Segment",
  versions: ["2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Hxx.1",
      hl7Type: "ST",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
