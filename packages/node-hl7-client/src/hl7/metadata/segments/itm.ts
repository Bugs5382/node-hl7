import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ITM — Material Item
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ITM)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ITM_SPEC: SegmentSpec = {
  name: "ITM",
  description: "Material Item",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Item Identifier",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Item Description",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Item Status",
      hl7Type: "CWE",
      table: 776,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Item Type",
      hl7Type: "CWE",
      table: 778,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Item Category",
      hl7Type: "CWE",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Subject To Expiration Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Manufacturer Identifier",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Manufacturer Name",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Manufacturer Catalog Number",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Manufacturer Labeler Identification Code",
      hl7Type: "CWE",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Patient Chargeable Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Transaction Code",
      hl7Type: "CWE",
      table: 132,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Transaction Amount - Unit",
      hl7Type: "CP",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Stocked Item Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Supply Risk Codes",
      hl7Type: "CWE",
      table: 871,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Approving Regulatory Agency",
      hl7Type: "XON",
      table: 790,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Latex Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Ruling Act",
      hl7Type: "CWE",
      table: 793,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Item Natural Account Code",
      hl7Type: "CWE",
      table: 320,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Approved To Buy Quantity",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Approved To Buy Price",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Taxable Item Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Freight Charge Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Item Set Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Item Set Identifier",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Track Department Usage Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Procedure Code",
      hl7Type: "CNE",
      table: 88,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Procedure Code Modifier",
      hl7Type: "CNE",
      table: 340,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Special Handling Code",
      hl7Type: "CWE",
      table: 376,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Hazardous Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.8":"O"},
    },
    {
      num: 31,
      name: "Sterile Indicator",
      hl7Type: "CNE",
      table: 532,
      usage: {"2.8":"O"},
    },
    {
      num: 32,
      name: "Material Data Safety Sheet Number",
      hl7Type: "EI",
      usage: {"2.8":"O"},
    },
    {
      num: 33,
      name: "United Nations Standard Products and Services Code (UNSPSC)",
      hl7Type: "CWE",
      table: 396,
      usage: {"2.8":"O"},
    },
  ],
};
