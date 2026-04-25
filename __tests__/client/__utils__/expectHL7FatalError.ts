import { HL7FatalError } from "node-hl7-client/src";
import { expect } from "vitest";

/**
 * Check for this Error handler Utility
 * @since 3.1.0
 * @param err
 * @param message
 */
export function expectHL7FatalError(err: unknown, message: string) {
  expect(err).toBeInstanceOf(HL7FatalError);
  if (err instanceof HL7FatalError) {
    expect(err.message).toBe(message);
  }
}
