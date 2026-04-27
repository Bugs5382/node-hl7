import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DMI — Drg Master File Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DMI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DMI_SPEC: SegmentSpec = {
  name: "DMI",
  description: "Drg Master File Information",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Diagnostic Related Group",
      hl7Type: "CNE",
      table: 55,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "R", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 7, name: "Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 8, name: "Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 9, name: "Original Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Second Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 11, name: "Second Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Name Of Second Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 13, name: "Second Alternate Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
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
      name: "Major Diagnostic Category",
      hl7Type: "CNE",
      table: 118,
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "R", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 7, name: "Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 8, name: "Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 9, name: "Original Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Second Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 11, name: "Second Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Name Of Second Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "O", rpt: "1" },
        { num: 13, name: "Second Alternate Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
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
      num: 3,
      name: "Lower And Upper Trim Points",
      hl7Type: "NR",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Low Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 2, name: "High Value", hl7Type: "NM", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Average Length Of Stay",
      hl7Type: "NM",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Relative Weight",
      hl7Type: "NM",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
  ],
};
