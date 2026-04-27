import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RF1 — Referral Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RF1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RF1_SPEC: SegmentSpec = {
  name: "RF1",
  description: "Referral Information",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Referral Status",
      hl7Type: "CWE",
      table: 283,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Referral Priority",
      hl7Type: "CWE",
      table: 280,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Referral Type",
      hl7Type: "CWE",
      table: 281,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Referral Disposition",
      hl7Type: "CWE",
      table: 282,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Referral Category",
      hl7Type: "CWE",
      table: 284,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Originating Referral Identifier",
      hl7Type: "EI",
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 7,
      name: "Effective Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Expiration Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Process Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Referral Reason",
      hl7Type: "CWE",
      table: 336,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "External Referral Identifier",
      hl7Type: "EI",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Referral Documentation Completion Status",
      hl7Type: "CWE",
      table: 865,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Planned Treatment Stop Date",
      hl7Type: "DTM",
      length: 24,
      usage: {"2.8":"O"},
    },
    {
      num: 14,
      name: "Referral Reason Text",
      hl7Type: "ST",
      length: 60,
      usage: {"2.8":"O"},
    },
    {
      num: 15,
      name: "Number of Authorized Treatments/Units",
      hl7Type: "CQ",
      length: 721,
      usage: {"2.8":"O"},
    },
    {
      num: 16,
      name: "Number of Used Treatments/Units",
      hl7Type: "CQ",
      length: 721,
      usage: {"2.8":"O"},
    },
    {
      num: 17,
      name: "Number of Schedule Treatments/Units",
      hl7Type: "CQ",
      length: 721,
      usage: {"2.8":"O"},
    },
    {
      num: 18,
      name: "Remaining Benefit Amount",
      hl7Type: "MO",
      length: 20,
      usage: {"2.8":"O"},
    },
    {
      num: 19,
      name: "Authorized Provider",
      hl7Type: "XON",
      length: 250,
      usage: {"2.8":"O"},
    },
    {
      num: 20,
      name: "Authorized Health Professional",
      hl7Type: "XCN",
      length: 250,
      usage: {"2.8":"O"},
    },
    {
      num: 21,
      name: "Source Text",
      hl7Type: "ST",
      length: 60,
      usage: {"2.8":"O"},
    },
    {
      num: 22,
      name: "Source Date",
      hl7Type: "DTM",
      length: 24,
      usage: {"2.8":"O"},
    },
    {
      num: 23,
      name: "Source Phone",
      hl7Type: "XTN",
      length: 250,
      usage: {"2.8":"O"},
    },
    {
      num: 24,
      name: "Comment",
      hl7Type: "ST",
      length: 250,
      usage: {"2.8":"O"},
    },
    {
      num: 25,
      name: "Action Code",
      hl7Type: "ID",
      length: 1,
      table: 206,
      usage: {"2.8":"O"},
    },
  ],
};
