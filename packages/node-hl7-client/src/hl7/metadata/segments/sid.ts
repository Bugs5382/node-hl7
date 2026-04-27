import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * SID — Substance Identifier
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/SID)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const SID_SPEC: SegmentSpec = {
  name: "SID",
  description: "Substance Identifier",
  versions: ["2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Application/Method Identifier",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 2,
      name: "Substance Lot Number",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Substance Container Identifier",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 4,
      name: "Substance Manufacturer Identifier",
      hl7Type: "CWE",
      table: 385,
      usage: {"2.4":"O","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
  ],
};
