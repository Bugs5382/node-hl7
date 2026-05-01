/** HL7 NTE - Notes and Comments */
export interface HL7_NTE {
  comment?: string;
  /** NTE.1 - Set ID */
  nte_1?: number | string;
  /** NTE.2 - Source of Comment */
  nte_2?: string;
  /** NTE.3 - Comment */
  nte_3?: string;
  sourceOfComment?: string;
}
