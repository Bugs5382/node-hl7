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
import EventEmitter from "node:events";

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
import { SEGMENT_SPECS } from "@/hl7/metadata/segments";
import {
  ComponentSpec,
  HL7UsageCode,
  HL7Version,
  SegmentSpec,
} from "@/hl7/metadata/types";
import { normalizedClientBuilderOptions } from "@/hl7/normalizedBuilder";
import { HL7_SPEC } from "@/hl7/specs";
import { ClientBuilderOptions } from "@/modules/types";
import { createHL7Date, DateLength } from "@/utils";

/**
 * Base Class of an HL7 Specification
 * @since 1.0.0
 */
export class HL7_BASE extends EventEmitter implements HL7_SPEC {
  /**
   * Options for the Hl7 Message.
   * @since 4.0.0
   * @readonly */
  readonly _opt: ClientBuilderOptions;
  name: string = "";
  /** Version
   * @since 1.0.0 */
  version = "";
  /**
   * Get whether the last segment build produced any validation errors.
   * @since 4.0.0
   */
  get hasValidationErrors(): boolean {
    return false;
  }
  /**
   * Max length of ADD Segment.
   * Changes based on extended class.
   * @since 4.0.0
   * @protected */
  protected _maxAddSegmentLength: number | undefined;
  /**
   * @since 4.0.0
   * @protected */
  protected _message: Message;
  /**
   * The Current Segment we are working on.
   * @since 4.0.0
   * @protected
   */
  protected _segment!: Segment;

  /**
   * Regardless if errors are soft, always throw and exception or deviation from the rule.
   * @since 4.0.0
   * @private
   */
  private readonly hardError: boolean;

