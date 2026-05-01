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
  description: "Pharmacy Order",
  fields: [
    {
      hl7Type: "ST",
      name: "Unused",
      num: 1,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      name: "Unused",
      num: 2,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      length: { max: 8 },
      name: "Route",
      num: 3,
      table: 33,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      length: { max: 20 },
      name: "Site Administered",
      num: 4,
      table: 34,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CQ",
      length: { max: 10 },
      name: "Iv Solution Rate",
      num: 5,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CQ",
      length: { max: 14 },
      name: "Drug Strength",
      num: 6,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 10 },
      name: "Final Concentration",
      num: 7,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 10 },
      name: "Final Volume In Ml.",
      num: 8,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CM",
      length: { max: 10 },
      name: "Drug Dose",
      num: 9,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Drug Role",
      num: 10,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 3 },
      name: "Prescription Sequence #",
      num: 11,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CQ",
      length: { max: 4 },
      name: "Quantity Dispensed",
      num: 12,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      name: "Unused",
      num: 13,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "CE_0057",
      length: { max: 5 },
      name: "Drug Id",
      num: 14,
      table: 57,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 5 },
      name: "Component Drug Ids",
      num: 15,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 2 },
      name: "Prescription Type",
      num: 16,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Substitution Status",
      num: 17,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 2 },
      name: "Rx Order Status",
      num: 18,
      table: 38,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 3 },
      name: "Number Of Refills",
      num: 19,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      name: "Unused",
      num: 20,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 3 },
      name: "Refills Remaining",
      num: 21,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 5 },
      name: "Dea Class",
      num: 22,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "NM",
      length: { max: 10 },
      name: "Ordering Md's Dea Number",
      num: 23,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      name: "Unused",
      num: 24,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "TS",
      length: { max: 19 },
      name: "Last Refill Date/Time",
      num: 25,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ST",
      length: { max: 20 },
      name: "Rx Number",
      num: 26,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 5 },
      name: "Prn Status",
      num: 27,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "TX",
      length: { max: 80 },
      name: "Pharmacy Instructions",
      num: 28,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "TX",
      length: { max: 80 },
      name: "Patient Instructions",
      num: 29,
      usage: { "2.1": "O" },
    },
    {
      hl7Type: "TX",
      length: { max: 500 },
      name: "Instructions (sig)",
      num: 30,
      usage: { "2.1": "O" },
    },
  ],
  name: "RX1",
  versions: ["2.1"],
};
