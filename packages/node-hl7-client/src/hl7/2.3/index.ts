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
import { HL7_2_1_NK1 } from "@/hl7/2.1/nk1";
import {
  HL7_2_1_MSH,
  HL7_2_1_OBR,
  HL7_2_1_OBX,
  HL7_2_1_ORC,
  HL7_2_1_PID,
} from "@/hl7/2.1/types";
import { HL7_2_2 } from "@/hl7/2.2";
import { AIG_SPEC } from "@/hl7/metadata/segments/aig";
import { AIL_SPEC } from "@/hl7/metadata/segments/ail";
import { AIP_SPEC } from "@/hl7/metadata/segments/aip";
import { AIS_SPEC } from "@/hl7/metadata/segments/ais";
import { APR_SPEC } from "@/hl7/metadata/segments/apr";
import { CSP_SPEC } from "@/hl7/metadata/segments/csp";
import { CSR_SPEC } from "@/hl7/metadata/segments/csr";
import { CSS_SPEC } from "@/hl7/metadata/segments/css";
import { CTD_SPEC } from "@/hl7/metadata/segments/ctd";
import { NK1_SPEC } from "@/hl7/metadata/segments/nk1";
import { OBR_SPEC } from "@/hl7/metadata/segments/obr";
import { OBX_SPEC } from "@/hl7/metadata/segments/obx";
import { ORC_SPEC } from "@/hl7/metadata/segments/orc";
import { PCR_SPEC } from "@/hl7/metadata/segments/pcr";
import { PD1_SPEC } from "@/hl7/metadata/segments/pd1";
import { PID_SPEC } from "@/hl7/metadata/segments/pid";
import { PRA_SPEC } from "@/hl7/metadata/segments/pra";
import { PRD_SPEC } from "@/hl7/metadata/segments/prd";
import { PSH_SPEC } from "@/hl7/metadata/segments/psh";
import { RDF_SPEC } from "@/hl7/metadata/segments/rdf";
import { RDT_SPEC } from "@/hl7/metadata/segments/rdt";
import { RGS_SPEC } from "@/hl7/metadata/segments/rgs";
import { ROL_SPEC } from "@/hl7/metadata/segments/rol";
import { SCH_SPEC } from "@/hl7/metadata/segments/sch";
import { VAR_SPEC } from "@/hl7/metadata/segments/var";
import { TABLE_0155 } from "@/hl7/tables/0155";
import { randomString } from "@/utils/randomString";

import { HL7_2_3_AIG } from "./aig";
import { HL7_2_3_AIL } from "./ail";
import { HL7_2_3_AIP } from "./aip";
import { HL7_2_3_AIS } from "./ais";
import { HL7_2_3_APR } from "./apr";
import { HL7_2_3_CSP } from "./csp";
import { HL7_2_3_CSR } from "./csr";
import { HL7_2_3_CSS } from "./css";
import { HL7_2_3_CTD } from "./ctd";
import { HL7_2_3_MSH } from "./msh";
import { HL7_2_3_NK1 } from "./nk1";
import { HL7_2_3_OBR } from "./obr";
import { HL7_2_3_OBX } from "./obx";
import { HL7_2_3_ORC } from "./orc";
import { HL7_2_3_PCR } from "./pcr";
import { HL7_2_3_PD1 } from "./pd1";
import { HL7_2_3_PID } from "./pid";
import { HL7_2_3_PRA } from "./pra";
import { HL7_2_3_PRD } from "./prd";
import { HL7_2_3_PSH } from "./psh";
import { HL7_2_3_RDF } from "./rdf";
import { HL7_2_3_RDT } from "./rdt";
import { HL7_2_3_RGS } from "./rgs";
import { HL7_2_3_ROL } from "./rol";
import { HL7_2_3_SCH } from "./sch";
import { ClientBuilderOptions_Hl7_2_3 } from "./types";
import { HL7_2_3_VAR } from "./var";

export type { HL7_2_3_MSH } from "./msh";
export type { ClientBuilderOptions_Hl7_2_3 } from "./types";

/**
 * Hl7 Specification Version 2.3
 * @remarks Used to build HL7 messages following the 2.3 specification.
 * @since 1.0.0
 */
export class HL7_2_3 extends HL7_2_2 {
  protected _table_0155: string[];

