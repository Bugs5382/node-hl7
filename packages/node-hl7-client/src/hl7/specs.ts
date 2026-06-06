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
import {
  ACC,
  ADD,
  AIG,
  AIL,
  AIP,
  AIS,
  AL1,
  APR,
  BLG,
  BPX,
  BTX,
  CSP,
  CSR,
  CSS,
  CTD,
  DG1,
  DRG,
  DSC,
  DSP,
  ERR,
  EVN,
  GOL,
  IAM,
  IPC,
  ISD,
  ITM,
  IVT,
  MFE,
  MFI,
  MSH,
  NK1,
  NPU,
  NSC,
  NTE,
  OBR,
  OBX,
  ODS,
  ODT,
  OM1,
  OM2,
  OM3,
  OM4,
  OM5,
  OM6,
  ORC,
  PCR,
  PD1,
  PID,
  PR1,
  PRA,
  PRB,
  PRD,
  PSH,
  PTH,
  PV1,
  QRD,
  QRF,
  RDF,
  RDT,
  REL,
  RGS,
  ROL,
  RX1,
  RXA,
  RXD,
  RXE,
  RXG,
  RXO,
  RXR,
  SCH,
  SFT,
  SPM,
  STF,
  STZ,
  TXA,
  UB1,
  UB2,
  URD,
  URS,
  VAR,
} from "@/hl7/headers";

/**
 * HL7 Base Interface
 * @since 1.0.0
 */
