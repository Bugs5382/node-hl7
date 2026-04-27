import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DMI — Drg Master File Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DMI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DMI_SPEC: SegmentSpec = {
  name: "DMI",
  description: "Drg Master File Information",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Diagnostic Related Group",
      hl7Type: "CNE",
      table: 55,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Major Diagnostic Category",
      hl7Type: "CNE",
      table: 118,
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Lower And Upper Trim Points",
      hl7Type: "NR",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 4,
      name: "Average Length Of Stay",
      hl7Type: "NM",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Relative Weight",
      hl7Type: "NM",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
  ],
};
