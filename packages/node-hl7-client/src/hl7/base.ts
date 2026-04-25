import { Message } from "@/builder";
import { Segment } from "@/builder/modules/segment";
import { ValidationRule } from "@/declaration/validationRule";
import { HL7FatalError, HL7ValidationError } from "@/helpers";
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
  FT1,
  GOL,
  GT1,
  IAM,
  IN1,
  IPC,
  ISD,
  ITM,
  IVT,
  MFE,
  MFI,
  MRG,
  MSA,
  MSH,
  NK1,
  NPU,
  NSC,
  NST,
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
import { normalizedClientBuilderOptions } from "@/hl7/normalizedBuilder";
import { HL7_SPEC } from "@/hl7/specs";
import { ClientBuilderOptions } from "@/modules/types";
import { createHL7Date, DateLength } from "@/utils";
import EventEmitter from "node:events";

/**
 * Base Class of an HL7 Specification
 * @since 1.0.0
 */
export class HL7_BASE extends EventEmitter implements HL7_SPEC {
  name: string = "";
  /** Version
   * @since 1.0.0 */
  version = "";
  /**
   * Regardless if errors are soft, always throw and exception or deviation from the rule.
   * @since 4.0.0
   * @private
   */
  private readonly hardError: boolean;
  /**
   * @since 4.0.0
   * @protected */
  protected _message: Message;
  /**
   * Options for the Hl7 Message.
   * @since 4.0.0
   * @readonly */
  readonly _opt: ClientBuilderOptions;
  /**
   * Max length of ADD Segment.
   * Changes based on extended class.
   * @since 4.0.0
   * @protected */
  protected _maxAddSegmentLength: number | undefined;
  /**
   * The Current Segment we are working on.
   * @since 4.0.0
   * @protected
   */
  protected _segment!: Segment;

  /**
   * Create a new HL7 Message
   * @since 4.0.0
   */
  constructor(props?: ClientBuilderOptions) {
    super();
    const opt = normalizedClientBuilderOptions(props);

    this._opt = opt;
    this._message = new Message(opt);
    this.hardError = props?.hardError || false;
  }

