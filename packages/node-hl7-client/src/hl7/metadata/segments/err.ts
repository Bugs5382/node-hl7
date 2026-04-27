import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ERR — Error
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ERR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ERR_SPEC: SegmentSpec = {
  name: "ERR",
  description: "Error",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Error Code And Location",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 2,
      name: "Error Location",
      hl7Type: "ERL",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Hl7 Error Code",
      hl7Type: "CWE",
      table: 357,
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Severity",
      hl7Type: "ID",
      length: { max: 1 },
      table: 516,
      usage: {"2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Application Error Code",
      hl7Type: "CWE",
      table: 533,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 6,
      name: "Application Error Parameter",
      hl7Type: "ST",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Diagnostic Information",
      hl7Type: "TX",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "User Message",
      hl7Type: "TX",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 9,
      name: "Inform Person Indicator",
      hl7Type: "CWE",
      table: 517,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 10,
      name: "Override Type",
      hl7Type: "CWE",
      table: 518,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 11,
      name: "Override Reason Code",
      hl7Type: "CWE",
      table: 519,
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 12,
      name: "Help Desk Contact Point",
      hl7Type: "XTN",
      usage: {"2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
