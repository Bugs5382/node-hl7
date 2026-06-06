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
 * TQ2 — Timing/quantity Relationship
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/TQ2)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const TQ2_SPEC: SegmentSpec = {
  description: "Timing/quantity Relationship",
  fields: [
    {
      hl7Type: "SI",
      length: { max: 4 },
      name: "Set Id - Tq2",
      num: 1,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Sequence/Results Flag",
      num: 2,
      table: 503,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Related Placer Number",
      num: 3,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Related Filler Number",
      num: 4,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      components: [
        {
          hl7Type: "ST",
          name: "Entity Identifier",
          num: 1,
          rpt: "1",
          usage: "O",
        },
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 2,
          rpt: "1",
          table: 363,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 3, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 4,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "EI",
      name: "Related Placer Group Number",
      num: 5,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      hl7Type: "ID",
      name: "Sequence Condition Code",
      num: 6,
      table: 504,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Cyclic Entry/Exit Indicator",
      num: 7,
      table: 505,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Sequence Condition Time Interval",
      num: 8,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      hl7Type: "NM",
      name: "Cyclic Group Maximum Number Of Repeats",
      num: 9,
      usage: {
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
        "2.7": "O",
        "2.7.1": "O",
        "2.8": "O",
      },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Special Service Request Relationship",
      num: 10,
      table: 506,
      usage: {
        "2.5": "D",
        "2.5.1": "D",
        "2.6": "D",
        "2.7": "D",
        "2.7.1": "D",
        "2.8": "D",
      },
    },
  ],
  name: "TQ2",
  versions: ["2.5", "2.5.1", "2.6", "2.7", "2.7.1", "2.8"],
};
