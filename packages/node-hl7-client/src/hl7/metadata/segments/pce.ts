import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PCE — Patient Charge Cost Center Exceptions
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PCE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PCE_SPEC: SegmentSpec = {
  name: "PCE",
  description: "Patient Charge Cost Center Exceptions",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pce",
      hl7Type: "SI",
      length: 4,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Cost Center Account Number",
      hl7Type: "CX",
      table: 319,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Transaction Code",
      hl7Type: "CWE",
      table: 132,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Transaction Amount - Unit",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