  constructor(properties?: ClientBuilderOptions_Hl7_2_3) {
    super(properties);
    this.version = "2.3";
    this._table_0155 = properties?.table_0155 || TABLE_0155;
  }

  /**
   * Check MSH Header Properties for HL7 2.3
   * @since 1.0.0
   */
  checkMSH(msh: HL7_2_3_MSH): boolean {
    if (msh.msh_9_1 === undefined || msh.msh_9_2 === undefined) {
      throw new TypeError("MSH.9.1 & MSH 9.2 must be defined.");
    }
    if (msh.msh_9_1.length !== 3) {
      throw new Error("MSH.9.1 must be 3 characters in length.");
    }
    if (msh.msh_9_2.length !== 3) {
      throw new Error("MSH.9.2 must be 3 characters in length.");
    }
    if (
      msh.msh_10 !== undefined &&
      (msh.msh_10.length === 0 || msh.msh_10.length > 20)
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
      msh.msh_11_2 !== undefined &&
      (msh.msh_11_2.length > 1 || msh.msh_11_2 === "")
    ) {
      throw new Error(
        "MSH.11.2 can either be undefined/blank and 1 character long.",
      );
    }
    return true;
  }

  protected _buildAIG(properties: Partial<HL7_2_3_AIG>): void {
    this._assertSegmentInVersion(AIG_SPEC);
    this._segment = this._message.addSegment("AIG");
    this._validatorSetField(AIG_SPEC, 1, String(properties.aig_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 2, properties.aig_2, {
      allowedValues: ["A", "D", "U"],
      length: 1,
    });
    this._validatorSetField(AIG_SPEC, 3, properties.aig_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 4, properties.aig_4, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 5, properties.aig_5, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 6, properties.aig_6, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 7, properties.aig_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      AIG_SPEC,
      8,
      properties.aig_8 instanceof Date && !isNaN(properties.aig_8.getTime())
        ? this.setDate(properties.aig_8, this._opt.date)
        : (properties.aig_8 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(AIG_SPEC, 9, properties.aig_9, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 10, properties.aig_10, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 11, properties.aig_11, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 12, properties.aig_12, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 13, properties.aig_13, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIG_SPEC, 14, properties.aig_14, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildAIL(properties: Partial<HL7_2_3_AIL>): void {
    this._assertSegmentInVersion(AIL_SPEC);
    this._segment = this._message.addSegment("AIL");
    this._validatorSetField(AIL_SPEC, 1, String(properties.ail_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 2, properties.ail_2, {
      allowedValues: ["A", "D", "U"],
      length: 1,
    });
    this._validatorSetField(AIL_SPEC, 3, properties.ail_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 4, properties.ail_4, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 5, properties.ail_5, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      AIL_SPEC,
      6,
      properties.ail_6 instanceof Date && !isNaN(properties.ail_6.getTime())
        ? this.setDate(properties.ail_6, this._opt.date)
        : (properties.ail_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(AIL_SPEC, 7, properties.ail_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 8, properties.ail_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 9, properties.ail_9, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 10, properties.ail_10, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 11, properties.ail_11, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIL_SPEC, 12, properties.ail_12, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildAIP(properties: Partial<HL7_2_3_AIP>): void {
    this._assertSegmentInVersion(AIP_SPEC);
    this._segment = this._message.addSegment("AIP");
    this._validatorSetField(AIP_SPEC, 1, String(properties.aip_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 2, properties.aip_2, {
      allowedValues: ["A", "D", "U"],
      length: 1,
    });
    this._validatorSetField(AIP_SPEC, 3, properties.aip_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 4, properties.aip_4, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 5, properties.aip_5, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      AIP_SPEC,
      6,
      properties.aip_6 instanceof Date && !isNaN(properties.aip_6.getTime())
        ? this.setDate(properties.aip_6, this._opt.date)
        : (properties.aip_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(AIP_SPEC, 7, properties.aip_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 8, properties.aip_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 9, properties.aip_9, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 10, properties.aip_10, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 11, properties.aip_11, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIP_SPEC, 12, properties.aip_12, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildAIS(properties: Partial<HL7_2_3_AIS>): void {
    this._assertSegmentInVersion(AIS_SPEC);
    this._segment = this._message.addSegment("AIS");
    this._validatorSetField(AIS_SPEC, 1, String(properties.ais_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 2, properties.ais_2, {
      allowedValues: ["A", "D", "U"],
      length: 1,
    });
    this._validatorSetField(AIS_SPEC, 3, properties.ais_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      AIS_SPEC,
      4,
      properties.ais_4 instanceof Date && !isNaN(properties.ais_4.getTime())
        ? this.setDate(properties.ais_4, this._opt.date)
        : (properties.ais_4 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(AIS_SPEC, 5, properties.ais_5, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 6, properties.ais_6, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 7, properties.ais_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 8, properties.ais_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 9, properties.ais_9, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(AIS_SPEC, 10, properties.ais_10, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildAPR(properties: Partial<HL7_2_3_APR>): void {
    this._assertSegmentInVersion(APR_SPEC);
    this._segment = this._message.addSegment("APR");
    this._validatorSetField(APR_SPEC, 1, properties.apr_1, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(APR_SPEC, 2, properties.apr_2, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(APR_SPEC, 3, properties.apr_3, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(APR_SPEC, 4, properties.apr_4, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(APR_SPEC, 5, properties.apr_5, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildCSP(properties: Partial<HL7_2_3_CSP>): void {
    this._assertSegmentInVersion(CSP_SPEC);
    this._segment = this._message.addSegment("CSP");
    this._validatorSetField(CSP_SPEC, 1, properties.csp_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      CSP_SPEC,
      2,
      properties.csp_2 instanceof Date && !isNaN(properties.csp_2.getTime())
        ? this.setDate(properties.csp_2, this._opt.date)
        : (properties.csp_2 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      CSP_SPEC,
      3,
      properties.csp_3 instanceof Date && !isNaN(properties.csp_3.getTime())
        ? this.setDate(properties.csp_3, this._opt.date)
        : (properties.csp_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSP_SPEC, 4, properties.csp_4, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildCSR(properties: Partial<HL7_2_3_CSR>): void {
    this._assertSegmentInVersion(CSR_SPEC);
    this._segment = this._message.addSegment("CSR");
    this._validatorSetField(CSR_SPEC, 1, properties.csr_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 2, properties.csr_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 3, properties.csr_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 4, properties.csr_4, {
      length: { max: 30, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 5, properties.csr_5, {
      length: { max: 30, min: 1 },
    });
    this._validatorSetField(
      CSR_SPEC,
      6,
      properties.csr_6 instanceof Date && !isNaN(properties.csr_6.getTime())
        ? this.setDate(properties.csr_6, this._opt.date)
        : (properties.csr_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSR_SPEC, 7, properties.csr_7, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 8, properties.csr_8, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      CSR_SPEC,
      9,
      properties.csr_9 instanceof Date && !isNaN(properties.csr_9.getTime())
        ? this.setDate(properties.csr_9, this._opt.date)
        : (properties.csr_9 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSR_SPEC, 10, properties.csr_10, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      CSR_SPEC,
      11,
      properties.csr_11 instanceof Date && !isNaN(properties.csr_11.getTime())
        ? this.setDate(properties.csr_11, this._opt.date)
        : (properties.csr_11 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSR_SPEC, 12, properties.csr_12, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 13, properties.csr_13, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(CSR_SPEC, 14, properties.csr_14, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      CSR_SPEC,
      15,
      properties.csr_15 instanceof Date && !isNaN(properties.csr_15.getTime())
        ? this.setDate(properties.csr_15, this._opt.date)
        : (properties.csr_15 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSR_SPEC, 16, properties.csr_16, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildCSS(properties: Partial<HL7_2_3_CSS>): void {
    this._assertSegmentInVersion(CSS_SPEC);
    this._segment = this._message.addSegment("CSS");
    this._validatorSetField(CSS_SPEC, 1, properties.css_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      CSS_SPEC,
      2,
      properties.css_2 instanceof Date && !isNaN(properties.css_2.getTime())
        ? this.setDate(properties.css_2, this._opt.date)
        : (properties.css_2 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(CSS_SPEC, 3, properties.css_3, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildCTD(properties: Partial<HL7_2_3_CTD>): void {
    this._assertSegmentInVersion(CTD_SPEC);
    this._segment = this._message.addSegment("CTD");
    this._validatorSetField(CTD_SPEC, 1, properties.ctd_1, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 2, properties.ctd_2, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 3, properties.ctd_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 4, properties.ctd_4, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 5, properties.ctd_5, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 6, properties.ctd_6, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(CTD_SPEC, 7, properties.ctd_7, {
      length: { max: 100, min: 1 },
    });
  }

  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    const msh = properties as unknown as Partial<HL7_2_3_MSH>;
    this._segment = this._message.addSegment("MSH");

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      { length: 4, required: true },
    );
    this._validatorSetValue("3", msh.msh_3 || msh.sendingApplication, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetValue("4", msh.msh_4 || msh.sendingFacility, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue("5", msh.msh_5 || msh.receivingApplication, {
      length: { max: 15, min: 1 },
    });
    this._validatorSetValue("6", msh.msh_6 || msh.receivingFacility, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue(
      "7",
      msh.msh_7 instanceof Date && !isNaN(msh.msh_7.getTime())
        ? this.setDate(msh.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      { required: true, type: "date" },
    );
    this._validatorSetValue("8", msh.msh_8, { length: { max: 40, min: 1 } });
    this._validatorSetValue("9.1", msh.msh_9_1, {
      length: { max: 3, min: 1 },
      required: true,
    });
    this._validatorSetValue("9.2", msh.msh_9_2, {
      length: { max: 3, min: 1 },
      required: true,
    });
    this._validatorSetValue("10", msh.msh_10 || randomString(), {
      length: { max: 20, min: 1 },
    });
    this._validatorSetValue("11.1", msh.msh_11_1, {
      allowedValues: ["D", "P", "T"],
      length: 1,
      required: true,
    });
    if (msh.msh_11_2 !== undefined && msh.msh_11_2 !== "") {
      this._validatorSetValue("11.2", msh.msh_11_2, {
        allowedValues: ["A", "I", "R"],
        length: 1,
      });
    }
    this._validatorSetValue("12", this.version, { required: true });
    this._validatorSetValue("13", msh.msh_13, { length: { max: 15, min: 1 } });
    this._validatorSetValue("14", msh.msh_14, { length: { max: 180, min: 1 } });
    this._validatorSetValue("15", msh.msh_15, {
      allowedValues: this._table_0155,
    });
    this._validatorSetValue("16", msh.msh_16, {
      allowedValues: this._table_0155,
    });
    this._validatorSetValue("17", msh.msh_17, { length: 3 });
    this._validatorSetValue("18", msh.msh_18, { length: { max: 16, min: 1 } });
  }

  protected _buildNK1(properties: Partial<HL7_2_1_NK1>): void {
    this._assertSegmentInVersion(NK1_SPEC);
    super._buildNK1(properties);
    const nk1 = properties as unknown as Partial<HL7_2_3_NK1>;
    this._validatorSetField(NK1_SPEC, 6, nk1.nk1_6, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 7, nk1.nk1_7, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      NK1_SPEC,
      8,
      nk1.nk1_8 instanceof Date && !isNaN(nk1.nk1_8.getTime())
        ? this.setDate(nk1.nk1_8, this._opt.date)
        : (nk1.nk1_8 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      NK1_SPEC,
      9,
      nk1.nk1_9 instanceof Date && !isNaN(nk1.nk1_9.getTime())
        ? this.setDate(nk1.nk1_9, this._opt.date)
        : (nk1.nk1_9 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(NK1_SPEC, 10, nk1.nk1_10, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 11, nk1.nk1_11, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 12, nk1.nk1_12, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 13, nk1.nk1_13, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 14, nk1.nk1_14, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 15, nk1.nk1_15, { length: 1 });
    this._validatorSetField(
      NK1_SPEC,
      16,
      nk1.nk1_16 instanceof Date && !isNaN(nk1.nk1_16.getTime())
        ? this.setDate(nk1.nk1_16, this._opt.date)
        : (nk1.nk1_16 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(NK1_SPEC, 17, nk1.nk1_17, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 18, nk1.nk1_18, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 19, nk1.nk1_19, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(NK1_SPEC, 20, nk1.nk1_20, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildOBR(properties: Partial<HL7_2_1_OBR>): void {
    this._assertSegmentInVersion(OBR_SPEC);
    super._buildOBR(properties);
    const obr = properties as unknown as Partial<HL7_2_3_OBR>;
    this._validatorSetField(
      OBR_SPEC,
      36,
      obr.obr_36 instanceof Date && !isNaN(obr.obr_36.getTime())
        ? this.setDate(obr.obr_36, this._opt.date)
        : (obr.obr_36 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(OBR_SPEC, 37, obr.obr_37, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 38, obr.obr_38, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 39, obr.obr_39, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 40, obr.obr_40, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 41, obr.obr_41, {
      allowedValues: ["A", "W", "N"],
      length: 1,
    });
    this._validatorSetField(OBR_SPEC, 42, obr.obr_42, {
      allowedValues: ["R", "O", "N"],
      length: 1,
    });
    this._validatorSetField(OBR_SPEC, 43, obr.obr_43, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildOBX(properties: Partial<HL7_2_1_OBX>): void {
    this._assertSegmentInVersion(OBX_SPEC);
    super._buildOBX(properties);
    const obx = properties as unknown as Partial<HL7_2_3_OBX>;
    this._validatorSetField(OBX_SPEC, 16, obx.obx_16, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(OBX_SPEC, 17, obx.obx_17, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildORC(properties: Partial<HL7_2_1_ORC>): void {
    this._assertSegmentInVersion(ORC_SPEC);
    super._buildORC(properties);
    const orc = properties as unknown as Partial<HL7_2_3_ORC>;
    this._validatorSetField(ORC_SPEC, 21, orc.orc_21, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 22, orc.orc_22, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 23, orc.orc_23, {
      length: { max: 40, min: 1 },
    });
  }

  protected _buildPCR(properties: Partial<HL7_2_3_PCR>): void {
    this._assertSegmentInVersion(PCR_SPEC);
    this._segment = this._message.addSegment("PCR");
    this._validatorSetField(PCR_SPEC, 1, properties.pcr_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 2, properties.pcr_2, {
      allowedValues: ["Y", "N", "NA"],
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 3, properties.pcr_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 4, properties.pcr_4, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(
      PCR_SPEC,
      5,
      properties.pcr_5 instanceof Date && !isNaN(properties.pcr_5.getTime())
        ? this.setDate(properties.pcr_5, this._opt.date)
        : (properties.pcr_5 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PCR_SPEC,
      6,
      properties.pcr_6 instanceof Date && !isNaN(properties.pcr_6.getTime())
        ? this.setDate(properties.pcr_6, this._opt.date)
        : (properties.pcr_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PCR_SPEC,
      7,
      properties.pcr_7 instanceof Date && !isNaN(properties.pcr_7.getTime())
        ? this.setDate(properties.pcr_7, this._opt.date)
        : (properties.pcr_7 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PCR_SPEC,
      8,
      properties.pcr_8 instanceof Date && !isNaN(properties.pcr_8.getTime())
        ? this.setDate(properties.pcr_8, this._opt.date)
        : (properties.pcr_8 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PCR_SPEC, 9, properties.pcr_9, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 10, properties.pcr_10, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 11, properties.pcr_11, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 12, properties.pcr_12, {
      length: { max: 30, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 13, properties.pcr_13, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 14, properties.pcr_14, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 15, properties.pcr_15, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 16, properties.pcr_16, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 17, properties.pcr_17, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(
      PCR_SPEC,
      18,
      properties.pcr_18 instanceof Date && !isNaN(properties.pcr_18.getTime())
        ? this.setDate(properties.pcr_18, this._opt.date)
        : (properties.pcr_18 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PCR_SPEC, 19, properties.pcr_19, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 20, properties.pcr_20, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 21, properties.pcr_21, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 22, properties.pcr_22, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PCR_SPEC, 23, properties.pcr_23, {
      length: { max: 1, min: 1 },
    });
  }

  protected _buildPD1(properties: Partial<HL7_2_3_PD1>): void {
    this._assertSegmentInVersion(PD1_SPEC);
    this._segment = this._message.addSegment("PD1");
    this._validatorSetField(PD1_SPEC, 1, properties.pd1_1, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 2, properties.pd1_2, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 3, properties.pd1_3, {
      length: { max: 90, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 4, properties.pd1_4, {
      length: { max: 90, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 5, properties.pd1_5, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 6, properties.pd1_6, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 7, properties.pd1_7, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 8, properties.pd1_8, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 9, properties.pd1_9, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
    this._validatorSetField(PD1_SPEC, 10, properties.pd1_10, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 11, properties.pd1_11, {
      length: { max: 1, min: 1 },
    });
    this._validatorSetField(PD1_SPEC, 12, properties.pd1_12, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
  }

  protected _buildPID(properties: Partial<HL7_2_1_PID>): void {
    this._assertSegmentInVersion(PID_SPEC);
    super._buildPID(properties);
    const pid = properties as unknown as Partial<HL7_2_3_PID>;
    this._validatorSetField(PID_SPEC, 27, pid.pid_27, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PID_SPEC, 28, pid.pid_28, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      PID_SPEC,
      29,
      pid.pid_29 instanceof Date && !isNaN(pid.pid_29.getTime())
        ? this.setDate(pid.pid_29, this._opt.date)
        : (pid.pid_29 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PID_SPEC, 30, pid.pid_30, {
      allowedValues: ["Y", "N"],
      length: 1,
    });
  }

  protected _buildPRA(properties: Partial<HL7_2_3_PRA>): void {
    this._assertSegmentInVersion(PRA_SPEC);
    this._segment = this._message.addSegment("PRA");
    this._validatorSetField(PRA_SPEC, 1, properties.pra_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PRA_SPEC, 2, properties.pra_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PRA_SPEC, 3, properties.pra_3, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(PRA_SPEC, 4, properties.pra_4, {
      allowedValues: ["I", "O"],
      length: 1,
    });
    this._validatorSetField(PRA_SPEC, 5, properties.pra_5, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(PRA_SPEC, 6, properties.pra_6, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(PRA_SPEC, 7, properties.pra_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      PRA_SPEC,
      8,
      properties.pra_8 instanceof Date && !isNaN(properties.pra_8.getTime())
        ? this.setDate(properties.pra_8, this._opt.date)
        : (properties.pra_8 ?? ""),
      { type: "date" },
    );
  }

  protected _buildPRD(properties: Partial<HL7_2_3_PRD>): void {
    this._assertSegmentInVersion(PRD_SPEC);
    this._segment = this._message.addSegment("PRD");
    this._validatorSetField(PRD_SPEC, 1, properties.prd_1, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 2, properties.prd_2, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 3, properties.prd_3, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 4, properties.prd_4, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 5, properties.prd_5, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 6, properties.prd_6, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(PRD_SPEC, 7, properties.prd_7, {
      length: { max: 100, min: 1 },
    });
    this._validatorSetField(
      PRD_SPEC,
      8,
      properties.prd_8 instanceof Date && !isNaN(properties.prd_8.getTime())
        ? this.setDate(properties.prd_8, this._opt.date)
        : (properties.prd_8 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PRD_SPEC,
      9,
      properties.prd_9 instanceof Date && !isNaN(properties.prd_9.getTime())
        ? this.setDate(properties.prd_9, this._opt.date)
        : (properties.prd_9 ?? ""),
      { type: "date" },
    );
  }

  protected _buildPSH(properties: Partial<HL7_2_3_PSH>): void {
    this._assertSegmentInVersion(PSH_SPEC);
    this._segment = this._message.addSegment("PSH");
    this._validatorSetField(PSH_SPEC, 1, properties.psh_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 2, properties.psh_2, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      PSH_SPEC,
      3,
      properties.psh_3 instanceof Date && !isNaN(properties.psh_3.getTime())
        ? this.setDate(properties.psh_3, this._opt.date)
        : (properties.psh_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PSH_SPEC,
      4,
      properties.psh_4 instanceof Date && !isNaN(properties.psh_4.getTime())
        ? this.setDate(properties.psh_4, this._opt.date)
        : (properties.psh_4 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PSH_SPEC,
      5,
      properties.psh_5 instanceof Date && !isNaN(properties.psh_5.getTime())
        ? this.setDate(properties.psh_5, this._opt.date)
        : (properties.psh_5 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PSH_SPEC, 6, properties.psh_6, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 7, properties.psh_7, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 8, properties.psh_8, {
      allowedValues: ["A", "E"],
      length: 1,
    });
    this._validatorSetField(PSH_SPEC, 9, properties.psh_9, {
      length: { max: 600, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 10, properties.psh_10, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 11, properties.psh_11, {
      allowedValues: ["A", "E"],
      length: 1,
    });
    this._validatorSetField(PSH_SPEC, 12, properties.psh_12, {
      length: { max: 600, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 13, properties.psh_13, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PSH_SPEC, 14, properties.psh_14, {
      length: { max: 2, min: 1 },
    });
  }

  protected _buildRDF(properties: Partial<HL7_2_3_RDF>): void {
    this._assertSegmentInVersion(RDF_SPEC);
    this._segment = this._message.addSegment("RDF");
    this._validatorSetField(RDF_SPEC, 1, properties.rdf_1, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(RDF_SPEC, 2, properties.rdf_2, {
      length: { max: 40, min: 1 },
    });
  }

  protected _buildRDT(properties: Partial<HL7_2_3_RDT>): void {
    this._assertSegmentInVersion(RDT_SPEC);
    this._segment = this._message.addSegment("RDT");
    this._validatorSetField(RDT_SPEC, 1, properties.rdt_1, {
      length: { max: 99_999, min: 1 },
    });
  }

  protected _buildRGS(properties: Partial<HL7_2_3_RGS>): void {
    this._assertSegmentInVersion(RGS_SPEC);
    this._segment = this._message.addSegment("RGS");
    this._validatorSetField(RGS_SPEC, 1, String(properties.rgs_1), {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(RGS_SPEC, 2, properties.rgs_2, {
      allowedValues: ["A", "D", "U"],
      length: 1,
    });
    this._validatorSetField(RGS_SPEC, 3, properties.rgs_3, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildROL(properties: Partial<HL7_2_3_ROL>): void {
    this._assertSegmentInVersion(ROL_SPEC);
    this._segment = this._message.addSegment("ROL");
    this._validatorSetField(ROL_SPEC, 1, properties.rol_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(ROL_SPEC, 2, properties.rol_2, {
      allowedValues: ["A", "D", "U"],
    });
    this._validatorSetField(ROL_SPEC, 3, properties.rol_3, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(ROL_SPEC, 4, properties.rol_4, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(
      ROL_SPEC,
      5,
      properties.rol_5 instanceof Date && !isNaN(properties.rol_5.getTime())
        ? this.setDate(properties.rol_5, this._opt.date)
        : (properties.rol_5 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      ROL_SPEC,
      6,
      properties.rol_6 instanceof Date && !isNaN(properties.rol_6.getTime())
        ? this.setDate(properties.rol_6, this._opt.date)
        : (properties.rol_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(ROL_SPEC, 7, properties.rol_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(ROL_SPEC, 8, properties.rol_8, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildSCH(properties: Partial<HL7_2_3_SCH>): void {
    this._assertSegmentInVersion(SCH_SPEC);
    this._segment = this._message.addSegment("SCH");
    this._validatorSetField(SCH_SPEC, 1, properties.sch_1, {
      length: { max: 75, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 2, properties.sch_2, {
      length: { max: 75, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 3, properties.sch_3, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 4, properties.sch_4, {
      length: { max: 22, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 5, properties.sch_5, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 6, properties.sch_6, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 7, properties.sch_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 8, properties.sch_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 9, properties.sch_9, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 10, properties.sch_10, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 11, properties.sch_11, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 12, properties.sch_12, {
      length: { max: 48, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 13, properties.sch_13, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 14, properties.sch_14, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 15, properties.sch_15, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 16, properties.sch_16, {
      length: { max: 48, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 17, properties.sch_17, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 18, properties.sch_18, {
      length: { max: 106, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 19, properties.sch_19, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 20, properties.sch_20, {
      length: { max: 48, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 21, properties.sch_21, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 22, properties.sch_22, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 23, properties.sch_23, {
      length: { max: 75, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 24, properties.sch_24, {
      length: { max: 75, min: 1 },
    });
    this._validatorSetField(SCH_SPEC, 25, properties.sch_25, {
      length: { max: 200, min: 1 },
    });
  }

  protected _buildVAR(properties: Partial<HL7_2_3_VAR>): void {
    this._assertSegmentInVersion(VAR_SPEC);
    this._segment = this._message.addSegment("VAR");
    this._validatorSetField(VAR_SPEC, 1, properties.var_1, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      VAR_SPEC,
      2,
      properties.var_2 instanceof Date && !isNaN(properties.var_2.getTime())
        ? this.setDate(properties.var_2, this._opt.date)
        : (properties.var_2 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      VAR_SPEC,
      3,
      properties.var_3 instanceof Date && !isNaN(properties.var_3.getTime())
        ? this.setDate(properties.var_3, this._opt.date)
        : (properties.var_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(VAR_SPEC, 4, properties.var_4, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(VAR_SPEC, 5, properties.var_5, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(VAR_SPEC, 6, properties.var_6, {
      length: { max: 512, min: 1 },
    });
  }
}
