import { HL7ValidationError } from "@/helpers/exception";
import { HL7_2_1_GT1 } from "@/hl7/2.1/gt1";
import { HL7_2_1_IN1 } from "@/hl7/2.1/in1";
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
  protected _table_0100: string[];
  protected _table_0076: string[];
  protected _table_0003: string[];
  protected _table_0062: string[];
  protected _table_0001: string[];
  protected _table_0002: string[];
  protected _table_0004: string[];
  protected _table_0007: string[];
  protected _table_0008: string[];
  protected _table_0074: string[];
  protected _table_0078: string[];
  protected _table_0085: string[];
  protected _table_0116: string[];
  protected _table_0119: string[];
  protected _table_0121: string[];
  protected _table_0123: string[];
  protected _table_0125: string[];
  /**
   *
   * @param props
   */
  constructor(props?: ClientBuilderOptions_Hl7_2_1) {
    super(props);
    this.version = "2.1";
    this._maxAddSegmentLength = 60;

    this._table_0001 = props?.table_0001 || TABLE_0001;
    this._table_0002 = props?.table_0002 || TABLE_0002;
    this._table_0003 = props?.table_0003 || TABLE_0003;
    this._table_0004 = props?.table_0004 || TABLE_0004;
    this._table_0007 = props?.table_0007 || TABLE_0007;
    this._table_0008 = props?.table_0008 || TABLE_0008;
    this._table_0062 = props?.table_0062 || TABLE_0062;
    this._table_0074 = props?.table_0074 || TABLE_0074;
    this._table_0076 = props?.table_0076 || TABLE_0076;
    this._table_0078 = props?.table_0078 || TABLE_0078;
    this._table_0085 = props?.table_0085 || TABLE_0085;
    this._table_0100 = props?.table_0100 || TABLE_0100;
    this._table_0116 = props?.table_0116 || TABLE_0116;
    this._table_0119 = props?.table_0119 || TABLE_0119;
    this._table_0121 = props?.table_0121 || TABLE_0121;
    this._table_0123 = props?.table_0123 || TABLE_0123;
    this._table_0125 = props?.table_0125 || TABLE_0125;
  }

  /**
   * Build ACC Segment
   * @param props
   */
  protected _buildACC(props: Partial<HL7_2_1_ACC>) {
    this._assertSegmentInVersion(ACC_SPEC);
    this._segment = this._message.addSegment("ACC");

    this._validatorSetField(
      ACC_SPEC,
    1,
    (props.acc_1 instanceof Date && !isNaN(props.acc_1.getTime())) ||
        (props.timeStamp instanceof Date && !isNaN(props.timeStamp.getTime()))
        ? this.setDate(props.acc_1 || props.timeStamp, this._opt.date)
        : "",
    {
        type: "date",
        length: { min: 8, max: 19 },
      }
    );

    this._validatorSetField(ACC_SPEC,
    2,
    props.acc_2 || props.accidentCode,
    {
      length: 2,
    });

    this._validatorSetField(ACC_SPEC,
    3,
    props.acc_3 || props.accidentLocation,
    {
      length: { min: 1, max: 25 },
    });
  }

  /**
   *
   * @param props
   * @protected
   */
  protected _buildBLG(props: Partial<HL7_2_1_BLG>) {
    this._assertSegmentInVersion(BLG_SPEC);
    this._segment = this._message.addSegment("BLG");

    // see https://hl7-definition.caristix.com/v2/HL7v2.1/Tables/0100
    this._validatorSetField(BLG_SPEC,
    1,
    props.blg_1 || props.billingWhenToCharge,
    {
      length: { min: 1, max: 15 },
      allowedValues: this._table_0100,
    });

    this._validatorSetField(BLG_SPEC,
    2,
    props.blg_2 || props.billingChargeType,
    {
      length: 2,
    });

    this._validatorSetField(BLG_SPEC,
    3,
    props.blg_3 || props.billingAccountId,
    {
      length: { min: 1, max: 25 },
    });
  }

  /**
   *
   * @param props
   * @protected
   */
  protected _buildDG1(props: Partial<HL7_2_1_DG1>): void {
    this._assertSegmentInVersion(DG1_SPEC);
    this._segment = this._message.addSegment("DG1");

    this._validatorSetField(DG1_SPEC,
    1,
    props.dg1_1 || props.diagnosisId,
    {
            length: { min: 1, max: 4 },
    });
    this._validatorSetField(DG1_SPEC,
    2,
    props.dg1_2 || props.diagnosisCodingMethod,
    {
            length: { min: 1, max: 2 },
    });
    this._validatorSetField(DG1_SPEC,
    3,
    props.dg1_3 || props.diagnosisCode,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(DG1_SPEC,
    4,
    props.dg1_4 || props.diagnosisDescription,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(
      DG1_SPEC,
    5,
    (props.dg1_5 instanceof Date && !isNaN(props.dg1_5.getTime())) ||
        (props.timeStamp instanceof Date && !isNaN(props.timeStamp.getTime()))
        ? this.setDate(props.dg1_5 || props.timeStamp, this._opt.date)
        : "",
    { length: { min: 1, max: 19 } }
    );
    this._validatorSetField(DG1_SPEC,
    6,
    props.dg1_6 || props.diagnosisType,
    {
            length: { min: 1, max: 2 },
    });
    this._validatorSetField(DG1_SPEC,
    7,
    props.dg1_7 || props.diagnosisMajorCategory,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(DG1_SPEC,
    8,
    props.dg1_8 || props.diagnosisRelatedGroup,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(
      DG1_SPEC,
    9,
    props.dg1_9 || props.diagnosisApprovalIndicator,
    {
        length: { min: 1, max: 2 },
      }
    );
    this._validatorSetField(
      DG1_SPEC,
    10,
    props.dg1_10 || props.diagnosisGrouperReviewCode,
    {
        length: { min: 1, max: 2 },
      }
    );
    this._validatorSetField(DG1_SPEC,
    11,
    props.dg1_11 || props.diagnosisOutlierType,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(DG1_SPEC,
    12,
    props.dg1_12 || props.diagnosisOutlierDays,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(DG1_SPEC,
    13,
    props.dg1_13 || props.diagnosisOutlierCost,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(
      DG1_SPEC,
    14,
    props.dg1_14 || props.diagnosisGrouperVersionAndType,
    {
        length: { min: 1, max: 4 },
      }
    );
  }

  protected _buildDSC(props: Partial<HL7_2_1_DSC>): void {
    this._assertSegmentInVersion(DSC_SPEC);
    this._segment = this._message.addSegment("DSC");

    this._validatorSetField(DSC_SPEC,
    1,
    props.dsc_1 || props.continuationPointer,
    {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildERR(props: Partial<HL7_2_1_ERR>) {
    this._assertSegmentInVersion(ERR_SPEC);
    this._segment = this._message.addSegment("ERR");

    this._validatorSetField(ERR_SPEC,
    1,
    props.err_1 || props.errorIdAndLocation,
    {
            length: { min: 1, max: 80 },
    });
  }

  protected _buildEVN(props: Partial<HL7_2_1_EVN>) {
    this._assertSegmentInVersion(EVN_SPEC);
    this._segment = this._message.addSegment("EVN");

    this._validatorSetField(EVN_SPEC,
    1,
    props.evn_1,
    {
      allowedValues: this._table_0003,
          });

    this._validatorSetField(
      EVN_SPEC,
    2,
    props.evn_2 instanceof Date && !isNaN(props.evn_2.getTime())
        ? this.setDate(props.evn_2, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
    {
                type: "date",
      }
    );

    this._validatorSetField(
      EVN_SPEC,
    3,
    props.evn_3 instanceof Date && !isNaN(props.evn_3.getTime())
        ? this.setDate(props.evn_3, this._opt.date)
        : "",
    {
        type: "date",
      }
    );

    this._validatorSetField(EVN_SPEC,
    4,
    props.evn_4,
    {
      allowedValues: this._table_0062,
    });
  }

  protected _buildFT1(props: Partial<HL7_2_1_FT1>) {
    this._assertSegmentInVersion(FT1_SPEC);
    this._segment = this._message.addSegment("FT1");

    this._validatorSetField(FT1_SPEC,
    1,
    props.ft1_1,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(FT1_SPEC,
    2,
    props.ft1_2,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(FT1_SPEC,
    3,
    props.ft1_3,
    {
      length: { min: 1, max: 5 },
    });
    this._validatorSetField(
      FT1_SPEC,
    4,
    props.ft1_4 instanceof Date && !isNaN(props.ft1_4.getTime())
        ? this.setDate(props.ft1_4, "8")
        : this.setDate(new Date(), "8"),
    { type: "date" }
    );
    this._validatorSetField(
      FT1_SPEC,
    5,
    props.ft1_5 instanceof Date && !isNaN(props.ft1_5.getTime())
        ? this.setDate(props.ft1_5, "8")
        : "",
    { type: "date" }
    );
    this._validatorSetField(FT1_SPEC,
    6,
    props.ft1_6,
    {
            length: { min: 1, max: 8 },
    });
    this._validatorSetField(FT1_SPEC,
    7,
    props.ft1_7,
    {
            length: { min: 1, max: 20 },
    });
    this._validatorSetField(FT1_SPEC,
    8,
    props.ft1_8,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(FT1_SPEC,
    9,
    props.ft1_9,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(FT1_SPEC,
    10,
    props.ft1_10,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(FT1_SPEC,
    11,
    props.ft1_11,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(FT1_SPEC,
    12,
    props.ft1_12,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(FT1_SPEC,
    13,
    props.ft1_13,
    {
      length: { min: 1, max: 16 },
    });
    this._validatorSetField(FT1_SPEC,
    14,
    props.ft1_14,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(FT1_SPEC,
    15,
    props.ft1_15,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(FT1_SPEC,
    16,
    props.ft1_16,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(FT1_SPEC,
    17,
    props.ft1_17,
    { length: 1 });
    this._validatorSetField(FT1_SPEC,
    18,
    props.ft1_18,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(FT1_SPEC,
    19,
    props.ft1_19,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(FT1_SPEC,
    20,
    props.ft1_20,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(FT1_SPEC,
    21,
    props.ft1_21,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(FT1_SPEC,
    22,
    props.ft1_22,
    {
      length: { min: 1, max: 12 },
    });
  }

  protected _buildGT1(props: Partial<HL7_2_1_GT1>) {
    this._assertSegmentInVersion(GT1_SPEC);
    this._segment = this._message.addSegment("GT1");

    this._validatorSetField(GT1_SPEC,
    1,
    props.gt1_1,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(GT1_SPEC,
    2,
    props.gt1_2,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(GT1_SPEC,
    3,
    props.gt1_3,
    {
            length: { min: 1, max: 5 },
    });
    this._validatorSetField(GT1_SPEC,
    4,
    props.gt1_4);
    this._validatorSetField(GT1_SPEC,
    5,
    props.gt1_5);
    this._validatorSetField(GT1_SPEC,
    6,
    props.gt1_6,
    {
            length: { min: 1, max: 8 },
    });
    this._validatorSetField(GT1_SPEC,
    7,
    props.gt1_7,
    {
            length: { min: 1, max: 20 },
    });
    this._validatorSetField(GT1_SPEC,
    8,
    props.gt1_8,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(GT1_SPEC,
    9,
    props.gt1_9,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(GT1_SPEC,
    10,
    props.gt1_10,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(GT1_SPEC,
    11,
    props.gt1_11,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(GT1_SPEC,
    12,
    props.gt1_12,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(GT1_SPEC,
    13,
    props.gt1_13,
    {
      length: { min: 1, max: 16 },
    });
    this._validatorSetField(GT1_SPEC,
    14,
    props.gt1_14,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(GT1_SPEC,
    15,
    props.gt1_15,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(GT1_SPEC,
    16,
    props.gt1_16,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(GT1_SPEC,
    17,
    props.gt1_17,
    { length: 1 });
    this._validatorSetField(GT1_SPEC,
    18,
    props.gt1_18,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(GT1_SPEC,
    19,
    props.gt1_19,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(GT1_SPEC,
    20,
    props.gt1_20,
    {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildIN1(props: Partial<HL7_2_1_IN1>) {
    this._assertSegmentInVersion(IN1_SPEC);
    this._segment = this._message.addSegment("IN1");

    this._validatorSetField(IN1_SPEC,
    1,
    props.in1_1);
    this._validatorSetField(IN1_SPEC,
    2,
    props.in1_2);
    this._validatorSetField(IN1_SPEC,
    3,
    props.in1_3);
    this._validatorSetField(IN1_SPEC,
    4,
    props.in1_4);
    this._validatorSetField(IN1_SPEC,
    5,
    props.in1_5);
    this._validatorSetField(IN1_SPEC,
    6,
    props.in1_6);
    this._validatorSetField(IN1_SPEC,
    7,
    props.in1_7);
    this._validatorSetField(IN1_SPEC,
    8,
    props.in1_8);
    this._validatorSetField(IN1_SPEC,
    9,
    props.in1_9);
    this._validatorSetField(IN1_SPEC,
    10,
    props.in1_10);
    this._validatorSetField(IN1_SPEC,
    11,
    props.in1_11);
    this._validatorSetField(IN1_SPEC,
    12,
    props.in1_12);
    this._validatorSetField(IN1_SPEC,
    13,
    props.in1_13);
    this._validatorSetField(IN1_SPEC,
    14,
    props.in1_14);
    this._validatorSetField(IN1_SPEC,
    15,
    props.in1_15);
    this._validatorSetField(IN1_SPEC,
    16,
    props.in1_16);
    this._validatorSetField(IN1_SPEC,
    17,
    props.in1_17);
    this._validatorSetField(IN1_SPEC,
    18,
    props.in1_18);
    this._validatorSetField(IN1_SPEC,
    19,
    props.in1_19);
    this._validatorSetField(IN1_SPEC,
    20,
    props.in1_20);
    this._validatorSetField(IN1_SPEC,
    21,
    props.in1_21);
    this._validatorSetField(IN1_SPEC,
    22,
    props.in1_22);
    this._validatorSetField(IN1_SPEC,
    23,
    props.in1_23);
    this._validatorSetField(IN1_SPEC,
    24,
    props.in1_24);
    this._validatorSetField(IN1_SPEC,
    25,
    props.in1_25);
    this._validatorSetField(IN1_SPEC,
    26,
    props.in1_26);
    this._validatorSetField(IN1_SPEC,
    27,
    props.in1_27);
    this._validatorSetField(IN1_SPEC,
    28,
    props.in1_28);
    this._validatorSetField(IN1_SPEC,
    29,
    props.in1_29);
    this._validatorSetField(IN1_SPEC,
    30,
    props.in1_30);
    this._validatorSetField(IN1_SPEC,
    31,
    props.in1_31);
    this._validatorSetField(IN1_SPEC,
    32,
    props.in1_32);
    this._validatorSetField(IN1_SPEC,
    33,
    props.in1_33);
    this._validatorSetField(IN1_SPEC,
    34,
    props.in1_34);
    this._validatorSetField(IN1_SPEC,
    35,
    props.in1_35);
    this._validatorSetField(IN1_SPEC,
    36,
    props.in1_36);
    this._validatorSetField(IN1_SPEC,
    37,
    props.in1_37);
    this._validatorSetField(IN1_SPEC,
    38,
    props.in1_38);
    this._validatorSetField(IN1_SPEC,
    39,
    props.in1_39);
    this._validatorSetField(IN1_SPEC,
    40,
    props.in1_40);
    this._validatorSetField(IN1_SPEC,
    41,
    props.in1_41);
    this._validatorSetField(IN1_SPEC,
    42,
    props.in1_42);
    this._validatorSetField(IN1_SPEC,
    43,
    props.in1_43,
    {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetField(IN1_SPEC,
    44,
    props.in1_44);
  }

  protected _buildMRG(props: Partial<HL7_2_1_MRG>) {
    this._assertSegmentInVersion(MRG_SPEC);
    this._segment = this._message.addSegment("MRG");

    this._validatorSetField(MRG_SPEC,
    1,
    props.mrg_1,
    {
            length: { min: 1, max: 16 },
    });
    this._validatorSetField(MRG_SPEC,
    2,
    props.mrg_2,
    { length: { min: 1, max: 16 } });
    this._validatorSetField(MRG_SPEC,
    3,
    props.mrg_3,
    { length: { min: 1, max: 20 } });
  }

  protected _buildMSA(props: Partial<HL7_2_1_MSA>) {
    this._assertSegmentInVersion(MSA_SPEC);
    this._segment = this._message.addSegment("MSA");

    this._validatorSetField(MSA_SPEC,
    1,
    props.msa_1,
    {
            allowedValues: this._table_0008,
    });
    this._validatorSetField(MSA_SPEC,
    2,
    props.msa_2);
    this._validatorSetField(MSA_SPEC,
    3,
    props.msa_3);
    this._validatorSetField(MSA_SPEC,
    4,
    props.msa_4);
    this._validatorSetField(MSA_SPEC,
    5,
    props.msa_5);
  }

  /**
   * Build HL7 MSH Segment
   * @since 1.0.0
   * @param props
   */
  protected _buildMSH(props: Partial<HL7_2_1_MSH>): void {
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
        required: true,
        length: 4,
      },
    );

    this._validatorSetValue("3", props.msh_3 || props.sendingApplication, {
      length: { min: 1, max: 15 },
    });

    this._validatorSetValue("4", props.msh_4 || props.sendingFacility, {
      length: { min: 1, max: 20 },
    });

    this._validatorSetValue("5", props.msh_5 || props.receivingApplication, {
      length: { min: 1, max: 15 },
    });

    this._validatorSetValue("6", props.msh_6 || props.receivingFacility, {
      length: { min: 1, max: 30 },
    });

    this._validatorSetValue(
      "7",
      props.msh_7 instanceof Date && !isNaN(props.msh_7.getTime())
        ? this.setDate(props.msh_7, this._opt.date)
        : this.setDate(new Date(), this._opt.date),
      {
        required: true,
        type: "date",
        length: { min: 8, max: 19 },
      },
    );

    this._validatorSetValue("8", props.msh_8, {
      length: { min: 1, max: 40 },
    });

    // review https://hl7-definition.caristix.com/v2/HL7v2.1/Tables/0076 for valid values
    this._validatorSetValue("9", props.msh_9, {
      required: true,
      allowedValues: this._table_0076,
    });

    this._validatorSetValue("10", props.msh_10 || randomString(), {
      length: { min: 1, max: 20 },
    });

    this._validatorSetValue("11", props.msh_11, {
      required: true,
      length: 1,
      allowedValues: ["P", "T"],
    });

    this._validatorSetValue("12", this.version, {
      required: true,
    });
  }

  protected _buildNK1(props: Partial<HL7_2_1_NK1>) {
    this._assertSegmentInVersion(NK1_SPEC);
    this._segment = this._message.addSegment("NK1");

    this._validatorSetField(NK1_SPEC,
    1,
    props.nk1_1);
    this._validatorSetField(NK1_SPEC,
    2,
    props.nk1_2);
    this._validatorSetField(NK1_SPEC,
    3,
    props.nk1_3);
    this._validatorSetField(NK1_SPEC,
    4,
    props.nk1_4);
    this._validatorSetField(NK1_SPEC,
    5,
    props.nk1_5);
  }

  protected _buildNPU(props: Partial<HL7_2_1_NPU>) {
    this._assertSegmentInVersion(NPU_SPEC);
    this._segment = this._message.addSegment("NPU");

    this._validatorSetField(NPU_SPEC,
    1,
    props.npu_1);
    this._validatorSetField(NPU_SPEC,
    2,
    props.npu_2,
    {
      allowedValues: this._table_0116,
    });
  }

  protected _buildNSC(props: Partial<HL7_2_1_NSC>) {
    this._assertSegmentInVersion(NSC_SPEC);
    this._segment = this._message.addSegment("NSC");

    this._validatorSetField(NSC_SPEC,
    1,
    props.nsc_1);
    this._validatorSetField(NSC_SPEC,
    2,
    props.nsc_2);
    this._validatorSetField(NSC_SPEC,
    3,
    props.nsc_3);
    this._validatorSetField(NSC_SPEC,
    4,
    props.nsc_4);
    this._validatorSetField(NSC_SPEC,
    5,
    props.nsc_5);
    this._validatorSetField(NSC_SPEC,
    6,
    props.nsc_6);
    this._validatorSetField(NSC_SPEC,
    7,
    props.nsc_7);
    this._validatorSetField(NSC_SPEC,
    8,
    props.nsc_8);
    this._validatorSetField(NSC_SPEC,
    9,
    props.nsc_9);
  }

  protected _buildNTE(props: Partial<HL7_2_1_NTE>) {
    this._assertSegmentInVersion(NTE_SPEC);
    this._segment = this._message.addSegment("NTE");

    this._validatorSetField(NTE_SPEC,
    1,
    props.nte_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(NTE_SPEC,
    2,
    props.nte_2 || props.sourceOfComment,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(NTE_SPEC,
    3,
    props.nte_3 || props.comment,
    {
      length: { min: 1, max: 65536 },
    });
  }

  protected _buildOBR(props: Partial<HL7_2_1_OBR>) {
    this._assertSegmentInVersion(OBR_SPEC);
    this._segment = this._message.addSegment("OBR");

    this._validatorSetField(OBR_SPEC,
    1,
    props.obr_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OBR_SPEC,
    2,
    props.obr_2 || props.placerOrderNumber,
    {
      length: { min: 1, max: 75 },
    });
    this._validatorSetField(OBR_SPEC,
    3,
    props.obr_3 || props.fillerOrderNumber,
    {
      length: { min: 1, max: 75 },
    });
    this._validatorSetField(OBR_SPEC,
    4,
    props.obr_4 || props.universalServiceId,
    {
            length: { min: 1, max: 200 },
    });
    this._validatorSetField(OBR_SPEC,
    5,
    props.obr_5,
    { length: { min: 1, max: 2 } });
    this._validatorSetField(
      OBR_SPEC,
    6,
    props.obr_6 instanceof Date && !isNaN(props.obr_6.getTime())
        ? this.setDate(props.obr_6, this._opt.date)
        : props.obr_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      OBR_SPEC,
    7,
    (props.obr_7 || props.observationDateTime) instanceof Date &&
        !isNaN(((props.obr_7 || props.observationDateTime) as Date).getTime())
        ? this.setDate(
            (props.obr_7 || props.observationDateTime) as Date,
            this._opt.date,
          )
        : (props.obr_7 || props.observationDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      OBR_SPEC,
    8,
    (props.obr_8 || props.observationEndDateTime) instanceof Date &&
        !isNaN(
          ((props.obr_8 || props.observationEndDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.obr_8 || props.observationEndDateTime) as Date,
            this._opt.date,
          )
        : (props.obr_8 || props.observationEndDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(OBR_SPEC,
    9,
    props.obr_9 || props.collectionVolume,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(OBR_SPEC,
    10,
    props.obr_10,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBR_SPEC,
    11,
    props.obr_11,
    { length: 1 });
    this._validatorSetField(OBR_SPEC,
    12,
    props.obr_12,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBR_SPEC,
    13,
    props.obr_13,
    {
      length: { min: 1, max: 300 },
    });
    this._validatorSetField(
      OBR_SPEC,
    14,
    props.obr_14 instanceof Date && !isNaN(props.obr_14.getTime())
        ? this.setDate(props.obr_14, this._opt.date)
        : props.obr_14 ?? "",
    { type: "date" }
    );
    this._validatorSetField(OBR_SPEC,
    15,
    props.obr_15 || props.specimenSource,
    {
      length: { min: 1, max: 300 },
    });
    this._validatorSetField(OBR_SPEC,
    16,
    props.obr_16 || props.orderingProvider,
    {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(OBR_SPEC,
    17,
    props.obr_17,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(OBR_SPEC,
    18,
    props.obr_18,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBR_SPEC,
    19,
    props.obr_19,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBR_SPEC,
    20,
    props.obr_20,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBR_SPEC,
    21,
    props.obr_21,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(
      OBR_SPEC,
    22,
    props.obr_22 instanceof Date && !isNaN(props.obr_22.getTime())
        ? this.setDate(props.obr_22, this._opt.date)
        : props.obr_22 ?? "",
    { type: "date" }
    );
    this._validatorSetField(OBR_SPEC,
    23,
    props.obr_23,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(
      OBR_SPEC,
    24,
    props.obr_24 || props.diagnosticServiceSectionId,
    {
        allowedValues: this._table_0074,
        length: { min: 1, max: 10 },
      }
    );
    this._validatorSetField(OBR_SPEC,
    25,
    props.obr_25 || props.resultStatus,
    {
      allowedValues: this._table_0123,
      length: 1,
    });
  }

  protected _buildOBX(props: Partial<HL7_2_1_OBX>) {
    this._assertSegmentInVersion(OBX_SPEC);
    this._segment = this._message.addSegment("OBX");

    this._validatorSetField(OBX_SPEC,
    1,
    props.obx_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(OBX_SPEC,
    2,
    props.obx_2 || props.valueType,
    {
      allowedValues: this._table_0125,
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(
      OBX_SPEC,
    3,
    props.obx_3 || props.observationIdentifier,
    {
                length: { min: 1, max: 80 },
      }
    );
    this._validatorSetField(OBX_SPEC,
    4,
    props.obx_4 || props.observationSubId,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(OBX_SPEC,
    5,
    props.obx_5 || props.observationValue,
    {
      length: { min: 1, max: 65536 },
    });
    this._validatorSetField(OBX_SPEC,
    6,
    props.obx_6 || props.units,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBX_SPEC,
    7,
    props.obx_7 || props.referencesRange,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(OBX_SPEC,
    8,
    props.obx_8 || props.abnormalFlags,
    {
      allowedValues: this._table_0078,
      length: { min: 1, max: 5 },
    });
    this._validatorSetField(OBX_SPEC,
    9,
    props.obx_9,
    {
      length: { min: 1, max: 5 },
    });
    this._validatorSetField(OBX_SPEC,
    10,
    props.obx_10,
    { length: 2 });
    this._validatorSetField(
      OBX_SPEC,
    11,
    props.obx_11 || props.observationResultStatus,
    {
                allowedValues: this._table_0085,
        length: 1,
      }
    );
  }

  protected _buildORC(props: Partial<HL7_2_1_ORC>) {
    this._assertSegmentInVersion(ORC_SPEC);
    this._segment = this._message.addSegment("ORC");

    this._validatorSetField(ORC_SPEC,
    1,
    props.orc_1 || props.orderControl,
    {
            allowedValues: this._table_0119,
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(ORC_SPEC,
    2,
    props.orc_2 || props.placerOrderNumber,
    {
      length: { min: 1, max: 75 },
    });
    this._validatorSetField(ORC_SPEC,
    3,
    props.orc_3 || props.fillerOrderNumber,
    {
      length: { min: 1, max: 75 },
    });
    this._validatorSetField(ORC_SPEC,
    4,
    props.orc_4,
    {
      length: { min: 1, max: 75 },
    });
    this._validatorSetField(ORC_SPEC,
    5,
    props.orc_5 || props.orderStatus,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(ORC_SPEC,
    6,
    props.orc_6 || props.responseFlag,
    {
      allowedValues: this._table_0121,
      length: 1,
    });
    this._validatorSetField(ORC_SPEC,
    7,
    props.orc_7,
    {
      length: { min: 1, max: 200 },
    });
    this._validatorSetField(ORC_SPEC,
    8,
    props.orc_8,
    {
      length: { min: 1, max: 200 },
    });
    this._validatorSetField(
      ORC_SPEC,
    9,
    (props.orc_9 || props.transactionDateTime) instanceof Date &&
        !isNaN(
          ((props.orc_9 || props.transactionDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.orc_9 || props.transactionDateTime) as Date,
            this._opt.date,
          )
        : (props.orc_9 || props.transactionDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(ORC_SPEC,
    10,
    props.orc_10 || props.enteredBy,
    {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(ORC_SPEC,
    11,
    props.orc_11 || props.verifiedBy,
    {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(ORC_SPEC,
    12,
    props.orc_12 || props.orderingProvider,
    {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(ORC_SPEC,
    13,
    props.orc_13,
    {
      length: { min: 1, max: 80 },
    });
    this._validatorSetField(ORC_SPEC,
    14,
    props.orc_14 || props.callBackPhoneNumber,
    {
      length: { min: 1, max: 40 },
    });
  }

  protected _buildPID(props: Partial<HL7_2_1_PID>) {
    this._assertSegmentInVersion(PID_SPEC);
    this._segment = this._message.addSegment("PID");

    this._validatorSetField(PID_SPEC,
    1,
    props.pid_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(PID_SPEC,
    2,
    props.pid_2 || props.patientIdExternal,
    {
      length: { min: 1, max: 16 },
    });
    this._validatorSetField(PID_SPEC,
    3,
    props.pid_3 || props.patientIdInternal,
    {
            length: { min: 1, max: 20 },
    });
    this._validatorSetField(PID_SPEC,
    4,
    props.pid_4 || props.alternatePatientId,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PID_SPEC,
    5,
    props.pid_5 || props.patientName,
    {
            length: { min: 1, max: 48 },
    });
    this._validatorSetField(PID_SPEC,
    6,
    props.pid_6 || props.mothersMaidenName,
    {
      length: { min: 1, max: 30 },
    });
    this._validatorSetField(
      PID_SPEC,
    7,
    (props.pid_7 || props.dateOfBirth) instanceof Date &&
        !isNaN(
          ((props.pid_7 || props.dateOfBirth) as Date).getTime(),
        )
        ? this.setDate(
            (props.pid_7 || props.dateOfBirth) as Date,
            this._opt.date,
          )
        : (props.pid_7 || props.dateOfBirth) ?? "",
    { type: "date" }
    );
    this._validatorSetField(PID_SPEC,
    8,
    props.pid_8 || props.sex,
    {
      allowedValues: this._table_0001,
      length: 1,
    });
    this._validatorSetField(PID_SPEC,
    9,
    props.pid_9 || props.patientAlias,
    {
      length: { min: 1, max: 48 },
    });
    this._validatorSetField(PID_SPEC,
    10,
    props.pid_10 || props.race,
    {
      length: { min: 1, max: 1 },
    });
    this._validatorSetField(PID_SPEC,
    11,
    props.pid_11 || props.patientAddress,
    {
      length: { min: 1, max: 106 },
    });
    this._validatorSetField(PID_SPEC,
    12,
    props.pid_12 || props.countyCode,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(PID_SPEC,
    13,
    props.pid_13 || props.phoneNumberHome,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(PID_SPEC,
    14,
    props.pid_14 || props.phoneNumberBusiness,
    {
      length: { min: 1, max: 40 },
    });
    this._validatorSetField(PID_SPEC,
    15,
    props.pid_15 || props.language,
    {
      length: { min: 1, max: 25 },
    });
    this._validatorSetField(PID_SPEC,
    16,
    props.pid_16 || props.maritalStatus,
    {
      allowedValues: this._table_0002,
      length: 1,
    });
    this._validatorSetField(PID_SPEC,
    17,
    props.pid_17 || props.religion,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(PID_SPEC,
    18,
    props.pid_18 || props.patientAccountNumber,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(PID_SPEC,
    19,
    props.pid_19 || props.ssn,
    {
      length: { min: 1, max: 16 },
    });
  }

  protected _buildPV1(props: Partial<HL7_2_1_PV1>) {
    this._assertSegmentInVersion(PV1_SPEC);
    this._segment = this._message.addSegment("PV1");

    this._validatorSetField(PV1_SPEC,
    1,
    props.pv1_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(PV1_SPEC,
    2,
    props.pv1_2 || props.patientClass,
    {
            allowedValues: this._table_0004,
      length: 1,
    });
    this._validatorSetField(
      PV1_SPEC,
    3,
    props.pv1_3 || props.assignedPatientLocation,
    { length: { min: 1, max: 12 } }
    );
    this._validatorSetField(PV1_SPEC,
    4,
    props.pv1_4 || props.admissionType,
    {
      allowedValues: this._table_0007,
      length: 1,
    });
    this._validatorSetField(PV1_SPEC,
    5,
    props.pv1_5 || props.preadmitNumber,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(PV1_SPEC,
    6,
    props.pv1_6 || props.priorPatientLocation,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    7,
    props.pv1_7 || props.attendingDoctor,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(PV1_SPEC,
    8,
    props.pv1_8 || props.referringDoctor,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(PV1_SPEC,
    9,
    props.pv1_9 || props.consultingDoctor,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(PV1_SPEC,
    10,
    props.pv1_10 || props.hospitalService,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(PV1_SPEC,
    11,
    props.pv1_11 || props.temporaryLocation,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    12,
    props.pv1_12,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    13,
    props.pv1_13,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    14,
    props.pv1_14 || props.admitSource,
    {
      length: 1,
    });
    this._validatorSetField(PV1_SPEC,
    15,
    props.pv1_15 || props.ambulatoryStatus,
    {
      length: 2,
    });
    this._validatorSetField(PV1_SPEC,
    16,
    props.pv1_16 || props.vipIndicator,
    {
      length: 2,
    });
    this._validatorSetField(PV1_SPEC,
    17,
    props.pv1_17 || props.admittingDoctor,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(PV1_SPEC,
    18,
    props.pv1_18 || props.patientType,
    {
      length: 2,
    });
    this._validatorSetField(PV1_SPEC,
    19,
    props.pv1_19 || props.visitNumber,
    {
      length: { min: 1, max: 15 },
    });
    this._validatorSetField(PV1_SPEC,
    20,
    props.pv1_20 || props.financialClass,
    {
      length: { min: 1, max: 50 },
    });
    this._validatorSetField(PV1_SPEC,
    21,
    props.pv1_21,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    22,
    props.pv1_22,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    23,
    props.pv1_23,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    24,
    props.pv1_24,
    { length: 2 });
    this._validatorSetField(
      PV1_SPEC,
    25,
    (props.pv1_25) instanceof Date &&
        !isNaN((props.pv1_25 as Date).getTime())
        ? this.setDate(props.pv1_25 as Date, "8")
        : props.pv1_25 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PV1_SPEC,
    26,
    props.pv1_26,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    27,
    props.pv1_27,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(PV1_SPEC,
    28,
    props.pv1_28,
    { length: 2 });
    this._validatorSetField(PV1_SPEC,
    29,
    props.pv1_29,
    { length: 4 });
    this._validatorSetField(
      PV1_SPEC,
    30,
    (props.pv1_30) instanceof Date &&
        !isNaN((props.pv1_30 as Date).getTime())
        ? this.setDate(props.pv1_30 as Date, "8")
        : props.pv1_30 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PV1_SPEC,
    31,
    props.pv1_31,
    {
      length: { min: 1, max: 10 },
    });
    this._validatorSetField(PV1_SPEC,
    32,
    props.pv1_32,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    33,
    props.pv1_33,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    34,
    props.pv1_34,
    { length: 3 });
    this._validatorSetField(
      PV1_SPEC,
    35,
    (props.pv1_35) instanceof Date &&
        !isNaN((props.pv1_35 as Date).getTime())
        ? this.setDate(props.pv1_35 as Date, "8")
        : props.pv1_35 ?? "",
    { type: "date" }
    );
    this._validatorSetField(PV1_SPEC,
    36,
    props.pv1_36 || props.dischargeDisposition,
    {
      length: 3,
    });
    this._validatorSetField(PV1_SPEC,
    37,
    props.pv1_37,
    {
      length: { min: 1, max: 25 },
    });
    this._validatorSetField(PV1_SPEC,
    38,
    props.pv1_38,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(PV1_SPEC,
    39,
    props.pv1_39,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(PV1_SPEC,
    40,
    props.pv1_40 || props.bedStatus,
    {
      allowedValues: this._table_0116,
      length: 1,
    });
    this._validatorSetField(PV1_SPEC,
    41,
    props.pv1_41,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(PV1_SPEC,
    42,
    props.pv1_42,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(PV1_SPEC,
    43,
    props.pv1_43,
    {
      length: { min: 1, max: 12 },
    });
    this._validatorSetField(
      PV1_SPEC,
    44,
    (props.pv1_44 || props.admitDateTime) instanceof Date &&
        !isNaN(
          ((props.pv1_44 || props.admitDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.pv1_44 || props.admitDateTime) as Date,
            this._opt.date,
          )
        : (props.pv1_44 || props.admitDateTime) ?? "",
    { type: "date" }
    );
  }

  protected _buildPR1(props: Partial<HL7_2_1_PR1>) {
    this._assertSegmentInVersion(PR1_SPEC);
    this._segment = this._message.addSegment("PR1");

    this._validatorSetField(PR1_SPEC,
    1,
    props.pr1_1,
    {
            length: { min: 1, max: 4 },
    });
    this._validatorSetField(
      PR1_SPEC,
    2,
    props.pr1_2 || props.procedureCodingMethod,
    {
                length: { min: 1, max: 2 },
      }
    );
    this._validatorSetField(PR1_SPEC,
    3,
    props.pr1_3 || props.procedureCode,
    {
            length: { min: 1, max: 10 },
    });
    this._validatorSetField(
      PR1_SPEC,
    4,
    props.pr1_4 || props.procedureDescription,
    {
        length: { min: 1, max: 40 },
      }
    );
    this._validatorSetField(
      PR1_SPEC,
    5,
    (props.pr1_5 || props.procedureDateTime) instanceof Date &&
        !isNaN(
          ((props.pr1_5 || props.procedureDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.pr1_5 || props.procedureDateTime) as Date,
            this._opt.date,
          )
        : (props.pr1_5 || props.procedureDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(PR1_SPEC,
    6,
    props.pr1_6 || props.procedureType,
    {
      length: 2,
    });
    this._validatorSetField(PR1_SPEC,
    7,
    props.pr1_7 || props.procedureMinutes,
    {
      length: { min: 1, max: 4 },
    });
    this._validatorSetField(PR1_SPEC,
    8,
    props.pr1_8 || props.anesthesiologist,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(PR1_SPEC,
    9,
    props.pr1_9 || props.anesthesiaCode,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(
      PR1_SPEC,
    10,
    props.pr1_10 || props.anesthesiaMinutes,
    {
        length: { min: 1, max: 4 },
      }
    );
    this._validatorSetField(PR1_SPEC,
    11,
    props.pr1_11 || props.surgeon,
    {
      length: { min: 1, max: 60 },
    });
  }

  protected _buildQRD(props: Partial<HL7_2_1_QRD>) {
    this._assertSegmentInVersion(QRD_SPEC);
    this._segment = this._message.addSegment("QRD");

    this._validatorSetField(
      QRD_SPEC,
    1,
    (props.qrd_1 || props.queryDateTime) instanceof Date &&
        !isNaN(
          ((props.qrd_1 || props.queryDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.qrd_1 || props.queryDateTime) as Date,
            this._opt.date,
          )
        : (props.qrd_1 || props.queryDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      QRD_SPEC,
    2,
    props.qrd_2 || props.queryFormatCode,
    {
                length: 1,
      }
    );
    this._validatorSetField(QRD_SPEC,
    3,
    props.qrd_3 || props.queryPriority,
    {
            length: 1,
    });
    this._validatorSetField(QRD_SPEC,
    4,
    props.qrd_4 || props.queryId,
    {
            length: { min: 1, max: 10 },
    });
    this._validatorSetField(
      QRD_SPEC,
    5,
    props.qrd_5 || props.deferredResponseType,
    { length: 1 }
    );
    this._validatorSetField(
      QRD_SPEC,
    6,
    (props.qrd_6) instanceof Date && !isNaN((props.qrd_6 as Date).getTime())
        ? this.setDate(props.qrd_6 as Date, this._opt.date)
        : props.qrd_6 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      QRD_SPEC,
    7,
    props.qrd_7 || props.quantityLimitedRequest,
    {
                length: { min: 1, max: 10 },
      }
    );
    this._validatorSetField(QRD_SPEC,
    8,
    props.qrd_8 || props.whoSubjectFilter,
    {
            length: { min: 1, max: 20 },
    });
    this._validatorSetField(QRD_SPEC,
    9,
    props.qrd_9 || props.whatSubjectFilter,
    {
            length: { min: 1, max: 3 },
    });
    this._validatorSetField(
      QRD_SPEC,
    10,
    props.qrd_10 || props.whatDepartmentDataCode,
    { length: { min: 1, max: 20 } }
    );
  }

  protected _buildQRF(props: Partial<HL7_2_1_QRF>) {
    this._assertSegmentInVersion(QRF_SPEC);
    this._segment = this._message.addSegment("QRF");

    this._validatorSetField(
      QRF_SPEC,
    1,
    props.qrf_1 || props.whereSubjectFilter,
    {
                length: { min: 1, max: 20 },
      }
    );
    this._validatorSetField(
      QRF_SPEC,
    2,
    (props.qrf_2 || props.whenDataStartDateTime) instanceof Date &&
        !isNaN(
          ((props.qrf_2 || props.whenDataStartDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.qrf_2 || props.whenDataStartDateTime) as Date,
            this._opt.date,
          )
        : (props.qrf_2 || props.whenDataStartDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      QRF_SPEC,
    3,
    (props.qrf_3 || props.whenDataEndDateTime) instanceof Date &&
        !isNaN(
          ((props.qrf_3 || props.whenDataEndDateTime) as Date).getTime(),
        )
        ? this.setDate(
            (props.qrf_3 || props.whenDataEndDateTime) as Date,
            this._opt.date,
          )
        : (props.qrf_3 || props.whenDataEndDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(QRF_SPEC,
    4,
    props.qrf_4 || props.whatUserQualifier,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(
      QRF_SPEC,
    5,
    props.qrf_5 || props.otherQrySubjectFilter,
    { length: { min: 1, max: 20 } }
    );
  }

  protected _buildRX1(props: Partial<HL7_2_1_RX1>) {
    this._assertSegmentInVersion(RX1_SPEC);
    this._segment = this._message.addSegment("RX1");

    this._validatorSetField(RX1_SPEC,
    1,
    props.rx1_1,
    { length: { min: 1, max: 40 } });
    this._validatorSetField(RX1_SPEC,
    2,
    props.rx1_2 || props.giveCode,
    {
            length: { min: 1, max: 100 },
    });
    this._validatorSetField(
      RX1_SPEC,
    3,
    props.rx1_3 || props.giveAmountMinimum,
    {
                length: { min: 1, max: 20 },
      }
    );
    this._validatorSetField(
      RX1_SPEC,
    4,
    props.rx1_4 || props.giveAmountMaximum,
    { length: { min: 1, max: 20 } }
    );
    this._validatorSetField(RX1_SPEC,
    5,
    props.rx1_5 || props.giveUnits,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(RX1_SPEC,
    6,
    props.rx1_6 || props.giveDosageForm,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(
      RX1_SPEC,
    7,
    props.rx1_7 || props.providersPharmacyInstructions,
    { length: { min: 1, max: 200 } }
    );
    this._validatorSetField(
      RX1_SPEC,
    8,
    props.rx1_8 || props.providersAdministrationInstructions,
    { length: { min: 1, max: 200 } }
    );
    this._validatorSetField(RX1_SPEC,
    9,
    props.rx1_9 || props.deliverToLocation,
    {
      length: { min: 1, max: 200 },
    });
    this._validatorSetField(RX1_SPEC,
    10,
    props.rx1_10 || props.allowSubstitutions,
    {
      length: { min: 1, max: 1 },
    });
    this._validatorSetField(RX1_SPEC,
    11,
    props.rx1_11 || props.requestedGiveCode,
    {
      length: { min: 1, max: 100 },
    });
    this._validatorSetField(
      RX1_SPEC,
    12,
    props.rx1_12 || props.requestedGiveAmountMinimum,
    { length: { min: 1, max: 20 } }
    );
    this._validatorSetField(
      RX1_SPEC,
    13,
    props.rx1_13 || props.requestedGiveAmountMaximum,
    { length: { min: 1, max: 20 } }
    );
    this._validatorSetField(
      RX1_SPEC,
    14,
    props.rx1_14 || props.requestedGiveUnits,
    { length: { min: 1, max: 60 } }
    );
    this._validatorSetField(
      RX1_SPEC,
    15,
    props.rx1_15 || props.requestedDosageForm,
    { length: { min: 1, max: 60 } }
    );
    this._validatorSetField(
      RX1_SPEC,
    16,
    props.rx1_16 || props.pharmacistSpecialDispensingInstructions,
    { length: { min: 1, max: 200 } }
    );
    this._validatorSetField(RX1_SPEC,
    17,
    props.rx1_17 || props.givePer,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(RX1_SPEC,
    18,
    props.rx1_18 || props.giveRateAmount,
    {
      length: { min: 1, max: 6 },
    });
    this._validatorSetField(RX1_SPEC,
    19,
    props.rx1_19 || props.giveRateUnits,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(RX1_SPEC,
    20,
    props.rx1_20,
    {
      length: { min: 1, max: 6 },
    });
    this._validatorSetField(RX1_SPEC,
    21,
    props.rx1_21,
    {
      length: { min: 1, max: 60 },
    });
    this._validatorSetField(RX1_SPEC,
    22,
    props.rx1_22 || props.totalDailyDose,
    {
      length: { min: 1, max: 10 },
    });
  }

  protected _buildUB1(props: Partial<HL7_2_1_UB1>) {
    this._assertSegmentInVersion(UB1_SPEC);
    this._segment = this._message.addSegment("UB1");

    this._validatorSetField(UB1_SPEC,
    1,
    props.ub1_1,
    { length: { min: 1, max: 4 } });
    this._validatorSetField(UB1_SPEC,
    2,
    props.ub1_2 || props.bloodDeductible,
    {
      length: { min: 1, max: 1 },
    });
    this._validatorSetField(UB1_SPEC,
    3,
    props.ub1_3 || props.bloodFurnishedPints,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(UB1_SPEC,
    4,
    props.ub1_4 || props.bloodReplacedPints,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(
      UB1_SPEC,
    5,
    props.ub1_5 || props.bloodNotReplacedPints,
    { length: { min: 1, max: 2 } }
    );
    this._validatorSetField(UB1_SPEC,
    6,
    props.ub1_6 || props.coInsuranceDays,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(UB1_SPEC,
    7,
    props.ub1_7 || props.conditionCode,
    {
      length: { min: 1, max: 14 },
    });
    this._validatorSetField(UB1_SPEC,
    8,
    props.ub1_8 || props.coveredDays,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(UB1_SPEC,
    9,
    props.ub1_9 || props.nonCoveredDays,
    {
      length: { min: 1, max: 3 },
    });
    this._validatorSetField(UB1_SPEC,
    10,
    props.ub1_10 || props.valueAmountCode,
    {
      length: { min: 1, max: 55 },
    });
    this._validatorSetField(UB1_SPEC,
    11,
    props.ub1_11 || props.numberOfGraceDays,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(
      UB1_SPEC,
    12,
    props.ub1_12 || props.specialProgramIndicator,
    { length: { min: 1, max: 2 } }
    );
    this._validatorSetField(UB1_SPEC,
    13,
    props.ub1_13,
    { length: 2 });
    this._validatorSetField(
      UB1_SPEC,
    14,
    props.ub1_14 instanceof Date && !isNaN(props.ub1_14.getTime())
        ? this.setDate(props.ub1_14, "8")
        : props.ub1_14 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      UB1_SPEC,
    15,
    props.ub1_15 instanceof Date && !isNaN(props.ub1_15.getTime())
        ? this.setDate(props.ub1_15, "8")
        : props.ub1_15 ?? "",
    { type: "date" }
    );
    this._validatorSetField(UB1_SPEC,
    16,
    props.ub1_16 || props.occurrence,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(UB1_SPEC,
    17,
    props.ub1_17 || props.occurrenceSpan,
    {
      length: { min: 1, max: 2 },
    });
    this._validatorSetField(
      UB1_SPEC,
    18,
    props.ub1_18 instanceof Date && !isNaN(props.ub1_18.getTime())
        ? this.setDate(props.ub1_18, "8")
        : props.ub1_18 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      UB1_SPEC,
    19,
    props.ub1_19 instanceof Date && !isNaN(props.ub1_19.getTime())
        ? this.setDate(props.ub1_19, "8")
        : props.ub1_19 ?? "",
    { type: "date" }
    );
    this._validatorSetField(UB1_SPEC,
    20,
    props.ub1_20,
    {
      length: { min: 1, max: 30 },
    });
    this._validatorSetField(UB1_SPEC,
    21,
    props.ub1_21,
    {
      length: { min: 1, max: 7 },
    });
    this._validatorSetField(UB1_SPEC,
    22,
    props.ub1_22,
    {
      length: { min: 1, max: 8 },
    });
    this._validatorSetField(UB1_SPEC,
    23,
    props.ub1_23,
    {
      length: { min: 1, max: 17 },
    });
  }

  protected _buildURD(props: Partial<HL7_2_1_URD>) {
    this._assertSegmentInVersion(URD_SPEC);
    this._segment = this._message.addSegment("URD");

    this._validatorSetField(
      URD_SPEC,
    1,
    (props.urd_1 || props.ruDateTime) instanceof Date &&
        !isNaN(((props.urd_1 || props.ruDateTime) as Date).getTime())
        ? this.setDate(
            (props.urd_1 || props.ruDateTime) as Date,
            this._opt.date,
          )
        : (props.urd_1 || props.ruDateTime) ?? "",
    { type: "date" }
    );
    this._validatorSetField(URD_SPEC,
    2,
    props.urd_2 || props.reportPriority,
    {
      length: 1,
    });
    this._validatorSetField(
      URD_SPEC,
    3,
    props.urd_3 || props.ruWhoSubjectDefinition,
    {
                length: { min: 1, max: 20 },
      }
    );
    this._validatorSetField(
      URD_SPEC,
    4,
    props.urd_4 || props.ruWhatSubjectDefinition,
    { length: { min: 1, max: 3 } }
    );
  }

  protected _buildURS(props: Partial<HL7_2_1_URS>) {
    this._assertSegmentInVersion(URS_SPEC);
    this._segment = this._message.addSegment("URS");

    this._validatorSetField(
      URS_SPEC,
    1,
    props.urs_1 || props.ruWhereSubjectDefinition,
    {
                length: { min: 1, max: 20 },
      }
    );
    this._validatorSetField(
      URS_SPEC,
    2,
    (props.urs_2) instanceof Date && !isNaN((props.urs_2 as Date).getTime())
        ? this.setDate(props.urs_2 as Date, this._opt.date)
        : props.urs_2 ?? "",
    { type: "date" }
    );
    this._validatorSetField(
      URS_SPEC,
    3,
    (props.urs_3) instanceof Date && !isNaN((props.urs_3 as Date).getTime())
        ? this.setDate(props.urs_3 as Date, this._opt.date)
        : props.urs_3 ?? "",
    { type: "date" }
    );
    this._validatorSetField(URS_SPEC,
    4,
    props.urs_4 || props.ruWhatUserQualifier,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(URS_SPEC,
    5,
    props.urs_5,
    {
      length: { min: 1, max: 20 },
    });
    this._validatorSetField(URS_SPEC,
    6,
    props.urs_6,
    {
      length: { min: 1, max: 12 },
    });
  }
}
