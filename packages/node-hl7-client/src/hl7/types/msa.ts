/** HL7 MSA - Message Acknowledgment */
export interface HL7_MSA {
  ackCode?: string;
  messageControlId?: string;
  /** MSA.1 - Acknowledgment Code */
  msa_1: string;
  /** MSA.2 - Message Control ID */
  msa_2: string;
  /** MSA.3 - Text Message */
  msa_3?: string;
  /** MSA.4 - Expected Sequence Number */
  msa_4?: string;
  /** MSA.5 - Delayed Acknowledgment Type */
  msa_5?: string;
  textMessage?: string;
}
