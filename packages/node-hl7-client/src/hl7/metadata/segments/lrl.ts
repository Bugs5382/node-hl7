import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * LRL — Location Relationship
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/LRL)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const LRL_SPEC: SegmentSpec = {
  name: "LRL",
  description: "Location Relationship",
  versions: ["2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Primary Key Value - Lrl",
      hl7Type: "PL",
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
      components: [
        { num: 1, name: "Point Of Care", hl7Type: "HD", table: 302, usage: "D", rpt: "1" },
        { num: 2, name: "Room", hl7Type: "HD", table: 303, usage: "O", rpt: "1" },
        { num: 3, name: "Bed", hl7Type: "HD", table: 304, usage: "O", rpt: "1" },
        { num: 4, name: "Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 5, name: "Location Status", hl7Type: "IS", table: 306, usage: "O", rpt: "1" },
        { num: 6, name: "Person Location Type", hl7Type: "IS", table: 305, usage: "O", rpt: "1" },
        { num: 7, name: "Building", hl7Type: "HD", table: 307, usage: "O", rpt: "1" },
        { num: 8, name: "Floor", hl7Type: "HD", table: 308, usage: "O", rpt: "1" },
        { num: 9, name: "Location Description", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Comprehensive Location Identifier", hl7Type: "EI", usage: "O", rpt: "1" },
        { num: 11, name: "Assigning Authority For Location", hl7Type: "HD", table: 363, usage: "O", rpt: "1" },
      ],
    },
    {
      num: 2,
      name: "Segment Action Code",
      hl7Type: "ID",
      length: { max: 1 },
      table: 206,
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
    },
    {
      num: 3,
      name: "Segment Unique Key",
      hl7Type: "EI",
      usage: {"2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"O","2.7.1":"O","2.8":"O"},
      components: [
        { num: 1, name: "Entity Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Namespace Id", hl7Type: "IS", table: 363, usage: "O", rpt: "1" },
        { num: 3, name: "Universal Id", hl7Type: "ST", usage: "D", rpt: "1" },
        { num: 4, name: "Universal Id Type", hl7Type: "ID", length: { max: 6 }, table: 301, usage: "D", rpt: "1" },
      ],
    },
    {
      num: 4,
      name: "Location Relationship Id",
      hl7Type: "CWE",
      table: 325,
      usage: {"2.3":"R","2.3.1":"R","2.4":"R","2.5":"R","2.5.1":"R","2.6":"R","2.7":"R","2.7.1":"R","2.8":"R"},
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
      num: 5,
      name: "Organizational Location Relationship Value",
      hl7Type: "XON",
      usage: {"2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Organization Name", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 2, name: "Organization Name Type Code", hl7Type: "CWE", table: 204, usage: "O", rpt: "1" },
        { num: 3, name: "Id Number", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 4, name: "Identifier Check Digit", hl7Type: "ST", usage: "W", rpt: "1" },
        { num: 5, name: "Check Digit Scheme", hl7Type: "ST", length: { max: 3 }, usage: "W", rpt: "1" },
        { num: 6, name: "Assigning Authority", hl7Type: "HD", table: 363, usage: "O", rpt: "1" },
        { num: 7, name: "Identifier Type Code", hl7Type: "ID", length: { max: 5 }, table: 203, usage: "O", rpt: "1" },
        { num: 8, name: "Assigning Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 9, name: "Name Representation Code", hl7Type: "ID", length: { max: 1 }, table: 465, usage: "O", rpt: "1" },
        { num: 10, name: "Organization Identifier", hl7Type: "ST", usage: "O", rpt: "1" },
      ],
    },
    {
      num: 6,
      name: "Patient Location Relationship Value",
      hl7Type: "PL",
      usage: {"2.3":"D","2.3.1":"D","2.4":"D","2.5":"D","2.5.1":"D","2.6":"D","2.7":"D","2.7.1":"D","2.8":"D"},
      components: [
        { num: 1, name: "Point Of Care", hl7Type: "HD", table: 302, usage: "D", rpt: "1" },
        { num: 2, name: "Room", hl7Type: "HD", table: 303, usage: "O", rpt: "1" },
        { num: 3, name: "Bed", hl7Type: "HD", table: 304, usage: "O", rpt: "1" },
        { num: 4, name: "Facility", hl7Type: "HD", usage: "O", rpt: "1" },
        { num: 5, name: "Location Status", hl7Type: "IS", table: 306, usage: "O", rpt: "1" },
        { num: 6, name: "Person Location Type", hl7Type: "IS", table: 305, usage: "O", rpt: "1" },
        { num: 7, name: "Building", hl7Type: "HD", table: 307, usage: "O", rpt: "1" },
        { num: 8, name: "Floor", hl7Type: "HD", table: 308, usage: "O", rpt: "1" },
        { num: 9, name: "Location Description", hl7Type: "ST", usage: "O", rpt: "1" },
        { num: 10, name: "Comprehensive Location Identifier", hl7Type: "EI", usage: "O", rpt: "1" },
        { num: 11, name: "Assigning Authority For Location", hl7Type: "HD", table: 363, usage: "O", rpt: "1" },
      ],
    },
  ],
};
