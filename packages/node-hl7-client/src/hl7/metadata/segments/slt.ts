import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * SLT — Sterilization Lot
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/SLT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const SLT_SPEC: SegmentSpec = {
  name: "SLT",
  description: "Sterilization Lot",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Device Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "Device Name",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Lot Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Item Identifier",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 5,
      name: "Bar Code",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
