import { randomString } from "@/utils/randomString";
import { HL7_2_1_MSH, HL7_2_1_PID, HL7_2_1_OBX, HL7_2_1_OBR, HL7_2_1_ORC } from "@/hl7/2.1/types";
import { HL7_2_1_NK1 } from "@/hl7/2.1/nk1";
import { HL7_2_2 } from "@/hl7/2.2";
import { TABLE_0155 } from "@/hl7/tables/0155";
import { ClientBuilderOptions_Hl7_2_3 } from "./types";
import { HL7_2_3_MSH } from "./msh";
import { HL7_2_3_SCH } from "./sch";
import { HL7_2_3_RGS } from "./rgs";
import { HL7_2_3_AIS } from "./ais";
import { HL7_2_3_AIG } from "./aig";
import { HL7_2_3_AIL } from "./ail";
import { HL7_2_3_AIP } from "./aip";
import { HL7_2_3_APR } from "./apr";
import { HL7_2_3_PRA } from "./pra";
import { HL7_2_3_PD1 } from "./pd1";
import { HL7_2_3_ROL } from "./rol";
import { HL7_2_3_VAR } from "./var";
import { HL7_2_3_PSH } from "./psh";
import { HL7_2_3_PCR } from "./pcr";
import { HL7_2_3_PRD } from "./prd";
import { HL7_2_3_CTD } from "./ctd";
import { HL7_2_3_RDF } from "./rdf";
import { HL7_2_3_RDT } from "./rdt";
import { HL7_2_3_CSR } from "./csr";
import { HL7_2_3_CSP } from "./csp";
import { HL7_2_3_CSS } from "./css";
import { HL7_2_3_PID } from "./pid";
import { HL7_2_3_OBX } from "./obx";
import { HL7_2_3_OBR } from "./obr";
import { HL7_2_3_ORC } from "./orc";
import { HL7_2_3_NK1 } from "./nk1";

export type { HL7_2_3_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_3 } from "./types";

/**
 * Hl7 Specification Version 2.3
 * @remarks Used to build HL7 messages following the 2.3 specification.
 * @since 1.0.0
 */
export class HL7_2_3 extends HL7_2_2 {
  protected _table_0155: string[];

  constructor(props?: ClientBuilderOptions_Hl7_2_3) {
    super(props);
    this.version = "2.3";
    this._table_0155 = props?.table_0155 || TABLE_0155;
  }