  /**
   * Create a new HL7 Message
   * @since 4.0.0
   */
  constructor(properties?: ClientBuilderOptions) {
    super();
    const opt = normalizedClientBuilderOptions(properties);

    this._opt = opt;
    this._message = new Message(opt);
    this.hardError = properties?.hardError || false;
  }
  /**
   *
   * @param props
   */
  buildACC(properties: ACC): this {
    this.headerExists();
    this._buildACC(properties);
    return this;
  }
  /**
   * Build the ADD Segment
   * @remarks Add an ADD Segment to the HL7 Message
   * @param props
   */
  buildADD(properties: ADD): this {
    this.headerExists();

    const lastSegment = this._message.getLastSegment();

    // @todo This might not be need to check BHS/FHS cause we are building using Message
    if (["BHS", "FHS", "MSH"].includes(lastSegment._name)) {
      throw new HL7ValidationError(
        "This segment must not follow a MSH, BHS, or FHS",
      );
    }

    this._segment = this._message.addSegment("ADD");

    this._validatorSetValue(
      "1",
      properties.add_1 || properties.addendumContinuationPointer,
      {
        length: { max: this._maxAddSegmentLength },
      },
    );
    return this;
  }
  /** Build AIG (Appointment Information - General) Segment */
  buildAIG(properties: Partial<AIG>): this {
    this.headerExists();
    this._buildAIG(properties);
    return this;
  }
  /** Build AIL (Appointment Information - Location) Segment */
  buildAIL(properties: Partial<AIL>): this {
    this.headerExists();
    this._buildAIL(properties);
    return this;
  }
  /** Build AIP (Appointment Information - Personnel) Segment */
  buildAIP(properties: Partial<AIP>): this {
    this.headerExists();
    this._buildAIP(properties);
    return this;
  }
  /** Build AIS (Appointment Information - Service) Segment */
  buildAIS(properties: Partial<AIS>): this {
    this.headerExists();
    this._buildAIS(properties);
    return this;
  }
  /** Build AL1 (Allergy Information) Segment */
  buildAL1(properties: Partial<AL1>): this {
    this.headerExists();
    this._buildAL1(properties);
    return this;
  }
  /** Build APR (Appointment Preferences) Segment */
  buildAPR(properties: Partial<APR>): this {
    this.headerExists();
    this._buildAPR(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildBLG(properties: BLG): this {
    this.headerExists();
    this._buildBLG(properties);
    return this;
  }
  /** Build BPX (Blood Product Dispense Status) Segment */
  buildBPX(properties: Partial<BPX>): this {
    this.headerExists();
    this._buildBPX(properties);
    return this;
  }
  /** Build BTX (Blood Product Transfusion/Disposition) Segment */
  buildBTX(properties: Partial<BTX>): this {
    this.headerExists();
    this._buildBTX(properties);
    return this;
  }
  /** Build CSP (Clinical Study Phase) Segment */
  buildCSP(properties: Partial<CSP>): this {
    this.headerExists();
    this._buildCSP(properties);
    return this;
  }
  /** Build CSR (Clinical Study Registration) Segment */
  buildCSR(properties: Partial<CSR>): this {
    this.headerExists();
    this._buildCSR(properties);
    return this;
  }
  /** Build CSS (Clinical Study Data Schedule) Segment */
  buildCSS(properties: Partial<CSS>): this {
    this.headerExists();
    this._buildCSS(properties);
    return this;
  }
  /** Build CTD (Contact Data) Segment */
  buildCTD(properties: Partial<CTD>): this {
    this.headerExists();
    this._buildCTD(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDG1(properties: DG1): this {
    this.headerExists();
    this._buildDG1(properties);
    return this;
  }
  /** Build DRG (Diagnosis Related Group) Segment */
  buildDRG(properties: Partial<DRG>): this {
    this.headerExists();
    this._buildDRG(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSC(properties: any): this {
    this.headerExists();
    this._buildDSC(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildDSP(properties: any): this {
    this.headerExists();
    this._buildDSP(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildERR(properties: any): this {
    this.headerExists();
    this._buildERR(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildEVN(properties: Partial<EVN>): this {
    this.headerExists();
    this._buildEVN(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildFT1(properties: Partial<FT1>): this {
    this.headerExists();
    this._buildFT1(properties);
    return this;
  }
  /** Build GOL (Goal Detail) Segment */
  buildGOL(properties: Partial<GOL>): this {
    this.headerExists();
    this._buildGOL(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildGT1(properties: Partial<GT1>): this {
    this.headerExists();
    this._buildGT1(properties);
    return this;
  }
  /** Build IAM (Patient Adverse Reaction Information) Segment */
  buildIAM(properties: Partial<IAM>): this {
    this.headerExists();
    this._buildIAM(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildIN1(properties: Partial<IN1>): this {
    this.headerExists();
    this._buildIN1(properties);
    return this;
  }
  /** Build IPC (Imaging Procedure Control) Segment */
  buildIPC(properties: Partial<IPC>): this {
    this.headerExists();
    this._buildIPC(properties);
    return this;
  }
  /** Build ISD (Interaction Status Detail) Segment */
  buildISD(properties: Partial<ISD>): this {
    this.headerExists();
    this._buildISD(properties);
    return this;
  }
  /** Build ITM (Material Item Master) Segment */
  buildITM(properties: Partial<ITM>): this {
    this.headerExists();
    this._buildITM(properties);
    return this;
  }
  /** Build IVT (Material Location) Segment */
  buildIVT(properties: Partial<IVT>): this {
    this.headerExists();
    this._buildIVT(properties);
    return this;
  }
  /** Build MFE (Master File Entry) Segment */
  buildMFE(properties: Partial<MFE>): this {
    this.headerExists();
    this._buildMFE(properties);
    return this;
  }
  /** Build MFI (Master File Identification) Segment */
  buildMFI(properties: Partial<MFI>): this {
    this.headerExists();
    this._buildMFI(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMRG(properties: Partial<MRG>): this {
    this.headerExists();
    this._buildMRG(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildMSA(properties: Partial<MSA>): this {
    this.headerExists();
    this._buildMSA(properties);
    return this;
  }
  /**
   * Build MSH Header
   * @remarks Add the required fields based on the spec chosen.
   * @since 1.0.0
   * @return void
   * @param props
   */
  buildMSH(properties: Partial<MSH>): this {
    // make sure there is only one MSH header per message.
    if (this._message.totalSegment("MSH") > 0) {
      throw new HL7FatalError(
        `You can only have one MSH Header per HL7 Message.`,
      );
    }
    this._buildMSH(properties);
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
  buildNK1(properties: Partial<NK1>): this {
    this.headerExists();
    this._buildNK1(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNPU(properties: Partial<NPU>): this {
    this.headerExists();
    this._buildNPU(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNSC(properties: Partial<NSC>): this {
    this.headerExists();
    this._buildNSC(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNST(properties: NST): this {
    this.headerExists();
    this._buildNST(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildNTE(properties: Partial<NTE>): this {
    this.headerExists();
    this._buildNTE(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBR(properties: Partial<OBR>): this {
    this.headerExists();
    this._buildOBR(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildOBX(properties: Partial<OBX>): this {
    this.headerExists();
    this._buildOBX(properties);
    return this;
  }
  /** Build ODS (Dietary Orders, Supplements, and Preferences) Segment */
  buildODS(properties: Partial<ODS>): this {
    this.headerExists();
    this._buildODS(properties);
    return this;
  }
  /** Build ODT (Diet Tray Instructions) Segment */
  buildODT(properties: Partial<ODT>): this {
    this.headerExists();
    this._buildODT(properties);
    return this;
  }
  /** Build OM1 (General Attributes of an Observation) Segment */
  buildOM1(properties: Partial<OM1>): this {
    this.headerExists();
    this._buildOM1(properties);
    return this;
  }
  /** Build OM2 (Numeric Observations) Segment */
  buildOM2(properties: Partial<OM2>): this {
    this.headerExists();
    this._buildOM2(properties);
    return this;
  }
  /** Build OM3 (Categorical Test/Observation) Segment */
  buildOM3(properties: Partial<OM3>): this {
    this.headerExists();
    this._buildOM3(properties);
    return this;
  }
  /** Build OM4 (Observations Requiring Specimens) Segment */
  buildOM4(properties: Partial<OM4>): this {
    this.headerExists();
    this._buildOM4(properties);
    return this;
  }
  /** Build OM5 (Observation Batteries) Segment */
  buildOM5(properties: Partial<OM5>): this {
    this.headerExists();
    this._buildOM5(properties);
    return this;
  }
  /** Build OM6 (Observations Copied from Other Observations) Segment */
  buildOM6(properties: Partial<OM6>): this {
    this.headerExists();
    this._buildOM6(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildORC(properties: Partial<ORC>): this {
    this.headerExists();
    this._buildORC(properties);
    return this;
  }
  /** Build PCR (Possible Causal Relationship) Segment */
  buildPCR(properties: Partial<PCR>): this {
    this.headerExists();
    this._buildPCR(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPD1(properties: Partial<PD1>): this {
    this.headerExists();
    this._buildPD1(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPID(properties: Partial<PID>): this {
    this.headerExists();
    this._buildPID(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPR1(properties: Partial<PR1>): this {
    this.headerExists();
    this._buildPR1(properties);
    return this;
  }
  /** Build PRA (Practitioner Detail) Segment */
  buildPRA(properties: Partial<PRA>): this {
    this.headerExists();
    this._buildPRA(properties);
    return this;
  }
  /** Build PRB (Problem Detail) Segment */
  buildPRB(properties: Partial<PRB>): this {
    this.headerExists();
    this._buildPRB(properties);
    return this;
  }
  /** Build PRD (Provider Data) Segment */
  buildPRD(properties: Partial<PRD>): this {
    this.headerExists();
    this._buildPRD(properties);
    return this;
  }
  /** Build PSH (Product Summary Header) Segment */
  buildPSH(properties: Partial<PSH>): this {
    this.headerExists();
    this._buildPSH(properties);
    return this;
  }
  /** Build PTH (Pathway) Segment */
  buildPTH(properties: Partial<PTH>): this {
    this.headerExists();
    this._buildPTH(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildPV1(properties: Partial<PV1>): this {
    this.headerExists();
    this._buildPV1(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRD(properties: Partial<QRD>): this {
    this.headerExists();
    this._buildQRD(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildQRF(properties: Partial<QRF>): this {
    this.headerExists();
    this._buildQRF(properties);
    return this;
  }
  /** Build RDF (Table Row Definition) Segment */
  buildRDF(properties: Partial<RDF>): this {
    this.headerExists();
    this._buildRDF(properties);
    return this;
  }
  /** Build RDT (Table Row Data) Segment */
  buildRDT(properties: Partial<RDT>): this {
    this.headerExists();
    this._buildRDT(properties);
    return this;
  }
  /** Build REL (Clinical Relationship) Segment */
  buildREL(properties: Partial<REL>): this {
    this.headerExists();
    this._buildREL(properties);
    return this;
  }
  /** Build RGS (Resource Group) Segment */
  buildRGS(properties: Partial<RGS>): this {
    this.headerExists();
    this._buildRGS(properties);
    return this;
  }
  /** Build ROL (Role) Segment */
  buildROL(properties: Partial<ROL>): this {
    this.headerExists();
    this._buildROL(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildRX1(properties: Partial<RX1>): this {
    this.headerExists();
    this._buildRX1(properties);
    return this;
  }
  /** Build RXA (Pharmacy/Treatment Administration) Segment */
  buildRXA(properties: Partial<RXA>): this {
    this.headerExists();
    this._buildRXA(properties);
    return this;
  }
  /** Build RXD (Pharmacy/Treatment Dispense) Segment */
  buildRXD(properties: Partial<RXD>): this {
    this.headerExists();
    this._buildRXD(properties);
    return this;
  }
  /** Build RXE (Pharmacy/Treatment Encoded Order) Segment */
  buildRXE(properties: Partial<RXE>): this {
    this.headerExists();
    this._buildRXE(properties);
    return this;
  }
  /** Build RXG (Pharmacy/Treatment Give) Segment */
  buildRXG(properties: Partial<RXG>): this {
    this.headerExists();
    this._buildRXG(properties);
    return this;
  }
  /** Build RXO (Pharmacy/Treatment Order) Segment */
  buildRXO(properties: Partial<RXO>): this {
    this.headerExists();
    this._buildRXO(properties);
    return this;
  }
  /** Build RXR (Pharmacy/Treatment Route) Segment */
  buildRXR(properties: Partial<RXR>): this {
    this.headerExists();
    this._buildRXR(properties);
    return this;
  }
  /** Build SCH (Scheduling Activity Information) Segment */
  buildSCH(properties: Partial<SCH>): this {
    this.headerExists();
    this._buildSCH(properties);
    return this;
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
  buildSegment(name: string, properties: Record<string, unknown> = {}): this {
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
        properties[`${lower}_${field.num}`] ??
        properties[String(field.num)] ??
        properties[field.num as unknown as string];
      this._validatorSetField(spec, field.num, value);
    }
    return this;
  }
  /** Build SFT (Software Segment) */
  buildSFT(properties: Partial<SFT>): this {
    this.headerExists();
    this._buildSFT(properties);
    return this;
  }
  /** Build SPM (Specimen) Segment */
  buildSPM(properties: Partial<SPM>): this {
    this.headerExists();
    this._buildSPM(properties);
    return this;
  }
  /** Build STF (Staff Identification) Segment */
  buildSTF(properties: Partial<STF>): this {
    this.headerExists();
    this._buildSTF(properties);
    return this;
  }
  /** Build STZ (Sterilization Parameter) Segment */
  buildSTZ(properties: Partial<STZ>): this {
    this.headerExists();
    this._buildSTZ(properties);
    return this;
  }
  /** Build TXA (Transcription Document Header) Segment */
  buildTXA(properties: Partial<TXA>): this {
    this.headerExists();
    this._buildTXA(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildUB1(properties: Partial<UB1>): this {
    this.headerExists();
    this._buildUB1(properties);
    return this;
  }
  /** Build UB2 (UB92 Data) Segment */
  buildUB2(properties: Partial<UB2>): this {
    this.headerExists();
    this._buildUB2(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURD(properties: Partial<URD>): this {
    this.headerExists();
    this._buildURD(properties);
    return this;
  }
  /**
   *
   * @since 4.0.0
   * @param props
   */
  buildURS(properties: Partial<URS>): this {
    this.headerExists();
    this._buildURS(properties);
    return this;
  }
  /** Build VAR (Variance) Segment */
  buildVAR(properties: Partial<VAR>): this {
    this.headerExists();
    this._buildVAR(properties);
    return this;
  }

  /**
   * Check MSH Header Properties
   * @since 1.0.0
   * @return boolean
   * @param _props
   */
  checkMSH(_properties: MSH): boolean {
    throw new HL7FatalError("Not Implemented");
  }

  /**
   *
   */
  headerExists(): void {
    const firstSegment = this._message.getFirstSegment();
    if (firstSegment === undefined || firstSegment._name !== "MSH") {
      throw new HL7FatalError("MSH Header must be built first.");
    }
  }

  /**
   * Set the date.
   * @param date
   * @param length
   */
  setDate(date?: Date, length?: DateLength) {
    return createHL7Date(date === undefined ? new Date() : date, length);
  }
  /** Return Message Object
   * @since 4.0.0
   */
  toMessage(): Message {
    return this._message;
  }

  /**
   * Return the string of the entire HL7 message.
   * @since 4.0.0
   */
  toString(): string {
    return this._message.toString();
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
   * Build the ACC Segment
   * @remarks Add an ACC Segment to the HL7 Message
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildACC(_properties: ACC): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAIG(_properties: Partial<AIG>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAIL(_properties: Partial<AIL>): void {
    throw new HL7FatalError("Not Implemented");
  }

  protected _buildAIP(_properties: Partial<AIP>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAIS(_properties: Partial<AIS>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAL1(_properties: Partial<AL1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildAPR(_properties: Partial<APR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildBLG(_properties: BLG) {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildBPX(_properties: Partial<BPX>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildBTX(_properties: Partial<BTX>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildCSP(_properties: Partial<CSP>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildCSR(_properties: Partial<CSR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildCSS(_properties: Partial<CSS>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildCTD(_properties: Partial<CTD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildDG1(_properties: DG1) {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildDRG(_properties: Partial<DRG>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildDSC(_properties: DSC) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param props
   */
  protected _buildDSP(properties: Partial<DSP>): void {
    this._startSegment("DSP");

    const rulesDSP_3: ValidationRule = {};
    const rulesDSP_4: ValidationRule = {};
    const rulesDSP_5: ValidationRule = {};

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_3.length = { max: 300, min: 1 };
    }

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_4.length = { max: 2, min: 1 };
    }

    if (!["2.7", "2.7.1", "2.8"].includes(this.version)) {
      rulesDSP_5.length = { max: 20, min: 1 };
    }

    this._validatorSetValue("1", properties.dsp_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetValue("2", properties.dsp_2, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetValue("3", properties.dsp_3, {
      required: true,
      ...rulesDSP_3,
    });
    this._validatorSetValue("4", properties.dsp_4, {
      ...rulesDSP_4,
    });
    this._validatorSetValue("5", properties.dsp_5, {
      ...rulesDSP_5,
    });
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildERR(_properties: ERR) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildEVN(_properties: EVN) {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildFT1(_properties: Partial<FT1>) {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildGOL(_properties: Partial<GOL>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildGT1(_properties: Partial<GT1>) {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildIAM(_properties: Partial<IAM>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildIN1(_properties: Partial<IN1>) {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildIPC(_properties: Partial<IPC>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildISD(_properties: Partial<ISD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildITM(_properties: Partial<ITM>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildIVT(_properties: Partial<IVT>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildMFE(_properties: Partial<MFE>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildMFI(_properties: Partial<MFI>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMRG(_properties: Partial<MRG>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMSA(_properties: Partial<MSA>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * Build the MSH Segment
   * @remarks Add an MSH Segment to the HL7 Message
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildMSH(_properties: Partial<MSH>): void {
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
      case "2.1": {
        setMaxLength = "19";
        break;
      }
      case "2.2":
      case "2.3":
      case "2.3.1":
      case "2.4":
      case "2.5":
      case "2.5.1": {
        setMaxLength = "26";
        break;
      }
      case "2.6":
      case "2.7":
      case "2.7.1":
      case "2.8": {
        setMaxLength = "24";
        break;
      }
      default: {
        setMaxLength = "19";
      }
    }

    this._validatorSetValue("1", this.setDate(new Date(), setMaxLength), {
      length: {
        max: Number.parseInt(setMaxLength),
        min: 8,
      },
      required: true,
      type: "date",
    });
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNK1(_properties: Partial<NK1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNPU(_properties: Partial<NPU>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNSC(_properties: Partial<NSC>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param props
   */
  protected _buildNST(properties: NST): void {
    this._startSegment("NST");

    this._validatorSetValue("1", properties.nst_1, {
      required: true,
    });
    this._validatorSetValue("2", properties.nst_2);
    this._validatorSetValue("3", properties.nst_3);
    this._validatorSetValue("4", properties.nst_4);
    this._validatorSetValue("5", properties.nst_5);
    this._validatorSetValue("6", properties.nst_6);
    this._validatorSetValue("7", properties.nst_7);
    this._validatorSetValue("8", properties.nst_8);
    this._validatorSetValue("9", properties.nst_9);
    this._validatorSetValue("10", properties.nst_10);
    this._validatorSetValue("11", properties.nst_11);
    this._validatorSetValue("12", properties.nst_12);
    this._validatorSetValue("13", properties.nst_13);
    this._validatorSetValue("14", properties.nst_14);
    this._validatorSetValue("15", properties.nst_15);
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildNTE(_properties: Partial<NTE>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildOBR(_properties: Partial<OBR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildOBX(_properties: Partial<OBX>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildODS(_properties: Partial<ODS>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildODT(_properties: Partial<ODT>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM1(_properties: Partial<OM1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM2(_properties: Partial<OM2>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM3(_properties: Partial<OM3>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM4(_properties: Partial<OM4>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM5(_properties: Partial<OM5>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildOM6(_properties: Partial<OM6>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildORC(_properties: Partial<ORC>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPCR(_properties: Partial<PCR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPD1(_properties: Partial<PD1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPID(_properties: Partial<PID>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPR1(_properties: Partial<PR1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPRA(_properties: Partial<PRA>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPRB(_properties: Partial<PRB>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPRD(_properties: Partial<PRD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPSH(_properties: Partial<PSH>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildPTH(_properties: Partial<PTH>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildPV1(_properties: Partial<PV1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildQRD(_properties: Partial<QRD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildQRF(_properties: Partial<QRF>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRDF(_properties: Partial<RDF>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRDT(_properties: Partial<RDT>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildREL(_properties: Partial<REL>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRGS(_properties: Partial<RGS>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildROL(_properties: Partial<ROL>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildRX1(_properties: Partial<RX1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXA(_properties: Partial<RXA>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXD(_properties: Partial<RXD>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXE(_properties: Partial<RXE>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXG(_properties: Partial<RXG>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXO(_properties: Partial<RXO>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildRXR(_properties: Partial<RXR>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildSCH(_properties: Partial<SCH>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildSFT(_properties: Partial<SFT>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildSPM(_properties: Partial<SPM>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildSTF(_properties: Partial<STF>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildSTZ(_properties: Partial<STZ>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildTXA(_properties: Partial<TXA>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildUB1(_properties: Partial<UB1>): void {
    throw new HL7FatalError("Not Implemented");
  }
  protected _buildUB2(_properties: Partial<UB2>): void {
    throw new HL7FatalError("Not Implemented");
  }
  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildURD(_properties: Partial<URD>): void {
    throw new HL7FatalError("Not Implemented");
  }

  /**
   * @since 4.0.0
   * @return void
   * @param _props
   */
  protected _buildURS(_properties: Partial<URS>): void {
    throw new HL7FatalError("Not Implemented");
  }

  protected _buildVAR(_properties: Partial<VAR>): void {
    throw new HL7FatalError("Not Implemented");
  }

  /**
   * Convert a typed component object (e.g. `{ streetAddress: "...", city: "..." }`)
   * into the HL7 `^`-delimited composite string the wire format expects, while
   * validating each piece against its `ComponentSpec`.
   *
   * @remarks
   * Lookup precedence for each component, in order:
   *   1. `obj[<num>]` — numeric key, e.g. `1`.
   *   2. `obj["<num>"]` — numeric-as-string.
   *   3. Any key matching `*_<num>` (e.g. `xad_1`, `xpn_3`).
   *   4. The camelCase rendering of the component name (e.g.
   *      `"Street Address"` → `streetAddress`, `"Zip Or Postal Code"` →
   *      `zipOrPostalCode`).
   *
   * Per-component validation enforced here:
   *   - `R` => required, throws if unset.
   *   - `W` / `X` => withdrawn / not supported, throws if a value is provided.
   *   - `length` => max-length check.
   * Trailing empty components are trimmed so the wire output stays clean
   * (e.g. an XAD with only Street/City emits `Street^^City`, not
   * `Street^^City^^^…^^`).
   *
   * @since 4.0.0
   */
  protected _composeFromObject(
    object: Record<string, unknown>,
    components: readonly ComponentSpec[],
    fieldPath: string,
  ): string {
    const parts: string[] = [];
    let lastFilled = -1;
    for (const c of components) {
      const v = pickComponentValue(object, c);
      const hasValue = v !== undefined && v !== null && v !== "";

      if ((c.usage === "W" || c.usage === "X") && hasValue) {
        const label = c.usage === "W" ? "withdrawn" : "not supported";
        throw new HL7ValidationError(
          `Component ${fieldPath}.${c.num} (${c.name}) is ${label}`,
        );
      }
      if (c.usage === "R" && !hasValue) {
        throw new HL7ValidationError(
          `Component ${fieldPath}.${c.num} (${c.name}) is required`,
        );
      }
      if (hasValue && c.length !== undefined) {
        const s = String(v);
        const max = typeof c.length === "number" ? c.length : c.length.max;
        const min = typeof c.length === "object" ? c.length.min : undefined;
        if (max !== undefined && s.length > max) {
          throw new HL7ValidationError(
            `Component ${fieldPath}.${c.num} (${c.name}) must be at most ${max} characters`,
          );
        }
        if (min !== undefined && s.length < min) {
          throw new HL7ValidationError(
            `Component ${fieldPath}.${c.num} (${c.name}) must be at least ${min} characters`,
          );
        }
      }

      parts.push(hasValue ? String(v) : "");
      if (hasValue) lastFilled = parts.length - 1;
    }
    return parts.slice(0, lastFilled + 1).join("^");
  }

  /**
   * Initialize a new segment on the message and set it as the current segment.
   * @since 4.0.0
   */
  protected _startSegment(name: string): void {
    this._segment = this._message.addSegment(name);
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
    fieldNumber: number,
    value: any,
    overrides?: Partial<ValidationRule>,
  ): string[] {
    const field = spec.fields.find((f) => f.num === fieldNumber);
    if (!field) {
      throw new HL7ValidationError(
        `Field ${spec.name}.${fieldNumber} is not defined in the segment spec`,
      );
    }

    // Composite-object input: if the caller passes an object (not a Date,
    // array, or string) and the field has known components, validate each
    // component and assemble the `^`-delimited composite value here. This is
    // additive — strings keep working as before.
    const looksLikeObject =
      value !== null &&
      typeof value === "object" &&
      !(value instanceof Date) &&
      !Array.isArray(value);
    if (looksLikeObject && field.components && field.components.length > 0) {
      value = this._composeFromObject(
        value as Record<string, unknown>,
        field.components,
        `${spec.name}.${fieldNumber}`,
      );
    }

    const version = this.version as HL7Version;
    const usage: HL7UsageCode | undefined = field.usage[version];
    const hasValue = value !== undefined && value !== null && value !== "";

    if (usage === undefined) {
      if (hasValue) {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNumber} is not available in HL7 v${this.version}`,
        );
      }
      return [];
    }

    if ((usage === "W" || usage === "X") && hasValue) {
      const label = usage === "W" ? "withdrawn" : "not supported";
      throw new HL7ValidationError(
        `Field ${spec.name}.${fieldNumber} is ${label} in HL7 v${this.version} and cannot be set`,
      );
    }

    // Merge spec-derived rule with caller overrides. Caller wins for
    // length/type/allowedValues/pattern/etc — this lets hand-tuned validation
    // (date format, table-based enums) survive the migration to spec-driven
    // builders. Spec-derived `usage` and `required` are non-overridable.
    const rule: ValidationRule = {
      allowedValues: field.allowedValues,
      dependsOn: field.dependsOn,
      hl7Type: field.hl7Type,
      length: field.length,
      ...overrides,
      deprecated: usage === "B",
      required: usage === "R",
      usage,
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
      const depValue = this._segment.get(resolvedPath);
      const depString = depValue?.toString() ?? "";
      if (dep.mustBeSet && depString === "") {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNumber} is conditional and requires ${dep.path} to be set in HL7 v${this.version}`,
        );
      }
      if (dep.mustEqual !== undefined && depString !== dep.mustEqual) {
        throw new HL7ValidationError(
          `Field ${spec.name}.${fieldNumber} is conditional and requires ${dep.path} to equal "${dep.mustEqual}" in HL7 v${this.version}`,
        );
      }
    }

    return this._validatorSetValue(String(fieldNumber), value, rule);
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
      let message = `Field ${fieldPath} is deprecated and should not be used in version v${this.version}.`;
      if (rules?.useField) {
        message += ` Use '${normalizedRules.useField}' instead.`;
      }
      this._validatorWarn(warnings, message);
    }

    if (errors.length === 0) {
      this._segment.set(fieldPath, normalized);
    }

    return [...errors, ...warnings];
  }

  private _compareVersions(a: string, b: string): number {
    const pa = a.split(".").map(Number);
    const pb = b.split(".").map(Number);
    const length = Math.max(pa.length, pb.length);
    for (let index = 0; index < length; index++) {
      const diff = (pa[index] || 0) - (pb[index] || 0);
      if (diff !== 0) return diff;
    }
    return 0;
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
    const depValue = this._segment.get(resolvedPath);
    const depString = depValue?.toString() ?? "";
    const isSet = depString !== "";

    if (dep.mustBeSet && !isSet) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} requires ${dep.path} to be set`,
      );
    }

    if (dep.mustEqual !== undefined && depString !== dep.mustEqual) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} requires ${dep.path} to equal "${dep.mustEqual}", but got "${depValue}"`,
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
      const number_ = Number(value);
      if (Number.isNaN(number_)) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be a number`,
        );
      } else if (rules.number) {
        if (rules.number.min !== undefined && number_ < rules.number.min) {
          this._validatorThrowError(
            errors,
            `Field ${fieldPath} must be at least ${rules.number.min}`,
          );
        }
        if (rules.number.max !== undefined && number_ > rules.number.max) {
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
      const dateString = String(value);
      if (!/^\d{8}(\d{4}(\d{2}(\.\d{1,6})?)?)?([+-]\d{4})?$/.test(dateString)) {
        if (rules.required) {
          this._validatorThrowError(
            errors,
            `Field ${fieldPath} must be a valid HL7 date (YYYYMMDD, YYYYMMDDHHMM, YYYYMMDDHHMMSS[.S+][±HHMM])`,
          );
        }
        return;
      }
    }

    const valueString = String(value);
    const length = valueString.length;

    if (
      typeof rules.length === "number" &&
      rules.type !== "date" &&
      length !== rules.length
    ) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} must be exactly ${rules.length} characters`,
      );
    }

    if (typeof rules.length === "object") {
      if (rules.length.min !== undefined && length < rules.length.min) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be at least ${rules.length.min} characters`,
        );
      }
      if (rules.length.max !== undefined && length > rules.length.max) {
        this._validatorThrowError(
          errors,
          `Field ${fieldPath} must be at most ${rules.length.max} characters`,
        );
      }
    }

    if (rules.pattern && !rules.pattern.test(valueString)) {
      this._validatorThrowError(
        errors,
        `Field ${fieldPath} does not match expected format`,
      );
    }

    if (rules.allowedValues && !rules.allowedValues.includes(valueString)) {
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

      const [, op, version] = match;
      const cmp = this._compareVersions(this.version, version);

      switch (op) {
        case "<": {
          return cmp < 0;
        }
        case "<=": {
          return cmp <= 0;
        }
        case "=":
        case "==": {
          return cmp === 0;
        }
        case ">": {
          return cmp > 0;
        }
        case ">=": {
          return cmp >= 0;
        }
        default: {
          return false;
        }
      }
    };

    if (typeof support === "string") return satisfies(support);
    return support.some((expr) => satisfies(expr));
  }

  private _validatorNormalize(value: any): any {
    if (typeof value === "string") {
      return value.trim();
    }
    return value;
  }

  private _validatorThrowError(
    errors: string[],
    message: string,
    forceThrow: boolean = false,
  ): void {
    if (this.hardError || forceThrow) {
      // Throw FIRST. Emitting `"error"` here without a listener triggers
      // Node's "Unhandled error" wrapper before our HL7ValidationError can
      // throw — the caller would then catch a generic Error, defeating the
      // whole point of `hardError: true`.
      throw new HL7ValidationError(message);
    }
    this.emit("error", message);
    errors.push(message);
  }

  private _validatorWarn(warnings: string[], message: string): void {
    this.emit("warning", message);
    warnings.push(message);
  }
}

/**
 * Convert a free-form HL7 component label like `"Zip Or Postal Code"` into
 * the camelCase property key (`zipOrPostalCode`) the generator emits in
 * `HL7_<TYPE>` interfaces. Parenthesized clarifications like
 * `"Suffix (e.g., Jr Or Iii)"` are dropped so the key stays readable.
 *
 * Must stay in sync with the corresponding `camelize` in
 * `scripts/generate-segment-specs.mjs`.
 *
 * @internal
 */
function camelizeComponentName(name: string): string {
  const stripped = String(name).replaceAll(/\([^)]*\)/g, "");
  const tokens = stripped.split(/[^A-Za-z0-9]+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return "";
  return (
    tokens[0].toLowerCase() +
    tokens
      .slice(1)
      .map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase())
      .join("")
  );
}

/**
 * Resolve which key in a typed-component object holds the value for a
 * given `ComponentSpec`, trying numeric, numeric-as-string, `*_<num>`, and
 * camelCase keys in that order.
 *
 * @internal
 */
function pickComponentValue(
  object: Record<string, unknown>,
  c: ComponentSpec,
): unknown {
  if (object[c.num] !== undefined) return object[c.num];
  if (object[String(c.num)] !== undefined) return object[String(c.num)];

  const tailKey = Object.keys(object).find((k) =>
    new RegExp(`_${c.num}$`).test(k),
  );
  if (tailKey !== undefined) return object[tailKey];

  const camel = camelizeComponentName(c.name);
  if (camel && object[camel] !== undefined) return object[camel];

  return undefined;
}
