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
  description: "Sterilization Lot",
  fields: [
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Device Number",
      num: 1,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "ST",
      name: "Device Name",
      num: 2,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Lot Number",
      num: 3,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Item Identifier",
      num: 4,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "ST",
      name: "Bar Code",
      num: 5,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "SLT",
  versions: ["2.6", "2.7", "2.7.1", "2.8"],
};
