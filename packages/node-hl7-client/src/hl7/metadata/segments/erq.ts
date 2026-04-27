import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * ERQ — Event replay query
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ERQ)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ERQ_SPEC: SegmentSpec = {
  name: "ERQ",
  description: "Event replay query",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6"],
  fields: [
    {
      num: 1,
      name: "Query Tag",
      hl7Type: "ST",
      length: 32,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
    {
      num: 2,
      name: "Event Identifier",
      hl7Type: "CE",
      length: 250,
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R"},
    },
    {
      num: 3,
      name: "Input Parameter List",
      hl7Type: "QIP",
      length: 256,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O"},
    },
  ],
};
