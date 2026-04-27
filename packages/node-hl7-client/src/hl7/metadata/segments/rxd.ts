import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RXD — Pharmacy/treatment Dispense
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RXD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RXD_SPEC: SegmentSpec = {
  name: "RXD",
  description: "Pharmacy/treatment Dispense",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Dispense Sub-id Counter",
      hl7Type: "NM",
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Dispense/Give Code",
      hl7Type: "CWE",
      table: 292,
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Date/Time Dispensed",
      hl7Type: "DTM",
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Actual Dispense Amount",
      hl7Type: "NM",
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Actual Dispense Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 6,
      name: "Actual Dosage Form",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Prescription Number",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 8,
      name: "Number Of Refills Remaining",
      hl7Type: "NM",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 9,
      name: "Dispense Notes",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Dispensing Provider",
      hl7Type: "XCN",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 11,
      name: "Substitution Status",
      hl7Type: "ID",
      length: { max: 1 },
      table: 167,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Total Daily Dose",
      hl7Type: "CQ",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Dispense-to Location",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"B","2.7":"B","2.7.1":"B","2.8":"W"},
    },
    {
      num: 14,
      name: "Needs Human Review",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Pharmacy/Treatment Supplier's Special Dispensing Instructions",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Actual Strength",
      hl7Type: "NM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Actual Strength Unit",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Substance Lot Number",
      hl7Type: "ST",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Substance Expiration Date",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Substance Manufacturer Name",
      hl7Type: "CWE",
      table: 227,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Indication",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Dispense Package Size",
      hl7Type: "NM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Dispense Package Size Unit",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Dispense Package Method",
      hl7Type: "ID",
      length: { max: 2 },
      table: 321,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Supplementary Code",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Initiating Location",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Packaging/Assembly Location",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Actual Drug Strength Volume",
      hl7Type: "NM",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Actual Drug Strength Volume Units",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Dispense To Pharmacy",
      hl7Type: "CWE",
      table: 9999,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 31,
      name: "Dispense To Pharmacy Address",
      hl7Type: "XAD",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 32,
      name: "Pharmacy Order Type",
      hl7Type: "ID",
      length: { max: 1 },
      table: 480,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 33,
      name: "Dispense Type",
      hl7Type: "CWE",
      table: 484,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 34,
      name: "Pharmacy Phone Number",
      hl7Type: "XTN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 35,
      name: "Dispense Tag Identifier",
      hl7Type: "EI",
      usage: {"2.8":"O"},
    },
  ],
};
