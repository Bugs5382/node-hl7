import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * URS — Results/Update Selection Criteria
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/URS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const URS_SPEC: SegmentSpec = {
  name: "URS",
  description: "Results/Update Selection Criteria",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "URS.1",
      hl7Type: "ST",
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "R/U When Data Start Date/Time",
      hl7Type: "DTM",
      length: { max: 24 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 3,
      name: "R/U When Data End Date/Time",
      hl7Type: "DTM",
      length: { max: 24 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 4,
      name: "R/U What User Qualifier",
      hl7Type: "ST",
      length: { max: 20 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 5,
      name: "R/U Other Results Subject Definition",
      hl7Type: "ST",
      length: { max: 20 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 6,
      name: "R/U Which Date/Time Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 156,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 7,
      name: "R/U Which Date/Time Status Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 157,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 8,
      name: "R/U Date/Time Selection Qualifier",
      hl7Type: "ID",
      length: { max: 12 },
      table: 158,
      usage: {"2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 9,
      name: "R/U Quantity/Timing Qualifier",
      hl7Type: "TQ",
      length: { max: 60 },
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B"},
    },
  ],
};
