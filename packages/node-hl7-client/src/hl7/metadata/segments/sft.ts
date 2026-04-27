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
  name: "SFT",
  description: "Software Segment",
  versions: ["2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Software Vendor Organization",
      hl7Type: "XON",
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Organization Name", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Organization Name Type Code", hl7Type: "CWE", table: 204, usage: "O", rpt: "1" },
        { num: 3, name: "Id Number", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 4, name: "Identifier Check Digit", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 5, name: "Check Digit Scheme", hl7Type: "ST", length: { max: 3 }, usage: "W", rpt: "1" },
        { num: 6, name: "Assigning Authority", hl7Type: "HD", table: 363, usage: "O", rpt: "1" },
        { num: 7, name: "Identifier Type Code", hl7Type: "ID", length: { max: 5 }, table: 203, usage: "O", rpt: "1" },
        { num: 8, name: "Assigning Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 9, name: "Name Representation Code", hl7Type: "ID", length: { max: 1 }, table: 465, usage: "O", rpt: "1" },
        { num: 10, name: "Organization Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "Software Certified Version Or Release Number",
      hl7Type: "ST",
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Software Product Name",
      hl7Type: "ST",
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Software Binary Id",
      hl7Type: "ST",
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Software Product Information",
      hl7Type: "TX",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Software Install Date",
      hl7Type: "DTM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
