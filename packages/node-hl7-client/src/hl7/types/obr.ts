import { TABLE_0074 } from "@/hl7/tables/0074";
import { TABLE_0123 } from "@/hl7/tables/0123";

export type Table0074Value = (typeof TABLE_0074)[number];
export type Table0123Value = (typeof TABLE_0123)[number];

/** HL7 OBR - Observation Request */
export interface HL7_OBR {
  /** OBR.1 - Set ID */
  obr_1?: string | number;
  /** OBR.2 - Placer Order Number */
  obr_2?: string;
  placerOrderNumber?: string;
  /** OBR.3 - Filler Order Number */
  obr_3?: string;
  fillerOrderNumber?: string;
  /** OBR.4 - Universal Service ID */
  obr_4: string;
  universalServiceId?: string;
  /** OBR.5 - Priority */
  obr_5?: string;
  /** OBR.6 - Requested Date/Time */
  obr_6?: Date | string;
  /** OBR.7 - Observation Date/Time */
  obr_7?: Date | string;
  observationDateTime?: Date | string;
  /** OBR.8 - Observation End Date/Time */
  obr_8?: Date | string;
  observationEndDateTime?: Date | string;
  /** OBR.9 - Collection Volume */
  obr_9?: string;
  collectionVolume?: string;
  /** OBR.10 - Collector Identifier */
  obr_10?: string;
  /** OBR.11 - Specimen Action Code */
  obr_11?: string;
  /** OBR.12 - Danger Code */
  obr_12?: string;
  /** OBR.13 - Relevant Clinical Info */
  obr_13?: string;
  /** OBR.14 - Specimen Received Date/Time */
  obr_14?: Date | string;
  /** OBR.15 - Specimen Source */
  obr_15?: string;
  specimenSource?: string;
  /** OBR.16 - Ordering Provider */
  obr_16?: string;
  orderingProvider?: string;
  /** OBR.17 - Order Callback Phone Number */
  obr_17?: string;
  /** OBR.18 - Placer Field 1 */
  obr_18?: string;
  /** OBR.19 - Placer Field 2 */
  obr_19?: string;
  /** OBR.20 - Filler Field 1 */
  obr_20?: string;
  /** OBR.21 - Filler Field 2 */
  obr_21?: string;
  /** OBR.22 - Results Report/Status Change Date/Time */
  obr_22?: Date | string;
  /** OBR.23 - Charge to Practice */
  obr_23?: string;
  /** OBR.24 - Diagnostic Service Section ID */
  obr_24?: Table0074Value;
  diagnosticServiceSectionId?: Table0074Value;
  /** OBR.25 - Result Status */
  obr_25?: Table0123Value;
  resultStatus?: Table0123Value;
}
