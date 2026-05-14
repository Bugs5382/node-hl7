/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
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
