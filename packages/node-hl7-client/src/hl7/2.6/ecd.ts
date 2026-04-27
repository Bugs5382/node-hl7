import { HL7_ECD } from "@/hl7/types/ecd";

/**
 * v2.6 ECD — ECD.4 is `B` (Backward Compatibility); still settable but
 * marked deprecated at runtime. Type stays the same as the base.
 * @since 4.0.0
 */
export type HL7_2_6_ECD = HL7_ECD;
