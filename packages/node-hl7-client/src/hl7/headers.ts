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
import { HL7_2_1_ACC } from "@/hl7/2.1/acc";
import { HL7_2_1_BLG } from "@/hl7/2.1/blg";
import { HL7_2_1_DG1 } from "@/hl7/2.1/dg1";
import { HL7_2_1_DSC } from "@/hl7/2.1/dsc";
import { HL7_2_1_ERR } from "@/hl7/2.1/err";
import { HL7_2_1_EVN } from "@/hl7/2.1/evn";
import { HL7_2_1_FT1 } from "@/hl7/2.1/ft1";
import { HL7_2_1_GT1 } from "@/hl7/2.1/gt1";
import { HL7_2_1_IN1 } from "@/hl7/2.1/in1";
import { HL7_2_1_MRG } from "@/hl7/2.1/mrg";
import { HL7_2_1_MSA } from "@/hl7/2.1/msa";
import { HL7_2_1_MSH } from "@/hl7/2.1/msh";
import { HL7_2_1_NPU } from "@/hl7/2.1/npu";
import { HL7_2_1_NSC } from "@/hl7/2.1/nsc";
import { HL7_2_1_NTE } from "@/hl7/2.1/nte";
import { HL7_2_1_PR1 } from "@/hl7/2.1/pr1";
import { HL7_2_1_QRD } from "@/hl7/2.1/qrd";
import { HL7_2_1_QRF } from "@/hl7/2.1/qrf";
import { HL7_2_1_RX1 } from "@/hl7/2.1/rx1";
import { HL7_2_1_UB1 } from "@/hl7/2.1/ub1";
import { HL7_2_1_URD } from "@/hl7/2.1/urd";
import { HL7_2_1_URS } from "@/hl7/2.1/urs";
import { HL7_2_2_AL1 } from "@/hl7/2.2/al1";
import { HL7_2_2_MFE } from "@/hl7/2.2/mfe";
import { HL7_2_2_MFI } from "@/hl7/2.2/mfi";
import { HL7_2_2_OBR } from "@/hl7/2.2/obr";
import { HL7_2_2_OBX } from "@/hl7/2.2/obx";
import { HL7_2_2_ODS } from "@/hl7/2.2/ods";
import { HL7_2_2_ODT } from "@/hl7/2.2/odt";
import { HL7_2_2_ORC } from "@/hl7/2.2/orc";
import { HL7_2_2_PV1 } from "@/hl7/2.2/pv1";
import { HL7_2_2_RXA } from "@/hl7/2.2/rxa";
import { HL7_2_2_RXD } from "@/hl7/2.2/rxd";
import { HL7_2_2_RXE } from "@/hl7/2.2/rxe";
import { HL7_2_2_RXG } from "@/hl7/2.2/rxg";
import { HL7_2_2_RXO } from "@/hl7/2.2/rxo";
import { HL7_2_2_RXR } from "@/hl7/2.2/rxr";
import { HL7_2_2_STF } from "@/hl7/2.2/stf";
import { HL7_2_2_UB2 } from "@/hl7/2.2/ub2";
import { HL7_2_3_AIG } from "@/hl7/2.3/aig";
import { HL7_2_3_AIL } from "@/hl7/2.3/ail";
import { HL7_2_3_AIP } from "@/hl7/2.3/aip";
import { HL7_2_3_AIS } from "@/hl7/2.3/ais";
import { HL7_2_3_APR } from "@/hl7/2.3/apr";
import { HL7_2_3_CSP } from "@/hl7/2.3/csp";
import { HL7_2_3_CSR } from "@/hl7/2.3/csr";
import { HL7_2_3_CSS } from "@/hl7/2.3/css";
import { HL7_2_3_CTD } from "@/hl7/2.3/ctd";
import { HL7_2_3_NK1 } from "@/hl7/2.3/nk1";
import { HL7_2_3_OBR } from "@/hl7/2.3/obr";
import { HL7_2_3_OBX } from "@/hl7/2.3/obx";
import { HL7_2_3_ORC } from "@/hl7/2.3/orc";
import { HL7_2_3_PCR } from "@/hl7/2.3/pcr";
import { HL7_2_3_PD1 } from "@/hl7/2.3/pd1";
import { HL7_2_3_PID } from "@/hl7/2.3/pid";
import { HL7_2_3_PRA } from "@/hl7/2.3/pra";
import { HL7_2_3_PRD } from "@/hl7/2.3/prd";
import { HL7_2_3_PSH } from "@/hl7/2.3/psh";
import { HL7_2_3_RDF } from "@/hl7/2.3/rdf";
import { HL7_2_3_RDT } from "@/hl7/2.3/rdt";
import { HL7_2_3_RGS } from "@/hl7/2.3/rgs";
import { HL7_2_3_ROL } from "@/hl7/2.3/rol";
import { HL7_2_3_SCH } from "@/hl7/2.3/sch";
import { HL7_2_3_VAR } from "@/hl7/2.3/var";
import { HL7_2_4_DRG } from "@/hl7/2.4/drg";
import { HL7_2_4_GOL } from "@/hl7/2.4/gol";
import { HL7_2_4_IAM } from "@/hl7/2.4/iam";
import { HL7_2_4_OBR } from "@/hl7/2.4/obr";
import { HL7_2_4_OM1 } from "@/hl7/2.4/om1";
import { HL7_2_4_OM2 } from "@/hl7/2.4/om2";
import { HL7_2_4_OM3 } from "@/hl7/2.4/om3";
import { HL7_2_4_OM4 } from "@/hl7/2.4/om4";
import { HL7_2_4_OM5 } from "@/hl7/2.4/om5";
import { HL7_2_4_OM6 } from "@/hl7/2.4/om6";
import { HL7_2_4_ORC } from "@/hl7/2.4/orc";
import { HL7_2_4_PID } from "@/hl7/2.4/pid";
import { HL7_2_4_PRB } from "@/hl7/2.4/prb";
import { HL7_2_4_PTH } from "@/hl7/2.4/pth";
import { HL7_2_4_TXA } from "@/hl7/2.4/txa";
import { HL7_2_5_SFT } from "@/hl7/2.5/sft";
import { HL7_2_5_SPM } from "@/hl7/2.5/spm";
import { HL7_2_6_BPX } from "@/hl7/2.6/bpx";
import { HL7_2_6_BTX } from "@/hl7/2.6/btx";
import { HL7_2_6_ITM } from "@/hl7/2.6/itm";
import { HL7_2_6_IVT } from "@/hl7/2.6/ivt";
import { HL7_2_6_REL } from "@/hl7/2.6/rel";
import { HL7_2_7_IPC } from "@/hl7/2.7/ipc";
import { HL7_2_7_ISD } from "@/hl7/2.7/isd";
import { HL7_2_8_STZ } from "@/hl7/2.8/stz";
import { HL7_ADD } from "@/hl7/types/add";
import { HL7_DSP } from "@/hl7/types/dsp";
import { HL7_NST } from "@/hl7/types/nst";

