import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RX1 — Pharmacy Order
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RX1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RX1_SPEC: SegmentSpec = {
  name: "RX1",
  description: "Pharmacy Order",
  versions: ["2.1"],
  fields: [
    {
      num: 1,
      name: "Unused",
      hl7Type: "ST",
      usage: {"2.1":"O"},
    },
    {
      num: 2,
      name: "Unused",
      hl7Type: "ST",
      usage: {"2.1":"O"},
    },
    {
      num: 3,
      name: "Route",
      hl7Type: "ST",
      length: 8,
      table: 33,
      usage: {"2.1":"O"},
    },
    {
      num: 4,
      name: "Site Administered",
      hl7Type: "ST",
      length: 20,
      table: 34,
      usage: {"2.1":"O"},
    },
    {
      num: 5,
      name: "Iv Solution Rate",
      hl7Type: "CQ",
      length: 10,
      usage: {"2.1":"O"},
    },
    {
      num: 6,
      name: "Drug Strength",
      hl7Type: "CQ",
      length: 14,
      usage: {"2.1":"O"},
    },
    {
      num: 7,
      name: "Final Concentration",
      hl7Type: "NM",
      length: 10,
      usage: {"2.1":"O"},
    },
    {
      num: 8,
      name: "Final Volume In Ml.",
      hl7Type: "NM",
      length: 10,
      usage: {"2.1":"O"},
    },
    {
      num: 9,
      name: "Drug Dose",
      hl7Type: "CM",
      length: 10,
      usage: {"2.1":"O"},
    },
    {
      num: 10,
      name: "Drug Role",
      hl7Type: "ID",
      length: 1,
      usage: {"2.1":"O"},
    },
    {
      num: 11,
      name: "Prescription Sequence #",
      hl7Type: "NM",
      length: 3,
      usage: {"2.1":"O"},
    },
    {
      num: 12,
      name: "Quantity Dispensed",
      hl7Type: "CQ",
      length: 4,
      usage: {"2.1":"O"},
    },
    {
      num: 13,
      name: "Unused",
      hl7Type: "ST",
      usage: {"2.1":"O"},
    },
    {
      num: 14,
      name: "Drug Id",
      hl7Type: "CE_0057",
      length: 5,
      table: 57,
      usage: {"2.1":"O"},
    },
    {
      num: 15,
      name: "Component Drug Ids",
      hl7Type: "ID",
      length: 5,
      usage: {"2.1":"O"},
    },
    {
      num: 16,
      name: "Prescription Type",
      hl7Type: "ID",
      length: 2,
      usage: {"2.1":"O"},
    },
    {
      num: 17,
      name: "Substitution Status",
      hl7Type: "ID",
      length: 1,
      usage: {"2.1":"O"},
    },
    {
      num: 18,
      name: "Rx Order Status",
      hl7Type: "ID",
      length: 2,
      table: 38,
      usage: {"2.1":"O"},
    },
    {
      num: 19,
      name: "Number Of Refills",
      hl7Type: "NM",
      length: 3,
      usage: {"2.1":"O"},
    },
    {
      num: 20,
      name: "Unused",
      hl7Type: "ST",
      usage: {"2.1":"O"},
    },
    {
      num: 21,
      name: "Refills Remaining",
      hl7Type: "NM",
      length: 3,
      usage: {"2.1":"O"},
    },
    {
      num: 22,
      name: "Dea Class",
      hl7Type: "ID",
      length: 5,
      usage: {"2.1":"O"},
    },
    {
      num: 23,
      name: "Ordering Md's Dea Number",
      hl7Type: "NM",
      length: 10,
      usage: {"2.1":"O"},
    },
    {
      num: 24,
      name: "Unused",
      hl7Type: "ST",
      usage: {"2.1":"O"},
    },
    {
      num: 25,
      name: "Last Refill Date/Time",
      hl7Type: "TS",
      length: 19,
      usage: {"2.1":"O"},
    },
    {
      num: 26,
      name: "Rx Number",
      hl7Type: "ST",
      length: 20,
      usage: {"2.1":"O"},
    },
    {
      num: 27,
      name: "Prn Status",
      hl7Type: "ID",
      length: 5,
      usage: {"2.1":"O"},
    },
    {
      num: 28,
      name: "Pharmacy Instructions",
      hl7Type: "TX",
      length: 80,
      usage: {"2.1":"O"},
    },
    {
      num: 29,
      name: "Patient Instructions",
      hl7Type: "TX",
      length: 80,
      usage: {"2.1":"O"},
    },
    {
      num: 30,
      name: "Instructions (sig)",
      hl7Type: "TX",
      length: 500,
      usage: {"2.1":"O"},
    },
  ],
};
