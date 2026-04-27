import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * VND — Purchasing Vendor
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/VND)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const VND_SPEC: SegmentSpec = {
  name: "VND",
  description: "Purchasing Vendor",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Vnd",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Vendor Identifier",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Vendor Name",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Vendor Catalog Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Primary Vendor Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