  /**
   *
   * @param props
   */
  buildACC(props: ACC) {
    this.headerExists();
    this._buildACC(props);
  }
  /**
   * Build the ADD Segment
   * @remarks Add an ADD Segment to the HL7 Message
   * @param props
   */
  buildADD(props: ADD) {
    this.headerExists();

    const lastSegment = this._message.getLastSegment();

    // @todo This might not be need to check BHS/FHS cause we are building using Message
    if (["MSH", "BHS", "FHS"].includes(lastSegment._name)) {
      throw new HL7ValidationError(
        "This segment must not follow a MSH, BHS, or FHS",
      );
    }

    this._segment = this._message.addSegment("ADD");

    this._validatorSetValue(
      "1",
      props.add_1 || props.addendumContinuationPointer,
      {
        length: { max: this._maxAddSegmentLength },
      },
    );
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildBLG(props: BLG) {
    this.headerExists();
    this._buildBLG(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDG1(props: DG1): void {
    this.headerExists();
    this._buildDG1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSC(props: any): void {
    this.headerExists();
    this._buildDSC(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSP(props: any): void {
    this.headerExists();
    this._buildDSP(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildERR(props: any): void {
    this.headerExists();
    this._buildERR(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildEVN(props: Partial<EVN>): void {
    this.headerExists();
    this._buildEVN(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildFT1(props: Partial<FT1>): void {
    this.headerExists();
    this._buildFT1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildGT1(props: Partial<GT1>): void {
    this.headerExists();
    this._buildGT1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildIN1(props: Partial<IN1>): void {
    this.headerExists();
    this._buildIN1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMRG(props: Partial<MRG>): void {
    this.headerExists();
    this._buildMRG(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMSA(props: Partial<MSA>): void {
    this.headerExists();
    this._buildMSA(props);
  }
  /**
   * Build MSH Header
   * @remarks Add the required fields based on the spec chosen.
   * @since 1.0.0
   * @return void
   * @param props
   */
  buildMSH(props: Partial<MSH>): void {
    // make sure there is only one MSH header per message.
    if (this._message.totalSegment("MSH") > 0) {
      throw new HL7FatalError(
        `You can only have one MSH Header per HL7 Message.`,
      );
    }
    this._buildMSH(props);
  }
  /**
   *
   * @since 4.0.0
   */
  buildNCK(): void {
    this.headerExists();

    // make sure there is only one MSH header per message.
    if (this._message.totalSegment("NCK") > 0) {
      throw new HL7FatalError(
        `You can only have one NCK segment per HL7 Message.`,
      );
    }

    this._buildNCK();
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNK1(props: Partial<NK1>): void {
    this.headerExists();
    this._buildNK1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNPU(props: Partial<NPU>): void {
    this.headerExists();
    this._buildNPU(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNSC(props: Partial<NSC>): void {
    this.headerExists();
    this._buildNSC(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNST(props: NST): void {
    this.headerExists();
    this._buildNST(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNTE(props: Partial<NTE>): void {
    this.headerExists();
    this._buildNTE(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBR(props: Partial<OBR>): void {
    this.headerExists();
    this._buildOBR(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBX(props: Partial<OBX>): void {
    this.headerExists();
    this._buildOBX(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildORC(props: Partial<ORC>): void {
    this.headerExists();
    this._buildORC(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPD1(props: Partial<PD1>): void {
    this.headerExists();
    this._buildPD1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPID(props: Partial<PID>): void {
    this.headerExists();
    this._buildPID(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPR1(props: Partial<PR1>): void {
    this.headerExists();
    this._buildPR1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPV1(props: Partial<PV1>): void {
    this.headerExists();
    this._buildPV1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRD(props: Partial<QRD>): void {
    this.headerExists();
    this._buildQRD(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRF(props: Partial<QRF>): void {
    this.headerExists();
    this._buildQRF(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildRX1(props: Partial<RX1>): void {
    this.headerExists();
    this._buildRX1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildUB1(props: Partial<UB1>): void {
    this.headerExists();
    this._buildUB1(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURD(props: Partial<URD>): void {
    this.headerExists();
    this._buildURD(props);
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURS(props: Partial<URS>): void {
    this.headerExists();
    this._buildURS(props);
  }
  /** Build AL1 (Allergy Information) Segment */
  buildAL1(props: Partial<AL1>): void {
    this.headerExists();
    this._buildAL1(props);
  }
  /** Build UB2 (UB92 Data) Segment */
  buildUB2(props: Partial<UB2>): void {
    this.headerExists();
    this._buildUB2(props);
  }
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA(props: Partial<RXA>): void {
    this.headerExists();
    this._buildRXA(props);
  }
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR(props: Partial<RXR>): void {
    this.headerExists();
    this._buildRXR(props);
  }
  /** Build MFI (Master File Identification) Segment */
  buildMFI(props: Partial<MFI>): void {
    this.headerExists();
    this._buildMFI(props);
  }
  /** Build MFE (Master File Entry) Segment */
  buildMFE(props: Partial<MFE>): void {
    this.headerExists();
    this._buildMFE(props);
  }
  /** Build STF (Staff Identification) Segment */
  buildSTF(props: Partial<STF>): void {
    this.headerExists();
    this._buildSTF(props);
  }
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO(props: Partial<RXO>): void {
    this.headerExists();
    this._buildRXO(props);
  }
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE(props: Partial<RXE>): void {
    this.headerExists();
    this._buildRXE(props);
  }
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD(props: Partial<RXD>): void {
    this.headerExists();
    this._buildRXD(props);
  }
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG(props: Partial<RXG>): void {
    this.headerExists();
    this._buildRXG(props);
  }
  /** Build ODS (Dietary Orders, Supplements, and Preferences) Segment */
  buildODS(props: Partial<ODS>): void {
    this.headerExists();
    this._buildODS(props);
  }
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT(props: Partial<ODT>): void {
    this.headerExists();
    this._buildODT(props);
  }
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH(props: Partial<SCH>): void {
    this.headerExists();
    this._buildSCH(props);
  }
  /** Build RGS (Resource Group) Segment */
  buildRGS(props: Partial<RGS>): void {
    this.headerExists();
    this._buildRGS(props);
  }
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS(props: Partial<AIS>): void {
    this.headerExists();
    this._buildAIS(props);
  }
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG(props: Partial<AIG>): void {
    this.headerExists();
    this._buildAIG(props);
  }
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL(props: Partial<AIL>): void {
    this.headerExists();
    this._buildAIL(props);
  }
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP(props: Partial<AIP>): void {
    this.headerExists();
    this._buildAIP(props);
  }
  /** Build APR (Appointment Preferences) Segment */
  buildAPR(props: Partial<APR>): void {
    this.headerExists();
    this._buildAPR(props);
  }
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA(props: Partial<PRA>): void {
    this.headerExists();
    this._buildPRA(props);
  }
  /** Build ROL (Role) Segment */
  buildROL(props: Partial<ROL>): void {
    this.headerExists();
    this._buildROL(props);
  }
  /** Build VAR (Variance) Segment */
  buildVAR(props: Partial<VAR>): void {
    this.headerExists();
    this._buildVAR(props);
  }
  /** Build PSH (Product Summary Header) Segment */
  buildPSH(props: Partial<PSH>): void {
    this.headerExists();
    this._buildPSH(props);
  }
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR(props: Partial<PCR>): void {
    this.headerExists();
    this._buildPCR(props);
  }
  /** Build PRD (Provider Data) Segment */
  buildPRD(props: Partial<PRD>): void {
    this.headerExists();
    this._buildPRD(props);
  }
  /** Build CTD (Contact Data) Segment */
  buildCTD(props: Partial<CTD>): void {
    this.headerExists();
    this._buildCTD(props);
  }
  /** Build RDF (Table Row Definition) Segment */
  buildRDF(props: Partial<RDF>): void {
    this.headerExists();
    this._buildRDF(props);
  }
  /** Build RDT (Table Row Data) Segment */
  buildRDT(props: Partial<RDT>): void {
    this.headerExists();
    this._buildRDT(props);
  }
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR(props: Partial<CSR>): void {
    this.headerExists();
    this._buildCSR(props);
  }
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP(props: Partial<CSP>): void {
    this.headerExists();
    this._buildCSP(props);
  }
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS(props: Partial<CSS>): void {
    this.headerExists();
    this._buildCSS(props);
  }
  /** Build GOL (Goal Detail) Segment */
  buildGOL(props: Partial<GOL>): void {
    this.headerExists();
    this._buildGOL(props);
  }
  /** Build PRB (Problem Detail) Segment */
  buildPRB(props: Partial<PRB>): void {
    this.headerExists();
    this._buildPRB(props);
  }
  /** Build PTH (Pathway) Segment */
  buildPTH(props: Partial<PTH>): void {
    this.headerExists();
    this._buildPTH(props);
  }
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA(props: Partial<TXA>): void {
    this.headerExists();
    this._buildTXA(props);
  }
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM(props: Partial<IAM>): void {
    this.headerExists();
    this._buildIAM(props);
  }
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1(props: Partial<OM1>): void {
    this.headerExists();
    this._buildOM1(props);
  }
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2(props: Partial<OM2>): void {
    this.headerExists();
    this._buildOM2(props);
  }
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3(props: Partial<OM3>): void {
    this.headerExists();
    this._buildOM3(props);
  }
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4(props: Partial<OM4>): void {
    this.headerExists();
    this._buildOM4(props);
  }
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5(props: Partial<OM5>): void {
    this.headerExists();
    this._buildOM5(props);
  }
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6(props: Partial<OM6>): void {
    this.headerExists();
    this._buildOM6(props);
  }
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG(props: Partial<DRG>): void {
    this.headerExists();
    this._buildDRG(props);
  }
  /** Build SFT (Software Segment) */
  buildSFT(props: Partial<SFT>): void {
    this.headerExists();
    this._buildSFT(props);
  }
  /** Build SPM (Specimen) Segment */
  buildSPM(props: Partial<SPM>): void {
    this.headerExists();
    this._buildSPM(props);
  }
  /** Build REL (Clinical Relationship) Segment */
  buildREL(props: Partial<REL>): void {
    this.headerExists();
    this._buildREL(props);
  }
  /** Build ITM (Material Item Master) Segment */
  buildITM(props: Partial<ITM>): void {
    this.headerExists();
    this._buildITM(props);
  }
  /** Build IVT (Material Location) Segment */
  buildIVT(props: Partial<IVT>): void {
    this.headerExists();
    this._buildIVT(props);
  }
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX(props: Partial<BTX>): void {
    this.headerExists();
    this._buildBTX(props);
  }
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX(props: Partial<BPX>): void {
    this.headerExists();
    this._buildBPX(props);
  }
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC(props: Partial<IPC>): void {
    this.headerExists();
    this._buildIPC(props);
  }
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD(props: Partial<ISD>): void {
    this.headerExists();
    this._buildISD(props);
  }
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ(props: Partial<STZ>): void {
    this.headerExists();
    this._buildSTZ(props);
  }
  /**
   * Check MSH Header Properties
   * @since 1.0.0
   * @return boolean
   * @param _props
   */
  checkMSH(_props: MSH): boolean {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   *
   */
  headerExists(): void {
    const firstSegment = this._message.getFirstSegment();
    if (typeof firstSegment === "undefined" || firstSegment._name !== "MSH") {
      throw new HL7FatalError("MSH Header must be built first.");
    }
  }

  /**
   * Set the date.
   * @param date
   * @param length
   */
  setDate(date?: Date, length?: DateLength) {
    return createHL7Date(
      typeof date === "undefined" ? new Date() : date,
      length,
    );
  }

  /**
   * Return the string of the entire HL7 message.
   * @since 4.0.0
   */
  toString(): string {
    return this._message.toString();
  }

  /** Return Message Object
   * @since 4.0.0
   */
  toMessage(): Message {
    return this._message;
  }
  /**
   * Get whether the last segment build produced any validation errors.
   * @since 4.0.0
   */
  get hasValidationErrors(): boolean {
    return false;
  }

  /**
   * Build the ACC Segment
   * @remarks Add an ACC Segment to the HL7 Message
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildACC(_props: ACC): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildBLG(_props: BLG) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildDG1(_props: DG1) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildDSC(_props: DSC) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param props
   */
  protected _buildDSP(props: Partial<DSP>): void {
    this._startSegment("DSP");

    const rulesDSP_3: ValidationRule = {};
    const rulesDSP_4: ValidationRule = {};
    const rulesDSP_5: ValidationRule = {};

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_3.length = { min: 1, max: 300 };
    }

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_4.length = { min: 1, max: 2 };
    }

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_5.length = { min: 1, max: 20 };
    }

    this._validatorSetValue("1", props.dsp_1, {
      length: { min: 1, max: 4 },
    });
    this._validatorSetValue("2", props.dsp_2, {
      length: { min: 1, max: 4 },
    });
    this._validatorSetValue("3", props.dsp_3, {
      required: true,
      ...rulesDSP_3,
    });
    this._validatorSetValue("4", props.dsp_4, {
      ...rulesDSP_4,
    });
    this._validatorSetValue("5", props.dsp_5, {
      ...rulesDSP_5,
    });
  }

  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildERR(_props: ERR) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildEVN(_props: EVN) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildFT1(_props: FT1) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildGT1(_props: GT1) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildIN1(_props: IN1) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMRG(_props: MRG): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMSA(_props: MSA): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * Build the MSH Segment
   * @remarks Add an MSH Segment to the HL7 Message
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMSH(_props: Partial<MSH>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   */
  protected _buildNCK(): void {
    this._startSegment("NCK");

    const versionCheck = this.version;
    let setMaxLength: DateLength;

    switch (versionCheck) {
      case "2.1":
        setMaxLength = "19";
        break;
      case "2.2":
      case "2.3":
      case "2.3.1":
      case "2.4":
      case "2.5":
      case "2.5.1":
        setMaxLength = "26";
        break;
      case "2.6":
      case "2.7":
      case "2.7.1":
      case "2.8":
        setMaxLength = "24";
        break;
      default:
        setMaxLength = "19";
    }

    this._validatorSetValue("1", this.setDate(new Date(), setMaxLength), {
      required: true,
      type: "date",
      length: {
        min: 8,
        max: parseInt(setMaxLength),
      },
    });
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNK1(_props: Partial<NK1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNPU(_props: Partial<NPU>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNSC(_props: Partial<NSC>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param props
   */
  protected _buildNST(props: NST): void {
    this._startSegment("NST");

    this._validatorSetValue("1", props.nst_1, {
      required: true,
    });
    this._validatorSetValue("2", props.nst_2);
    this._validatorSetValue("3", props.nst_3);
    this._validatorSetValue("4", props.nst_4);
    this._validatorSetValue("5", props.nst_5);
    this._validatorSetValue("6", props.nst_6);
    this._validatorSetValue("7", props.nst_7);
    this._validatorSetValue("8", props.nst_8);
    this._validatorSetValue("9", props.nst_9);
    this._validatorSetValue("10", props.nst_10);
    this._validatorSetValue("11", props.nst_11);
    this._validatorSetValue("12", props.nst_12);
    this._validatorSetValue("13", props.nst_13);
    this._validatorSetValue("14", props.nst_14);
    this._validatorSetValue("15", props.nst_15);
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNTE(_props: Partial<NTE>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildOBR(_props: Partial<OBR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildOBX(_props: Partial<OBX>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildORC(_props: Partial<ORC>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPD1(_props: Partial<PD1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPID(_props: Partial<PID>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPR1(_props: Partial<PR1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPV1(_props: Partial<PV1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildQRD(_props: Partial<QRD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildQRF(_props: Partial<QRF>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildRX1(_props: Partial<RX1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildUB1(_props: Partial<UB1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildURD(_props: Partial<URD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildURS(_props: Partial<URS>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAL1(_props: Partial<AL1>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildUB2(_props: Partial<UB2>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXA(_props: Partial<RXA>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXR(_props: Partial<RXR>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildMFI(_props: Partial<MFI>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildMFE(_props: Partial<MFE>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildSTF(_props: Partial<STF>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXO(_props: Partial<RXO>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXE(_props: Partial<RXE>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXD(_props: Partial<RXD>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRXG(_props: Partial<RXG>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildODS(_props: Partial<ODS>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildODT(_props: Partial<ODT>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildSCH(_props: Partial<SCH>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRGS(_props: Partial<RGS>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildAIS(_props: Partial<AIS>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildAIG(_props: Partial<AIG>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildAIL(_props: Partial<AIL>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildAIP(_props: Partial<AIP>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildAPR(_props: Partial<APR>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPRA(_props: Partial<PRA>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildROL(_props: Partial<ROL>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildVAR(_props: Partial<VAR>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPSH(_props: Partial<PSH>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPCR(_props: Partial<PCR>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPRD(_props: Partial<PRD>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildCTD(_props: Partial<CTD>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRDF(_props: Partial<RDF>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildRDT(_props: Partial<RDT>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildCSR(_props: Partial<CSR>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildCSP(_props: Partial<CSP>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildCSS(_props: Partial<CSS>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildGOL(_props: Partial<GOL>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPRB(_props: Partial<PRB>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildPTH(_props: Partial<PTH>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildTXA(_props: Partial<TXA>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildIAM(_props: Partial<IAM>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM1(_props: Partial<OM1>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM2(_props: Partial<OM2>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM3(_props: Partial<OM3>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM4(_props: Partial<OM4>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM5(_props: Partial<OM5>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildOM6(_props: Partial<OM6>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildDRG(_props: Partial<DRG>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildSFT(_props: Partial<SFT>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildSPM(_props: Partial<SPM>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildREL(_props: Partial<REL>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildITM(_props: Partial<ITM>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildIVT(_props: Partial<IVT>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildBTX(_props: Partial<BTX>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildBPX(_props: Partial<BPX>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildIPC(_props: Partial<IPC>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildISD(_props: Partial<ISD>): void { throw new HL7FatalError("Not Implemented"); }
  protected _buildSTZ(_props: Partial<STZ>): void { throw new HL7FatalError("Not Implemented"); }

  /**
   * Initialize a new segment on the message and set it as the current segment.
   * @since 4.0.0
   */
  protected _startSegment(name: string): void {
    this._segment = this._message.addSegment(name);
  }

  /**
   * @since 4.0.0
   */
  protected _validatorSetValue(
    fieldPath: string,
    value: any,
    rules?: ValidationRule,
  ): string[] {
    const errors: string[] = [];
    const warnings: string[] = [];

    const normalizedRules: ValidationRule = {
      required: false,
      type: "string",
      ...rules,
    };

    if (
      normalizedRules.allowedValues !== undefined &&
      normalizedRules.type !== "string"
    ) {
      this._validatorThrowError(
        errors,
        `Type must be string if 'allowedValues' is set.`,
      );
    }

    if (
      rules !== undefined &&
      !this._validatorIsVersionCompatible(rules.hl7Support)
    ) {
      return [];
    }

    const normalized = this._validatorNormalize(value);
    this._validatorCheckDependency(
      errors,
      normalizedRules.dependsOn,
      fieldPath,
    );
    this._validatorCheckValue(errors, fieldPath, normalized, normalizedRules);

    if (
      normalizedRules.deprecated &&
      normalized !== undefined &&
      normalized !== null &&
      normalized !== ""
    ) {
      let msg = `Field ${fieldPath} is deprecated and should not be used in version v${this.version}.`;
      if (rules?.useField) {
        msg += ` Use '${normalizedRules.useField}' instead.`;
      }
      this._validatorWarn(warnings, msg);
    }

    if (errors.length === 0) {
      this._segment.set(fieldPath, normalized);
    }

    return [...errors, ...warnings];
  }

  private _validatorNormalize(value: any): any {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  }

  private _validatorCheckDependency(
    errors: string[],
    dep: ValidationRule["dependsOn"],
    fieldPath: string,
  ): void {
    if (!dep) return;

    const depVal = this._segment.get(dep.path);
    const depStr = depVal?.toString() ?? "";
    const isSet = depStr !== "";

    if (dep.mustBeSet && !isSet) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} requires ${dep.path} to be set`,
      );
    }

    if (dep.mustEqual !== undefined && depStr !== dep.mustEqual) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} requires ${dep.path} to equal "${dep.mustEqual}", but got "${depVal}"`,
      );
    }
  }

  private _validatorCheckValue(
    errors: string[],
    fieldPath: string,
    value: any,
    rules: ValidationRule,
  ): void {
    if (
      rules.required &&
      (value === undefined || value === null || value === "")
    ) {
      this._validatorThrowError(errors, `Field ${fieldPath} is required`, true);
    }

    if (value === undefined || value === null) return;

    if (rules.type === "number") {
      const num = Number(value);
      if (isNaN(num)) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be a number`,
        );
      } else if (rules.number) {
        if (rules.number.min !== undefined && num < rules.number.min) {
          this._validatorThrowError(
            errors,
            `Field ${fieldPath} must be at least ${rules.number.min}`,
          );
        }
        if (rules.number.max !== undefined && num > rules.number.max) {
          this._validatorThrowError(
            errors,
            `Field ${fieldPath} must be at most ${rules.number.max}`,
          );
        }
      }
    }

    if (rules.type === "string" && typeof value !== "string") {
      this._validatorThrowError(errors, `Field ${fieldPath} must be a string`);
    }

    if (rules.type === "date") {
      const dateStr = String(value);
      if (!/^\d{8}(\d{4}(\d{2}(\.\d{1,6})?)?)?([+-]\d{4})?$/.test(dateStr)) {
        if (rules.required) {
          this._validatorThrowError(
            errors,
            `Field ${fieldPath} must be a valid HL7 date (YYYYMMDD, YYYYMMDDHHMM, YYYYMMDDHHMMSS[.S+][±HHMM])`,
          );
        }
        return;
      }
    }

    const valStr = String(value);
    const len = valStr.length;

    if (
      typeof rules.length === "number" &&
      rules.type !== "date" &&
      len !== rules.length
    ) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} must be exactly ${rules.length} characters`,
      );
    }

    if (typeof rules.length === "object") {
      if (rules.length.min !== undefined && len < rules.length.min) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be at least ${rules.length.min} characters`,
        );
      }
      if (rules.length.max !== undefined && len > rules.length.max) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be at most ${rules.length.max} characters`,
        );
      }
    }

    if (rules.pattern && !rules.pattern.test(valStr)) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} does not match expected format`,
      );
    }

    if (rules.allowedValues && !rules.allowedValues.includes(valStr)) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} must be one of: ${rules.allowedValues.join(", ")}`,
        true,
      );
    }
  }

  private _validatorIsVersionCompatible(support?: string | string[]): boolean {
    if (!support) return true;

    const satisfies = (expr: string): boolean => {
      const match = expr.match(/(<=|>=|<|>|==?)\s*([\d.]+)/);
      if (!match) return false;

      const [, op, ver] = match;
      const cmp = this._compareVersions(this.version, ver);

      switch (op) {
        case "<":
          return cmp < 0;
        case "<=":
          return cmp <= 0;
        case ">":
          return cmp > 0;
        case ">=":
          return cmp >= 0;
        case "=":
        case "==":
          return cmp === 0;
        default:
          return false;
      }
    };

    if (typeof support === "string") return satisfies(support);
    return support.some((expr) => satisfies(expr));
  }

  private _compareVersions(a: string, b: string): number {
    const pa = a.split(".").map(Number);
    const pb = b.split(".").map(Number);
    const len = Math.max(pa.length, pb.length);
    for (let i = 0; i < len; i++) {
      const diff = (pa[i] || 0) - (pb[i] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
  }

  private _validatorWarn(warnings: string[], message: string): void {
    this.emit("warning", message);
    warnings.push(message);
  }

  private _validatorThrowError(
    errors: string[],
    message: string,
    forceThrow: boolean = false,
  ): void {
    this.emit("error", message);
    if (this.hardError || forceThrow) {
      throw new HL7ValidationError(message);
    }
    errors.push(message);
  }
}
