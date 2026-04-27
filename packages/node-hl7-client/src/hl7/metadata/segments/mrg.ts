import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * MRG — Merge Patient Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/MRG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const MRG_SPEC: SegmentSpec = {
  name: "MRG",
  description: "Merge Patient Information",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Prior Patient Identifier List",
      hl7Type: "CX",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
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
      num: 2,
      name: "Prior Alternate Patient Id",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 3,
      name: "Prior Patient Account Number",
      hl7Type: "CX",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
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
      num: 4,
      name: "Prior Patient Id",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Prior Visit Number",
      hl7Type: "CX",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
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
      num: 6,
      name: "Prior Alternate Visit Id",
      hl7Type: "CX",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
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
      num: 7,
      name: "Prior Patient Name",
      hl7Type: "XPN",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Family Name", hl7Type: "FN", rpt: "1" },
        { num: 2, name: "Given Name", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Second And Further Given Names Or Initials Thereof", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 4, name: "Suffix (e.g., Jr Or Iii)", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Prefix (e.g., Dr)", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Degree (e.g., Md)", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 7, name: "Name Type Code", hl7Type: "ID", length: { max: 5 }, table: 200, usage: "O", rpt: "1" },
        { num: 8, name: "Name Representation Code", hl7Type: "ID", length: { max: 1 }, table: 465, usage: "O", rpt: "1" },
        { num: 9, name: "Name Context", hl7Type: "CWE", table: 448, usage: "O", rpt: "1" },
        { num: 10, name: "Name Validity Range", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 11, name: "Name Assembly Order", hl7Type: "ID", length: { max: 1 }, table: 444, usage: "O", rpt: "1" },
        { num: 12, name: "Effective Date", hl7Type: "DTM", usage: "O", rpt: "1" },
        { num: 13, name: "Expiration Date", hl7Type: "DTM", usage: "O", rpt: "1" },
        { num: 14, name: "Professional Suffix", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 15, name: "Called By", hl7Type: "ST", usage: "O", rpt: "1" },
      ],
    },
  ],
};
