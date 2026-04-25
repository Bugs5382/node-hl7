/** HL7 2.2 RXA - Pharmacy/Treatment Administration */
export interface HL7_2_2_RXA {
  /** RXA.1 - Give Sub-ID Counter (required) */
  rxa_1: number | string;
  /** RXA.2 - Administration Sub-ID Counter (required) */
  rxa_2: number | string;
  /** RXA.3 - Date/Time Start of Administration (required) */
  rxa_3: Date | string;
  /** RXA.4 - Date/Time End of Administration (required) */
  rxa_4: Date | string;
  /** RXA.5 - Administered Code (required, max 100) */
  rxa_5: string;
  /** RXA.6 - Administered Amount (required, max 20) */
  rxa_6: string;
  /** RXA.7 - Administered Units (max 60) */
  rxa_7?: string;
  /** RXA.8 - Administered Dosage Form (max 60) */
  rxa_8?: string;
  /** RXA.9 - Administration Notes (max 200) */
  rxa_9?: string;
  /** RXA.10 - Administering Provider (max 80) */
  rxa_10?: string;
  /** RXA.11 - Administered-at Location (max 12) */
  rxa_11?: string;
  /** RXA.12 - Administered Per (Time Unit) (max 20) */
  rxa_12?: string;
}
