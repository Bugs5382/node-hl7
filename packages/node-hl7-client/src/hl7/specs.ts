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
  buildACC: (props: ACC) => void;
  /** Build ADD (Addendum) Segment */
  buildADD: (props: ADD) => void;
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG: (props: Partial<AIG>) => void;
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL: (props: Partial<AIL>) => void;
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP: (props: Partial<AIP>) => void;
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS: (props: Partial<AIS>) => void;
  /** Build AL1 (Allergy Information) Segment */
  buildAL1: (props: Partial<AL1>) => void;
  /** Build APR (Appointment Preferences) Segment */
  buildAPR: (props: Partial<APR>) => void;
  /** Build BLG (Billing) Segment */
  buildBLG: (props: BLG) => void;
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX: (props: Partial<BPX>) => void;
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX: (props: Partial<BTX>) => void;
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP: (props: Partial<CSP>) => void;
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR: (props: Partial<CSR>) => void;
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS: (props: Partial<CSS>) => void;
  /** Build CTD (Contact Data) Segment */
  buildCTD: (props: Partial<CTD>) => void;
  /** Build DG1 (Diagnosis) Segment */
  buildDG1: (props: DG1) => void;
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG: (props: Partial<DRG>) => void;
  /** Build DSC (Continuation Pointer) Segment */
  buildDSC: (props: DSC) => void;
  /** Build DSP (Display Data) Segment */
  buildDSP: (props: DSP) => void;
  /** Build ERR (Error) Segment */
  buildERR: (props: ERR) => void;
  /** Build EVN (Event Type) Segment */
  buildEVN: (props: EVN) => void;
  /** Build FT1 (Financial Transaction) Segment */
  buildFT1: (props: any) => void;
  /** Build GOL (Goal Detail) Segment */
  buildGOL: (props: Partial<GOL>) => void;
  /** Build GT1 (Guarantor) Segment */
  buildGT1: (props: any) => void;
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM: (props: Partial<IAM>) => void;
  /** Build IN1 (Insurance) Segment */
  buildIN1: (props: any) => void;
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC: (props: Partial<IPC>) => void;
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD: (props: Partial<ISD>) => void;
  /** Build ITM (Material Item Master) Segment */
  buildITM: (props: Partial<ITM>) => void;
  /** Build IVT (Material Location) Segment */
  buildIVT: (props: Partial<IVT>) => void;
  /** Build MFE (Master File Entry) Segment */
  buildMFE: (props: Partial<MFE>) => void;
  /** Build MFI (Master File Identification) Segment */
  buildMFI: (props: Partial<MFI>) => void;
  /** Build MRG (Merge Patient Info) Segment */
  buildMRG: (props: any) => void;
  /** Build MSA (Acknowledgment) Segment */
  buildMSA: (props: any) => void;
  /** Build MSH (Message Header) Segment */
  buildMSH: (props: MSH) => void;
  /** Build NCK (System Clock) Segment */
  buildNCK: () => void;
  /** Build NK1 (Next of Kin) Segment */
  buildNK1: (props: NK1) => void;
  /** Build NPU (Bed Status Update) Segment */
  buildNPU: (props: NPU) => void;
  /** Build NSC (Network Change) Segment */
  buildNSC: (props: NSC) => void;
  /** Build NST (Statistics) Segment */
  buildNST: (props: any) => void;
  /** Build NTE (Notes and Comments) Segment */
  buildNTE: (props: NTE) => void;
  /** Build OBR (Observation Request) Segment */
  buildOBR: (props: OBR) => void;
  /** Build OBX (Observation/Result) Segment */
  buildOBX: (props: OBX) => void;
  /** Build ODS (Dietary Orders) Segment */
  buildODS: (props: Partial<ODS>) => void;
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT: (props: Partial<ODT>) => void;
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1: (props: Partial<OM1>) => void;
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2: (props: Partial<OM2>) => void;
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3: (props: Partial<OM3>) => void;
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4: (props: Partial<OM4>) => void;
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5: (props: Partial<OM5>) => void;
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6: (props: Partial<OM6>) => void;
  /** Build ORC (Common Order) Segment */
  buildORC: (props: ORC) => void;
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR: (props: Partial<PCR>) => void;
  /** Build PD1 (Patient Additional Demographic) Segment */
  buildPD1: (props: PD1) => void;
  /** Build PID (Patient Identification) Segment */
  buildPID: (props: PID) => void;
  /** Build PR1 (Procedures) Segment */
  buildPR1: (props: PR1) => void;
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA: (props: Partial<PRA>) => void;
  /** Build PRB (Problem Detail) Segment */
  buildPRB: (props: Partial<PRB>) => void;
  /** Build PRD (Provider Data) Segment */
  buildPRD: (props: Partial<PRD>) => void;
  /** Build PSH (Product Summary Header) Segment */
  buildPSH: (props: Partial<PSH>) => void;
  /** Build PTH (Pathway) Segment */
  buildPTH: (props: Partial<PTH>) => void;
  /** Build PV1 (Patient Visit) Segment */
  buildPV1: (props: PV1) => void;
  /** Build QRD (Query Definition) Segment */
  buildQRD: (props: QRD) => void;
  /** Build QRF (Query Filter) Segment */
  buildQRF: (props: QRF) => void;
  /** Build RDF (Table Row Definition) Segment */
  buildRDF: (props: Partial<RDF>) => void;
  /** Build RDT (Table Row Data) Segment */
  buildRDT: (props: Partial<RDT>) => void;
  /** Build REL (Clinical Relationship) Segment */
  buildREL: (props: Partial<REL>) => void;
  /** Build RGS (Resource Group) Segment */
  buildRGS: (props: Partial<RGS>) => void;
  /** Build ROL (Role) Segment */
  buildROL: (props: Partial<ROL>) => void;
  /** Build RX1 (Pharmacy/Treatment Order) Segment */
  buildRX1: (props: RX1) => void;
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA: (props: Partial<RXA>) => void;
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD: (props: Partial<RXD>) => void;
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE: (props: Partial<RXE>) => void;
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG: (props: Partial<RXG>) => void;
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO: (props: Partial<RXO>) => void;
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR: (props: Partial<RXR>) => void;
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH: (props: Partial<SCH>) => void;
  /** Build SFT (Software Segment) */
  buildSFT: (props: Partial<SFT>) => void;
  /** Build SPM (Specimen) Segment */
  buildSPM: (props: Partial<SPM>) => void;
  /** Build STF (Staff Identification) Segment */
  buildSTF: (props: Partial<STF>) => void;
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ: (props: Partial<STZ>) => void;
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA: (props: Partial<TXA>) => void;
  /** Build UB1 (UB82 Data) Segment */
  buildUB1: (props: UB1) => void;
  /** Build UB2 (UB92 Data) Segment */
  buildUB2: (props: Partial<UB2>) => void;
  /** Build URD (Results/Update Definition) Segment */
  buildURD: (props: URD) => void;
  /** Build URS (Unsolicited Selection) Segment */
  buildURS: (props: URS) => void;
  /** Build VAR (Variance) Segment */
  buildVAR: (props: Partial<VAR>) => void;
  /** Check the MSH Header for this Specification validation. */
  checkMSH: (props: MSH) => boolean;
  /** Export compiled HL7 String */
  toString: () => string;
}
