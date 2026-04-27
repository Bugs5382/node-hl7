import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PYE — Payee Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PYE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PYE_SPEC: SegmentSpec = {
  name: "PYE",
  description: "Payee Information",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pye",
      hl7Type: "SI",
      length: 4,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Payee Type",
      hl7Type: "CWE",
      table: 557,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Payee Relationship To Invoice (patient)",
      hl7Type: "CWE",
      table: 558,
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 4,
      name: "Payee Identification List",
      hl7Type: "XON",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Payee Person Name",
      hl7Type: "XPN",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Payee Address",
      hl7Type: "XAD",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 7,
      name: "Payment Method",
      hl7Type: "CWE",
      table: 570,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
