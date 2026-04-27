import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * NDS — Notification Detail
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/NDS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const NDS_SPEC: SegmentSpec = {
  name: "NDS",
  description: "Notification Detail",
  versions: ["2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Notification Reference Number",
      hl7Type: "NM",
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Notification Date/Time",
      hl7Type: "DTM",
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Notification Alert Severity",
      hl7Type: "CWE",
      table: 367,
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Notification Code",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
  ],
};
