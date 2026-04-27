import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PCE — Patient Charge Cost Center Exceptions
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PCE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PCE_SPEC: SegmentSpec = {
  name: "PCE",
  description: "Patient Charge Cost Center Exceptions",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pce",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Cost Center Account Number",
      hl7Type: "CX",
      table: 319,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Id Number", hl7Type: "ST", usage: "R", rpt: "1" },
        { num: 2, name: "Identifier Check Digit", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Check Digit Scheme", hl7Type: "ID", length: { max: 3 }, table: 61, usage: "O", rpt: "1" },
        { num: 4, name: "Assigning Authority", hl7Type: "HD", table: 363, usage: "D", rpt: "1" },
        { num: 5, name: "Identifier Type Code", hl7Type: "ID", length: { max: 5 }, table: 203, usage: "R", rpt: "1" },
        { num: 6, name: "Assigning Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 7, name: "Effective Date", hl7Type: "DT", usage: "O", rpt: "1" },
        { num: 8, name: "Expiration Date", hl7Type: "DT", usage: "O", rpt: "1" },
        { num: 9, name: "Assigning Jurisdiction", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 10, name: "Assigning Agency Or Department", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 11, name: "Security Check", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Security Check Scheme", hl7Type: "ID", length: { max: 3 }, table: 904, usage: "O", rpt: "1" },
      ],
    },
    {
      num: 3,
      name: "Transaction Code",
      hl7Type: "CWE",
      table: 132,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
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
      num: 4,
      name: "Transaction Amount - Unit",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Price", hl7Type: "MO", usage: "R", rpt: "1" },
        { num: 2, name: "Price Type", hl7Type: "ID", length: { max: 2 }, table: 205, usage: "O", rpt: "1" },
        { num: 3, name: "From Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 4, name: "To Value", hl7Type: "NM", usage: "O", rpt: "1" },
        { num: 5, name: "Range Units", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 6, name: "Range Type", hl7Type: "ID", length: { max: 1 }, table: 298, usage: "O", rpt: "1" },
      ],
    },
  ],
};