import { HL7_2_2_MSH } from "./2.2";
import { HL7_2_3_MSH } from "./2.3";
import { HL7_2_3_1_MSH } from "./2.3.1";
import { HL7_2_4_MSH } from "./2.4";
import { HL7_2_5_MSH } from "./2.5";
import { HL7_2_5_1_MSH } from "./2.5.1";
import { HL7_2_6_MSH } from "./2.6";
import { HL7_2_7_MSH } from "./2.7";
import { HL7_2_7_1_MSH } from "./2.7.1";
import { HL7_2_8_MSH } from "./2.8";

export type ACC = HL7_2_1_ACC;

export type ADD = HL7_ADD;

export type AIG = HL7_2_3_AIG;

export type AIL = HL7_2_3_AIL;

export type AIP = HL7_2_3_AIP;

export type AIS = HL7_2_3_AIS;

export type AL1 = HL7_2_2_AL1;

export type APR = HL7_2_3_APR;

export type BLG = HL7_2_1_BLG;

export type BPX = HL7_2_6_BPX;

export type BTX = HL7_2_6_BTX;

export type CSP = HL7_2_3_CSP;

export type CSR = HL7_2_3_CSR;

export type CSS = HL7_2_3_CSS;

export type CTD = HL7_2_3_CTD;

export type DG1 = HL7_2_1_DG1;

export type DRG = HL7_2_4_DRG;

export type DSC = HL7_2_1_DSC;

export type DSP = HL7_DSP;

export type ERR = HL7_2_1_ERR;

export type EVN = HL7_2_1_EVN;

export type FT1 = HL7_2_1_FT1;

export type GOL = HL7_2_4_GOL;

export type GT1 = HL7_2_1_GT1;

