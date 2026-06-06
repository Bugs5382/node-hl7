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
 * CDO — Cumulative Dosage
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/CDO)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const CDO_SPEC: SegmentSpec = {
  description: "Cumulative Dosage",
  fields: [
    {
      hl7Type: "SI",
      name: "Set ID – CDO",
      num: 1,
      usage: { "2.8": "O" },
    },
    {
      hl7Type: "ID",
      name: "Action Code",
      num: 2,
      table: 206,
      usage: { "2.8": "O" },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Cumulative Dosage Limit",
      num: 3,
      usage: { "2.8": "O" },
    },
    {
      components: [
        { hl7Type: "NM", name: "Quantity", num: 1, rpt: "1", usage: "O" },
        { hl7Type: "CWE", name: "Units", num: 2, rpt: "1", usage: "O" },
      ],
      hl7Type: "CQ",
      name: "Cumulative Dosage Limit Time Interval",
      num: 4,
      table: 924,
      usage: { "2.8": "O" },
    },
  ],
  name: "CDO",
  versions: ["2.8"],
};
