/** HL7 QRF - Original Style Query Filter */
export interface HL7_QRF {
  /** QRF.1 - Where Subject Filter */
  qrf_1: string;
  whereSubjectFilter?: string;
  /** QRF.2 - When Data Start Date/Time */
  qrf_2?: Date | string;
  whenDataStartDateTime?: Date | string;
  /** QRF.3 - When Data End Date/Time */
  qrf_3?: Date | string;
  whenDataEndDateTime?: Date | string;
  /** QRF.4 - What User Qualifier */
  qrf_4?: string;
  whatUserQualifier?: string;
  /** QRF.5 - Other QRY Subject Filter */
  qrf_5?: string;
  otherQrySubjectFilter?: string;
}
