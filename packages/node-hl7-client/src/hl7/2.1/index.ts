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
import { HL7ValidationError } from "@/helpers/exception";
import { HL7_2_1_GT1 } from "@/hl7/2.1/gt1";
import { HL7_2_1_IN1 } from "@/hl7/2.1/in1";
import { ACC_SPEC } from "@/hl7/metadata/segments/acc";
import { BLG_SPEC } from "@/hl7/metadata/segments/blg";
import { DG1_SPEC } from "@/hl7/metadata/segments/dg1";
import { DSC_SPEC } from "@/hl7/metadata/segments/dsc";
import { ERR_SPEC } from "@/hl7/metadata/segments/err";
import { EVN_SPEC } from "@/hl7/metadata/segments/evn";
import { FT1_SPEC } from "@/hl7/metadata/segments/ft1";
import { GT1_SPEC } from "@/hl7/metadata/segments/gt1";
import { IN1_SPEC } from "@/hl7/metadata/segments/in1";
import { MRG_SPEC } from "@/hl7/metadata/segments/mrg";
import { MSA_SPEC } from "@/hl7/metadata/segments/msa";
import { NK1_SPEC } from "@/hl7/metadata/segments/nk1";
import { NPU_SPEC } from "@/hl7/metadata/segments/npu";
import { NSC_SPEC } from "@/hl7/metadata/segments/nsc";
import { NTE_SPEC } from "@/hl7/metadata/segments/nte";
import { OBR_SPEC } from "@/hl7/metadata/segments/obr";
import { OBX_SPEC } from "@/hl7/metadata/segments/obx";
import { ORC_SPEC } from "@/hl7/metadata/segments/orc";
import { PID_SPEC } from "@/hl7/metadata/segments/pid";
import { PR1_SPEC } from "@/hl7/metadata/segments/pr1";
import { PV1_SPEC } from "@/hl7/metadata/segments/pv1";
import { QRD_SPEC } from "@/hl7/metadata/segments/qrd";
import { QRF_SPEC } from "@/hl7/metadata/segments/qrf";
import { RX1_SPEC } from "@/hl7/metadata/segments/rx1";
import { UB1_SPEC } from "@/hl7/metadata/segments/ub1";
import { URD_SPEC } from "@/hl7/metadata/segments/urd";
import { URS_SPEC } from "@/hl7/metadata/segments/urs";
import { TABLE_0001 } from "@/hl7/tables/0001";
import { TABLE_0002 } from "@/hl7/tables/0002";
import { TABLE_0003 } from "@/hl7/tables/0003";
import { TABLE_0004 } from "@/hl7/tables/0004";
import { TABLE_0007 } from "@/hl7/tables/0007";
import { TABLE_0008 } from "@/hl7/tables/0008";
import { TABLE_0062 } from "@/hl7/tables/0062";
import { TABLE_0074 } from "@/hl7/tables/0074";
import { TABLE_0076 } from "@/hl7/tables/0076";
import { TABLE_0078 } from "@/hl7/tables/0078";
import { TABLE_0085 } from "@/hl7/tables/0085";
import { TABLE_0100 } from "@/hl7/tables/0100";
import { TABLE_0116 } from "@/hl7/tables/0116";
import { TABLE_0119 } from "@/hl7/tables/0119";
import { TABLE_0121 } from "@/hl7/tables/0121";
import { TABLE_0123 } from "@/hl7/tables/0123";
import { TABLE_0125 } from "@/hl7/tables/0125";
import { randomString } from "@/utils/randomString";

import { HL7_BASE } from "../base";
import {
  ClientBuilderOptions_Hl7_2_1,
  HL7_2_1_ACC,
  HL7_2_1_BLG,
  HL7_2_1_DG1,
  HL7_2_1_DSC,
  HL7_2_1_ERR,
  HL7_2_1_EVN,
  HL7_2_1_FT1,
  HL7_2_1_MRG,
  HL7_2_1_MSA,
  HL7_2_1_MSH,
  HL7_2_1_NK1,
  HL7_2_1_NPU,
  HL7_2_1_NSC,
  HL7_2_1_NTE,
  HL7_2_1_OBR,
  HL7_2_1_OBX,
  HL7_2_1_ORC,
  HL7_2_1_PID,
  HL7_2_1_PR1,
  HL7_2_1_PV1,
  HL7_2_1_QRD,
  HL7_2_1_QRF,
  HL7_2_1_RX1,
  HL7_2_1_UB1,
  HL7_2_1_URD,
  HL7_2_1_URS,
} from "./types";

/**
 * Hl7 Version 2.1
 * @remarks Used to build an HL7 based off the HL7 2.1 Specification.
 * @since 1.0.0
 * @extends HL7_BASE
 * @example
 * ```ts
 * const message = new HL7_2_1();
 *
 * message.buildMSH({
 *  msh_9: "ACK",
 *  msh_10: "12345",
 *  msh_11: "T",
 * });
 *
 * Will generate: MSH|^~\&||||||20081231||ACK|12345|T|2.1
 *
 * ```
 */
export class HL7_2_1 extends HL7_BASE {
  protected _table_0001: string[];
  protected _table_0002: string[];
  protected _table_0003: string[];
  protected _table_0004: string[];
  protected _table_0007: string[];
  protected _table_0008: string[];
  protected _table_0062: string[];
  protected _table_0074: string[];
  protected _table_0076: string[];
  protected _table_0078: string[];
  protected _table_0085: string[];
  protected _table_0100: string[];
  protected _table_0116: string[];
  protected _table_0119: string[];
  protected _table_0121: string[];
  protected _table_0123: string[];
  protected _table_0125: string[];
  /**
   *
   * @param props
   */
  constructor(properties?: ClientBuilderOptions_Hl7_2_1) {
    super(properties);
    this.version = "2.1";
    this._maxAddSegmentLength = 60;

    this._table_0001 = properties?.table_0001 || TABLE_0001;
    this._table_0002 = properties?.table_0002 || TABLE_0002;
    this._table_0003 = properties?.table_0003 || TABLE_0003;
    this._table_0004 = properties?.table_0004 || TABLE_0004;
    this._table_0007 = properties?.table_0007 || TABLE_0007;
    this._table_0008 = properties?.table_0008 || TABLE_0008;
    this._table_0062 = properties?.table_0062 || TABLE_0062;
    this._table_0074 = properties?.table_0074 || TABLE_0074;
    this._table_0076 = properties?.table_0076 || TABLE_0076;
    this._table_0078 = properties?.table_0078 || TABLE_0078;
    this._table_0085 = properties?.table_0085 || TABLE_0085;
    this._table_0100 = properties?.table_0100 || TABLE_0100;
    this._table_0116 = properties?.table_0116 || TABLE_0116;
    this._table_0119 = properties?.table_0119 || TABLE_0119;
    this._table_0121 = properties?.table_0121 || TABLE_0121;
    this._table_0123 = properties?.table_0123 || TABLE_0123;
    this._table_0125 = properties?.table_0125 || TABLE_0125;
  }

