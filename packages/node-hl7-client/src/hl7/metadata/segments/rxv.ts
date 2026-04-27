import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RXV — Pharmacy/Treatment Infusion
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RXV)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RXV_SPEC: SegmentSpec = {
  name: "RXV",
  description: "Pharmacy/Treatment Infusion",
  versions: ["2.8"],
  fields: [
    {
      num: 1,
      name: "Set ID - RXV",
      hl7Type: "SI",
      usage: {"2.8":"O"},
    },
    {
      num: 2,
      name: "Bolus Type",
      hl7Type: "ID",
      length: 1,
      table: 917,
      usage: {"2.8":"R"},
    },
    {
      num: 3,
      name: "Bolus Dose Amount",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 4,
      name: "Bolus Dose Amount Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 5,
      name: "Bolus Dose Volume",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 6,
      name: "Bolus Dose Volume Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 7,
      name: "PCA Type",
      hl7Type: "ID",
      table: 918,
      usage: {"2.8":"R"},
    },
    {
      num: 8,
      name: "PCA Dose Amount",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 9,
      name: "PCA Dose Amount Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 10,
      name: "PCA Dose Amount Volume",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 11,
      name: "PCA Dose Amount Volume Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 12,
      name: "Max Dose Amount",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 13,
      name: "Max Dose Amount Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 14,
      name: "Max Dose Amount Volume",
      hl7Type: "NM",
      usage: {"2.8":"O"},
    },
    {
      num: 15,
      name: "Max Dose Amount Volume Units",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 16,
      name: "Max Dose per Time",
      hl7Type: "CQ",
      usage: {"2.8":"R"},
    },
    {
      num: 17,
      name: "Lockout Interval",
      hl7Type: "CQ",
      usage: {"2.8":"O"},
    },
    {
      num: 18,
      name: "Syringe Manufacturer",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 19,
      name: "Syringe Model Number",
      hl7Type: "CWE",
      usage: {"2.8":"O"},
    },
    {
      num: 20,
      name: "Syringe Size",
      hl7Type: "NM",
      usage: {"2.8":"D"},
    },
    {
      num: 21,
      name: "Syringe Size Units",
      hl7Type: "CWE",
      usage: {"2.8":"D"},
    },
    {
      num: 22,
      name: "Action Code",
      hl7Type: "ID",
      table: 206,
      usage: {"2.8":"O"},
    },
  ],
};
