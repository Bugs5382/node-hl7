import { Message } from "@/builder";
import { Segment } from "@/builder/modules/segment";
import { ValidationRule } from "@/declaration/validationRule";
import { HL7FatalError, HL7ValidationError } from "@/helpers";
import {
  HL7UsageCode,
  HL7Version,
  SegmentSpec,
} from "@/hl7/metadata/types";
import { SEGMENT_SPECS } from "@/hl7/metadata/segments";
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
  buildACC(props: ACC): this {
    this.headerExists();
    this._buildACC(props);
    return this;
  }
  /**
   * Build the ADD Segment
   * @remarks Add an ADD Segment to the HL7 Message
   * @param props
   */
  buildADD(props: ADD): this {
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
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildBLG(props: BLG): this {
    this.headerExists();
    this._buildBLG(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDG1(props: DG1): this {
    this.headerExists();
    this._buildDG1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSC(props: any): this {
    this.headerExists();
    this._buildDSC(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSP(props: any): this {
    this.headerExists();
    this._buildDSP(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildERR(props: any): this {
    this.headerExists();
    this._buildERR(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildEVN(props: Partial<EVN>): this {
    this.headerExists();
    this._buildEVN(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildFT1(props: Partial<FT1>): this {
    this.headerExists();
    this._buildFT1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildGT1(props: Partial<GT1>): this {
    this.headerExists();
    this._buildGT1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildIN1(props: Partial<IN1>): this {
    this.headerExists();
    this._buildIN1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMRG(props: Partial<MRG>): this {
    this.headerExists();
    this._buildMRG(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMSA(props: Partial<MSA>): this {
    this.headerExists();
    this._buildMSA(props);
    return this;
  }
  /**
   * Build MSH Header
   * @remarks Add the required fields based on the spec chosen.
   * @since 1.0.0
   * @return void
   * @param props
   */
  buildMSH(props: Partial<MSH>): this {
    // make sure there is only one MSH header per message.
    if (this._message.totalSegment("MSH") > 0) {
      throw new HL7FatalError(
        `You can only have one MSH Header per HL7 Message.`,
      );
    }
    this._buildMSH(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   */
  buildNCK(): this {
    this.headerExists();

    // make sure there is only one MSH header per message.
    if (this._message.totalSegment("NCK") > 0) {
      throw new HL7FatalError(
        `You can only have one NCK segment per HL7 Message.`,
      );
    }

    this._buildNCK();
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNK1(props: Partial<NK1>): this {
    this.headerExists();
    this._buildNK1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNPU(props: Partial<NPU>): this {
    this.headerExists();
    this._buildNPU(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNSC(props: Partial<NSC>): this {
    this.headerExists();
    this._buildNSC(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNST(props: NST): this {
    this.headerExists();
    this._buildNST(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNTE(props: Partial<NTE>): this {
    this.headerExists();
    this._buildNTE(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBR(props: Partial<OBR>): this {
    this.headerExists();
    this._buildOBR(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBX(props: Partial<OBX>): this {
    this.headerExists();
    this._buildOBX(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildORC(props: Partial<ORC>): this {
    this.headerExists();
    this._buildORC(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPD1(props: Partial<PD1>): this {
    this.headerExists();
    this._buildPD1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPID(props: Partial<PID>): this {
    this.headerExists();
    this._buildPID(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPR1(props: Partial<PR1>): this {
    this.headerExists();
    this._buildPR1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPV1(props: Partial<PV1>): this {
    this.headerExists();
    this._buildPV1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRD(props: Partial<QRD>): this {
    this.headerExists();
    this._buildQRD(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRF(props: Partial<QRF>): this {
    this.headerExists();
    this._buildQRF(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildRX1(props: Partial<RX1>): this {
    this.headerExists();
    this._buildRX1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildUB1(props: Partial<UB1>): this {
    this.headerExists();
    this._buildUB1(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURD(props: Partial<URD>): this {
    this.headerExists();
    this._buildURD(props);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURS(props: Partial<URS>): this {
    this.headerExists();
    this._buildURS(props);
    return this;
  }
  /** Build AL1 (Allergy Information) Segment */
  buildAL1(props: Partial<AL1>): this {
    this.headerExists();
    this._buildAL1(props);
    return this;
  }
  /** Build UB2 (UB92 Data) Segment */
  buildUB2(props: Partial<UB2>): this {
    this.headerExists();
    this._buildUB2(props);
    return this;
  }
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA(props: Partial<RXA>): this {
    this.headerExists();
    this._buildRXA(props);
    return this;
  }
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR(props: Partial<RXR>): this {
    this.headerExists();
    this._buildRXR(props);
    return this;
  }
  /** Build MFI (Master File Identification) Segment */
  buildMFI(props: Partial<MFI>): this {
    this.headerExists();
    this._buildMFI(props);
    return this;
  }
  /** Build MFE (Master File Entry) Segment */
  buildMFE(props: Partial<MFE>): this {
    this.headerExists();
    this._buildMFE(props);
    return this;
  }
  /** Build STF (Staff Identification) Segment */
  buildSTF(props: Partial<STF>): this {
    this.headerExists();
    this._buildSTF(props);
    return this;
  }
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO(props: Partial<RXO>): this {
    this.headerExists();
    this._buildRXO(props);
    return this;
  }
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE(props: Partial<RXE>): this {
    this.headerExists();
    this._buildRXE(props);
    return this;
  }
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD(props: Partial<RXD>): this {
    this.headerExists();
    this._buildRXD(props);
    return this;
  }
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG(props: Partial<RXG>): this {
    this.headerExists();
    this._buildRXG(props);
    return this;
  }
  /** Build ODS (Dietary Orders, Supplements, and Preferences) Segment */
  buildODS(props: Partial<ODS>): this {
    this.headerExists();
    this._buildODS(props);
    return this;
  }
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT(props: Partial<ODT>): this {
    this.headerExists();
    this._buildODT(props);
    return this;
  }
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH(props: Partial<SCH>): this {
    this.headerExists();
    this._buildSCH(props);
    return this;
  }
  /** Build RGS (Resource Group) Segment */
  buildRGS(props: Partial<RGS>): this {
    this.headerExists();
    this._buildRGS(props);
    return this;
  }
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS(props: Partial<AIS>): this {
    this.headerExists();
    this._buildAIS(props);
    return this;
  }
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG(props: Partial<AIG>): this {
    this.headerExists();
    this._buildAIG(props);
    return this;
  }
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL(props: Partial<AIL>): this {
    this.headerExists();
    this._buildAIL(props);
    return this;
  }
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP(props: Partial<AIP>): this {
    this.headerExists();
    this._buildAIP(props);
    return this;
  }
  /** Build APR (Appointment Preferences) Segment */
  buildAPR(props: Partial<APR>): this {
    this.headerExists();
    this._buildAPR(props);
    return this;
  }
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA(props: Partial<PRA>): this {
    this.headerExists();
    this._buildPRA(props);
    return this;
  }
  /** Build ROL (Role) Segment */
  buildROL(props: Partial<ROL>): this {
    this.headerExists();
    this._buildROL(props);
    return this;
  }
  /** Build VAR (Variance) Segment */
  buildVAR(props: Partial<VAR>): this {
    this.headerExists();
    this._buildVAR(props);
    return this;
  }
  /** Build PSH (Product Summary Header) Segment */
  buildPSH(props: Partial<PSH>): this {
    this.headerExists();
    this._buildPSH(props);
    return this;
  }
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR(props: Partial<PCR>): this {
    this.headerExists();
    this._buildPCR(props);
    return this;
  }
  /** Build PRD (Provider Data) Segment */
  buildPRD(props: Partial<PRD>): this {
    this.headerExists();
    this._buildPRD(props);
    return this;
  }
  /** Build CTD (Contact Data) Segment */
  buildCTD(props: Partial<CTD>): this {
    this.headerExists();
    this._buildCTD(props);
    return this;
  }
  /** Build RDF (Table Row Definition) Segment */
  buildRDF(props: Partial<RDF>): this {
    this.headerExists();
    this._buildRDF(props);
    return this;
  }
  /** Build RDT (Table Row Data) Segment */
  buildRDT(props: Partial<RDT>): this {
    this.headerExists();
    this._buildRDT(props);
    return this;
  }
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR(props: Partial<CSR>): this {
    this.headerExists();
    this._buildCSR(props);
    return this;
  }
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP(props: Partial<CSP>): this {
    this.headerExists();
    this._buildCSP(props);
    return this;
  }
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS(props: Partial<CSS>): this {
    this.headerExists();
    this._buildCSS(props);
    return this;
  }
  /** Build GOL (Goal Detail) Segment */
  buildGOL(props: Partial<GOL>): this {
    this.headerExists();
    this._buildGOL(props);
    return this;
  }
  /** Build PRB (Problem Detail) Segment */
  buildPRB(props: Partial<PRB>): this {
    this.headerExists();
    this._buildPRB(props);
    return this;
  }
  /** Build PTH (Pathway) Segment */
  buildPTH(props: Partial<PTH>): this {
    this.headerExists();
    this._buildPTH(props);
    return this;
  }
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA(props: Partial<TXA>): this {
    this.headerExists();
    this._buildTXA(props);
    return this;
  }
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM(props: Partial<IAM>): this {
    this.headerExists();
    this._buildIAM(props);
    return this;
  }
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1(props: Partial<OM1>): this {
    this.headerExists();
    this._buildOM1(props);
    return this;
  }
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2(props: Partial<OM2>): this {
    this.headerExists();
    this._buildOM2(props);
    return this;
  }
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3(props: Partial<OM3>): this {
    this.headerExists();
    this._buildOM3(props);
    return this;
  }
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4(props: Partial<OM4>): this {
    this.headerExists();
    this._buildOM4(props);
    return this;
  }
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5(props: Partial<OM5>): this {
    this.headerExists();
    this._buildOM5(props);
    return this;
  }
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6(props: Partial<OM6>): this {
    this.headerExists();
    this._buildOM6(props);
    return this;
  }
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG(props: Partial<DRG>): this {
    this.headerExists();
    this._buildDRG(props);
    return this;
  }
  /** Build SFT (Software Segment) */
  buildSFT(props: Partial<SFT>): this {
    this.headerExists();
    this._buildSFT(props);
    return this;
  }
  /** Build SPM (Specimen) Segment */
  buildSPM(props: Partial<SPM>): this {
    this.headerExists();
    this._buildSPM(props);
    return this;
  }
  /** Build REL (Clinical Relationship) Segment */
  buildREL(props: Partial<REL>): this {
    this.headerExists();
    this._buildREL(props);
    return this;
  }
  /** Build ITM (Material Item Master) Segment */
  buildITM(props: Partial<ITM>): this {
    this.headerExists();
    this._buildITM(props);
    return this;
  }
  /** Build IVT (Material Location) Segment */
  buildIVT(props: Partial<IVT>): this {
    this.headerExists();
    this._buildIVT(props);
    return this;
  }
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX(props: Partial<BTX>): this {
    this.headerExists();
    this._buildBTX(props);
    return this;
  }
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX(props: Partial<BPX>): this {
    this.headerExists();
    this._buildBPX(props);
    return this;
  }
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC(props: Partial<IPC>): this {
    this.headerExists();
    this._buildIPC(props);
    return this;
  }
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD(props: Partial<ISD>): this {
    this.headerExists();
    this._buildISD(props);
    return this;
  }
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ(props: Partial<STZ>): this {
    this.headerExists();
    this._buildSTZ(props);
    return this;
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
   * Build any HL7 segment by name from its generated `SegmentSpec`.
   *
   * @remarks
   * Universal chainable builder for every segment in the metadata catalogue
   * (~187 segments × 11 versions). Field-level R/O/B/W/D/X usage codes are
   * enforced per the HL7 v2 spec for `this.version`:
   * - W / X / "field not in this version" => `HL7ValidationError`
   * - R + missing => `HL7ValidationError`
   * - B => deprecation warning (value still serializes)
   * - D => `dependsOn` must resolve when a value is provided
   *
   * Field values may be keyed in `props` either as `<segname>_<num>` (e.g.
   * `ecd_1`), as the bare numeric string `"1"`, or as the number `1`.
   *
   * For MSH specifically, use `buildMSH` instead — MSH has special framing
   * rules (separator characters, single-occurrence guard) that this generic
   * builder does not enforce.
   *
   * @example
   * ```ts
   * new HL7_2_8()
   *   .buildMSH({ msh_9_1: "ADT", msh_9_2: "A01", msh_10: "X", msh_11_1: "P" })
   *   .buildSegment("ECD", { ecd_1: "1", ecd_2: "RC" })
   *   .toString();
   * ```
   *
   * @since 4.0.0
   */
  buildSegment(name: string, props: Record<string, unknown> = {}): this {
    const spec = SEGMENT_SPECS[name.toUpperCase()];
    if (!spec) {
      throw new HL7ValidationError(
        `Unknown HL7 segment "${name}" — no SegmentSpec is registered`,
      );
    }
    if (name.toUpperCase() === "MSH") {
      throw new HL7ValidationError(
        `Use buildMSH() to build the MSH header — buildSegment does not handle MSH framing`,
      );
    }

    this.headerExists();
    this._assertSegmentInVersion(spec);
    this._segment = this._message.addSegment(spec.name);

    const lower = spec.name.toLowerCase();
    for (const field of spec.fields) {
      const value =
        props[`${lower}_${field.num}`] ??
        props[String(field.num)] ??
        props[field.num as unknown as string];
      this._validatorSetField(spec, field.num, value);
    }
    return this;
  }

  /**
   * Reject building a segment that is not part of the current spec version.
   *
   * @remarks
   * Used at the top of segment-spec-driven `buildXXX` methods. Throws
   * unconditionally (regardless of `hardError`) when the current builder's
   * version is not in `spec.versions` — e.g. attempting to build ECD on an
   * HL7 v2.3.1 builder, since ECD did not exist before v2.4.
   *
   * @since 4.0.0
   */
  protected _assertSegmentInVersion(spec: SegmentSpec): void {
    if (!spec.versions.includes(this.version as HL7Version)) {
      throw new HL7ValidationError(
        `Segment ${spec.name} is not part of HL7 v${this.version}`,
      );
    }
  }

  /**
   * Spec-driven field setter that consults a `FieldSpec`'s per-version
   * `usage` map (R/O/B/W/D/X) and translates it into validation rules.
   *
   * @remarks
   * Behavior per HL7 usage code for `this.version`:
   * - usage missing for the version => hard error: field is not part of that
   *   version of the spec.
   * - `"W"` (Withdrawn) or `"X"` (Not Supported) => hard error if a value is
   *   provided. Always throws regardless of `hardError`.
   * - `"R"` (Required) => sets `required: true` on the rule.
   * - `"D"` (Dependent/Conditional) => requires `field.dependsOn` to resolve.
   * - `"B"` (Backward Compatibility) => sets `deprecated: true` (warns, value
   *   still serializes).
   * - `"O"` (Optional) => no extra constraint.
   *
   * @see https://hl7-definition.caristix.com/v2/ for the per-version codes.
   * @since 4.0.0
   */
  protected _validatorSetField(
    spec: SegmentSpec,
    fieldNum: number,
    value: any,
    overrides?: Partial<ValidationRule>,
  ): string[] {
    const field = spec.fields.find((f) => f.num === fieldNum);
    if (!field) {
      throw new HL7ValidationError(
        `Field ${spec.name}.${fieldNum} is not defined in the segment spec`,
      );
    }

    const version = this.version as HL7Version;
    const usage: HL7UsageCode | undefined = field.usage[version];
    const hasValue = value !== undefined && value !== null && value !== "";

    if (usage === undefined) {
      if (hasValue) {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNum} is not available in HL7 v${this.version}`,
        );
      }
      return [];
    }

    if ((usage === "W" || usage === "X") && hasValue) {
      const label = usage === "W" ? "withdrawn" : "not supported";
      throw new HL7ValidationError(
        `Field ${spec.name}.${fieldNum} is ${label} in HL7 v${this.version} and cannot be set`,
      );
    }

    // Merge spec-derived rule with caller overrides. Caller wins for
    // length/type/allowedValues/pattern/etc — this lets hand-tuned validation
    // (date format, table-based enums) survive the migration to spec-driven
    // builders. Spec-derived `usage` and `required` are non-overridable.
    const rule: ValidationRule = {
      hl7Type: field.hl7Type,
      length: field.length,
      allowedValues: field.allowedValues,
      dependsOn: field.dependsOn,
      ...(overrides ?? {}),
      usage,
      required: usage === "R",
      deprecated: usage === "B",
    };

    // Conditional (D / Caristix "C") fields are only enforced when the spec
    // provides an explicit `dependsOn`. Many segments in the published HL7
    // spec are marked conditional with prose-only conditions (e.g. "required
    // when MSH-15 contains AL or ER") that aren't machine-readable; for
    // those we treat the field as optional and trust the caller. When
    // `dependsOn` IS present, evaluate it.
    if (usage === "D" && field.dependsOn && hasValue) {
      const dep = field.dependsOn;
      const resolvedPath = /^\d+(\.\d+)*$/.test(dep.path)
        ? `${this._segment._name}.${dep.path}`
        : dep.path;
      const depVal = this._segment.get(resolvedPath);
      const depStr = depVal?.toString() ?? "";
      if (dep.mustBeSet && depStr === "") {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNum} is conditional and requires ${dep.path} to be set in HL7 v${this.version}`,
        );
      }
      if (dep.mustEqual !== undefined && depStr !== dep.mustEqual) {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNum} is conditional and requires ${dep.path} to equal "${dep.mustEqual}" in HL7 v${this.version}`,
        );
      }
    }

    return this._validatorSetValue(String(fieldNum), value, rule);
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

    // Segment.set special-cases bare-numeric paths (e.g. "1", "2.3") by
    // prepending the segment name; Segment.get does not. Mirror that here so
    // dependsOn can use the same field-relative path style as the setter.
    const resolvedPath = /^\d+(\.\d+)*$/.test(dep.path)
      ? `${this._segment._name}.${dep.path}`
      : dep.path;
    const depVal = this._segment.get(resolvedPath);
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
