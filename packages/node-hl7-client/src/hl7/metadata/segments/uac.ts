import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * UAC — User Authentication Credential Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/UAC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const UAC_SPEC: SegmentSpec = {
  name: "UAC",
  description: "User Authentication Credential Segment",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "User Authentication Credential Type Code",
      hl7Type: "CWE",
      table: 615,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 7, name: "Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 8, name: "Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 9, name: "Original Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Second Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 11, name: "Second Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Name Of Second Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 13, name: "Second Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 14, name: "Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 15, name: "Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 16, name: "Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 17, name: "Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 18, name: "Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 19, name: "Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 20, name: "Second Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 21, name: "Second Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 22, name: "Second Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "User Authentication Credential",
      hl7Type: "ED",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Source Application", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 2, name: "Type Of Data", hl7Type: "ID", length: { max: 11 }, table: 834, usage: "R", rpt: "1" },
        { num: 3, name: "Data Subtype", hl7Type: "ID", table: 291, usage: "O", rpt: "1" },
        { num: 4, name: "Encoding", hl7Type: "ID", length: { max: 6 }, table: 299, usage: "R", rpt: "1" },
        { num: 5, name: "Data", hl7Type: "TX", usage: "R", rpt: "1" },
      ],
    },
  ],
};
