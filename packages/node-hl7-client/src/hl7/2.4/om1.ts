/** HL7 2.4 OM1 - General Attributes of an Observation */
export interface HL7_2_4_OM1 {
  /** OM1.1 - Sequence Number (required) */
  om1_1: number | string;
  /** OM1.2 - Producer's Service/Test/Observation ID (required) */
  om1_2: string;
  /** OM1.3 - Permitted Data Types */
  om1_3?: string;
  /** OM1.4 - Specimen Required (required) */
  om1_4: "Y" | "N";
  /** OM1.5 - Producer ID (required) */
  om1_5: string;
  /** OM1.6 - Observation Description */
  om1_6?: string;
  /** OM1.7 - Other Service/Test/Observation IDs for the Observation */
  om1_7?: string;
  /** OM1.8 - Other Names */
  om1_8?: string;
  /** OM1.9 - Preferred Report Name for the Observation */
  om1_9?: string;
  /** OM1.10 - Preferred Short Name or Mnemonic */
  om1_10?: string;
  /** OM1.11 - Preferred Long Name for the Observation */
  om1_11?: string;
  /** OM1.12 - Orderability */
  om1_12?: "Y" | "N";
  /** OM1.13 - Identity of Instrument Used to Perform this Study */
  om1_13?: string;
  /** OM1.14 - Coded Representation of Method */
  om1_14?: string;
  /** OM1.15 - Portable Device Indicator */
  om1_15?: "Y" | "N";
  /** OM1.16 - Observation Producing Department/Section */
  om1_16?: string;
  /** OM1.17 - Telephone Number of Section */
  om1_17?: string;
  /** OM1.18 - Nature of Service/Test/Observation */
  om1_18?: "A" | "C" | "E" | "F" | "P" | "S";
  /** OM1.19 - Report Subheader */
  om1_19?: string;
  /** OM1.20 - Report Display Order */
  om1_20?: string;
  /** OM1.21 - Date/Time Stamp for Any Change in Def for Obs */
  om1_21?: Date | string;
  /** OM1.22 - Effective Date/Time of Change */
  om1_22?: Date | string;
  /** OM1.23 - Typical Turn-Around Time */
  om1_23?: string;
  /** OM1.24 - Processing Time */
  om1_24?: number | string;
  /** OM1.25 - Processing Priority */
  om1_25?: "A" | "B" | "C" | "P" | "R" | "S" | "T";
  /** OM1.26 - Reporting Priority */
  om1_26?: "C" | "R";
  /** OM1.27 - Outside Site(s) Where Observation May Be Performed */
  om1_27?: string;
  /** OM1.28 - Address of Outside Site(s) */
  om1_28?: string;
  /** OM1.29 - Phone Number of Outside Site */
  om1_29?: string;
  /** OM1.30 - Confidentiality Code */
  om1_30?: string;
  /** OM1.31 - Observations Required to Interpret the Observation */
  om1_31?: string;
  /** OM1.32 - Interpretation of Observations */
  om1_32?: string;
  /** OM1.33 - Contraindications to Observations */
  om1_33?: string;
  /** OM1.34 - Reflex Tests/Observations */
  om1_34?: string;
  /** OM1.35 - Rules That Trigger Reflex Testing */
  om1_35?: string;
  /** OM1.36 - Fixed Canned Message */
  om1_36?: string;
  /** OM1.37 - Patient Preparation */
  om1_37?: string;
  /** OM1.38 - Procedure Medication */
  om1_38?: string;
  /** OM1.39 - Factors that may Affect the Observation */
  om1_39?: string;
  /** OM1.40 - Service/Test/Observation Performance Schedule */
  om1_40?: string;
  /** OM1.41 - Description of Test Methods */
  om1_41?: string;
  /** OM1.42 - Kind of Quantity Observed */
  om1_42?: string;
  /** OM1.43 - Point vs. Interval */
  om1_43?: string;
  /** OM1.44 - Challenge Information */
  om1_44?: string;
  /** OM1.45 - Relationship Modifier */
  om1_45?: string;
  /** OM1.46 - Target Anatomic Site of Test */
  om1_46?: string;
  /** OM1.47 - Modality of Imaging Measurement */
  om1_47?: string;
}
