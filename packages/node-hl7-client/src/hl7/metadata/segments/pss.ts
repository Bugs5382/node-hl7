import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * PSS — Product/service Section
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/PSS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const PSS_SPEC: SegmentSpec = {
  name: "PSS",
  description: "Product/service Section",
  versions: ["2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Provider Product/Service Section Number",
      hl7Type: "EI",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Payer Product/Service Section Number",
      hl7Type: "EI",
      usage: {"2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Product/Service Section Sequence Number",
      hl7Type: "SI",
      length: { max: 4 },
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 4,
      name: "Billed Amount",
      hl7Type: "CP",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 5,
      name: "Section Description Or Heading",
      hl7Type: "ST",
      usage: {"2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
  ],
};
