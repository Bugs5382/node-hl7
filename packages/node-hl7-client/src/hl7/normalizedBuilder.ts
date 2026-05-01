import { HL7FatalError } from "@/helpers/exception";
import { ClientBuilderOptions } from "@/modules/types";

const DEFAULT_CLIENT_BUILDER_OPTS = {
  newLine: "\r",
  separatorComponent: "^",
  separatorEscape: "\\",
  separatorField: "|",
  separatorRepetition: "~",
  separatorSubComponent: "&",
};

export function normalizedClientBuilderOptions(
  raw?: ClientBuilderOptions,
): ClientBuilderOptions {
  const properties: ClientBuilderOptions = {
    ...DEFAULT_CLIENT_BUILDER_OPTS,
    ...raw,
  };

  if (
    (properties.newLine !== undefined &&
      properties.newLine === String.raw`\r`) ||
    properties.newLine === String.raw`\n`
  ) {
    throw new HL7FatalError("newLine must be \r or \n");
  }

  if (
    properties.date !== "8" &&
    properties.date !== "12" &&
    properties.date !== "14"
  ) {
    properties.date = "14";
  }

  return properties;
}
