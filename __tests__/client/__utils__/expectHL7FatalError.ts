import { HL7FatalError } from "node-hl7-client/src";
import { expect } from "vitest";

/**
 * Check for this Error handler Utility
 * @since 3.1.0
 * @param err
 * @param message
 */
export function expectHL7FatalError(error: unknown, message: string) {
  expect(error).toBeInstanceOf(HL7FatalError);
  if (error instanceof HL7FatalError) {
    expect(error.message).toBe(message);
  }
}
