/** HL7 QRD - Original-Style Query Definition */
export interface HL7_QRD {
  deferredResponseType?: string;
  /** QRD.1 - Query Date/Time */
  qrd_1: Date | string;
  /** QRD.10 - What Department Data Code */
  qrd_10?: string;
  /** QRD.2 - Query Format Code (R=Record-oriented, T=Text, D=Display) */
  qrd_2: string;
  /** QRD.3 - Query Priority (D=Deferred, I=Immediate) */
  qrd_3: string;
  /** QRD.4 - Query ID */
  qrd_4: string;
  /** QRD.5 - Deferred Response Type */
  qrd_5?: string;
  /** QRD.6 - Deferred Response Date/Time */
  qrd_6?: Date | string;
  /** QRD.7 - Quantity Limited Request */
  qrd_7: string;
  /** QRD.8 - Who Subject Filter */
  qrd_8: string;
  /** QRD.9 - What Subject Filter */
  qrd_9: string;
  quantityLimitedRequest?: string;
  queryDateTime?: Date | string;
  queryFormatCode?: string;
  queryId?: string;
  queryPriority?: string;
  whatDepartmentDataCode?: string;
  whatSubjectFilter?: string;
  whoSubjectFilter?: string;
}
