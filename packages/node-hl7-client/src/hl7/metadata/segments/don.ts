import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DON — Donation Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DON)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DON_SPEC: SegmentSpec = {
  name: "DON",
  description: "Donation Segment",
  versions: ["2.8"],
  fields: [
    {
      num: 1,
      name: "Donation Identification Number - DIN",
      hl7Type: "EI",
      usage: {"2.8":"D"},
    },
    {
      num: 2,
      name: "Donation Type",
      hl7Type: "CNE",
      usage: {"2.8":"D"},
    },
    {
      num: 3,
      name: "Phlebotomy Start Date/Time",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 4,
      name: "Phlebotomy End Date/Time",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 5,
      name: "Donation Duration",
      hl7Type: "NM",
      usage: {"2.8":"R"},
    },
    {
      num: 6,
      name: "Donation Duration Units",
      hl7Type: "CNE",
      table: 932,
      usage: {"2.8":"R"},
    },
    {
      num: 7,
      name: "Intended Procedure Type",
      hl7Type: "CNE",
      table: 933,
      usage: {"2.8":"R"},
    },
    {
      num: 8,
      name: "Actual Procedure Type",
      hl7Type: "CNE",
      table: 933,
      usage: {"2.8":"R"},
    },
    {
      num: 9,
      name: "Donor Eligibility Flag",
      hl7Type: "ID",
      table: 136,
      usage: {"2.8":"R"},
    },
    {
      num: 10,
      name: "Donor Eligibility Procedure Type",
      hl7Type: "CNE",
      table: 933,
      usage: {"2.8":"R"},
    },
    {
      num: 11,
      name: "Donor Eligibility Date",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 12,
      name: "Process Interruption",
      hl7Type: "CNE",
      table: 923,
      usage: {"2.8":"R"},
    },
    {
      num: 13,
      name: "Process Interruption Reason",
      hl7Type: "CNE",
      table: 935,
      usage: {"2.8":"R"},
    },
    {
      num: 14,
      name: "Phlebotomy Issue",
      hl7Type: "CNE",
      table: 925,
      usage: {"2.8":"R"},
    },
    {
      num: 15,
      name: "Intended Recipient Blood Relative",
      hl7Type: "ID",
      table: 136,
      usage: {"2.8":"R"},
    },
    {
      num: 16,
      name: "Intended Recipient Name",
      hl7Type: "XPN",
      usage: {"2.8":"R"},
    },
    {
      num: 17,
      name: "Intended Recipient DOB",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 18,
      name: "Intended Recipient Facility",
      hl7Type: "XON",
      usage: {"2.8":"R"},
    },
    {
      num: 19,
      name: "Intended Recipient Procedure Date",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 20,
      name: "Intended Recipient Ordering Provider",
      hl7Type: "XPN",
      usage: {"2.8":"R"},
    },
    {
      num: 21,
      name: "Phlebotomy Status",
      hl7Type: "CNE",
      table: 926,
      usage: {"2.8":"R"},
    },
    {
      num: 22,
      name: "Arm Stick",
      hl7Type: "CNE",
      table: 927,
      usage: {"2.8":"R"},
    },
    {
      num: 23,
      name: "Bleed Start Phlebotomist",
      hl7Type: "XPN",
      usage: {"2.8":"R"},
    },
    {
      num: 24,
      name: "Bleed End Phlebotomist",
      hl7Type: "XPN",
      usage: {"2.8":"R"},
    },
    {
      num: 25,
      name: "Aphaeresis Type Machine",
      hl7Type: "ST",
      usage: {"2.8":"R"},
    },
    {
      num: 26,
      name: "Aphaeresis Machine Serial Number",
      hl7Type: "ST",
      usage: {"2.8":"R"},
    },
    {
      num: 27,
      name: "Donor Reaction",
      hl7Type: "ID",
      table: 136,
      usage: {"2.8":"R"},
    },
    {
      num: 28,
      name: "Final Review Staff ID",
      hl7Type: "XPN",
      usage: {"2.8":"R"},
    },
    {
      num: 29,
      name: "Final Review Date/Time",
      hl7Type: "DTM",
      usage: {"2.8":"R"},
    },
    {
      num: 30,
      name: "Number of Tubes Collected",
      hl7Type: "NM",
      usage: {"2.8":"R"},
    },
    {
      num: 31,
      name: "Donation Sample Identifier",
      hl7Type: "EI",
      usage: {"2.8":"R"},
    },
    {
      num: 32,
      name: "Donation Accept Staff",
      hl7Type: "XCN",
      usage: {"2.8":"R"},
    },
    {
      num: 33,
      name: "Donation Material Review Staff",
      hl7Type: "XCN",
      usage: {"2.8":"R"},
    },
  ],
};