  /**
   * Build ACC Segment
   * @param props
   */
  protected _buildACC(properties: Partial<HL7_2_1_ACC>) {
    this._assertSegmentInVersion(ACC_SPEC);
    this._segment = this._message.addSegment("ACC");

    this._validatorSetField(
      ACC_SPEC,
      1,
      (properties.acc_1 instanceof Date &&
        !Number.isNaN(properties.acc_1.getTime())) ||
        (properties.timeStamp instanceof Date &&
          !Number.isNaN(properties.timeStamp.getTime()))
        ? this.setDate(properties.acc_1 || properties.timeStamp, this._opt.date)
        : "",
      {
        length: { max: 19, min: 8 },
        type: "date",
      },
    );

    this._validatorSetField(
      ACC_SPEC,
      2,
      properties.acc_2 || properties.accidentCode,
      {
        length: 2,
      },
    );

    this._validatorSetField(
      ACC_SPEC,
      3,
      properties.acc_3 || properties.accidentLocation,
      {
        length: { max: 25, min: 1 },
      },
    );
  }

  /**
   *
   * @param props
   * @protected
   */
  protected _buildBLG(properties: Partial<HL7_2_1_BLG>) {
    this._assertSegmentInVersion(BLG_SPEC);
    this._segment = this._message.addSegment("BLG");

    // see https://hl7-definition.caristix.com/v2/HL7v2.1/Tables/0100
    this._validatorSetField(
      BLG_SPEC,
      1,
      properties.blg_1 || properties.billingWhenToCharge,
      {
        allowedValues: this._table_0100,
        length: { max: 15, min: 1 },
      },
    );

    this._validatorSetField(
      BLG_SPEC,
      2,
      properties.blg_2 || properties.billingChargeType,
      {
        length: 2,
      },
    );

    this._validatorSetField(
      BLG_SPEC,
      3,
      properties.blg_3 || properties.billingAccountId,
      {
        length: { max: 25, min: 1 },
      },
    );
  }

