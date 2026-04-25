/** HL7 NTE - Notes and Comments */
export interface HL7_NTE {
  /** NTE.1 - Set ID */
  nte_1?: string | number;
  /** NTE.2 - Source of Comment */
  nte_2?: string;
  sourceOfComment?: string;
  /** NTE.3 - Comment */
  nte_3?: string;
  comment?: string;
}
