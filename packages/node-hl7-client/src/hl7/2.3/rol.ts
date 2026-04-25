import { TABLE_0206 } from "@/hl7/tables/0206";

/** HL7 2.3 ROL - Role */
export interface HL7_2_3_ROL {
  /** ROL.1 - Role Instance ID */
  rol_1?: string;
  /** ROL.2 - Action Code (required) */
  rol_2: (typeof TABLE_0206)[number];
  /** ROL.3 - Role-ROL (required) */
  rol_3: string;
  /** ROL.4 - Role Person (required) */
  rol_4: string;
  /** ROL.5 - Role Begin Date/Time */
  rol_5?: Date | string;
  /** ROL.6 - Role End Date/Time */
  rol_6?: Date | string;
  /** ROL.7 - Role Duration */
  rol_7?: string;
  /** ROL.8 - Role Action Reason */
  rol_8?: string;
}
