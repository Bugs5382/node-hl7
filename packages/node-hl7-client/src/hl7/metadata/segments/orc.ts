import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ORC — Common Order
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ORC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ORC_SPEC: SegmentSpec = {
  name: "ORC",
  description: "Common Order",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Order Control",
      hl7Type: "ID",
      length: 2,
      table: 119,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Placer Order Number",
      hl7Type: "EI",
      usage: {"2.1":"O","2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Filler Order Number",
      hl7Type: "EI",
      usage: {"2.1":"O","2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 4,
      name: "Placer Group Number",
      hl7Type: "EI",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Order Status",
      hl7Type: "ID",
      length: 2,
      table: 38,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Response Flag",
      hl7Type: "ID",
      length: 1,
      table: 121,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Quantity/Timing",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 8,
      name: "Parent",
      hl7Type: "EIP",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Date/Time Of Transaction",
      hl7Type: "DTM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Entered By",
      hl7Type: "XCN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 11,
      name: "Verified By",
      hl7Type: "XCN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 12,
      name: "Ordering Provider",
      hl7Type: "XCN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 13,
      name: "Enterer's Location",
      hl7Type: "PL",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Call Back Phone Number",
      hl7Type: "XTN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Order Effective Date/Time",
      hl7Type: "DTM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Order Control Code Reason",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Entering Organization",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 18,
      name: "Entering Device",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 19,
      name: "Action By",
      hl7Type: "XCN",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 20,
      name: "Advanced Beneficiary Notice Code",
      hl7Type: "CWE",
      table: 339,
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Ordering Facility Name",
      hl7Type: "XON",
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 22,
      name: "Ordering Facility Address",
      hl7Type: "XAD",
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 23,
      name: "Ordering Facility Phone Number",
      hl7Type: "XTN",
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 24,
      name: "Ordering Provider Address",
      hl7Type: "XAD",
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 25,
      name: "Order Status Modifier",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Advanced Beneficiary Notice Override Reason",
      hl7Type: "CWE",
      table: 552,
      usage: {"2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 27,
      name: "Filler's Expected Availability Date/Time",
      hl7Type: "DTM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Confidentiality Code",
      hl7Type: "CWE",
      table: 177,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Order Type",
      hl7Type: "CWE",
      table: 482,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Enterer Authorization Mode",
      hl7Type: "CNE",
      table: 483,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 31,
      name: "Parent Universal Service Identifier",
      hl7Type: "CWE",
      usage: {"2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 32,
      name: "Advanced Beneficiary Notice Date",
      hl7Type: "DT",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 33,
      name: "Alternate Placer Order Number",
      hl7Type: "CX",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 34,
      name: "Order Workflow Profile",
      hl7Type: "EI",
      table: 934,
      usage: {"2.8":"O"},
    },
  ],
};