export interface HL7_SPEC {
  /** Build ACC (Accident) Segment */
  buildACC: (properties: ACC) => this;
  /** Build ADD (Addendum) Segment */
  buildADD: (properties: ADD) => this;
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG: (properties: Partial<AIG>) => this;
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL: (properties: Partial<AIL>) => this;
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP: (properties: Partial<AIP>) => this;
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS: (properties: Partial<AIS>) => this;
  /** Build AL1 (Allergy Information) Segment */
  buildAL1: (properties: Partial<AL1>) => this;
  /** Build APR (Appointment Preferences) Segment */
  buildAPR: (properties: Partial<APR>) => this;
  /** Build BLG (Billing) Segment */
  buildBLG: (properties: BLG) => this;
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX: (properties: Partial<BPX>) => this;
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX: (properties: Partial<BTX>) => this;
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP: (properties: Partial<CSP>) => this;
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR: (properties: Partial<CSR>) => this;
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS: (properties: Partial<CSS>) => this;
  /** Build CTD (Contact Data) Segment */
  buildCTD: (properties: Partial<CTD>) => this;
  /** Build DG1 (Diagnosis) Segment */
  buildDG1: (properties: DG1) => this;
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG: (properties: Partial<DRG>) => this;
  /** Build DSC (Continuation Pointer) Segment */
  buildDSC: (properties: DSC) => this;
  /** Build DSP (Display Data) Segment */
  buildDSP: (properties: DSP) => this;
  /** Build ERR (Error) Segment */
  buildERR: (properties: ERR) => this;
  /** Build EVN (Event Type) Segment */
  buildEVN: (properties: EVN) => this;
  /** Build FT1 (Financial Transaction) Segment */
  buildFT1: (properties: any) => this;
  /** Build GOL (Goal Detail) Segment */
  buildGOL: (properties: Partial<GOL>) => this;
  /** Build GT1 (Guarantor) Segment */
  buildGT1: (properties: any) => this;
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM: (properties: Partial<IAM>) => this;
  /** Build IN1 (Insurance) Segment */
  buildIN1: (properties: any) => this;
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC: (properties: Partial<IPC>) => this;
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD: (properties: Partial<ISD>) => this;
  /** Build ITM (Material Item Master) Segment */
  buildITM: (properties: Partial<ITM>) => this;
  /** Build IVT (Material Location) Segment */
  buildIVT: (properties: Partial<IVT>) => this;
  /** Build MFE (Master File Entry) Segment */
  buildMFE: (properties: Partial<MFE>) => this;
  /** Build MFI (Master File Identification) Segment */
  buildMFI: (properties: Partial<MFI>) => this;
  /** Build MRG (Merge Patient Info) Segment */
  buildMRG: (properties: any) => this;
  /** Build MSA (Acknowledgment) Segment */
  buildMSA: (properties: any) => this;
  /** Build MSH (Message Header) Segment */
  buildMSH: (properties: MSH) => this;
  /** Build NCK (System Clock) Segment */
  buildNCK: () => this;
  /** Build NK1 (Next of Kin) Segment */
  buildNK1: (properties: NK1) => this;
  /** Build NPU (Bed Status Update) Segment */
  buildNPU: (properties: NPU) => this;
  /** Build NSC (Network Change) Segment */
  buildNSC: (properties: NSC) => this;
  /** Build NST (Statistics) Segment */
  buildNST: (properties: any) => this;
  /** Build NTE (Notes and Comments) Segment */
  buildNTE: (properties: NTE) => this;
  /** Build OBR (Observation Request) Segment */
  buildOBR: (properties: OBR) => this;
  /** Build OBX (Observation/Result) Segment */
  buildOBX: (properties: OBX) => this;
  /** Build ODS (Dietary Orders) Segment */
  buildODS: (properties: Partial<ODS>) => this;
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT: (properties: Partial<ODT>) => this;
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1: (properties: Partial<OM1>) => this;
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2: (properties: Partial<OM2>) => this;
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3: (properties: Partial<OM3>) => this;
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4: (properties: Partial<OM4>) => this;
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5: (properties: Partial<OM5>) => this;
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6: (properties: Partial<OM6>) => this;
  /** Build ORC (Common Order) Segment */
  buildORC: (properties: ORC) => this;
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR: (properties: Partial<PCR>) => this;
  /** Build PD1 (Patient Additional Demographic) Segment */
  buildPD1: (properties: PD1) => this;
  /** Build PID (Patient Identification) Segment */
  buildPID: (properties: PID) => this;
  /** Build PR1 (Procedures) Segment */
  buildPR1: (properties: PR1) => this;
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA: (properties: Partial<PRA>) => this;
  /** Build PRB (Problem Detail) Segment */
  buildPRB: (properties: Partial<PRB>) => this;
  /** Build PRD (Provider Data) Segment */
  buildPRD: (properties: Partial<PRD>) => this;
  /** Build PSH (Product Summary Header) Segment */
  buildPSH: (properties: Partial<PSH>) => this;
  /** Build PTH (Pathway) Segment */
  buildPTH: (properties: Partial<PTH>) => this;
  /** Build PV1 (Patient Visit) Segment */
  buildPV1: (properties: PV1) => this;
  /** Build QRD (Query Definition) Segment */
  buildQRD: (properties: QRD) => this;
  /** Build QRF (Query Filter) Segment */
  buildQRF: (properties: QRF) => this;
  /** Build RDF (Table Row Definition) Segment */
  buildRDF: (properties: Partial<RDF>) => this;
  /** Build RDT (Table Row Data) Segment */
  buildRDT: (properties: Partial<RDT>) => this;
  /** Build REL (Clinical Relationship) Segment */
  buildREL: (properties: Partial<REL>) => this;
  /** Build RGS (Resource Group) Segment */
  buildRGS: (properties: Partial<RGS>) => this;
  /** Build ROL (Role) Segment */
  buildROL: (properties: Partial<ROL>) => this;
  /** Build RX1 (Pharmacy/Treatment Order) Segment */
  buildRX1: (properties: RX1) => this;
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA: (properties: Partial<RXA>) => this;
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD: (properties: Partial<RXD>) => this;
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE: (properties: Partial<RXE>) => this;
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG: (properties: Partial<RXG>) => this;
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO: (properties: Partial<RXO>) => this;
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR: (properties: Partial<RXR>) => this;
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH: (properties: Partial<SCH>) => this;
  /** Build SFT (Software Segment) */
  buildSFT: (properties: Partial<SFT>) => this;
  /** Build SPM (Specimen) Segment */
  buildSPM: (properties: Partial<SPM>) => this;
  /** Build STF (Staff Identification) Segment */
  buildSTF: (properties: Partial<STF>) => this;
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ: (properties: Partial<STZ>) => this;
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA: (properties: Partial<TXA>) => this;
  /** Build UB1 (UB82 Data) Segment */
  buildUB1: (properties: UB1) => this;
  /** Build UB2 (UB92 Data) Segment */
  buildUB2: (properties: Partial<UB2>) => this;
  /** Build URD (Results/Update Definition) Segment */
  buildURD: (properties: URD) => this;
  /** Build URS (Unsolicited Selection) Segment */
  buildURS: (properties: URS) => this;
  /** Build VAR (Variance) Segment */
  buildVAR: (properties: Partial<VAR>) => this;
  /** Check the MSH Header for this Specification validation. */
  checkMSH: (properties: MSH) => boolean;
  /** Export compiled HL7 String */
  toString: () => string;
  /** Name of the HL7 Spec */
  version: string;
}
