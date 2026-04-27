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
  name: "RDF",
  description: "Table Row Definition",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Number Of Columns Per Row",
      hl7Type: "NM",
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
    },
    {
      num: 2,
      name: "Column Description",
      hl7Type: "RCD",
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Segment Field Name", hl7Type: "ST", length: { max: 12 }, usage: "O", rpt: "1" },
        { num: 2, name: "Hl7 Data Type", hl7Type: "ID", length: { max: 3 }, table: 440, usage: "O", rpt: "1" },
        { num: 3, name: "Maximum Column Width", hl7Type: "NM", length: { max: 5 }, usage: "O", rpt: "1" },
      ],
    },
  ],
};
