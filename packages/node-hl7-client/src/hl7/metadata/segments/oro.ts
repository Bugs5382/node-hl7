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
  name: "ORO",
  description: "Order Other",
  versions: ["2.1"],
  fields: [
    {
      num: 1,
      name: "Order Item Id",
      hl7Type: "CE",
      length: { max: 200 },
      usage: {"2.1":"O"},
    },
    {
      num: 2,
      name: "Substitute Allowed",
      hl7Type: "ID",
      length: { max: 1 },
      usage: {"2.1":"O"},
    },
    {
      num: 3,
      name: "Results Copies To",
      hl7Type: "CN",
      length: { max: 80 },
      usage: {"2.1":"O"},
    },
    {
      num: 4,
      name: "Stock Location",
      hl7Type: "ID",
      length: { max: 2 },
      table: 12,
      usage: {"2.1":"O"},
    },
  ],
};
