import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PKG — Item Packaging
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PKG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PKG_SPEC: SegmentSpec = {
  name: "PKG",
  description: "Item Packaging",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pkg",
      hl7Type: "SI",
      length: 4,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Packaging Units",
      hl7Type: "CWE",
      table: 818,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Default Order Unit Of Measure Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Package Quantity",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Price",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Future Item Price",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Future Item Price Effective Date",
      hl7Type: "DTM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Global Trade Item Number",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
  ],
};
