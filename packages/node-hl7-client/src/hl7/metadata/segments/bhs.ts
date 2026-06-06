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
 * BHS — Batch Header
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/BHS)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const BHS_SPEC: SegmentSpec = {
  description: "Batch Header",
  fields: [
    {
      hl7Type: "ST",
      length: { max: 1 },
      name: "Batch Field Separator",
      num: 1,
      usage: {
        "2.1": "R",
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
      length: { max: 5 },
      name: "Batch Encoding Characters",
      num: 2,
      usage: {
        "2.1": "R",
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
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Sending Application",
      num: 3,
      usage: {
        "2.1": "O",
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
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Sending Facility",
      num: 4,
      usage: {
        "2.1": "O",
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
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Receiving Application",
      num: 5,
      usage: {
        "2.1": "O",
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
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Receiving Facility",
      num: 6,
      usage: {
        "2.1": "O",
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
      hl7Type: "DTM",
      name: "Batch Creation Date/Time",
      num: 7,
      usage: {
        "2.1": "O",
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
      hl7Type: "ST",
      name: "Batch Security",
      num: 8,
      usage: {
        "2.1": "O",
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
      hl7Type: "ST",
      name: "Batch Name/Id/Type",
      num: 9,
      usage: {
        "2.1": "O",
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
      hl7Type: "ST",
      name: "Batch Comment",
      num: 10,
      usage: {
        "2.1": "O",
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
      hl7Type: "ST",
      name: "Batch Control Id",
      num: 11,
      usage: {
        "2.1": "O",
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
      hl7Type: "ST",
      name: "Reference Batch Control Id",
      num: 12,
      usage: {
        "2.1": "O",
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
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Sending Network Address",
      num: 13,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      components: [
        {
          hl7Type: "IS",
          name: "Namespace Id",
          num: 1,
          rpt: "1",
          table: 300,
          usage: "O",
        },
        { hl7Type: "ST", name: "Universal Id", num: 2, rpt: "1", usage: "D" },
        {
          hl7Type: "ID",
          length: { max: 6 },
          name: "Universal Id Type",
          num: 3,
          rpt: "1",
          table: 301,
          usage: "D",
        },
      ],
      hl7Type: "HD",
      name: "Batch Receiving Network Address",
      num: 14,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "BHS",
  versions: [
    "2.1",
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
