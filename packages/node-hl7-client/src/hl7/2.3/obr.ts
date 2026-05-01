import { HL7_2_2_OBR } from "@/hl7/2.2/obr";

/** HL7 2.3 OBR - extends 2.2 with fields 36-43 */
export interface HL7_2_3_OBR extends HL7_2_2_OBR {
  /** OBR.36 - Scheduled Date/Time */
  obr_36?: Date | string;
  /** OBR.37 - Number of Sample Containers */
  obr_37?: string;
  /** OBR.38 - Transport Logistics of Collected Sample */
  obr_38?: string;
  /** OBR.39 - Collector's Comment */
  obr_39?: string;
  /** OBR.40 - Transport Arrangement Responsibility */
  obr_40?: string;
  /** OBR.41 - Transport Arranged */
  obr_41?: "A" | "N" | "W";
  /** OBR.42 - Escort Required */
  obr_42?: "N" | "O" | "R";
  /** OBR.43 - Planned Patient Transport Comment */
  obr_43?: string;
}
