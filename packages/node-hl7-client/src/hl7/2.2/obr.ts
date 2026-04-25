import { HL7_2_1_OBR } from "@/hl7/2.1/obr";

/** HL7 2.2 OBR - extends 2.1 with fields 26-35 */
export interface HL7_2_2_OBR extends HL7_2_1_OBR {
  /** OBR.26 - Parent Result (max 60) */
  obr_26?: string;
  /** OBR.27 - Quantity/Timing (max 200) */
  obr_27?: string;
  /** OBR.28 - Result Copies To (max 150) */
  obr_28?: string;
  /** OBR.29 - Parent (max 150) */
  obr_29?: string;
  /** OBR.30 - Transportation Mode (max 20) */
  obr_30?: string;
  /** OBR.31 - Reason for Study (max 300) */
  obr_31?: string;
  /** OBR.32 - Principal Result Interpreter (max 60) */
  obr_32?: string;
  /** OBR.33 - Assistant Result Interpreter (max 60) */
  obr_33?: string;
  /** OBR.34 - Technician (max 60) */
  obr_34?: string;
  /** OBR.35 - Transcriptionist (max 60) */
  obr_35?: string;
}
