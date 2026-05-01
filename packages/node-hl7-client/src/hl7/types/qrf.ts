/** HL7 QRF - Original Style Query Filter */
export interface HL7_QRF {
  otherQrySubjectFilter?: string;
  /** QRF.1 - Where Subject Filter */
  qrf_1: string;
  /** QRF.2 - When Data Start Date/Time */
  qrf_2?: Date | string;
  /** QRF.3 - When Data End Date/Time */
  qrf_3?: Date | string;
  /** QRF.4 - What User Qualifier */
  qrf_4?: string;
  /** QRF.5 - Other QRY Subject Filter */
  qrf_5?: string;
  whatUserQualifier?: string;
  whenDataEndDateTime?: Date | string;
  whenDataStartDateTime?: Date | string;
  whereSubjectFilter?: string;
}
