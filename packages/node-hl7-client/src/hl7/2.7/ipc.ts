/** HL7 2.7 IPC - Imaging Procedure Control */
export interface HL7_2_7_IPC {
  /** IPC.1 - Accession Identifier (required) */
  ipc_1: string;
  /** IPC.2 - Requested Procedure ID (required) */
  ipc_2: string;
  /** IPC.3 - Study Instance UID (required) */
  ipc_3: string;
  /** IPC.4 - Scheduled Procedure Step ID (required) */
  ipc_4: string;
  /** IPC.5 - Modality */
  ipc_5?: string;
  /** IPC.6 - Protocol Code */
  ipc_6?: string;
  /** IPC.7 - Scheduled Station Name */
  ipc_7?: string;
  /** IPC.8 - Scheduled Procedure Step Location */
  ipc_8?: string;
}
