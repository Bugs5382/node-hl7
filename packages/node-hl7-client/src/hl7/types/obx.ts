import { TABLE_0078 } from "@/hl7/tables/0078";
import { TABLE_0085 } from "@/hl7/tables/0085";
import { TABLE_0125 } from "@/hl7/tables/0125";

export type Table0078Value = (typeof TABLE_0078)[number];
export type Table0085Value = (typeof TABLE_0085)[number];
export type Table0125Value = (typeof TABLE_0125)[number];

/** HL7 OBX - Observation/Result */
export interface HL7_OBX {
  /** OBX.1 - Set ID */
  obx_1?: string | number;
  /** OBX.2 - Value Type */
  obx_2?: Table0125Value;
  valueType?: Table0125Value;
  /** OBX.3 - Observation Identifier */
  obx_3: string;
  observationIdentifier?: string;
  /** OBX.4 - Observation Sub-ID */
  obx_4?: string;
  observationSubId?: string;
  /** OBX.5 - Observation Value */
  obx_5?: string;
  observationValue?: string;
  /** OBX.6 - Units */
  obx_6?: string;
  units?: string;
  /** OBX.7 - References Range */
  obx_7?: string;
  referencesRange?: string;
  /** OBX.8 - Abnormal Flags */
  obx_8?: Table0078Value;
  abnormalFlags?: Table0078Value;
  /** OBX.9 - Probability */
  obx_9?: string | number;
  /** OBX.10 - Nature of Abnormal Test */
  obx_10?: string;
  /** OBX.11 - Observation Result Status */
  obx_11: Table0085Value;
  observationResultStatus?: Table0085Value;
}