  /**
   * Check MSH Header Properties for HL7 2.3
   * @since 1.0.0
   */
  checkMSH(msh: HL7_2_3_MSH): boolean {
    if (
      typeof msh.msh_9_1 === "undefined" ||
      typeof msh.msh_9_2 === "undefined"
    ) {
      throw new Error("MSH.9.1 & MSH 9.2 must be defined.");
    }
    if (msh.msh_9_1.length !== 3) {
      throw new Error("MSH.9.1 must be 3 characters in length.");
    }
    if (msh.msh_9_2.length !== 3) {
      throw new Error("MSH.9.2 must be 3 characters in length.");
    }
    if (
      typeof msh.msh_10 !== "undefined" &&
      (msh.msh_10.length < 1 || msh.msh_10.length > 20)
    ) {
      throw new Error(
        "MSH.10 must be greater than 0 and less than 20 characters.",
      );
    }
    if (msh.msh_11_1.length > 1) {
      throw new Error(
        "MSH.11.1 has to be 1 character long. Valid inputs are: D, P, or T",
      );
    }
    if (
      typeof msh.msh_11_2 !== "undefined" &&
      (msh.msh_11_2.length > 1 || msh.msh_11_2 === "")
    ) {
      throw new Error(
        "MSH.11.2 can either be undefined/blank and 1 character long.",
      );
    }
    return true;
  }

  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
    const msh = props as unknown as Partial<HL7_2_3_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { required: true, length: 4 },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { min: 1, max: 15 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue(
      "7",
      msh.msh_7 instanceof Date && !isNaN(msh.msh_7.getTime())
        ? this.setDate(msh.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      { required: true, type: "date" },
    );
    this._validatorSetValue("8", msh.msh_8, { length: { min: 1, max: 40 } });
    this._validatorSetValue("9.1", msh.msh_9_1, {
      required: true,
      length: { min: 1, max: 3 },
    });
    this._validatorSetValue("9.2", msh.msh_9_2, {
      required: true,
      length: { min: 1, max: 3 },
    });
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { min: 1, max: 20 },
    });
    this._validatorSetValue("11.1", msh.msh_11_1, {
      required: true,
      length: 1,
      allowedValues: ["D", "P", "T"],
    });
    if (msh.msh_11_2 !== undefined && msh.msh_11_2 !== "") {
      this._validatorSetValue("11.2", msh.msh_11_2, {
        length: 1,
        allowedValues: ["A", "I", "R"],
      });
    }
    this._validatorSetValue("12", this.version, { required: true });
    this._validatorSetValue("13", msh.msh_13, { length: { min: 1, max: 15 } });
    this._validatorSetValue("14", msh.msh_14, { length: { min: 1, max: 180 } });
    this._validatorSetValue("15", msh.msh_15, { allowedValues: this._table_0155 });
    this._validatorSetValue("16", msh.msh_16, { allowedValues: this._table_0155 });
    this._validatorSetValue("17", msh.msh_17, { length: 3 });
    this._validatorSetValue("18", msh.msh_18, { length: { min: 1, max: 16 } });
  }

  protected _buildSCH(props: Partial<HL7_2_3_SCH>): void {
    this._segment = this._message.addSegment("SCH");
    this._validatorSetValue("1", props.sch_1, { length: { min: 1, max: 75 } });
    this._validatorSetValue("2", props.sch_2, { length: { min: 1, max: 75 } });
    this._validatorSetValue("3", props.sch_3, { length: { min: 1, max: 5 } });
    this._validatorSetValue("4", props.sch_4, { length: { min: 1, max: 22 } });
    this._validatorSetValue("5", props.sch_5, { length: { min: 1, max: 200 } });
    this._validatorSetValue("6", props.sch_6, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("7", props.sch_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue("8", props.sch_8, { length: { min: 1, max: 200 } });
    this._validatorSetValue("9", props.sch_9, { length: { min: 1, max: 20 } });
    this._validatorSetValue("10", props.sch_10, { length: { min: 1, max: 200 } });
    this._validatorSetValue("11", props.sch_11, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("12", props.sch_12, { length: { min: 1, max: 48 } });
    this._validatorSetValue("13", props.sch_13, { length: { min: 1, max: 40 } });
    this._validatorSetValue("14", props.sch_14, { length: { min: 1, max: 106 } });
    this._validatorSetValue("15", props.sch_15, { length: { min: 1, max: 80 } });
    this._validatorSetValue("16", props.sch_16, { required: true, length: { min: 1, max: 48 } });
    this._validatorSetValue("17", props.sch_17, { length: { min: 1, max: 40 } });
    this._validatorSetValue("18", props.sch_18, { length: { min: 1, max: 106 } });
    this._validatorSetValue("19", props.sch_19, { length: { min: 1, max: 80 } });
    this._validatorSetValue("20", props.sch_20, { required: true, length: { min: 1, max: 48 } });
    this._validatorSetValue("21", props.sch_21, { length: { min: 1, max: 40 } });
    this._validatorSetValue("22", props.sch_22, { length: { min: 1, max: 80 } });
    this._validatorSetValue("23", props.sch_23, { length: { min: 1, max: 75 } });
    this._validatorSetValue("24", props.sch_24, { length: { min: 1, max: 75 } });
    this._validatorSetValue("25", props.sch_25, { length: { min: 1, max: 200 } });
  }

  protected _buildRGS(props: Partial<HL7_2_3_RGS>): void {
    this._segment = this._message.addSegment("RGS");
    this._validatorSetValue("1", String(props.rgs_1), { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.rgs_2, { allowedValues: ["A", "D", "U"], length: 1 });
    this._validatorSetValue("3", props.rgs_3, { length: { min: 1, max: 200 } });
  }

  protected _buildAIS(props: Partial<HL7_2_3_AIS>): void {
    this._segment = this._message.addSegment("AIS");
    this._validatorSetValue("1", String(props.ais_1), { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.ais_2, { allowedValues: ["A", "D", "U"], length: 1 });
    this._validatorSetValue("3", props.ais_3, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue(
      "4",
      props.ais_4 instanceof Date && !isNaN(props.ais_4.getTime())
        ? this.setDate(props.ais_4, this._opt.date) : props.ais_4 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("5", props.ais_5, { length: { min: 1, max: 20 } });
    this._validatorSetValue("6", props.ais_6, { length: { min: 1, max: 200 } });
    this._validatorSetValue("7", props.ais_7, { length: { min: 1, max: 20 } });
    this._validatorSetValue("8", props.ais_8, { length: { min: 1, max: 200 } });
    this._validatorSetValue("9", props.ais_9, { length: { min: 1, max: 200 } });
    this._validatorSetValue("10", props.ais_10, { length: { min: 1, max: 200 } });
  }

  protected _buildAIG(props: Partial<HL7_2_3_AIG>): void {
    this._segment = this._message.addSegment("AIG");
    this._validatorSetValue("1", String(props.aig_1), { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.aig_2, { allowedValues: ["A", "D", "U"], length: 1 });
    this._validatorSetValue("3", props.aig_3, { length: { min: 1, max: 200 } });
    this._validatorSetValue("4", props.aig_4, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("5", props.aig_5, { length: { min: 1, max: 200 } });
    this._validatorSetValue("6", props.aig_6, { length: { min: 1, max: 5 } });
    this._validatorSetValue("7", props.aig_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue(
      "8",
      props.aig_8 instanceof Date && !isNaN(props.aig_8.getTime())
        ? this.setDate(props.aig_8, this._opt.date) : props.aig_8 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("9", props.aig_9, { length: { min: 1, max: 20 } });
    this._validatorSetValue("10", props.aig_10, { length: { min: 1, max: 200 } });
    this._validatorSetValue("11", props.aig_11, { length: { min: 1, max: 20 } });
    this._validatorSetValue("12", props.aig_12, { length: { min: 1, max: 200 } });
    this._validatorSetValue("13", props.aig_13, { length: { min: 1, max: 200 } });
    this._validatorSetValue("14", props.aig_14, { length: { min: 1, max: 200 } });
  }

  protected _buildAIL(props: Partial<HL7_2_3_AIL>): void {
    this._segment = this._message.addSegment("AIL");
    this._validatorSetValue("1", String(props.ail_1), { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.ail_2, { allowedValues: ["A", "D", "U"], length: 1 });
    this._validatorSetValue("3", props.ail_3, { length: { min: 1, max: 200 } });
    this._validatorSetValue("4", props.ail_4, { length: { min: 1, max: 200 } });
    this._validatorSetValue("5", props.ail_5, { length: { min: 1, max: 200 } });
    this._validatorSetValue(
      "6",
      props.ail_6 instanceof Date && !isNaN(props.ail_6.getTime())
        ? this.setDate(props.ail_6, this._opt.date) : props.ail_6 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("7", props.ail_7, { length: { min: 1, max: 20 } });
    this._validatorSetValue("8", props.ail_8, { length: { min: 1, max: 200 } });
    this._validatorSetValue("9", props.ail_9, { length: { min: 1, max: 20 } });
    this._validatorSetValue("10", props.ail_10, { length: { min: 1, max: 200 } });
    this._validatorSetValue("11", props.ail_11, { length: { min: 1, max: 200 } });
    this._validatorSetValue("12", props.ail_12, { length: { min: 1, max: 200 } });
  }

  protected _buildAIP(props: Partial<HL7_2_3_AIP>): void {
    this._segment = this._message.addSegment("AIP");
    this._validatorSetValue("1", String(props.aip_1), { required: true, length: { min: 1, max: 4 } });
    this._validatorSetValue("2", props.aip_2, { allowedValues: ["A", "D", "U"], length: 1 });
    this._validatorSetValue("3", props.aip_3, { length: { min: 1, max: 200 } });
    this._validatorSetValue("4", props.aip_4, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("5", props.aip_5, { length: { min: 1, max: 200 } });
    this._validatorSetValue(
      "6",
      props.aip_6 instanceof Date && !isNaN(props.aip_6.getTime())
        ? this.setDate(props.aip_6, this._opt.date) : props.aip_6 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("7", props.aip_7, { length: { min: 1, max: 20 } });
    this._validatorSetValue("8", props.aip_8, { length: { min: 1, max: 200 } });
    this._validatorSetValue("9", props.aip_9, { length: { min: 1, max: 20 } });
    this._validatorSetValue("10", props.aip_10, { length: { min: 1, max: 200 } });
    this._validatorSetValue("11", props.aip_11, { length: { min: 1, max: 200 } });
    this._validatorSetValue("12", props.aip_12, { length: { min: 1, max: 200 } });
  }

  protected _buildAPR(props: Partial<HL7_2_3_APR>): void {
    this._segment = this._message.addSegment("APR");
    this._validatorSetValue("1", props.apr_1, { length: { min: 1, max: 80 } });
    this._validatorSetValue("2", props.apr_2, { length: { min: 1, max: 80 } });
    this._validatorSetValue("3", props.apr_3, { length: { min: 1, max: 80 } });
    this._validatorSetValue("4", props.apr_4, { length: { min: 1, max: 5 } });
    this._validatorSetValue("5", props.apr_5, { length: { min: 1, max: 200 } });
  }

  protected _buildPRA(props: Partial<HL7_2_3_PRA>): void {
    this._segment = this._message.addSegment("PRA");
    this._validatorSetValue("1", props.pra_1, { length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.pra_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.pra_3, { length: { min: 1, max: 3 } });
    this._validatorSetValue("4", props.pra_4, { allowedValues: ["I", "O"], length: 1 });
    this._validatorSetValue("5", props.pra_5, { length: { min: 1, max: 100 } });
    this._validatorSetValue("6", props.pra_6, { length: { min: 1, max: 100 } });
    this._validatorSetValue("7", props.pra_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue(
      "8",
      props.pra_8 instanceof Date && !isNaN(props.pra_8.getTime())
        ? this.setDate(props.pra_8, this._opt.date) : props.pra_8 ?? "",
      { type: "date" },
    );
  }

  protected _buildPD1(props: Partial<HL7_2_3_PD1>): void {
    this._segment = this._message.addSegment("PD1");
    this._validatorSetValue("1", props.pd1_1, { length: { min: 1, max: 2 } });
    this._validatorSetValue("2", props.pd1_2, { length: { min: 1, max: 2 } });
    this._validatorSetValue("3", props.pd1_3, { length: { min: 1, max: 90 } });
    this._validatorSetValue("4", props.pd1_4, { length: { min: 1, max: 90 } });
    this._validatorSetValue("5", props.pd1_5, { length: { min: 1, max: 2 } });
    this._validatorSetValue("6", props.pd1_6, { length: { min: 1, max: 2 } });
    this._validatorSetValue("7", props.pd1_7, { length: { min: 1, max: 2 } });
    this._validatorSetValue("8", props.pd1_8, { length: { min: 1, max: 2 } });
    this._validatorSetValue("9", props.pd1_9, { allowedValues: ["Y", "N"], length: 1 });
    this._validatorSetValue("10", props.pd1_10, { length: { min: 1, max: 20 } });
    this._validatorSetValue("11", props.pd1_11, { length: { min: 1, max: 1 } });
    this._validatorSetValue("12", props.pd1_12, { allowedValues: ["Y", "N"], length: 1 });
  }

  protected _buildROL(props: Partial<HL7_2_3_ROL>): void {
    this._segment = this._message.addSegment("ROL");
    this._validatorSetValue("1", props.rol_1, { length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.rol_2, { required: true, allowedValues: ["A", "D", "U"] });
    this._validatorSetValue("3", props.rol_3, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("4", props.rol_4, { required: true, length: { min: 1, max: 80 } });
    this._validatorSetValue(
      "5",
      props.rol_5 instanceof Date && !isNaN(props.rol_5.getTime())
        ? this.setDate(props.rol_5, this._opt.date) : props.rol_5 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "6",
      props.rol_6 instanceof Date && !isNaN(props.rol_6.getTime())
        ? this.setDate(props.rol_6, this._opt.date) : props.rol_6 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("7", props.rol_7, { length: { min: 1, max: 200 } });
    this._validatorSetValue("8", props.rol_8, { length: { min: 1, max: 200 } });
  }

  protected _buildVAR(props: Partial<HL7_2_3_VAR>): void {
    this._segment = this._message.addSegment("VAR");
    this._validatorSetValue("1", props.var_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "2",
      props.var_2 instanceof Date && !isNaN(props.var_2.getTime())
        ? this.setDate(props.var_2, this._opt.date) : props.var_2 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue(
      "3",
      props.var_3 instanceof Date && !isNaN(props.var_3.getTime())
        ? this.setDate(props.var_3, this._opt.date) : props.var_3 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("4", props.var_4, { length: { min: 1, max: 80 } });
    this._validatorSetValue("5", props.var_5, { length: { min: 1, max: 60 } });
    this._validatorSetValue("6", props.var_6, { length: { min: 1, max: 512 } });
  }

  protected _buildPSH(props: Partial<HL7_2_3_PSH>): void {
    this._segment = this._message.addSegment("PSH");
    this._validatorSetValue("1", props.psh_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.psh_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "3",
      props.psh_3 instanceof Date && !isNaN(props.psh_3.getTime())
        ? this.setDate(props.psh_3, this._opt.date) : props.psh_3 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue(
      "4",
      props.psh_4 instanceof Date && !isNaN(props.psh_4.getTime())
        ? this.setDate(props.psh_4, this._opt.date) : props.psh_4 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "5",
      props.psh_5 instanceof Date && !isNaN(props.psh_5.getTime())
        ? this.setDate(props.psh_5, this._opt.date) : props.psh_5 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("6", props.psh_6, { length: { min: 1, max: 12 } });
    this._validatorSetValue("7", props.psh_7, { length: { min: 1, max: 12 } });
    this._validatorSetValue("8", props.psh_8, { allowedValues: ["A", "E"], length: 1 });
    this._validatorSetValue("9", props.psh_9, { length: { min: 1, max: 600 } });
    this._validatorSetValue("10", props.psh_10, { length: { min: 1, max: 12 } });
    this._validatorSetValue("11", props.psh_11, { allowedValues: ["A", "E"], length: 1 });
    this._validatorSetValue("12", props.psh_12, { length: { min: 1, max: 600 } });
    this._validatorSetValue("13", props.psh_13, { length: { min: 1, max: 2 } });
    this._validatorSetValue("14", props.psh_14, { length: { min: 1, max: 2 } });
  }

  protected _buildPCR(props: Partial<HL7_2_3_PCR>): void {
    this._segment = this._message.addSegment("PCR");
    this._validatorSetValue("1", props.pcr_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.pcr_2, { allowedValues: ["Y", "N", "NA"], length: { min: 1, max: 2 } });
    this._validatorSetValue("3", props.pcr_3, { length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.pcr_4, { length: { min: 1, max: 8 } });
    this._validatorSetValue(
      "5",
      props.pcr_5 instanceof Date && !isNaN(props.pcr_5.getTime())
        ? this.setDate(props.pcr_5, this._opt.date) : props.pcr_5 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "6",
      props.pcr_6 instanceof Date && !isNaN(props.pcr_6.getTime())
        ? this.setDate(props.pcr_6, this._opt.date) : props.pcr_6 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "7",
      props.pcr_7 instanceof Date && !isNaN(props.pcr_7.getTime())
        ? this.setDate(props.pcr_7, this._opt.date) : props.pcr_7 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "8",
      props.pcr_8 instanceof Date && !isNaN(props.pcr_8.getTime())
        ? this.setDate(props.pcr_8, this._opt.date) : props.pcr_8 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("9", props.pcr_9, { length: { min: 1, max: 8 } });
    this._validatorSetValue("10", props.pcr_10, { length: { min: 1, max: 60 } });
    this._validatorSetValue("11", props.pcr_11, { length: { min: 1, max: 8 } });
    this._validatorSetValue("12", props.pcr_12, { length: { min: 1, max: 30 } });
    this._validatorSetValue("13", props.pcr_13, { length: { min: 1, max: 1 } });
    this._validatorSetValue("14", props.pcr_14, { length: { min: 1, max: 60 } });
    this._validatorSetValue("15", props.pcr_15, { length: { min: 1, max: 60 } });
    this._validatorSetValue("16", props.pcr_16, { length: { min: 1, max: 60 } });
    this._validatorSetValue("17", props.pcr_17, { length: { min: 1, max: 8 } });
    this._validatorSetValue(
      "18",
      props.pcr_18 instanceof Date && !isNaN(props.pcr_18.getTime())
        ? this.setDate(props.pcr_18, this._opt.date) : props.pcr_18 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("19", props.pcr_19, { length: { min: 1, max: 1 } });
    this._validatorSetValue("20", props.pcr_20, { length: { min: 1, max: 2 } });
    this._validatorSetValue("21", props.pcr_21, { length: { min: 1, max: 2 } });
    this._validatorSetValue("22", props.pcr_22, { length: { min: 1, max: 2 } });
    this._validatorSetValue("23", props.pcr_23, { length: { min: 1, max: 1 } });
  }

  protected _buildPRD(props: Partial<HL7_2_3_PRD>): void {
    this._segment = this._message.addSegment("PRD");
    this._validatorSetValue("1", props.prd_1, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("2", props.prd_2, { length: { min: 1, max: 106 } });
    this._validatorSetValue("3", props.prd_3, { length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.prd_4, { length: { min: 1, max: 60 } });
    this._validatorSetValue("5", props.prd_5, { length: { min: 1, max: 100 } });
    this._validatorSetValue("6", props.prd_6, { length: { min: 1, max: 200 } });
    this._validatorSetValue("7", props.prd_7, { length: { min: 1, max: 100 } });
    this._validatorSetValue(
      "8",
      props.prd_8 instanceof Date && !isNaN(props.prd_8.getTime())
        ? this.setDate(props.prd_8, this._opt.date) : props.prd_8 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "9",
      props.prd_9 instanceof Date && !isNaN(props.prd_9.getTime())
        ? this.setDate(props.prd_9, this._opt.date) : props.prd_9 ?? "",
      { type: "date" },
    );
  }

  protected _buildCTD(props: Partial<HL7_2_3_CTD>): void {
    this._segment = this._message.addSegment("CTD");
    this._validatorSetValue("1", props.ctd_1, { required: true, length: { min: 1, max: 200 } });
    this._validatorSetValue("2", props.ctd_2, { length: { min: 1, max: 106 } });
    this._validatorSetValue("3", props.ctd_3, { length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.ctd_4, { length: { min: 1, max: 60 } });
    this._validatorSetValue("5", props.ctd_5, { length: { min: 1, max: 100 } });
    this._validatorSetValue("6", props.ctd_6, { length: { min: 1, max: 200 } });
    this._validatorSetValue("7", props.ctd_7, { length: { min: 1, max: 100 } });
  }

  protected _buildRDF(props: Partial<HL7_2_3_RDF>): void {
    this._segment = this._message.addSegment("RDF");
    this._validatorSetValue("1", props.rdf_1, { required: true, length: { min: 1, max: 3 } });
    this._validatorSetValue("2", props.rdf_2, { required: true, length: { min: 1, max: 40 } });
  }

  protected _buildRDT(props: Partial<HL7_2_3_RDT>): void {
    this._segment = this._message.addSegment("RDT");
    this._validatorSetValue("1", props.rdt_1, { required: true, length: { min: 1, max: 99999 } });
  }

  protected _buildCSR(props: Partial<HL7_2_3_CSR>): void {
    this._segment = this._message.addSegment("CSR");
    this._validatorSetValue("1", props.csr_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue("2", props.csr_2, { length: { min: 1, max: 60 } });
    this._validatorSetValue("3", props.csr_3, { length: { min: 1, max: 60 } });
    this._validatorSetValue("4", props.csr_4, { required: true, length: { min: 1, max: 30 } });
    this._validatorSetValue("5", props.csr_5, { length: { min: 1, max: 30 } });
    this._validatorSetValue(
      "6",
      props.csr_6 instanceof Date && !isNaN(props.csr_6.getTime())
        ? this.setDate(props.csr_6, this._opt.date) : props.csr_6 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue("7", props.csr_7, { length: { min: 1, max: 60 } });
    this._validatorSetValue("8", props.csr_8, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "9",
      props.csr_9 instanceof Date && !isNaN(props.csr_9.getTime())
        ? this.setDate(props.csr_9, this._opt.date) : props.csr_9 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("10", props.csr_10, { length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "11",
      props.csr_11 instanceof Date && !isNaN(props.csr_11.getTime())
        ? this.setDate(props.csr_11, this._opt.date) : props.csr_11 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("12", props.csr_12, { length: { min: 1, max: 200 } });
    this._validatorSetValue("13", props.csr_13, { length: { min: 1, max: 200 } });
    this._validatorSetValue("14", props.csr_14, { length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "15",
      props.csr_15 instanceof Date && !isNaN(props.csr_15.getTime())
        ? this.setDate(props.csr_15, this._opt.date) : props.csr_15 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("16", props.csr_16, { length: { min: 1, max: 60 } });
  }

  protected _buildCSP(props: Partial<HL7_2_3_CSP>): void {
    this._segment = this._message.addSegment("CSP");
    this._validatorSetValue("1", props.csp_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "2",
      props.csp_2 instanceof Date && !isNaN(props.csp_2.getTime())
        ? this.setDate(props.csp_2, this._opt.date) : props.csp_2 ?? "",
      { required: true, type: "date" },
    );
    this._validatorSetValue(
      "3",
      props.csp_3 instanceof Date && !isNaN(props.csp_3.getTime())
        ? this.setDate(props.csp_3, this._opt.date) : props.csp_3 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("4", props.csp_4, { length: { min: 1, max: 60 } });
  }

  protected _buildCSS(props: Partial<HL7_2_3_CSS>): void {
    this._segment = this._message.addSegment("CSS");
    this._validatorSetValue("1", props.css_1, { required: true, length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "2",
      props.css_2 instanceof Date && !isNaN(props.css_2.getTime())
        ? this.setDate(props.css_2, this._opt.date) : props.css_2 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("3", props.css_3, { length: { min: 1, max: 60 } });
  }

  protected _buildPID(props: Partial<HL7_2_1_PID>): void {
    super._buildPID(props);
    const pid = props as unknown as Partial<HL7_2_3_PID>;
    this._validatorSetValue("27", pid.pid_27, { length: { min: 1, max: 60 } });
    this._validatorSetValue("28", pid.pid_28, { length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "29",
      pid.pid_29 instanceof Date && !isNaN(pid.pid_29.getTime())
        ? this.setDate(pid.pid_29, this._opt.date) : pid.pid_29 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("30", pid.pid_30, { length: 1, allowedValues: ["Y", "N"] });
  }

  protected _buildOBX(props: Partial<HL7_2_1_OBX>): void {
    super._buildOBX(props);
    const obx = props as unknown as Partial<HL7_2_3_OBX>;
    this._validatorSetValue("16", obx.obx_16, { length: { min: 1, max: 80 } });
    this._validatorSetValue("17", obx.obx_17, { length: { min: 1, max: 60 } });
  }

  protected _buildOBR(props: Partial<HL7_2_1_OBR>): void {
    super._buildOBR(props);
    const obr = props as unknown as Partial<HL7_2_3_OBR>;
    this._validatorSetValue(
      "36",
      obr.obr_36 instanceof Date && !isNaN(obr.obr_36.getTime())
        ? this.setDate(obr.obr_36, this._opt.date) : obr.obr_36 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("37", obr.obr_37, { length: { min: 1, max: 4 } });
    this._validatorSetValue("38", obr.obr_38, { length: { min: 1, max: 60 } });
    this._validatorSetValue("39", obr.obr_39, { length: { min: 1, max: 200 } });
    this._validatorSetValue("40", obr.obr_40, { length: { min: 1, max: 60 } });
    this._validatorSetValue("41", obr.obr_41, { allowedValues: ["A", "W", "N"], length: 1 });
    this._validatorSetValue("42", obr.obr_42, { allowedValues: ["R", "O", "N"], length: 1 });
    this._validatorSetValue("43", obr.obr_43, { length: { min: 1, max: 200 } });
  }

  protected _buildORC(props: Partial<HL7_2_1_ORC>): void {
    super._buildORC(props);
    const orc = props as unknown as Partial<HL7_2_3_ORC>;
    this._validatorSetValue("21", orc.orc_21, { length: { min: 1, max: 60 } });
    this._validatorSetValue("22", orc.orc_22, { length: { min: 1, max: 106 } });
    this._validatorSetValue("23", orc.orc_23, { length: { min: 1, max: 40 } });
  }

  protected _buildNK1(props: Partial<HL7_2_1_NK1>): void {
    super._buildNK1(props);
    const nk1 = props as unknown as Partial<HL7_2_3_NK1>;
    this._validatorSetValue("6", nk1.nk1_6, { length: { min: 1, max: 40 } });
    this._validatorSetValue("7", nk1.nk1_7, { length: { min: 1, max: 60 } });
    this._validatorSetValue(
      "8",
      nk1.nk1_8 instanceof Date && !isNaN(nk1.nk1_8.getTime())
        ? this.setDate(nk1.nk1_8, this._opt.date) : nk1.nk1_8 ?? "",
      { type: "date" },
    );
    this._validatorSetValue(
      "9",
      nk1.nk1_9 instanceof Date && !isNaN(nk1.nk1_9.getTime())
        ? this.setDate(nk1.nk1_9, this._opt.date) : nk1.nk1_9 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("10", nk1.nk1_10, { length: { min: 1, max: 60 } });
    this._validatorSetValue("11", nk1.nk1_11, { length: { min: 1, max: 20 } });
    this._validatorSetValue("12", nk1.nk1_12, { length: { min: 1, max: 60 } });
    this._validatorSetValue("13", nk1.nk1_13, { length: { min: 1, max: 60 } });
    this._validatorSetValue("14", nk1.nk1_14, { length: { min: 1, max: 3 } });
    this._validatorSetValue("15", nk1.nk1_15, { length: 1 });
    this._validatorSetValue(
      "16",
      nk1.nk1_16 instanceof Date && !isNaN(nk1.nk1_16.getTime())
        ? this.setDate(nk1.nk1_16, this._opt.date) : nk1.nk1_16 ?? "",
      { type: "date" },
    );
    this._validatorSetValue("17", nk1.nk1_17, { length: { min: 1, max: 2 } });
    this._validatorSetValue("18", nk1.nk1_18, { length: { min: 1, max: 2 } });
    this._validatorSetValue("19", nk1.nk1_19, { length: { min: 1, max: 4 } });
    this._validatorSetValue("20", nk1.nk1_20, { length: { min: 1, max: 60 } });
  }
}
