import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RFI — Request For Information
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RFI)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RFI_SPEC: SegmentSpec = {
  name: "RFI",
  description: "Request For Information",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Request Date",
      hl7Type: "DTM",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Response Due Date",
      hl7Type: "DTM",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 3,
      name: "Patient Consent",
      hl7Type: "ID",
      length: { max: 1 },
      table: 136,
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Date Additional Information Was Submitted",
      hl7Type: "DTM",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
  ],
};
