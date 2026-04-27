import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * AUT — Authorization Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/AUT)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const AUT_SPEC: SegmentSpec = {
  name: "AUT",
  description: "Authorization Information",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Authorizing Payor, Plan Id",
      hl7Type: "CWE",
      table: 72,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Authorizing Payor, Company Id",
      hl7Type: "CWE",
      table: 285,
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Authorizing Payor, Company Name",
      hl7Type: "ST",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Authorization Effective Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Authorization Expiration Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Authorization Identifier",
      hl7Type: "EI",
      usage: {"2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 7,
      name: "Reimbursement Limit",
      hl7Type: "CP",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Requested Number Of Treatments",
      hl7Type: "CQ",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Authorized Number Of Treatments",
      hl7Type: "CQ",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Process Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Requested Discipline(s)",
      hl7Type: "CWE",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Authorized Discipline(s)",
      hl7Type: "CWE",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Authorization Referral Type",
      hl7Type: "CWE",
      usage: {"2.8":"R"},
    },
    {
      num: 14,
      name: "Approval Status",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 15,
      name: "Planned Treatment Stop Date",
      hl7Type: "DTM",
      usage: {"2.8":"O"},
    },
    {
      num: 16,
      name: "Clinical Service",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 17,
      name: "Reason Text",
      hl7Type: "ST",
      usage: {"2.8":"O"},
    },
    {
      num: 18,
      name: "Number of Authorized Treatments/Units",
      hl7Type: "CQ",
      usage: {"2.8":"O"},
    },
    {
      num: 19,
      name: "Number of Used Treatments/Units",
      hl7Type: "CQ",
      usage: {"2.8":"O"},
    },
    {
      num: 20,
      name: "Number of Schedule Treatments/Units",
      hl7Type: "CQ",
      usage: {"2.8":"O"},
    },
    {
      num: 21,
      name: "Encounter Type",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 22,
      name: "Remaining Benefit Amount",
      hl7Type: "MO",
      usage: {"2.8":"O"},
    },
    {
      num: 23,
      name: "Authorized Provider",
      hl7Type: "XON",
      usage: {"2.8":"O"},
    },
    {
      num: 24,
      name: "Authorized Health Professional",
      hl7Type: "XCN",
      usage: {"2.8":"O"},
    },
    {
      num: 25,
      name: "Source Text",
      hl7Type: "ST",
      usage: {"2.8":"O"},
    },
    {
      num: 26,
      name: "Source Date",
      hl7Type: "DTM",
      usage: {"2.8":"O"},
    },
    {
      num: 27,
      name: "Source Phone",
      hl7Type: "XTN",
      usage: {"2.8":"O"},
    },
    {
      num: 28,
      name: "Comment",
      hl7Type: "ST",
      usage: {"2.8":"O"},
    },
    {
      num: 29,
      name: "Action Code",
      hl7Type: "ID",
      table: 206,
      usage: {"2.8":"O"},
    },
  ],
};
