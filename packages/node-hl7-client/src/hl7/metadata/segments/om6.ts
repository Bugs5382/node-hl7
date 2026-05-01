import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * OM6 — Observations That Are Calculated From Other Observations
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/OM6)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const OM6_SPEC: SegmentSpec = {
  description: "Observations That Are Calculated From Other Observations",
  fields: [
    {
      hl7Type: "NM",
      name: "Sequence Number - Test/Observation Master File",
      num: 1,
      usage: {
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
      hl7Type: "TX",
      name: "Derivation Rule",
      num: 2,
      usage: {
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
      hl7Type: "TX",
      length: { max: 10_240 },
      name: "Derivation Rule",
      num: 3,
      usage: { "2.2": "O" },
    },
  ],
  name: "OM6",
  versions: [
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
