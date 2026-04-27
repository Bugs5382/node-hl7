import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * NSC — Application Status Change
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/NSC)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const NSC_SPEC: SegmentSpec = {
  name: "NSC",
  description: "Application Status Change",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Application Change Type",
      hl7Type: "CWE",
      table: 409,
      usage: {"2.1":"R","2.2":"R","2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 3, name: "Name Of Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 4, name: "Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 5, name: "Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 6, name: "Name Of Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 7, name: "Coding System Version Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 8, name: "Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 9, name: "Original Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Second Alternate Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 11, name: "Second Alternate Text", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 12, name: "Name Of Second Alternate Coding System", hl7Type: "ID", length: { max: 12 }, table: 396, usage: "D", rpt: "1" },
        { num: 13, name: "Second Alternate Coding System Version Id", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 14, name: "Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 15, name: "Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 16, name: "Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 17, name: "Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 18, name: "Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 19, name: "Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
        { num: 20, name: "Second Alternate Coding System Oid", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 21, name: "Second Alternate Value Set Oid", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 22, name: "Second Alternate Value Set Version Id", hl7Type: "DTM", usage: "D", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "Current Cpu",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Current Fileserver",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 4,
      name: "Current Application",
      hl7Type: "HD",
      table: 361,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Namespace Id", hl7Type: "IS", table: 300, usage: "O", rpt: "1" },
        { num: 2, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 3, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 5,
      name: "Current Facility",
      hl7Type: "HD",
      table: 362,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Namespace Id", hl7Type: "IS", table: 300, usage: "O", rpt: "1" },
        { num: 2, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 3, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 6,
      name: "New Cpu",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 7,
      name: "New Fileserver",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 8,
      name: "New Application",
      hl7Type: "HD",
      table: 361,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Namespace Id", hl7Type: "IS", table: 300, usage: "O", rpt: "1" },
        { num: 2, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 3, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 9,
      name: "New Facility",
      hl7Type: "HD",
      table: 362,
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Namespace Id", hl7Type: "IS", table: 300, usage: "O", rpt: "1" },
        { num: 2, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 3, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
  ],
};
