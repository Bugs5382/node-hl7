import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * URD — Results/Update Definition
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/URD)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const URD_SPEC: SegmentSpec = {
  name: "URD",
  description: "Results/Update Definition",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "URD.1",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 2,
      name: "Report Priority",
      hl7Type: "ID",
      length: { max: 1 },
      table: 109,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 3,
      name: "R/U Who Subject Definition",
      hl7Type: "XCN",
      length: { max: 250 },
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 4,
      name: "R/U What Subject Definition",
      hl7Type: "CWE",
      length: { max: 250 },
      table: 48,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 5,
      name: "R/U What Department Code",
      hl7Type: "CWE",
      length: { max: 250 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 6,
      name: "R/U Display/Print Locations",
      hl7Type: "ST",
      length: { max: 20 },
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 7,
      name: "R/U Results Level",
      hl7Type: "ID",
      length: { max: 1 },
      table: 108,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
  ],
};