export type IAM = HL7_2_4_IAM;

export type IN1 = HL7_2_1_IN1;

export type IPC = HL7_2_7_IPC;

export type ISD = HL7_2_7_ISD;

export type ITM = HL7_2_6_ITM;

export type IVT = HL7_2_6_IVT;

export type MFE = HL7_2_2_MFE;

export type MFI = HL7_2_2_MFI;

export type MRG = HL7_2_1_MRG;

export type MSA = HL7_2_1_MSA;

/**
 * MSH Unions
 * @since 1.0.0
 */
export type MSH =
  | HL7_2_1_MSH
  | HL7_2_2_MSH
  | HL7_2_3_1_MSH
  | HL7_2_3_MSH
  | HL7_2_4_MSH
  | HL7_2_5_1_MSH
  | HL7_2_5_MSH
  | HL7_2_6_MSH
  | HL7_2_7_1_MSH
  | HL7_2_7_MSH
  | HL7_2_8_MSH;

export type NK1 = HL7_2_3_NK1;

export type NPU = HL7_2_1_NPU;

export type NSC = HL7_2_1_NSC;

export type NST = HL7_NST;

export type NTE = HL7_2_1_NTE;

export type OBR = HL7_2_4_OBR;

export type OBX = HL7_2_3_OBX;

export type ODS = HL7_2_2_ODS;

export type ODT = HL7_2_2_ODT;

export type OM1 = HL7_2_4_OM1;

export type OM2 = HL7_2_4_OM2;

export type OM3 = HL7_2_4_OM3;

export type OM4 = HL7_2_4_OM4;

export type OM5 = HL7_2_4_OM5;

export type OM6 = HL7_2_4_OM6;

export type ORC = HL7_2_4_ORC;

export type PCR = HL7_2_3_PCR;

export type PD1 = HL7_2_3_PD1;

export type PID = HL7_2_4_PID;

export type PR1 = HL7_2_1_PR1;

export type PRA = HL7_2_3_PRA;

export type PRB = HL7_2_4_PRB;

export type PRD = HL7_2_3_PRD;

export type PSH = HL7_2_3_PSH;

export type PTH = HL7_2_4_PTH;

export type PV1 = HL7_2_2_PV1;

export type QRD = HL7_2_1_QRD;

export type QRF = HL7_2_1_QRF;

export type RDF = HL7_2_3_RDF;

export type RDT = HL7_2_3_RDT;

export type REL = HL7_2_6_REL;

export type RGS = HL7_2_3_RGS;

export type ROL = HL7_2_3_ROL;

export type RX1 = HL7_2_1_RX1;

export type RXA = HL7_2_2_RXA;

export type RXD = HL7_2_2_RXD;

export type RXE = HL7_2_2_RXE;

export type RXG = HL7_2_2_RXG;

export type RXO = HL7_2_2_RXO;

export type RXR = HL7_2_2_RXR;

export type SCH = HL7_2_3_SCH;

export type SFT = HL7_2_5_SFT;

export type SPM = HL7_2_5_SPM;

export type STF = HL7_2_2_STF;

export type STZ = HL7_2_8_STZ;

export type TXA = HL7_2_4_TXA;

export type UB1 = HL7_2_1_UB1;

export type UB2 = HL7_2_2_UB2;

export type URD = HL7_2_1_URD;

export type URS = HL7_2_1_URS;

export type VAR = HL7_2_3_VAR;

// Re-export version-specific OBR/ORC for subclasses that need the narrower type

export { type HL7_2_2_OBR } from "@/hl7/2.2/obr";
export { type HL7_2_2_OBX } from "@/hl7/2.2/obx";
export { type HL7_2_2_ORC } from "@/hl7/2.2/orc";
export { type HL7_2_2_PV1 } from "@/hl7/2.2/pv1";
export { type HL7_2_3_NK1 } from "@/hl7/2.3/nk1";
export { type HL7_2_3_OBR } from "@/hl7/2.3/obr";
export { type HL7_2_3_OBX } from "@/hl7/2.3/obx";
export { type HL7_2_3_ORC } from "@/hl7/2.3/orc";
export { type HL7_2_3_PID } from "@/hl7/2.3/pid";
export { type HL7_2_4_OBR } from "@/hl7/2.4/obr";
export { type HL7_2_4_ORC } from "@/hl7/2.4/orc";
export { type HL7_2_4_PID } from "@/hl7/2.4/pid";
