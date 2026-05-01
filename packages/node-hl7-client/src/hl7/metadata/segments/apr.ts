import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * APR — Appointment Preferences
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/APR)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const APR_SPEC: SegmentSpec = {
  description: "Appointment Preferences",
  fields: [
    {
      components: [
        {
          hl7Type: "CWE",
          name: "Parameter Class",
          num: 1,
          rpt: "1",
          table: 294,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Parameter Value",
          num: 2,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "SCV",
      name: "Time Selection Criteria",
      num: 1,
      usage: {
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
          hl7Type: "CWE",
          name: "Parameter Class",
          num: 1,
          rpt: "1",
          table: 294,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Parameter Value",
          num: 2,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "SCV",
      name: "Resource Selection Criteria",
      num: 2,
      usage: {
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
          hl7Type: "CWE",
          name: "Parameter Class",
          num: 1,
          rpt: "1",
          table: 294,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Parameter Value",
          num: 2,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "SCV",
      name: "Location Selection Criteria",
      num: 3,
      usage: {
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
      hl7Type: "NM",
      name: "Slot Spacing Criteria",
      num: 4,
      usage: {
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
          hl7Type: "CWE",
          name: "Parameter Class",
          num: 1,
          rpt: "1",
          table: 294,
          usage: "O",
        },
        {
          hl7Type: "ST",
          name: "Parameter Value",
          num: 2,
          rpt: "1",
          usage: "O",
        },
      ],
      hl7Type: "SCV",
      name: "Filler Override Criteria",
      num: 5,
      usage: {
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
  ],
  name: "APR",
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
