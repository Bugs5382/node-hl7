import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * OM5 — Observation Batteries (sets)
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/OM5)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const OM5_SPEC: SegmentSpec = {
  name: "OM5",
  description: "Observation Batteries (sets)",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Sequence Number - Test/Observation Master File",
      hl7Type: "NM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Test/Observations Included Within An Ordered Test Battery",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Observation Id Suffixes",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Observation Id Suffixes",
      hl7Type: "ST",
      length: { max: 200 },
      usage: {"2.2":"O"},
    },
  ],
};
