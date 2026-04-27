import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * IVC — Invoice Segment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/IVC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const IVC_SPEC: SegmentSpec = {
  name: "IVC",
  description: "Invoice Segment",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Provider Invoice Number",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Payer Invoice Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Contract/Agreement Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Invoice Control",
      hl7Type: "CWE",
      table: 553,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Invoice Reason",
      hl7Type: "CWE",
      table: 554,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Invoice Type",
      hl7Type: "CWE",
      table: 555,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 7,
      name: "Invoice Date/Time",
      hl7Type: "DTM",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 8,
      name: "Invoice Amount",
      hl7Type: "CP",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 9,
      name: "Payment Terms",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Provider Organization",
      hl7Type: "XON",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 11,
      name: "Payer Organization",
      hl7Type: "XON",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 12,
      name: "Attention",
      hl7Type: "XCN",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Last Invoice Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Invoice Booking Period",
      hl7Type: "DTM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Origin",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Invoice Fixed Amount",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Special Costs",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Amount For Doctors Treatment",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Responsible Physician",
      hl7Type: "XCN",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Cost Center",
      hl7Type: "CX",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Invoice Prepaid Amount",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Total Invoice Amount Without Prepaid Amount",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Total-amount Of Vat",
      hl7Type: "CP",
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 24,
      name: "Vat-rates Applied",
      hl7Type: "NM",
      length: { max: 5 },
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Benefit Group",
      hl7Type: "CWE",
      table: 556,
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 26,
      name: "Provider Tax Id",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Payer Tax Id",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Provider Tax Status",
      hl7Type: "CWE",
      table: 572,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Payer Tax Status",
      hl7Type: "CWE",
      table: 572,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Sales Tax Id",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
