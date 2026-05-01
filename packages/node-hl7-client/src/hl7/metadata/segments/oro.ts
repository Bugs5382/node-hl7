import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ORO — Order Other
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ORO)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ORO_SPEC: SegmentSpec = {
  description: "Order Other",
  fields: [
    {
      components: [
        { hl7Type: "ID", name: "Identifier", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "CE",
      length: { max: 200 },
      name: "Order Item Id",
      num: 1,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Substitute Allowed",
      num: 2,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CN",
      length: { max: 80 },
      name: "Results Copies To",
      num: 3,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 2 },
      name: "Stock Location",
      num: 4,
      table: 12,
      usage: { "2.1": "O" },
    },
  ],
  name: "ORO",
  versions: ["2.1"],
};
