import { ClientBuilderOptions_Hl7_2_1 } from "@/hl7/2.1/types";

export type { HL7_2_2_AL1 } from "./al1";
export type { HL7_2_2_MFE } from "./mfe";
export type { HL7_2_2_MFI } from "./mfi";
export type { HL7_2_2_MSH } from "./msh";
export type { HL7_2_2_OBR } from "./obr";
export type { HL7_2_2_OBX } from "./obx";
export type { HL7_2_2_ODS } from "./ods";
export type { HL7_2_2_ODT } from "./odt";
export type { HL7_2_2_ORC } from "./orc";
export type { HL7_2_2_PID } from "./pid";
export type { HL7_2_2_PV1 } from "./pv1";
export type { HL7_2_2_RXA } from "./rxa";
export type { HL7_2_2_RXD } from "./rxd";
export type { HL7_2_2_RXE } from "./rxe";
export type { HL7_2_2_RXG } from "./rxg";
export type { HL7_2_2_RXO } from "./rxo";
export type { HL7_2_2_RXR } from "./rxr";
export type { HL7_2_2_STF } from "./stf";
export type { HL7_2_2_UB2 } from "./ub2";

export interface ClientBuilderOptions_Hl7_2_2 extends ClientBuilderOptions_Hl7_2_1 {
  table_0326?: string[];
}
