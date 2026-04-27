import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * MFE — Master File Entry
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/MFE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const MFE_SPEC: SegmentSpec = {
  name: "MFE",
  description: "Master File Entry",
  versions: ["2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Record-level Event Code",
      hl7Type: "ID",
      length: 3,
      table: 180,
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Mfn Control Id",
      hl7Type: "ST",
      usage: {"2.2":"D","2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
    },
    {
      num: 3,
      name: "Effective Date/Time",
      hl7Type: "DTM",
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Primary Key Value - Mfe",
      hl7Type: "varies",
      usage: {"2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Primary Key Value Type",
      hl7Type: "ID",
      length: 3,
      table: 355,
      usage: {"2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 6,
      name: "Entered Date/Time",
      hl7Type: "DTM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "Entered By",
      hl7Type: "XCN",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
