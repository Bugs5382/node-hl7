/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * MFE — Master File Entry
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/MFE)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const MFE_SPEC: SegmentSpec = {
  description: "Master File Entry",
  fields: [
    {
      hl7Type: "ID",
      length: { max: 3 },
      name: "Record-level Event Code",
      num: 1,
      table: 180,
      usage: {
        "2.2": "R",
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
      hl7Type: "ST",
      name: "Mfn Control Id",
      num: 2,
      usage: {
        "2.2": "D",
        "2.3": "D",
        "2.3.1": "D",
        "2.4": "D",
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      hl7Type: "DTM",
      name: "Effective Date/Time",
      num: 3,
      usage: {
        "2.2": "O",
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      hl7Type: "varies",
      name: "Primary Key Value - Mfe",
      num: 4,
      usage: {
        "2.2": "R",
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
      hl7Type: "ID",
      length: { max: 3 },
      name: "Primary Key Value Type",
      num: 5,
      table: 355,
      usage: {
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
      hl7Type: "DTM",
      name: "Entered Date/Time",
      num: 6,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Person Identifier",
          num: 1,
          rpt: "1",
          usage: "D",
        },
        { hl7Type: "FN", name: "Family Name", num: 2, rpt: "1", usage: "D" },
        { hl7Type: "ST", name: "Given Name", num: 3, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Second And Further Given Names Or Initials Thereof",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Suffix (e.g., Jr Or Iii)",
          num: 5,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Prefix (e.g., Dr)",
          num: 6,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Degree (e.g., Md)",
          num: 7,
          rpt: "1",
          usage: "W",
        },
        {
          hl7Type: "CWE",
          name: "Source Table",
          num: 8,
          rpt: "1",
          table: 297,
          usage: "B",
        },
        {
          hl7Type: "HD",
          name: "Assigning Authority",
          num: 9,
          rpt: "1",
          table: 363,
          usage: "D",
        },
        {
          hl7Type: "ID",
          length: { max: 5 },
          name: "Name Type Code",
          num: 10,
          rpt: "1",
          table: 200,
          usage: "D",
        },
        {
          hl7Type: "ST",
          length: { max: 4 },
          name: "Identifier Check Digit",
          num: 11,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 3 },
          name: "Check Digit Scheme",
          num: 12,
          rpt: "1",
          table: 61,
          usage: "D",
        },
        {
          hl7Type: "ID",
          length: { max: 5 },
          name: "Identifier Type Code",
          num: 13,
          rpt: "1",
          table: 203,
          usage: "D",
        },
        {
          hl7Type: "HD",
          name: "Assigning Facility",
          num: 14,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 1 },
          name: "Name Representation Code",
          num: 15,
          rpt: "1",
          table: 465,
          usage: "O",
        },
        {
          hl7Type: "CWE",
          name: "Name Context",
          num: 16,
          rpt: "1",
          table: 448,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Name Validity Range",
          num: 17,
          rpt: "1",
          usage: "W",
        },
        {
          hl7Type: "ID",
          length: { max: 1 },
          name: "Name Assembly Order",
          num: 18,
          rpt: "1",
          table: 444,
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Effective Date",
          num: 19,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Expiration Date",
          num: 20,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Professional Suffix",
          num: 21,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "CWE",
          name: "Assigning Jurisdiction",
          num: 22,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "CWE",
          name: "Assigning Agency Or Department",
          num: 23,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Security Check",
          num: 24,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 3 },
          name: "Security Check Scheme",
          num: 25,
          rpt: "1",
          table: 904,
          usage: "O",
        },
      ],
      hl7Type: "XCN",
      name: "Entered By",
      num: 7,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "MFE",
  versions: [
    "2.2",
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
