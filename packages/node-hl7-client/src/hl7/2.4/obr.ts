import { HL7_2_3_OBR } from "@/hl7/2.3/obr";

/** HL7 2.4 OBR - extends 2.3 with fields 44-47 */
export interface HL7_2_4_OBR extends HL7_2_3_OBR {
  /** OBR.44 - Procedure Code */
  obr_44?: string;
  /** OBR.45 - Procedure Code Modifier */
  obr_45?: string;
  /** OBR.46 - Placer Supplemental Service Information */
  obr_46?: string;
  /** OBR.47 - Filler Supplemental Service Information */
  obr_47?: string;
}
