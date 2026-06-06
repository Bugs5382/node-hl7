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
