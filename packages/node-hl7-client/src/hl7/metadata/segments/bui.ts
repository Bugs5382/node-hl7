import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * BUI — Blood Unit information Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/BUI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const BUI_SPEC: SegmentSpec = {
  name: "BUI",
  description: "Blood Unit information Segment",
  versions: ["2.8"],
  fields: [
    {
      num: 1,
      name: "Set ID – BUI",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.8":"O"},
    },
    {
      num: 2,
      name: "Blood Unit Identifier",
      hl7Type: "EI",
      usage: {"2.8":"R"},
    },
    {
      num: 3,
      name: "Blood Unit Type",
      hl7Type: "CWE",
      table: 566,
      usage: {"2.8":"R"},
    },
    {
      num: 4,
      name: "Blood Unit Weight",
      hl7Type: "NM",
      usage: {"2.8":"R"},
    },
    {
      num: 5,
      name: "Weight Units",
      hl7Type: "CNE",
      table: 929,
      usage: {"2.8":"R"},
    },
    {
      num: 6,
      name: "Blood Unit Volume",
      hl7Type: "NM",
      usage: {"2.8":"R"},
    },
    {
      num: 7,
      name: "Volume Units",
      hl7Type: "CNE",
      table: 930,
      usage: {"2.8":"R"},
    },
    {
      num: 8,
      name: "Container Catalog Number",
      hl7Type: "ST",
      usage: {"2.8":"R"},
    },
    {
      num: 9,
      name: "Container Lot Number",
      hl7Type: "ST",
      usage: {"2.8":"R"},
    },
    {
      num: 10,
      name: "Container Manufacturer",
      hl7Type: "XON",
      usage: {"2.8":"R"},
    },
    {
      num: 11,
      name: "Transport Temperature",
      hl7Type: "NR",
      usage: {"2.8":"R"},
    },
    {
      num: 12,
      name: "Transport Temperature Units",
      hl7Type: "CNE",
      table: 931,
      usage: {"2.8":"R"},
    },
  ],
};
