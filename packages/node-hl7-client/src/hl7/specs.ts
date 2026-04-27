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
  /** Name of the HL7 Spec */
  version: string;
  /** Build ACC (Accident) Segment */
  buildACC: (props: ACC) => this;
  /** Build ADD (Addendum) Segment */
  buildADD: (props: ADD) => this;
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG: (props: Partial<AIG>) => this;
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL: (props: Partial<AIL>) => this;
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP: (props: Partial<AIP>) => this;
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS: (props: Partial<AIS>) => this;
  /** Build AL1 (Allergy Information) Segment */
  buildAL1: (props: Partial<AL1>) => this;
  /** Build APR (Appointment Preferences) Segment */
  buildAPR: (props: Partial<APR>) => this;
  /** Build BLG (Billing) Segment */
  buildBLG: (props: BLG) => this;
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX: (props: Partial<BPX>) => this;
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX: (props: Partial<BTX>) => this;
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP: (props: Partial<CSP>) => this;
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR: (props: Partial<CSR>) => this;
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS: (props: Partial<CSS>) => this;
  /** Build CTD (Contact Data) Segment */
  buildCTD: (props: Partial<CTD>) => this;
  /** Build DG1 (Diagnosis) Segment */
  buildDG1: (props: DG1) => this;
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG: (props: Partial<DRG>) => this;
  /** Build DSC (Continuation Pointer) Segment */
  buildDSC: (props: DSC) => this;
  /** Build DSP (Display Data) Segment */
  buildDSP: (props: DSP) => this;
  /** Build ERR (Error) Segment */
  buildERR: (props: ERR) => this;
  /** Build EVN (Event Type) Segment */
  buildEVN: (props: EVN) => this;
  /** Build FT1 (Financial Transaction) Segment */
  buildFT1: (props: any) => this;
  /** Build GOL (Goal Detail) Segment */
  buildGOL: (props: Partial<GOL>) => this;
  /** Build GT1 (Guarantor) Segment */
  buildGT1: (props: any) => this;
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM: (props: Partial<IAM>) => this;
  /** Build IN1 (Insurance) Segment */
  buildIN1: (props: any) => this;
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC: (props: Partial<IPC>) => this;
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD: (props: Partial<ISD>) => this;
  /** Build ITM (Material Item Master) Segment */
  buildITM: (props: Partial<ITM>) => this;
  /** Build IVT (Material Location) Segment */
  buildIVT: (props: Partial<IVT>) => this;
  /** Build MFE (Master File Entry) Segment */
  buildMFE: (props: Partial<MFE>) => this;
  /** Build MFI (Master File Identification) Segment */
  buildMFI: (props: Partial<MFI>) => this;
  /** Build MRG (Merge Patient Info) Segment */
  buildMRG: (props: any) => this;
  /** Build MSA (Acknowledgment) Segment */
  buildMSA: (props: any) => this;
  /** Build MSH (Message Header) Segment */
  buildMSH: (props: MSH) => this;
  /** Build NCK (System Clock) Segment */
  buildNCK: () => this;
  /** Build NK1 (Next of Kin) Segment */
  buildNK1: (props: NK1) => this;
  /** Build NPU (Bed Status Update) Segment */
  buildNPU: (props: NPU) => this;
  /** Build NSC (Network Change) Segment */
  buildNSC: (props: NSC) => this;
  /** Build NST (Statistics) Segment */
  buildNST: (props: any) => this;
  /** Build NTE (Notes and Comments) Segment */
  buildNTE: (props: NTE) => this;
  /** Build OBR (Observation Request) Segment */
  buildOBR: (props: OBR) => this;
  /** Build OBX (Observation/Result) Segment */
  buildOBX: (props: OBX) => this;
  /** Build ODS (Dietary Orders) Segment */
  buildODS: (props: Partial<ODS>) => this;
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT: (props: Partial<ODT>) => this;
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1: (props: Partial<OM1>) => this;
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2: (props: Partial<OM2>) => this;
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3: (props: Partial<OM3>) => this;
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4: (props: Partial<OM4>) => this;
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5: (props: Partial<OM5>) => this;
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6: (props: Partial<OM6>) => this;
  /** Build ORC (Common Order) Segment */
  buildORC: (props: ORC) => this;
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR: (props: Partial<PCR>) => this;
  /** Build PD1 (Patient Additional Demographic) Segment */
  buildPD1: (props: PD1) => this;
  /** Build PID (Patient Identification) Segment */
  buildPID: (props: PID) => this;
  /** Build PR1 (Procedures) Segment */
  buildPR1: (props: PR1) => this;
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA: (props: Partial<PRA>) => this;
  /** Build PRB (Problem Detail) Segment */
  buildPRB: (props: Partial<PRB>) => this;
  /** Build PRD (Provider Data) Segment */
  buildPRD: (props: Partial<PRD>) => this;
  /** Build PSH (Product Summary Header) Segment */
  buildPSH: (props: Partial<PSH>) => this;
  /** Build PTH (Pathway) Segment */
  buildPTH: (props: Partial<PTH>) => this;
  /** Build PV1 (Patient Visit) Segment */
  buildPV1: (props: PV1) => this;
  /** Build QRD (Query Definition) Segment */
  buildQRD: (props: QRD) => this;
  /** Build QRF (Query Filter) Segment */
  buildQRF: (props: QRF) => this;
  /** Build RDF (Table Row Definition) Segment */
  buildRDF: (props: Partial<RDF>) => this;
  /** Build RDT (Table Row Data) Segment */
  buildRDT: (props: Partial<RDT>) => this;
  /** Build REL (Clinical Relationship) Segment */
  buildREL: (props: Partial<REL>) => this;
  /** Build RGS (Resource Group) Segment */
  buildRGS: (props: Partial<RGS>) => this;
  /** Build ROL (Role) Segment */
  buildROL: (props: Partial<ROL>) => this;
  /** Build RX1 (Pharmacy/Treatment Order) Segment */
  buildRX1: (props: RX1) => this;
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA: (props: Partial<RXA>) => this;
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD: (props: Partial<RXD>) => this;
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE: (props: Partial<RXE>) => this;
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG: (props: Partial<RXG>) => this;
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO: (props: Partial<RXO>) => this;
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR: (props: Partial<RXR>) => this;
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH: (props: Partial<SCH>) => this;
  /** Build SFT (Software Segment) */
  buildSFT: (props: Partial<SFT>) => this;
  /** Build SPM (Specimen) Segment */
  buildSPM: (props: Partial<SPM>) => this;
  /** Build STF (Staff Identification) Segment */
  buildSTF: (props: Partial<STF>) => this;
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ: (props: Partial<STZ>) => this;
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA: (props: Partial<TXA>) => this;
  /** Build UB1 (UB82 Data) Segment */
  buildUB1: (props: UB1) => this;
  /** Build UB2 (UB92 Data) Segment */
  buildUB2: (props: Partial<UB2>) => this;
  /** Build URD (Results/Update Definition) Segment */
  buildURD: (props: URD) => this;
  /** Build URS (Unsolicited Selection) Segment */
  buildURS: (props: URS) => this;
  /** Build VAR (Variance) Segment */
  buildVAR: (props: Partial<VAR>) => this;
  /** Check the MSH Header for this Specification validation. */
  checkMSH: (props: MSH) => boolean;
  /** Export compiled HL7 String */
  toString: () => string;
}
