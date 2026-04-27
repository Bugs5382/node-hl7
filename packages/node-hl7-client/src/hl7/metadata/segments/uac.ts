import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * UAC — User Authentication Credential Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/UAC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const UAC_SPEC: SegmentSpec = {
  name: "UAC",
  description: "User Authentication Credential Segment",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "User Authentication Credential Type Code",
      hl7Type: "CWE",
      table: 615,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "User Authentication Credential",
      hl7Type: "ED",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
  ],
};
