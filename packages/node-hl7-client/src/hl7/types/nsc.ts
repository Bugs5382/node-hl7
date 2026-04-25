/** HL7 NSC - Status Change */
export interface HL7_NSC {
  /** NSC.1 - Network Change Type */
  nsc_1: string;
  networkChangeType?: string;
  /** NSC.2 - Current CPU */
  nsc_2?: string;
  /** NSC.3 - Current Fileserver */
  nsc_3?: string;
  /** NSC.4 - Current Application */
  nsc_4?: string;
  /** NSC.5 - Current Facility */
  nsc_5?: string;
  /** NSC.6 - New CPU */
  nsc_6?: string;
  /** NSC.7 - New Fileserver */
  nsc_7?: string;
  /** NSC.8 - New Application */
  nsc_8?: string;
  /** NSC.9 - New Facility */
  nsc_9?: string;
}
