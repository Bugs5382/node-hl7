import { SegmentSpec } from "@/hl7/metadata/types";

/**
 * UB1 — Ub82
 *
 * Generated from the Caristix HL7 Definition API
 * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/UB1)
 * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the
 * generator instead.
 *
 * @since 4.0.0
 */
export const UB1_SPEC: SegmentSpec = {
  name: "UB1",
  description: "Ub82",
  versions: ["2.1","2.2","2.3","2.3.1","2.4","2.5","2.5.1","2.6","2.7","2.7.1","2.8"],
  fields: [
    {
      num: 1,
      name: "Set Id - Ub1",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 2,
      name: "Blood Deductible",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"B","2.3.1":"B","2.4":"B","2.5":"B","2.5.1":"B","2.6":"W","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 3,
      name: "Blood Furnished-pints",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 4,
      name: "Blood Replaced-pints",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 5,
      name: "Blood Not Replaced-pints",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 6,
      name: "Co-insurance Days",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 7,
      name: "Condition Code",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 8,
      name: "Covered Days",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 9,
      name: "Non Covered Days",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 10,
      name: "Value Amount & Code",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 11,
      name: "Number Of Grace Days",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 12,
      name: "Special Program Indicator",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 13,
      name: "Psro/Ur Approval Indicator",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 14,
      name: "Psro/Ur Approved Stay-fm",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 15,
      name: "Psro/Ur Approved Stay-to",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"O","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 16,
      name: "Occurrence",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 17,
      name: "Occurrence Span",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 18,
      name: "Occur Span Start Date",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 19,
      name: "Occur Span End Date",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"O","2.5":"O","2.5.1":"O","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 20,
      name: "Ub-82 Locator 2",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 21,
      name: "Ub-82 Locator 9",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 22,
      name: "Ub-82 Locator 27",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
    {
      num: 23,
      name: "Ub-82 Locator 45",
      hl7Type: "ST",
      usage: {"2.1":"O","2.2":"O","2.3":"O","2.3.1":"O","2.4":"B","2.5":"B","2.5.1":"B","2.6":"B","2.7":"W","2.7.1":"W","2.8":"W"},
    },
  ],
};
