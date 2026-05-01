import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ZL7 — (proposed Example Only)
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ZL7)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ZL7_SPEC: SegmentSpec = {
  description: "(proposed Example Only)",
  fields: [
    {
      hl7Type: "ST",
      name: "ZL7.1",
      num: 1,
      usage: { "2.8": "O" },
    },
  ],
  name: "ZL7",
  versions: ["2.8"],
};
