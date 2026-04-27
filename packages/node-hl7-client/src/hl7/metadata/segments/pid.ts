import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PID — Patient Identification
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PID)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PID_SPEC: SegmentSpec = {
  name: "PID",
  description: "Patient Identification",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Pid",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Patient Id",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 3,
      name: "Patient Identifier List",
      hl7Type: "CX",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Alternate Patient Id - Pid",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Patient Name",
      hl7Type: "XPN",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Mother's Maiden Name",
      hl7Type: "XPN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Date/Time Of Birth",
      hl7Type: "DTM",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "Administrative Sex",
      hl7Type: "CWE",
      table: 1,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Patient Alias",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 10,
      name: "Race",
      hl7Type: "CWE",
      table: 5,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Patient Address",
      hl7Type: "XAD",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "County Code",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"B","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 13,
      name: "Phone Number - Home",
      hl7Type: "XTN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 14,
      name: "Phone Number - Business",
      hl7Type: "XTN",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"B","2.7.1":"B","2.8":"B"},
    },
    {
      num: 15,
      name: "Primary Language",
      hl7Type: "CWE",
      table: 296,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 16,
      name: "Marital Status",
      hl7Type: "CWE",
      table: 2,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 17,
      name: "Religion",
      hl7Type: "CWE",
      table: 6,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 18,
      name: "Patient Account Number",
      hl7Type: "CX",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 19,
      name: "Ssn Number - Patient",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 20,
      name: "Driver's License Number - Patient",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 21,
      name: "Mother's Identifier",
      hl7Type: "CX",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 22,
      name: "Ethnic Group",
      hl7Type: "CWE",
      table: 189,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 23,
      name: "Birth Place",
      hl7Type: "ST",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 24,
      name: "Multiple Birth Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 25,
      name: "Birth Order",
      hl7Type: "NM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 26,
      name: "Citizenship",
      hl7Type: "CWE",
      table: 171,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 27,
      name: "Veterans Military Status",
      hl7Type: "CWE",
      table: 172,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 28,
      name: "Nationality",
      hl7Type: "ST",
      usage: {"2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 29,
      name: "Patient Death Date And Time",
      hl7Type: "DTM",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 30,
      name: "Patient Death Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 31,
      name: "Identity Unknown Indicator",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 32,
      name: "Identity Reliability Code",
      hl7Type: "CWE",
      table: 445,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 33,
      name: "Last Update Date/Time",
      hl7Type: "DTM",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 34,
      name: "Last Update Facility",
      hl7Type: "HD",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 35,
      name: "Taxonomic Classification Code",
      hl7Type: "CWE",
      table: 446,
      usage: {"2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 36,
      name: "Breed Code",
      hl7Type: "CWE",
      table: 447,
      usage: {"2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 37,
      name: "Strain",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 38,
      name: "Production Class Code",
      hl7Type: "CWE",
      table: 429,
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 39,
      name: "Tribal Citizenship",
      hl7Type: "CWE",
      table: 171,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 40,
      name: "Patient Telecommunication Information",
      hl7Type: "XTN",
      usage: {"2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
