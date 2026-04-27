import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RXO — Pharmacy/treatment Order
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RXO)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RXO_SPEC: SegmentSpec = {
  name: "RXO",
  description: "Pharmacy/treatment Order",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Requested Give Code",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"R","2.3":"R","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 2,
      name: "Requested Give Amount - Minimum",
      hl7Type: "NM",
      usage: {"2.2":"R","2.3":"R","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Requested Give Amount - Maximum",
      hl7Type: "NM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Requested Give Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"R","2.3":"R","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 5,
      name: "Requested Dosage Form",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Provider's Pharmacy/Treatment Instructions",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Provider's Administration Instructions",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Deliver-to Location",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"B","2.7.1":"B","2.8":"W"},
    },
    {
      num: 9,
      name: "Allow Substitutions",
      hl7Type: "ID",
      length: 1,
      table: 161,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Requested Dispense Code",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"D","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Requested Dispense Amount",
      hl7Type: "NM",
      usage: {"2.2":"D","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Requested Dispense Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"D","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Number Of Refills",
      hl7Type: "NM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Ordering Provider's Dea Number",
      hl7Type: "XCN",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 15,
      name: "Pharmacist/Treatment Supplier's Verifier Id",
      hl7Type: "XCN",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 16,
      name: "Needs Human Review",
      hl7Type: "ID",
      length: 1,
      table: 136,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Requested Give Per (time Unit)",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 18,
      name: "Requested Give Strength",
      hl7Type: "NM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Requested Give Strength Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Indication",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Requested Give Rate Amount",
      hl7Type: "ST",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Requested Give Rate Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Total Daily Dose",
      hl7Type: "CQ",
      usage: {"2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Supplementary Code",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Requested Drug Strength Volume",
      hl7Type: "NM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Requested Drug Strength Volume Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Pharmacy Order Type",
      hl7Type: "ID",
      length: 1,
      table: 480,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Dispensing Interval",
      hl7Type: "NM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Medication Instance Identifier",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Segment Instance Identifier",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 31,
      name: "Mood Code",
      hl7Type: "CNE",
      table: 725,
      usage: {"2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 32,
      name: "Dispensing Pharmacy",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 33,
      name: "Dispensing Pharmacy Address",
      hl7Type: "XAD",
      usage: {"2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 34,
      name: "Deliver-to Patient Location",
      hl7Type: "PL",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 35,
      name: "Deliver-to Address",
      hl7Type: "XAD",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 36,
      name: "Pharmacy Phone Number",
      hl7Type: "XTN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
