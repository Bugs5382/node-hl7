/** HL7 QRD - Original-Style Query Definition */
export interface HL7_QRD {
  /** QRD.1 - Query Date/Time */
  qrd_1: Date | string;
  queryDateTime?: Date | string;
  /** QRD.2 - Query Format Code (R=Record-oriented, T=Text, D=Display) */
  qrd_2: string;
  queryFormatCode?: string;
  /** QRD.3 - Query Priority (D=Deferred, I=Immediate) */
  qrd_3: string;
  queryPriority?: string;
  /** QRD.4 - Query ID */
  qrd_4: string;
  queryId?: string;
  /** QRD.5 - Deferred Response Type */
  qrd_5?: string;
  deferredResponseType?: string;
  /** QRD.6 - Deferred Response Date/Time */
  qrd_6?: Date | string;
  /** QRD.7 - Quantity Limited Request */
  qrd_7: string;
  quantityLimitedRequest?: string;
  /** QRD.8 - Who Subject Filter */
  qrd_8: string;
  whoSubjectFilter?: string;
  /** QRD.9 - What Subject Filter */
  qrd_9: string;
  whatSubjectFilter?: string;
  /** QRD.10 - What Department Data Code */
  qrd_10?: string;
  whatDepartmentDataCode?: string;
}
