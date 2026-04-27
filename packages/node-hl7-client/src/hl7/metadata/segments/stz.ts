import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * STZ — Sterilization Parameter
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/STZ)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const STZ_SPEC: SegmentSpec = {
  name: "STZ",
  description: "Sterilization Parameter",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Sterilization Type",
      hl7Type: "CWE",
      table: 806,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Sterilization Cycle",
      hl7Type: "CWE",
      table: 702,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Maintenance Cycle",
      hl7Type: "CWE",
      table: 809,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Maintenance Type",
      hl7Type: "CWE",
      table: 811,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
