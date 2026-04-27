import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RQ1 — Requisition Detail-1
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RQ1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RQ1_SPEC: SegmentSpec = {
  name: "RQ1",
  description: "Requisition Detail-1",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Anticipated Price",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Manufacturer Identifier",
      hl7Type: "CWE",
      table: 385,
      usage: {"2.2":"O","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Manufacturer's Catalog",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 4,
      name: "Vendor Id",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Vendor Catalog",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Taxable",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Substitute Allowed",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
