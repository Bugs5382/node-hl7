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
 * ERQ — Event replay query
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/ERQ)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const ERQ_SPEC: SegmentSpec = {
  description: "Event replay query",
  fields: [
    {
      hl7Type: "ST",
      length: { max: 32 },
      name: "Query Tag",
      num: 1,
      usage: {
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
      },
    },
    {
      components: [
        { hl7Type: "ST", name: "Identifier", num: 1, rpt: "1", usage: "W" },
        { hl7Type: "ST", name: "Text", num: 2, rpt: "1", usage: "W" },
        {
          hl7Type: "ID",
          name: "Name Of Coding System",
          num: 3,
          rpt: "1",
          table: 396,
          usage: "W",
        },
        {
          hl7Type: "ST",
          name: "Alternate Identifier",
          num: 4,
          rpt: "1",
          usage: "W",
        },
        { hl7Type: "ST", name: "Alternate Text", num: 5, rpt: "1", usage: "W" },
        {
          hl7Type: "ID",
          name: "Name Of Alternate Coding System",
          num: 6,
          rpt: "1",
          table: 396,
          usage: "W",
        },
      ],
      hl7Type: "CE",
      length: { max: 250 },
      name: "Event Identifier",
      num: 2,
      usage: {
        "2.3": "R",
        "2.3.1": "R",
        "2.4": "R",
        "2.5": "R",
        "2.5.1": "R",
        "2.6": "R",
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
          usage: "R",
        },
        {
          hl7Type: "ST",
          length: { max: 199 },
          name: "Values",
          num: 2,
          rpt: "1",
          usage: "R",
        },
      ],
      hl7Type: "QIP",
      length: { max: 256 },
      name: "Input Parameter List",
      num: 3,
      usage: {
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "O",
        "2.5.1": "O",
        "2.6": "O",
      },
    },
  ],
  name: "ERQ",
  versions: ["2.3", "2.3.1", "2.4", "2.5", "2.5.1", "2.6"],
};
