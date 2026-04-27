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
  name: "ZL7",
  description: "(proposed Example Only)",
  versions: ["2.8"],
  fields: [
    {
      num: 1,
      name: "ZL7.1",
      hl7Type: "ST",
      usage: {"2.8":"O"},
    },
  ],
};
