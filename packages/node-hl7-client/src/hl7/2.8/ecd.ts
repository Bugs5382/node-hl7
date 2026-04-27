import { HL7_2_8_ECD as Narrowed } from "@/hl7/types/ecd";

/**
 * v2.8 ECD — `ECD.4 Requested Completion Time` is **withdrawn (`W`)** and
 * typed as `never` so the IDE rejects any attempt to set `ecd_4` /
 * `requestedCompletionTime`. Runtime check throws the same.
 * @since 4.0.0
 */
export type HL7_2_8_ECD = Narrowed;
