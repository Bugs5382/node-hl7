import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * SFT — Software Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/SFT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const SFT_SPEC: SegmentSpec = {
  description: "Software Segment",
  fields: [
    {
      components: [
        {
          hl7Type: "ST",
          name: "Organization Name",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "CWE",
          name: "Organization Name Type Code",
          num: 2,
          rpt: "1",
          table: 204,
          usage: "O",
        },
        { hl7Type: "ST", name: "Id Number", num: 3, rpt: "1", usage: "W" },
        {
          hl7Type: "ST",
          name: "Identifier Check Digit",
          num: 4,
          rpt: "1",
          usage: "W",
        },
        {
          hl7Type: "ST",
          length: { max: 3 },
          name: "Check Digit Scheme",
          num: 5,
          rpt: "1",
          usage: "W",
        },
        {
          hl7Type: "HD",
          name: "Assigning Authority",
          num: 6,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 5 },
          name: "Identifier Type Code",
          num: 7,
          rpt: "1",
          table: 203,
          usage: "O",
        },
        {
          hl7Type: "HD",
          name: "Assigning Facility",
          num: 8,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 1 },
          name: "Name Representation Code",
          num: 9,
          rpt: "1",
          table: 465,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Organization Identifier",
          num: 10,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "XON",
      name: "Software Vendor Organization",
      num: 1,
      usage: {
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
    {
      hl7Type: "ST",
      name: "Software Certified Version Or Release Number",
      num: 2,
      usage: {
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
    {
      hl7Type: "ST",
      name: "Software Product Name",
      num: 3,
      usage: {
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
    {
      hl7Type: "ST",
      name: "Software Binary Id",
      num: 4,
      usage: {
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
    {
      hl7Type: "TX",
      name: "Software Product Information",
      num: 5,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      hl7Type: "DTM",
      name: "Software Install Date",
      num: 6,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
  ],
  name: "SFT",
  versions: ["2.5", "2.5.1", "2.6", "2.7", "2.7.1", "2.8"],
};
