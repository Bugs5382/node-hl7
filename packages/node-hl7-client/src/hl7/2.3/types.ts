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
import { ClientBuilderOptions_Hl7_2_2 } from "@/hl7/2.2/types";

export type { HL7_2_3_AIG } from "./aig";
export type { HL7_2_3_AIL } from "./ail";
export type { HL7_2_3_AIP } from "./aip";
export type { HL7_2_3_AIS } from "./ais";
export type { HL7_2_3_APR } from "./apr";
export type { HL7_2_3_CSP } from "./csp";
export type { HL7_2_3_CSR } from "./csr";
export type { HL7_2_3_CSS } from "./css";
export type { HL7_2_3_CTD } from "./ctd";
export type { HL7_2_3_MSH } from "./msh";
export type { HL7_2_3_NK1 } from "./nk1";
export type { HL7_2_3_OBR } from "./obr";
export type { HL7_2_3_OBX } from "./obx";
export type { HL7_2_3_ORC } from "./orc";
export type { HL7_2_3_PCR } from "./pcr";
export type { HL7_2_3_PD1 } from "./pd1";
export type { HL7_2_3_PID } from "./pid";
export type { HL7_2_3_PRA } from "./pra";
export type { HL7_2_3_PRD } from "./prd";
export type { HL7_2_3_PSH } from "./psh";
export type { HL7_2_3_RDF } from "./rdf";
export type { HL7_2_3_RDT } from "./rdt";
export type { HL7_2_3_RGS } from "./rgs";
export type { HL7_2_3_ROL } from "./rol";
export type { HL7_2_3_SCH } from "./sch";
export type { HL7_2_3_VAR } from "./var";

export interface ClientBuilderOptions_Hl7_2_3 extends ClientBuilderOptions_Hl7_2_2 {
  table_0155?: string[];
}
