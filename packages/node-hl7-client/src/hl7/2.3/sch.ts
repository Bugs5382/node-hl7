/** HL7 2.3 SCH - Scheduling Activity Information */
export interface HL7_2_3_SCH {
  /** SCH.1 - Placer Appointment ID */
  sch_1?: string;
  /** SCH.2 - Filler Appointment ID */
  sch_2?: string;
  /** SCH.3 - Occurrence Number */
  sch_3?: string;
  /** SCH.4 - Placer Group Number */
  sch_4?: string;
  /** SCH.5 - Schedule ID */
  sch_5?: string;
  /** SCH.6 - Event Reason (required) */
  sch_6: string;
  /** SCH.7 - Appointment Reason */
  sch_7?: string;
  /** SCH.8 - Appointment Type */
  sch_8?: string;
  /** SCH.9 - Appointment Duration */
  sch_9?: string;
  /** SCH.10 - Appointment Duration Units */
  sch_10?: string;
  /** SCH.11 - Appointment Timing Quantity (required) */
  sch_11: string;
  /** SCH.12 - Placer Contact Person */
  sch_12?: string;
  /** SCH.13 - Placer Contact Phone Number */
  sch_13?: string;
  /** SCH.14 - Placer Contact Address */
  sch_14?: string;
  /** SCH.15 - Placer Contact Location */
  sch_15?: string;
  /** SCH.16 - Filler Contact Person (required) */
  sch_16: string;
  /** SCH.17 - Filler Contact Phone Number */
  sch_17?: string;
  /** SCH.18 - Filler Contact Address */
  sch_18?: string;
  /** SCH.19 - Filler Contact Location */
  sch_19?: string;
  /** SCH.20 - Entered By Person (required) */
  sch_20: string;
  /** SCH.21 - Entered By Phone Number */
  sch_21?: string;
  /** SCH.22 - Entered By Location */
  sch_22?: string;
  /** SCH.23 - Parent Placer Appointment ID */
  sch_23?: string;
  /** SCH.24 - Parent Filler Appointment ID */
  sch_24?: string;
  /** SCH.25 - Filler Status Code */
  sch_25?: string;
}
