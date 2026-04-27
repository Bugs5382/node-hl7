import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * DRG — Diagnosis Related Group
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/DRG)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const DRG_SPEC: SegmentSpec = {
  name: "DRG",
  description: "Diagnosis Related Group",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Diagnostic Related Group",
      hl7Type: "CNE",
      table: 55,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Drg Assigned Date/Time",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Drg Approval Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Drg Grouper Review Code",
      hl7Type: "CWE",
      table: 56,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Outlier Type",
      hl7Type: "CWE",
      table: 83,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Outlier Days",
      hl7Type: "NM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Outlier Cost",
      hl7Type: "CP",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Drg Payor",
      hl7Type: "CWE",
      table: 229,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Outlier Reimbursement",
      hl7Type: "CP",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Confidential Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Drg Transfer Type",
      hl7Type: "CWE",
      table: 415,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Name Of Coder",
      hl7Type: "XPN",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 13,
      name: "Grouper Status",
      hl7Type: "CWE",
      table: 734,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 14,
      name: "Pccl Value Code",
      hl7Type: "CWE",
      table: 728,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 15,
      name: "Effective Weight",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Monetary Amount",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Status Patient",
      hl7Type: "CWE",
      table: 739,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Grouper Software Name",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Grouper Software Version",
      hl7Type: "ST",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 20,
      name: "Status Financial Calculation",
      hl7Type: "CWE",
      table: 742,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 21,
      name: "Relative Discount/Surcharge",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Basic Charge",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Total Charge",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Discount/Surcharge",
      hl7Type: "MO",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Calculated Days",
      hl7Type: "NM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Status Gender",
      hl7Type: "CWE",
      table: 749,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Status Age",
      hl7Type: "CWE",
      table: 749,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Status Length Of Stay",
      hl7Type: "CWE",
      table: 749,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 29,
      name: "Status Same Day Flag",
      hl7Type: "CWE",
      table: 749,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Status Separation Mode",
      hl7Type: "CWE",
      table: 749,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 31,
      name: "Status Weight At Birth",
      hl7Type: "CWE",
      table: 755,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 32,
      name: "Status Respiration Minutes",
      hl7Type: "CWE",
      table: 757,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 33,
      name: "Status Admission",
      hl7Type: "CWE",
      table: 759,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
