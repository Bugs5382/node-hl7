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
 * MSA — Message Acknowledgment
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/MSA)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const MSA_SPEC: SegmentSpec = {
  description: "Message Acknowledgment",
  fields: [
    {
      hl7Type: "ID",
      length: { max: 2 },
      name: "Acknowledgment Code",
      num: 1,
      table: 8,
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
      length: { max: 199 },
      name: "Message Control Id",
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
      hl7Type: "ST",
      name: "Text Message",
      num: 3,
      usage: {
        "2.1": "O",
        "2.2": "O",
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "B",
        "2.5.1": "B",
        "2.6": "B",
        "2.7": "W",
        "2.7.1": "W",
        "2.8": "W",
      },
    },
    {
      hl7Type: "NM",
      name: "Expected Sequence Number",
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
      hl7Type: "ST",
      name: "Delayed Acknowledgment Type",
      num: 5,
      usage: {
        "2.1": "O",
        "2.2": "O",
        "2.3": "B",
        "2.3.1": "B",
        "2.4": "B",
        "2.5": "W",
        "2.5.1": "W",
        "2.6": "W",
        "2.7": "W",
        "2.7.1": "W",
        "2.8": "W",
      },
    },
    {
      hl7Type: "ST",
      name: "Error Condition",
      num: 6,
      usage: {
        "2.2": "O",
        "2.3": "O",
        "2.3.1": "O",
        "2.4": "O",
        "2.5": "B",
        "2.5.1": "B",
        "2.6": "B",
        "2.7": "W",
        "2.7.1": "W",
        "2.8": "W",
      },
    },
    {
      hl7Type: "NM",
      name: "Message Waiting Number",
      num: 7,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
    {
      hl7Type: "ID",
      length: { max: 1 },
      name: "Message Waiting Priority",
      num: 8,
      table: 520,
      usage: { "2.6": "O", "2.7": "O", "2.7.1": "O", "2.8": "O" },
    },
  ],
  name: "MSA",
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
