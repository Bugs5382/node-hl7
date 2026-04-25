import { TABLE_0119 } from "@/hl7/tables/0119";
import { TABLE_0121 } from "@/hl7/tables/0121";

export type Table0119Value = (typeof TABLE_0119)[number];
export type Table0121Value = (typeof TABLE_0121)[number];

/** HL7 ORC - Common Order */
export interface HL7_ORC {
  /** ORC.1 - Order Control */
  orc_1: Table0119Value;
  orderControl?: Table0119Value;
  /** ORC.2 - Placer Order Number */
  orc_2?: string;
  placerOrderNumber?: string;
  /** ORC.3 - Filler Order Number */
  orc_3?: string;
  fillerOrderNumber?: string;
  /** ORC.4 - Placer Group Number */
  orc_4?: string;
  /** ORC.5 - Order Status */
  orc_5?: string;
  orderStatus?: string;
  /** ORC.6 - Response Flag */
  orc_6?: Table0121Value;
  responseFlag?: Table0121Value;
  /** ORC.7 - Quantity/Timing */
  orc_7?: string;
  /** ORC.8 - Parent */
  orc_8?: string;
  /** ORC.9 - Date/Time of Transaction */
  orc_9?: Date | string;
  transactionDateTime?: Date | string;
  /** ORC.10 - Entered By */
  orc_10?: string;
  enteredBy?: string;
  /** ORC.11 - Verified By */
  orc_11?: string;
  verifiedBy?: string;
  /** ORC.12 - Ordering Provider */
  orc_12?: string;
  orderingProvider?: string;
  /** ORC.13 - Enterer's Location */
  orc_13?: string;
  /** ORC.14 - Call Back Phone Number */
  orc_14?: string;
  callBackPhoneNumber?: string;
}
