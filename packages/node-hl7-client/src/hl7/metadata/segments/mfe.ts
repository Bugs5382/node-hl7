import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * MFE — Master File Entry
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/MFE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const MFE_SPEC: SegmentSpec = {
  name: "MFE",
  description: "Master File Entry",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Record-level Event Code",
      hl7Type: "ID",
      length: { max: 3 },
      table: 180,
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Mfn Control Id",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Effective Date/Time",
      hl7Type: "DTM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Primary Key Value - Mfe",
      hl7Type: "varies",
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Primary Key Value Type",
      hl7Type: "ID",
      length: { max: 3 },
      table: 355,
      usage: {"2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Entered Date/Time",
      hl7Type: "DTM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Entered By",
      hl7Type: "XCN",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Person Identifier", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 2, name: "Family Name", hl7Type: "FN", usage: "D", rpt: "1" },
        { num: 3, name: "Given Name", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 4, name: "Second And Further Given Names Or Initials Thereof", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Suffix (e.g., Jr Or Iii)", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Prefix (e.g., Dr)", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 7, name: "Degree (e.g., Md)", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 8, name: "Source Table", hl7Type: "CWE", table: 297, usage: "B", rpt: "1" },
        { num: 9, name: "Assigning Authority", hl7Type: "HD", table: 363, usage: "D", rpt: "1" },
        { num: 10, name: "Name Type Code", hl7Type: "ID", length: { max: 5 }, table: 200, usage: "D", rpt: "1" },
        { num: 11, name: "Identifier Check Digit", hl7Type: "ST", length: { max: 4 }, usage: "O", rpt: "1" },
        { num: 12, name: "Check Digit Scheme", hl7Type: "ID", length: { max: 3 }, table: 61, usage: "D", rpt: "1" },
        { num: 13, name: "Identifier Type Code", hl7Type: "ID", length: { max: 5 }, table: 203, usage: "D", rpt: "1" },
        { num: 14, name: "Assigning Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 15, name: "Name Representation Code", hl7Type: "ID", length: { max: 1 }, table: 465, usage: "O", rpt: "1" },
        { num: 16, name: "Name Context", hl7Type: "CWE", table: 448, usage: "O", rpt: "1" },
        { num: 17, name: "Name Validity Range", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 18, name: "Name Assembly Order", hl7Type: "ID", length: { max: 1 }, table: 444, usage: "O", rpt: "1" },
        { num: 19, name: "Effective Date", hl7Type: "DTM", usage: "O", rpt: "1" },
        { num: 20, name: "Expiration Date", hl7Type: "DTM", usage: "O", rpt: "1" },
        { num: 21, name: "Professional Suffix", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 22, name: "Assigning Jurisdiction", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 23, name: "Assigning Agency Or Department", hl7Type: "CWE", usage: "D", rpt: "1" },
        { num: 24, name: "Security Check", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 25, name: "Security Check Scheme", hl7Type: "ID", length: { max: 3 }, table: 904, usage: "O", rpt: "1" },
      ],
    },
  ],
};