  /**
   *
   * @param props
   * @protected
   */
  protected _buildDG1(properties: Partial<HL7_2_1_DG1>): void {
    this._assertSegmentInVersion(DG1_SPEC);
    this._segment = this._message.addSegment("DG1");

    this._validatorSetField(
      DG1_SPEC,
      1,
      properties.dg1_1 || properties.diagnosisId,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      2,
      properties.dg1_2 || properties.diagnosisCodingMethod,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      3,
      properties.dg1_3 || properties.diagnosisCode,
      {
        length: { max: 8, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      4,
      properties.dg1_4 || properties.diagnosisDescription,
      {
        length: { max: 40, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      5,
      (properties.dg1_5 instanceof Date &&
        !Number.isNaN(properties.dg1_5.getTime())) ||
        (properties.timeStamp instanceof Date &&
          !Number.isNaN(properties.timeStamp.getTime()))
        ? this.setDate(properties.dg1_5 || properties.timeStamp, this._opt.date)
        : "",
      { length: { max: 19, min: 1 } },
    );
    this._validatorSetField(
      DG1_SPEC,
      6,
      properties.dg1_6 || properties.diagnosisType,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      7,
      properties.dg1_7 || properties.diagnosisMajorCategory,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      8,
      properties.dg1_8 || properties.diagnosisRelatedGroup,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      9,
      properties.dg1_9 || properties.diagnosisApprovalIndicator,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      10,
      properties.dg1_10 || properties.diagnosisGrouperReviewCode,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      11,
      properties.dg1_11 || properties.diagnosisOutlierType,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      12,
      properties.dg1_12 || properties.diagnosisOutlierDays,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      13,
      properties.dg1_13 || properties.diagnosisOutlierCost,
      {
        length: { max: 12, min: 1 },
      },
    );
    this._validatorSetField(
      DG1_SPEC,
      14,
      properties.dg1_14 || properties.diagnosisGrouperVersionAndType,
      {
        length: { max: 4, min: 1 },
      },
    );
  }

  protected _buildDSC(properties: Partial<HL7_2_1_DSC>): void {
    this._assertSegmentInVersion(DSC_SPEC);
    this._segment = this._message.addSegment("DSC");

    this._validatorSetField(
      DSC_SPEC,
      1,
      properties.dsc_1 || properties.continuationPointer,
      {
        length: { max: 60, min: 1 },
      },
    );
  }

  protected _buildERR(properties: Partial<HL7_2_1_ERR>) {
    this._assertSegmentInVersion(ERR_SPEC);
    this._segment = this._message.addSegment("ERR");

    this._validatorSetField(
      ERR_SPEC,
      1,
      properties.err_1 || properties.errorIdAndLocation,
      {
        length: { max: 80, min: 1 },
      },
    );
  }

  protected _buildEVN(properties: Partial<HL7_2_1_EVN>) {
    this._assertSegmentInVersion(EVN_SPEC);
    this._segment = this._message.addSegment("EVN");

    this._validatorSetField(EVN_SPEC, 1, properties.evn_1, {
      allowedValues: this._table_0003,
    });

    this._validatorSetField(
      EVN_SPEC,
      2,
      properties.evn_2 instanceof Date &&
        !Number.isNaN(properties.evn_2.getTime())
        ? this.setDate(properties.evn_2, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      {
        type: "date",
      },
    );

    this._validatorSetField(
      EVN_SPEC,
      3,
      properties.evn_3 instanceof Date &&
        !Number.isNaN(properties.evn_3.getTime())
        ? this.setDate(properties.evn_3, this._opt.date)
        : "",
      {
        type: "date",
      },
    );

    this._validatorSetField(EVN_SPEC, 4, properties.evn_4, {
      allowedValues: this._table_0062,
    });
  }

  protected _buildFT1(properties: Partial<HL7_2_1_FT1>) {
    this._assertSegmentInVersion(FT1_SPEC);
    this._segment = this._message.addSegment("FT1");

    this._validatorSetField(FT1_SPEC, 1, properties.ft1_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 2, properties.ft1_2, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 3, properties.ft1_3, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(
      FT1_SPEC,
      4,
      properties.ft1_4 instanceof Date &&
        !Number.isNaN(properties.ft1_4.getTime())
        ? this.setDate(properties.ft1_4, "8")
        : this.setDate(new Date(), "8"),
      { type: "date" },
    );
    this._validatorSetField(
      FT1_SPEC,
      5,
      properties.ft1_5 instanceof Date &&
        !Number.isNaN(properties.ft1_5.getTime())
        ? this.setDate(properties.ft1_5, "8")
        : "",
      { type: "date" },
    );
    this._validatorSetField(FT1_SPEC, 6, properties.ft1_6, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 7, properties.ft1_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 8, properties.ft1_8, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 9, properties.ft1_9, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 10, properties.ft1_10, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 11, properties.ft1_11, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 12, properties.ft1_12, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 13, properties.ft1_13, {
      length: { max: 16, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 14, properties.ft1_14, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 15, properties.ft1_15, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 16, properties.ft1_16, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 17, properties.ft1_17, { length: 1 });
    this._validatorSetField(FT1_SPEC, 18, properties.ft1_18, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 19, properties.ft1_19, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 20, properties.ft1_20, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 21, properties.ft1_21, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(FT1_SPEC, 22, properties.ft1_22, {
      length: { max: 12, min: 1 },
    });
  }

  protected _buildGT1(properties: Partial<HL7_2_1_GT1>) {
    this._assertSegmentInVersion(GT1_SPEC);
    this._segment = this._message.addSegment("GT1");

    this._validatorSetField(GT1_SPEC, 1, properties.gt1_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 2, properties.gt1_2, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 3, properties.gt1_3, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 4, properties.gt1_4);
    this._validatorSetField(GT1_SPEC, 5, properties.gt1_5);
    this._validatorSetField(GT1_SPEC, 6, properties.gt1_6, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 7, properties.gt1_7, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 8, properties.gt1_8, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 9, properties.gt1_9, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 10, properties.gt1_10, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 11, properties.gt1_11, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 12, properties.gt1_12, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 13, properties.gt1_13, {
      length: { max: 16, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 14, properties.gt1_14, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 15, properties.gt1_15, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 16, properties.gt1_16, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 17, properties.gt1_17, { length: 1 });
    this._validatorSetField(GT1_SPEC, 18, properties.gt1_18, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 19, properties.gt1_19, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(GT1_SPEC, 20, properties.gt1_20, {
      length: { max: 60, min: 1 },
    });
  }

  protected _buildIN1(properties: Partial<HL7_2_1_IN1>) {
    this._assertSegmentInVersion(IN1_SPEC);
    this._segment = this._message.addSegment("IN1");

    this._validatorSetField(IN1_SPEC, 1, properties.in1_1);
    this._validatorSetField(IN1_SPEC, 2, properties.in1_2);
    this._validatorSetField(IN1_SPEC, 3, properties.in1_3);
    this._validatorSetField(IN1_SPEC, 4, properties.in1_4);
    this._validatorSetField(IN1_SPEC, 5, properties.in1_5);
    this._validatorSetField(IN1_SPEC, 6, properties.in1_6);
    this._validatorSetField(IN1_SPEC, 7, properties.in1_7);
    this._validatorSetField(IN1_SPEC, 8, properties.in1_8);
    this._validatorSetField(IN1_SPEC, 9, properties.in1_9);
    this._validatorSetField(IN1_SPEC, 10, properties.in1_10);
    this._validatorSetField(IN1_SPEC, 11, properties.in1_11);
    this._validatorSetField(IN1_SPEC, 12, properties.in1_12);
    this._validatorSetField(IN1_SPEC, 13, properties.in1_13);
    this._validatorSetField(IN1_SPEC, 14, properties.in1_14);
    this._validatorSetField(IN1_SPEC, 15, properties.in1_15);
    this._validatorSetField(IN1_SPEC, 16, properties.in1_16);
    this._validatorSetField(IN1_SPEC, 17, properties.in1_17);
    this._validatorSetField(IN1_SPEC, 18, properties.in1_18);
    this._validatorSetField(IN1_SPEC, 19, properties.in1_19);
    this._validatorSetField(IN1_SPEC, 20, properties.in1_20);
    this._validatorSetField(IN1_SPEC, 21, properties.in1_21);
    this._validatorSetField(IN1_SPEC, 22, properties.in1_22);
    this._validatorSetField(IN1_SPEC, 23, properties.in1_23);
    this._validatorSetField(IN1_SPEC, 24, properties.in1_24);
    this._validatorSetField(IN1_SPEC, 25, properties.in1_25);
    this._validatorSetField(IN1_SPEC, 26, properties.in1_26);
    this._validatorSetField(IN1_SPEC, 27, properties.in1_27);
    this._validatorSetField(IN1_SPEC, 28, properties.in1_28);
    this._validatorSetField(IN1_SPEC, 29, properties.in1_29);
    this._validatorSetField(IN1_SPEC, 30, properties.in1_30);
    this._validatorSetField(IN1_SPEC, 31, properties.in1_31);
    this._validatorSetField(IN1_SPEC, 32, properties.in1_32);
    this._validatorSetField(IN1_SPEC, 33, properties.in1_33);
    this._validatorSetField(IN1_SPEC, 34, properties.in1_34);
    this._validatorSetField(IN1_SPEC, 35, properties.in1_35);
    this._validatorSetField(IN1_SPEC, 36, properties.in1_36);
    this._validatorSetField(IN1_SPEC, 37, properties.in1_37);
    this._validatorSetField(IN1_SPEC, 38, properties.in1_38);
    this._validatorSetField(IN1_SPEC, 39, properties.in1_39);
    this._validatorSetField(IN1_SPEC, 40, properties.in1_40);
    this._validatorSetField(IN1_SPEC, 41, properties.in1_41);
    this._validatorSetField(IN1_SPEC, 42, properties.in1_42);
    this._validatorSetField(IN1_SPEC, 43, properties.in1_43, {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetField(IN1_SPEC, 44, properties.in1_44);
  }

  protected _buildMRG(properties: Partial<HL7_2_1_MRG>) {
    this._assertSegmentInVersion(MRG_SPEC);
    this._segment = this._message.addSegment("MRG");

    this._validatorSetField(MRG_SPEC, 1, properties.mrg_1, {
      length: { max: 16, min: 1 },
    });
    this._validatorSetField(MRG_SPEC, 2, properties.mrg_2, {
      length: { max: 16, min: 1 },
    });
    this._validatorSetField(MRG_SPEC, 3, properties.mrg_3, {
      length: { max: 20, min: 1 },
    });
  }

  protected _buildMSA(properties: Partial<HL7_2_1_MSA>) {
    this._assertSegmentInVersion(MSA_SPEC);
    this._segment = this._message.addSegment("MSA");

    this._validatorSetField(MSA_SPEC, 1, properties.msa_1, {
      allowedValues: this._table_0008,
    });
    this._validatorSetField(MSA_SPEC, 2, properties.msa_2);
    this._validatorSetField(MSA_SPEC, 3, properties.msa_3);
    this._validatorSetField(MSA_SPEC, 4, properties.msa_4);
    this._validatorSetField(MSA_SPEC, 5, properties.msa_5);
  }

  /**
   * Build HL7 MSH Segment
   * @since 1.0.0
   * @param props
   */
  protected _buildMSH(properties: Partial<HL7_2_1_MSH>): void {
    this._segment = this._message.addSegment("MSH");

    if (this._opt.separatorComponent?.length !== 1) {
      throw new HL7ValidationError(
        `Separator Component has to be a single character.`,
      );
    }

    this._validatorSetValue(
      "1",
      `${this._opt.separatorComponent as string}${this._opt.separatorRepetition as string}${this._opt.separatorEscape as string}${this._opt.separatorSubComponent as string}`,
      {
        length: 4,
        required: true,
      },
    );

    this._validatorSetValue(
      "3",
      properties.msh_3 || properties.sendingApplication,
      {
        length: { max: 15, min: 1 },
      },
    );

    this._validatorSetValue(
      "4",
      properties.msh_4 || properties.sendingFacility,
      {
        length: { max: 20, min: 1 },
      },
    );

    this._validatorSetValue(
      "5",
      properties.msh_5 || properties.receivingApplication,
      {
        length: { max: 15, min: 1 },
      },
    );

    this._validatorSetValue(
      "6",
      properties.msh_6 || properties.receivingFacility,
      {
        length: { max: 30, min: 1 },
      },
    );

    this._validatorSetValue(
      "7",
      properties.msh_7 instanceof Date &&
        !Number.isNaN(properties.msh_7.getTime())
        ? this.setDate(properties.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      {
        length: { max: 19, min: 8 },
        required: true,
        type: "date",
      },
    );

    this._validatorSetValue("8", properties.msh_8, {
      length: { max: 40, min: 1 },
    });

    // review https://hl7-definition.caristix.com/v2/HL7v2.1/Tables/0076 for valid values
    this._validatorSetValue("9", properties.msh_9, {
      allowedValues: this._table_0076,
      required: true,
    });

    this._validatorSetValue("10", properties.msh_10 || randomString(), {
      length: { max: 20, min: 1 },
    });

    this._validatorSetValue("11", properties.msh_11, {
      allowedValues: ["P", "T"],
      length: 1,
      required: true,
    });

    this._validatorSetValue("12", this.version, {
      required: true,
    });
  }

  protected _buildNK1(properties: Partial<HL7_2_1_NK1>) {
    this._assertSegmentInVersion(NK1_SPEC);
    this._segment = this._message.addSegment("NK1");

    this._validatorSetField(NK1_SPEC, 1, properties.nk1_1);
    this._validatorSetField(NK1_SPEC, 2, properties.nk1_2);
    this._validatorSetField(NK1_SPEC, 3, properties.nk1_3);
    this._validatorSetField(NK1_SPEC, 4, properties.nk1_4);
    this._validatorSetField(NK1_SPEC, 5, properties.nk1_5);
  }

  protected _buildNPU(properties: Partial<HL7_2_1_NPU>) {
    this._assertSegmentInVersion(NPU_SPEC);
    this._segment = this._message.addSegment("NPU");

    this._validatorSetField(NPU_SPEC, 1, properties.npu_1);
    this._validatorSetField(NPU_SPEC, 2, properties.npu_2, {
      allowedValues: this._table_0116,
    });
  }

  protected _buildNSC(properties: Partial<HL7_2_1_NSC>) {
    this._assertSegmentInVersion(NSC_SPEC);
    this._segment = this._message.addSegment("NSC");

    this._validatorSetField(NSC_SPEC, 1, properties.nsc_1);
    this._validatorSetField(NSC_SPEC, 2, properties.nsc_2);
    this._validatorSetField(NSC_SPEC, 3, properties.nsc_3);
    this._validatorSetField(NSC_SPEC, 4, properties.nsc_4);
    this._validatorSetField(NSC_SPEC, 5, properties.nsc_5);
    this._validatorSetField(NSC_SPEC, 6, properties.nsc_6);
    this._validatorSetField(NSC_SPEC, 7, properties.nsc_7);
    this._validatorSetField(NSC_SPEC, 8, properties.nsc_8);
    this._validatorSetField(NSC_SPEC, 9, properties.nsc_9);
  }

  protected _buildNTE(properties: Partial<HL7_2_1_NTE>) {
    this._assertSegmentInVersion(NTE_SPEC);
    this._segment = this._message.addSegment("NTE");

    this._validatorSetField(NTE_SPEC, 1, properties.nte_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      NTE_SPEC,
      2,
      properties.nte_2 || properties.sourceOfComment,
      {
        length: { max: 8, min: 1 },
      },
    );
    this._validatorSetField(
      NTE_SPEC,
      3,
      properties.nte_3 || properties.comment,
      {
        length: { max: 65_536, min: 1 },
      },
    );
  }

  protected _buildOBR(properties: Partial<HL7_2_1_OBR>) {
    this._assertSegmentInVersion(OBR_SPEC);
    this._segment = this._message.addSegment("OBR");

    this._validatorSetField(OBR_SPEC, 1, properties.obr_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      OBR_SPEC,
      2,
      properties.obr_2 || properties.placerOrderNumber,
      {
        length: { max: 75, min: 1 },
      },
    );
    this._validatorSetField(
      OBR_SPEC,
      3,
      properties.obr_3 || properties.fillerOrderNumber,
      {
        length: { max: 75, min: 1 },
      },
    );
    this._validatorSetField(
      OBR_SPEC,
      4,
      properties.obr_4 || properties.universalServiceId,
      {
        length: { max: 200, min: 1 },
      },
    );
    this._validatorSetField(OBR_SPEC, 5, properties.obr_5, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(
      OBR_SPEC,
      6,
      properties.obr_6 instanceof Date &&
        !Number.isNaN(properties.obr_6.getTime())
        ? this.setDate(properties.obr_6, this._opt.date)
        : (properties.obr_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      OBR_SPEC,
      7,
      (properties.obr_7 || properties.observationDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.obr_7 || properties.observationDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.obr_7 || properties.observationDateTime) as Date,
            this._opt.date,
          )
        : ((properties.obr_7 || properties.observationDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      OBR_SPEC,
      8,
      (properties.obr_8 || properties.observationEndDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.obr_8 || properties.observationEndDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.obr_8 || properties.observationEndDateTime) as Date,
            this._opt.date,
          )
        : ((properties.obr_8 || properties.observationEndDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      OBR_SPEC,
      9,
      properties.obr_9 || properties.collectionVolume,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(OBR_SPEC, 10, properties.obr_10, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 11, properties.obr_11, { length: 1 });
    this._validatorSetField(OBR_SPEC, 12, properties.obr_12, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 13, properties.obr_13, {
      length: { max: 300, min: 1 },
    });
    this._validatorSetField(
      OBR_SPEC,
      14,
      properties.obr_14 instanceof Date &&
        !Number.isNaN(properties.obr_14.getTime())
        ? this.setDate(properties.obr_14, this._opt.date)
        : (properties.obr_14 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      OBR_SPEC,
      15,
      properties.obr_15 || properties.specimenSource,
      {
        length: { max: 300, min: 1 },
      },
    );
    this._validatorSetField(
      OBR_SPEC,
      16,
      properties.obr_16 || properties.orderingProvider,
      {
        length: { max: 80, min: 1 },
      },
    );
    this._validatorSetField(OBR_SPEC, 17, properties.obr_17, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 18, properties.obr_18, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 19, properties.obr_19, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 20, properties.obr_20, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(OBR_SPEC, 21, properties.obr_21, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      OBR_SPEC,
      22,
      properties.obr_22 instanceof Date &&
        !Number.isNaN(properties.obr_22.getTime())
        ? this.setDate(properties.obr_22, this._opt.date)
        : (properties.obr_22 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(OBR_SPEC, 23, properties.obr_23, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(
      OBR_SPEC,
      24,
      properties.obr_24 || properties.diagnosticServiceSectionId,
      {
        allowedValues: this._table_0074,
        length: { max: 10, min: 1 },
      },
    );
    this._validatorSetField(
      OBR_SPEC,
      25,
      properties.obr_25 || properties.resultStatus,
      {
        allowedValues: this._table_0123,
        length: 1,
      },
    );
  }

  protected _buildOBX(properties: Partial<HL7_2_1_OBX>) {
    this._assertSegmentInVersion(OBX_SPEC);
    this._segment = this._message.addSegment("OBX");

    this._validatorSetField(OBX_SPEC, 1, properties.obx_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      OBX_SPEC,
      2,
      properties.obx_2 || properties.valueType,
      {
        allowedValues: this._table_0125,
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      OBX_SPEC,
      3,
      properties.obx_3 || properties.observationIdentifier,
      {
        length: { max: 80, min: 1 },
      },
    );
    this._validatorSetField(
      OBX_SPEC,
      4,
      properties.obx_4 || properties.observationSubId,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      OBX_SPEC,
      5,
      properties.obx_5 || properties.observationValue,
      {
        length: { max: 65_536, min: 1 },
      },
    );
    this._validatorSetField(OBX_SPEC, 6, properties.obx_6 || properties.units, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      OBX_SPEC,
      7,
      properties.obx_7 || properties.referencesRange,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      OBX_SPEC,
      8,
      properties.obx_8 || properties.abnormalFlags,
      {
        allowedValues: this._table_0078,
        length: { max: 5, min: 1 },
      },
    );
    this._validatorSetField(OBX_SPEC, 9, properties.obx_9, {
      length: { max: 5, min: 1 },
    });
    this._validatorSetField(OBX_SPEC, 10, properties.obx_10, { length: 2 });
    this._validatorSetField(
      OBX_SPEC,
      11,
      properties.obx_11 || properties.observationResultStatus,
      {
        allowedValues: this._table_0085,
        length: 1,
      },
    );
  }

  protected _buildORC(properties: Partial<HL7_2_1_ORC>) {
    this._assertSegmentInVersion(ORC_SPEC);
    this._segment = this._message.addSegment("ORC");

    this._validatorSetField(
      ORC_SPEC,
      1,
      properties.orc_1 || properties.orderControl,
      {
        allowedValues: this._table_0119,
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      ORC_SPEC,
      2,
      properties.orc_2 || properties.placerOrderNumber,
      {
        length: { max: 75, min: 1 },
      },
    );
    this._validatorSetField(
      ORC_SPEC,
      3,
      properties.orc_3 || properties.fillerOrderNumber,
      {
        length: { max: 75, min: 1 },
      },
    );
    this._validatorSetField(ORC_SPEC, 4, properties.orc_4, {
      length: { max: 75, min: 1 },
    });
    this._validatorSetField(
      ORC_SPEC,
      5,
      properties.orc_5 || properties.orderStatus,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      ORC_SPEC,
      6,
      properties.orc_6 || properties.responseFlag,
      {
        allowedValues: this._table_0121,
        length: 1,
      },
    );
    this._validatorSetField(ORC_SPEC, 7, properties.orc_7, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(ORC_SPEC, 8, properties.orc_8, {
      length: { max: 200, min: 1 },
    });
    this._validatorSetField(
      ORC_SPEC,
      9,
      (properties.orc_9 || properties.transactionDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.orc_9 || properties.transactionDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.orc_9 || properties.transactionDateTime) as Date,
            this._opt.date,
          )
        : ((properties.orc_9 || properties.transactionDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      ORC_SPEC,
      10,
      properties.orc_10 || properties.enteredBy,
      {
        length: { max: 80, min: 1 },
      },
    );
    this._validatorSetField(
      ORC_SPEC,
      11,
      properties.orc_11 || properties.verifiedBy,
      {
        length: { max: 80, min: 1 },
      },
    );
    this._validatorSetField(
      ORC_SPEC,
      12,
      properties.orc_12 || properties.orderingProvider,
      {
        length: { max: 80, min: 1 },
      },
    );
    this._validatorSetField(ORC_SPEC, 13, properties.orc_13, {
      length: { max: 80, min: 1 },
    });
    this._validatorSetField(
      ORC_SPEC,
      14,
      properties.orc_14 || properties.callBackPhoneNumber,
      {
        length: { max: 40, min: 1 },
      },
    );
  }

  protected _buildPID(properties: Partial<HL7_2_1_PID>) {
    this._assertSegmentInVersion(PID_SPEC);
    this._segment = this._message.addSegment("PID");

    this._validatorSetField(PID_SPEC, 1, properties.pid_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      PID_SPEC,
      2,
      properties.pid_2 || properties.patientIdExternal,
      {
        length: { max: 16, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      3,
      properties.pid_3 || properties.patientIdInternal,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      4,
      properties.pid_4 || properties.alternatePatientId,
      {
        length: { max: 12, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      5,
      properties.pid_5 || properties.patientName,
      {
        length: { max: 48, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      6,
      properties.pid_6 || properties.mothersMaidenName,
      {
        length: { max: 30, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      7,
      (properties.pid_7 || properties.dateOfBirth) instanceof Date &&
        !Number.isNaN(
          ((properties.pid_7 || properties.dateOfBirth) as Date).getTime(),
        )
        ? this.setDate(
            (properties.pid_7 || properties.dateOfBirth) as Date,
            this._opt.date,
          )
        : ((properties.pid_7 || properties.dateOfBirth) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PID_SPEC, 8, properties.pid_8 || properties.sex, {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetField(
      PID_SPEC,
      9,
      properties.pid_9 || properties.patientAlias,
      {
        length: { max: 48, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      10,
      properties.pid_10 || properties.race,
      {
        length: { max: 1, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      11,
      properties.pid_11 || properties.patientAddress,
      {
        length: { max: 106, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      12,
      properties.pid_12 || properties.countyCode,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      13,
      properties.pid_13 || properties.phoneNumberHome,
      {
        length: { max: 40, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      14,
      properties.pid_14 || properties.phoneNumberBusiness,
      {
        length: { max: 40, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      15,
      properties.pid_15 || properties.language,
      {
        length: { max: 25, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      16,
      properties.pid_16 || properties.maritalStatus,
      {
        allowedValues: this._table_0002,
        length: 1,
      },
    );
    this._validatorSetField(
      PID_SPEC,
      17,
      properties.pid_17 || properties.religion,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      PID_SPEC,
      18,
      properties.pid_18 || properties.patientAccountNumber,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(PID_SPEC, 19, properties.pid_19 || properties.ssn, {
      length: { max: 16, min: 1 },
    });
  }

  protected _buildPR1(properties: Partial<HL7_2_1_PR1>) {
    this._assertSegmentInVersion(PR1_SPEC);
    this._segment = this._message.addSegment("PR1");

    this._validatorSetField(PR1_SPEC, 1, properties.pr1_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      PR1_SPEC,
      2,
      properties.pr1_2 || properties.procedureCodingMethod,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      3,
      properties.pr1_3 || properties.procedureCode,
      {
        length: { max: 10, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      4,
      properties.pr1_4 || properties.procedureDescription,
      {
        length: { max: 40, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      5,
      (properties.pr1_5 || properties.procedureDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.pr1_5 || properties.procedureDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.pr1_5 || properties.procedureDateTime) as Date,
            this._opt.date,
          )
        : ((properties.pr1_5 || properties.procedureDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PR1_SPEC,
      6,
      properties.pr1_6 || properties.procedureType,
      {
        length: 2,
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      7,
      properties.pr1_7 || properties.procedureMinutes,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      8,
      properties.pr1_8 || properties.anesthesiologist,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      9,
      properties.pr1_9 || properties.anesthesiaCode,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      10,
      properties.pr1_10 || properties.anesthesiaMinutes,
      {
        length: { max: 4, min: 1 },
      },
    );
    this._validatorSetField(
      PR1_SPEC,
      11,
      properties.pr1_11 || properties.surgeon,
      {
        length: { max: 60, min: 1 },
      },
    );
  }

  protected _buildPV1(properties: Partial<HL7_2_1_PV1>) {
    this._assertSegmentInVersion(PV1_SPEC);
    this._segment = this._message.addSegment("PV1");

    this._validatorSetField(PV1_SPEC, 1, properties.pv1_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      PV1_SPEC,
      2,
      properties.pv1_2 || properties.patientClass,
      {
        allowedValues: this._table_0004,
        length: 1,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      3,
      properties.pv1_3 || properties.assignedPatientLocation,
      { length: { max: 12, min: 1 } },
    );
    this._validatorSetField(
      PV1_SPEC,
      4,
      properties.pv1_4 || properties.admissionType,
      {
        allowedValues: this._table_0007,
        length: 1,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      5,
      properties.pv1_5 || properties.preadmitNumber,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      6,
      properties.pv1_6 || properties.priorPatientLocation,
      {
        length: { max: 12, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      7,
      properties.pv1_7 || properties.attendingDoctor,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      8,
      properties.pv1_8 || properties.referringDoctor,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      9,
      properties.pv1_9 || properties.consultingDoctor,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      10,
      properties.pv1_10 || properties.hospitalService,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      11,
      properties.pv1_11 || properties.temporaryLocation,
      {
        length: { max: 12, min: 1 },
      },
    );
    this._validatorSetField(PV1_SPEC, 12, properties.pv1_12, { length: 2 });
    this._validatorSetField(PV1_SPEC, 13, properties.pv1_13, { length: 2 });
    this._validatorSetField(
      PV1_SPEC,
      14,
      properties.pv1_14 || properties.admitSource,
      {
        length: 1,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      15,
      properties.pv1_15 || properties.ambulatoryStatus,
      {
        length: 2,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      16,
      properties.pv1_16 || properties.vipIndicator,
      {
        length: 2,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      17,
      properties.pv1_17 || properties.admittingDoctor,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      18,
      properties.pv1_18 || properties.patientType,
      {
        length: 2,
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      19,
      properties.pv1_19 || properties.visitNumber,
      {
        length: { max: 15, min: 1 },
      },
    );
    this._validatorSetField(
      PV1_SPEC,
      20,
      properties.pv1_20 || properties.financialClass,
      {
        length: { max: 50, min: 1 },
      },
    );
    this._validatorSetField(PV1_SPEC, 21, properties.pv1_21, { length: 2 });
    this._validatorSetField(PV1_SPEC, 22, properties.pv1_22, { length: 2 });
    this._validatorSetField(PV1_SPEC, 23, properties.pv1_23, { length: 2 });
    this._validatorSetField(PV1_SPEC, 24, properties.pv1_24, { length: 2 });
    this._validatorSetField(
      PV1_SPEC,
      25,
      properties.pv1_25 instanceof Date &&
        !Number.isNaN((properties.pv1_25 as Date).getTime())
        ? this.setDate(properties.pv1_25 as Date, "8")
        : (properties.pv1_25 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PV1_SPEC, 26, properties.pv1_26, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 27, properties.pv1_27, {
      length: { max: 3, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 28, properties.pv1_28, { length: 2 });
    this._validatorSetField(PV1_SPEC, 29, properties.pv1_29, { length: 4 });
    this._validatorSetField(
      PV1_SPEC,
      30,
      properties.pv1_30 instanceof Date &&
        !Number.isNaN((properties.pv1_30 as Date).getTime())
        ? this.setDate(properties.pv1_30 as Date, "8")
        : (properties.pv1_30 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(PV1_SPEC, 31, properties.pv1_31, {
      length: { max: 10, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 32, properties.pv1_32, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 33, properties.pv1_33, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 34, properties.pv1_34, { length: 3 });
    this._validatorSetField(
      PV1_SPEC,
      35,
      properties.pv1_35 instanceof Date &&
        !Number.isNaN((properties.pv1_35 as Date).getTime())
        ? this.setDate(properties.pv1_35 as Date, "8")
        : (properties.pv1_35 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      PV1_SPEC,
      36,
      properties.pv1_36 || properties.dischargeDisposition,
      {
        length: 3,
      },
    );
    this._validatorSetField(PV1_SPEC, 37, properties.pv1_37, {
      length: { max: 25, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 38, properties.pv1_38, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 39, properties.pv1_39, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(
      PV1_SPEC,
      40,
      properties.pv1_40 || properties.bedStatus,
      {
        allowedValues: this._table_0116,
        length: 1,
      },
    );
    this._validatorSetField(PV1_SPEC, 41, properties.pv1_41, {
      length: { max: 2, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 42, properties.pv1_42, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(PV1_SPEC, 43, properties.pv1_43, {
      length: { max: 12, min: 1 },
    });
    this._validatorSetField(
      PV1_SPEC,
      44,
      (properties.pv1_44 || properties.admitDateTime) instanceof Date &&
        !Number.isNaN(
          ((properties.pv1_44 || properties.admitDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (properties.pv1_44 || properties.admitDateTime) as Date,
            this._opt.date,
          )
        : ((properties.pv1_44 || properties.admitDateTime) ?? ""),
      { type: "date" },
    );
  }

  protected _buildQRD(properties: Partial<HL7_2_1_QRD>) {
    this._assertSegmentInVersion(QRD_SPEC);
    this._segment = this._message.addSegment("QRD");

    this._validatorSetField(
      QRD_SPEC,
      1,
      (properties.qrd_1 || properties.queryDateTime) instanceof Date &&
        !Number.isNaN(
          ((properties.qrd_1 || properties.queryDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (properties.qrd_1 || properties.queryDateTime) as Date,
            this._opt.date,
          )
        : ((properties.qrd_1 || properties.queryDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      QRD_SPEC,
      2,
      properties.qrd_2 || properties.queryFormatCode,
      {
        length: 1,
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      3,
      properties.qrd_3 || properties.queryPriority,
      {
        length: 1,
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      4,
      properties.qrd_4 || properties.queryId,
      {
        length: { max: 10, min: 1 },
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      5,
      properties.qrd_5 || properties.deferredResponseType,
      { length: 1 },
    );
    this._validatorSetField(
      QRD_SPEC,
      6,
      properties.qrd_6 instanceof Date &&
        !Number.isNaN((properties.qrd_6 as Date).getTime())
        ? this.setDate(properties.qrd_6 as Date, this._opt.date)
        : (properties.qrd_6 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      QRD_SPEC,
      7,
      properties.qrd_7 || properties.quantityLimitedRequest,
      {
        length: { max: 10, min: 1 },
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      8,
      properties.qrd_8 || properties.whoSubjectFilter,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      9,
      properties.qrd_9 || properties.whatSubjectFilter,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      QRD_SPEC,
      10,
      properties.qrd_10 || properties.whatDepartmentDataCode,
      { length: { max: 20, min: 1 } },
    );
  }

  protected _buildQRF(properties: Partial<HL7_2_1_QRF>) {
    this._assertSegmentInVersion(QRF_SPEC);
    this._segment = this._message.addSegment("QRF");

    this._validatorSetField(
      QRF_SPEC,
      1,
      properties.qrf_1 || properties.whereSubjectFilter,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      QRF_SPEC,
      2,
      (properties.qrf_2 || properties.whenDataStartDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.qrf_2 || properties.whenDataStartDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.qrf_2 || properties.whenDataStartDateTime) as Date,
            this._opt.date,
          )
        : ((properties.qrf_2 || properties.whenDataStartDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      QRF_SPEC,
      3,
      (properties.qrf_3 || properties.whenDataEndDateTime) instanceof Date &&
        !Number.isNaN(
          (
            (properties.qrf_3 || properties.whenDataEndDateTime) as Date
          ).getTime(),
        )
        ? this.setDate(
            (properties.qrf_3 || properties.whenDataEndDateTime) as Date,
            this._opt.date,
          )
        : ((properties.qrf_3 || properties.whenDataEndDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      QRF_SPEC,
      4,
      properties.qrf_4 || properties.whatUserQualifier,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      QRF_SPEC,
      5,
      properties.qrf_5 || properties.otherQrySubjectFilter,
      { length: { max: 20, min: 1 } },
    );
  }

  protected _buildRX1(properties: Partial<HL7_2_1_RX1>) {
    this._assertSegmentInVersion(RX1_SPEC);
    this._segment = this._message.addSegment("RX1");

    this._validatorSetField(RX1_SPEC, 1, properties.rx1_1, {
      length: { max: 40, min: 1 },
    });
    this._validatorSetField(
      RX1_SPEC,
      2,
      properties.rx1_2 || properties.giveCode,
      {
        length: { max: 100, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      3,
      properties.rx1_3 || properties.giveAmountMinimum,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      4,
      properties.rx1_4 || properties.giveAmountMaximum,
      { length: { max: 20, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      5,
      properties.rx1_5 || properties.giveUnits,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      6,
      properties.rx1_6 || properties.giveDosageForm,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      7,
      properties.rx1_7 || properties.providersPharmacyInstructions,
      { length: { max: 200, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      8,
      properties.rx1_8 || properties.providersAdministrationInstructions,
      { length: { max: 200, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      9,
      properties.rx1_9 || properties.deliverToLocation,
      {
        length: { max: 200, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      10,
      properties.rx1_10 || properties.allowSubstitutions,
      {
        length: { max: 1, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      11,
      properties.rx1_11 || properties.requestedGiveCode,
      {
        length: { max: 100, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      12,
      properties.rx1_12 || properties.requestedGiveAmountMinimum,
      { length: { max: 20, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      13,
      properties.rx1_13 || properties.requestedGiveAmountMaximum,
      { length: { max: 20, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      14,
      properties.rx1_14 || properties.requestedGiveUnits,
      { length: { max: 60, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      15,
      properties.rx1_15 || properties.requestedDosageForm,
      { length: { max: 60, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      16,
      properties.rx1_16 || properties.pharmacistSpecialDispensingInstructions,
      { length: { max: 200, min: 1 } },
    );
    this._validatorSetField(
      RX1_SPEC,
      17,
      properties.rx1_17 || properties.givePer,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      18,
      properties.rx1_18 || properties.giveRateAmount,
      {
        length: { max: 6, min: 1 },
      },
    );
    this._validatorSetField(
      RX1_SPEC,
      19,
      properties.rx1_19 || properties.giveRateUnits,
      {
        length: { max: 60, min: 1 },
      },
    );
    this._validatorSetField(RX1_SPEC, 20, properties.rx1_20, {
      length: { max: 6, min: 1 },
    });
    this._validatorSetField(RX1_SPEC, 21, properties.rx1_21, {
      length: { max: 60, min: 1 },
    });
    this._validatorSetField(
      RX1_SPEC,
      22,
      properties.rx1_22 || properties.totalDailyDose,
      {
        length: { max: 10, min: 1 },
      },
    );
  }

  protected _buildUB1(properties: Partial<HL7_2_1_UB1>) {
    this._assertSegmentInVersion(UB1_SPEC);
    this._segment = this._message.addSegment("UB1");

    this._validatorSetField(UB1_SPEC, 1, properties.ub1_1, {
      length: { max: 4, min: 1 },
    });
    this._validatorSetField(
      UB1_SPEC,
      2,
      properties.ub1_2 || properties.bloodDeductible,
      {
        length: { max: 1, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      3,
      properties.ub1_3 || properties.bloodFurnishedPints,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      4,
      properties.ub1_4 || properties.bloodReplacedPints,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      5,
      properties.ub1_5 || properties.bloodNotReplacedPints,
      { length: { max: 2, min: 1 } },
    );
    this._validatorSetField(
      UB1_SPEC,
      6,
      properties.ub1_6 || properties.coInsuranceDays,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      7,
      properties.ub1_7 || properties.conditionCode,
      {
        length: { max: 14, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      8,
      properties.ub1_8 || properties.coveredDays,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      9,
      properties.ub1_9 || properties.nonCoveredDays,
      {
        length: { max: 3, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      10,
      properties.ub1_10 || properties.valueAmountCode,
      {
        length: { max: 55, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      11,
      properties.ub1_11 || properties.numberOfGraceDays,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      12,
      properties.ub1_12 || properties.specialProgramIndicator,
      { length: { max: 2, min: 1 } },
    );
    this._validatorSetField(UB1_SPEC, 13, properties.ub1_13, { length: 2 });
    this._validatorSetField(
      UB1_SPEC,
      14,
      properties.ub1_14 instanceof Date &&
        !Number.isNaN(properties.ub1_14.getTime())
        ? this.setDate(properties.ub1_14, "8")
        : (properties.ub1_14 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      UB1_SPEC,
      15,
      properties.ub1_15 instanceof Date &&
        !Number.isNaN(properties.ub1_15.getTime())
        ? this.setDate(properties.ub1_15, "8")
        : (properties.ub1_15 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      UB1_SPEC,
      16,
      properties.ub1_16 || properties.occurrence,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      17,
      properties.ub1_17 || properties.occurrenceSpan,
      {
        length: { max: 2, min: 1 },
      },
    );
    this._validatorSetField(
      UB1_SPEC,
      18,
      properties.ub1_18 instanceof Date &&
        !Number.isNaN(properties.ub1_18.getTime())
        ? this.setDate(properties.ub1_18, "8")
        : (properties.ub1_18 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      UB1_SPEC,
      19,
      properties.ub1_19 instanceof Date &&
        !Number.isNaN(properties.ub1_19.getTime())
        ? this.setDate(properties.ub1_19, "8")
        : (properties.ub1_19 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(UB1_SPEC, 20, properties.ub1_20, {
      length: { max: 30, min: 1 },
    });
    this._validatorSetField(UB1_SPEC, 21, properties.ub1_21, {
      length: { max: 7, min: 1 },
    });
    this._validatorSetField(UB1_SPEC, 22, properties.ub1_22, {
      length: { max: 8, min: 1 },
    });
    this._validatorSetField(UB1_SPEC, 23, properties.ub1_23, {
      length: { max: 17, min: 1 },
    });
  }

  protected _buildURD(properties: Partial<HL7_2_1_URD>) {
    this._assertSegmentInVersion(URD_SPEC);
    this._segment = this._message.addSegment("URD");

    this._validatorSetField(
      URD_SPEC,
      1,
      (properties.urd_1 || properties.ruDateTime) instanceof Date &&
        !Number.isNaN(
          ((properties.urd_1 || properties.ruDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (properties.urd_1 || properties.ruDateTime) as Date,
            this._opt.date,
          )
        : ((properties.urd_1 || properties.ruDateTime) ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      URD_SPEC,
      2,
      properties.urd_2 || properties.reportPriority,
      {
        length: 1,
      },
    );
    this._validatorSetField(
      URD_SPEC,
      3,
      properties.urd_3 || properties.ruWhoSubjectDefinition,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      URD_SPEC,
      4,
      properties.urd_4 || properties.ruWhatSubjectDefinition,
      { length: { max: 3, min: 1 } },
    );
  }

  protected _buildURS(properties: Partial<HL7_2_1_URS>) {
    this._assertSegmentInVersion(URS_SPEC);
    this._segment = this._message.addSegment("URS");

    this._validatorSetField(
      URS_SPEC,
      1,
      properties.urs_1 || properties.ruWhereSubjectDefinition,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(
      URS_SPEC,
      2,
      properties.urs_2 instanceof Date &&
        !Number.isNaN((properties.urs_2 as Date).getTime())
        ? this.setDate(properties.urs_2 as Date, this._opt.date)
        : (properties.urs_2 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      URS_SPEC,
      3,
      properties.urs_3 instanceof Date &&
        !Number.isNaN((properties.urs_3 as Date).getTime())
        ? this.setDate(properties.urs_3 as Date, this._opt.date)
        : (properties.urs_3 ?? ""),
      { type: "date" },
    );
    this._validatorSetField(
      URS_SPEC,
      4,
      properties.urs_4 || properties.ruWhatUserQualifier,
      {
        length: { max: 20, min: 1 },
      },
    );
    this._validatorSetField(URS_SPEC, 5, properties.urs_5, {
      length: { max: 20, min: 1 },
    });
    this._validatorSetField(URS_SPEC, 6, properties.urs_6, {
      length: { max: 12, min: 1 },
    });
  }
}
