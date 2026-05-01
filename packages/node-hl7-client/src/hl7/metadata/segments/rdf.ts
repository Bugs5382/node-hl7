import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * RDF — Table Row Definition
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/RDF)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const RDF_SPEC: SegmentSpec = {
  description: "Table Row Definition",
  fields: [
    {
      hl7Type: "NM",
      name: "Number Of Columns Per Row",
      num: 1,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
    {
      components: [
        {
          hl7Type: "ST",
          length: { max: 12 },
          name: "Segment Field Name",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 3 },
          name: "Hl7 Data Type",
          num: 2,
          rpt: "1",
          table: 440,
          usage: "O",
        },
        {
          hl7Type: "NM",
          length: { max: 5 },
          name: "Maximum Column Width",
          num: 3,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "RCD",
      name: "Column Description",
      num: 2,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
        "2.7": "R",
        "2.7.1": "R",
        "2.8": "R",
      },
    },
  ],
  name: "RDF",
  versions: [
    "2.3",
    "2.3.1",
    "2.4",
    "2.5",
    "2.5.1",
    "2.6",
    "2.7",
    "2.7.1",
    "2.8",
  ],
};
