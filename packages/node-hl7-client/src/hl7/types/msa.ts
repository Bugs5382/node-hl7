/** HL7 MSA - Message Acknowledgment */
export interface HL7_MSA {
  /** MSA.1 - Acknowledgment Code */
  msa_1: string;
  ackCode?: string;
  /** MSA.2 - Message Control ID */
  msa_2: string;
  messageControlId?: string;
  /** MSA.3 - Text Message */
  msa_3?: string;
  textMessage?: string;
  /** MSA.4 - Expected Sequence Number */
  msa_4?: string;
  /** MSA.5 - Delayed Acknowledgment Type */
  msa_5?: string;
}
