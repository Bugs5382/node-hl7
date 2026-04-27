import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * IAR — Allergy Reaction
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/IAR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const IAR_SPEC: SegmentSpec = {
  name: "IAR",
  description: "Allergy Reaction",
  versions: ["2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Allergy Reaction Code",
      hl7Type: "CWE",
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Allergy Severity Code",
      hl7Type: "CWE",
      table: 128,
      usage: {"2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Sensitivity To Causative Agent Code",
      hl7Type: "CWE",
      table: 436,
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Management",
      hl7Type: "ST",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
