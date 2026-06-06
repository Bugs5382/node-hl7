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
 * ARV — Access Restriction
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ARV)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ARV_SPEC: SegmentSpec = {
  description: "Access Restriction",
  fields: [
    {
      hl7Type: "SI",
      length: { max: 4 },
      name: "Set Id",
      num: 1,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "R" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Coding System Version Id",
          num: 7,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Version Id",
          num: 8,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Original Text", num: 9, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Second Alternate Identifier",
          num: 10,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Text",
          num: 11,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Second Alternate Coding System",
          num: 12,
          rpt: "1",
          table: 396,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Version Id",
          num: 13,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Coding System Oid",
          num: 14,
          rpt: "1",
          usage: "D",
        },
        { hl7Type: "ST", name: "Value Set Oid", num: 15, rpt: "1", usage: "O" },
        {
          hl7Type: "DTM",
          name: "Value Set Version Id",
          num: 16,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Oid",
          num: 17,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Value Set Oid",
          num: 18,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Alternate Value Set Version Id",
          num: 19,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Oid",
          num: 20,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Value Set Oid",
          num: 21,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Second Alternate Value Set Version Id",
          num: 22,
          rpt: "1",
          usage: "D",
        },
      ],
      hl7Type: "CNE",
      name: "Access Restriction Action Code",
      num: 2,
      table: 206,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Coding System Version Id",
          num: 7,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Version Id",
          num: 8,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Original Text", num: 9, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Second Alternate Identifier",
          num: 10,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Text",
          num: 11,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Second Alternate Coding System",
          num: 12,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Version Id",
          num: 13,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Coding System Oid",
          num: 14,
          rpt: "1",
          usage: "D",
        },
        { hl7Type: "ST", name: "Value Set Oid", num: 15, rpt: "1", usage: "O" },
        {
          hl7Type: "DTM",
          name: "Value Set Version Id",
          num: 16,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Oid",
          num: 17,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Value Set Oid",
          num: 18,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Alternate Value Set Version Id",
          num: 19,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Oid",
          num: 20,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Value Set Oid",
          num: 21,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Second Alternate Value Set Version Id",
          num: 22,
          rpt: "1",
          usage: "D",
        },
      ],
      hl7Type: "CWE",
      name: "Access Restriction Value",
      num: 3,
      table: 717,
      usage: { "2.6": "R", "2.7": "R", "2.7.1": "R", "2.8": "R" },
    },
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "O" },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Coding System Version Id",
          num: 7,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Version Id",
          num: 8,
          rpt: "1",
          usage: "O",
        },
        { hl7Type: "ST", name: "Original Text", num: 9, rpt: "1", usage: "O" },
        {
          hl7Type: "ST",
          name: "Second Alternate Identifier",
          num: 10,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Text",
          num: 11,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ID",
          length: { max: 12 },
          name: "Name Of Second Alternate Coding System",
          num: 12,
          rpt: "1",
          table: 396,
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Version Id",
          num: 13,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Coding System Oid",
          num: 14,
          rpt: "1",
          usage: "D",
        },
        { hl7Type: "ST", name: "Value Set Oid", num: 15, rpt: "1", usage: "O" },
        {
          hl7Type: "DTM",
          name: "Value Set Version Id",
          num: 16,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Coding System Oid",
          num: 17,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Alternate Value Set Oid",
          num: 18,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Alternate Value Set Version Id",
          num: 19,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Coding System Oid",
          num: 20,
          rpt: "1",
          usage: "D",
        },
        {
          hl7Type: "ST",
          name: "Second Alternate Value Set Oid",
          num: 21,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Second Alternate Value Set Version Id",
          num: 22,
          rpt: "1",
          usage: "D",
        },
      ],
      hl7Type: "CWE",
      name: "Access Restriction Reason",
      num: 4,
      table: 719,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "ST",
      name: "Special Access Restriction Instructions",
      num: 5,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        {
          hl7Type: "DTM",
          name: "Range Start Date/Time",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "DTM",
          name: "Range End Date/Time",
          num: 2,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "DR",
      name: "Access Restriction Date Range",
      num: 6,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "ARV",
  versions: ["2.6", "2.7", "2.7.1", "2.8"],
};
