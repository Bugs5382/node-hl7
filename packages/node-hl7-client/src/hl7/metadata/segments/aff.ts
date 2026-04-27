import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * AFF — Professional Affiliation
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/AFF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const AFF_SPEC: SegmentSpec = {
  name: "AFF",
  description: "Professional Affiliation",
  versions: ["2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Aff",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Professional Organization",
      hl7Type: "XON",
      usage: {"2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Professional Organization Address",
      hl7Type: "XAD",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Professional Organization Affiliation Date Range",
      hl7Type: "DR",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 5,
      name: "Professional Affiliation Additional Information",
      hl7Type: "ST",
      usage: {"2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
