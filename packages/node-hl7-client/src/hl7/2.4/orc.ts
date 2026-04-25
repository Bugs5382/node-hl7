import { HL7_2_3_ORC } from "@/hl7/2.3/orc";

/** HL7 2.4 ORC - extends 2.3 with fields 24-30 */
export interface HL7_2_4_ORC extends HL7_2_3_ORC {
  /** ORC.24 - Order Status Modifier */
  orc_24?: string;
  /** ORC.25 - Advanced Beneficiary Notice Override Reason */
  orc_25?: string;
  /** ORC.26 - Filler's Expected Availability Date/Time */
  orc_26?: Date | string;
  /** ORC.27 - Confidentiality Code */
  orc_27?: string;
  /** ORC.28 - Order Type */
  orc_28?: "I" | "O";
  /** ORC.29 - Enterer Authorization Mode */
  orc_29?: string;
  /** ORC.30 - Parent Universal Service Identifier */
  orc_30?: string;
}
