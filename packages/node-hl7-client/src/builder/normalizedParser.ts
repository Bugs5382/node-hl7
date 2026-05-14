/*
MIT License

Copyright (c) 2026 Shane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import fs from "node:fs";

import { HL7FatalError } from "@/helpers/exception";
import { ParserPlan } from "@/modules/parserPlan";
import {
  ClientBuilderFileOptions,
  ClientBuilderMessageOptions,
} from "@/modules/types";
import { isBatch } from "@/utils/is";

const DEFAULT_CLIENT_BUILDER_OPTS = {
  newLine: "\r",
  parsing: false,
  separatorComponent: "^",
  separatorEscape: "\\",
  separatorField: "|",
  separatorRepetition: "~",
  separatorSubComponent: "&",
  text: "",
};

const DEFAULT_CLIENT_FILE_OPTS = {
  extension: "hl7",
  location: "",
};

export function normalizedClientBatchParserOptions(
  raw?: ClientBuilderMessageOptions,
): ClientBuilderMessageOptions {
  const properties: ClientBuilderMessageOptions = {
    ...DEFAULT_CLIENT_BUILDER_OPTS,
    ...raw,
  };

  if (
    properties.text !== undefined &&
    properties.text !== "" &&
    properties.text.slice(0, 3) !== "BHS" &&
    properties.text.slice(0, 3) !== "MSH"
  ) {
    throw new HL7FatalError("text must begin with the BHS or MSH segment.");
  }

  if (
    properties.text !== undefined &&
    properties.text !== "" &&
    properties.text.slice(0, 3) === "MSH" &&
    !isBatch(properties.text)
  ) {
    throw new HL7FatalError(
      "Unable to process a single MSH as a batch. Use Message.",
    );
  }

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

  if (properties.text === "") {
    properties.text = `BHS${properties.separatorField as string}${properties.separatorComponent as string}${properties.separatorRepetition as string}${properties.separatorEscape as string}${properties.separatorSubComponent as string}`;
  } else if (properties.text !== undefined) {
    const plan: ParserPlan = new ParserPlan(properties.text.slice(3, 8));
    // check to make sure that we set the correct properties
    properties.newLine = properties.text.includes("\r") ? "\r" : "\n";
    properties.separatorField = plan.separatorField;
    properties.separatorComponent = plan.separatorComponent;
    properties.separatorRepetition = plan.separatorRepetition;
    properties.separatorEscape = plan.separatorEscape;
    properties.separatorSubComponent = plan.separatorSubComponent;
  }

  return properties;
}

export function normalizedClientFileParserOptions(
  raw?: ClientBuilderFileOptions,
): ClientBuilderFileOptions {
  const properties: ClientBuilderFileOptions = {
    ...DEFAULT_CLIENT_FILE_OPTS,
    ...DEFAULT_CLIENT_BUILDER_OPTS,
    ...raw,
  };

  if (
    properties.text !== undefined &&
    properties.text !== "" &&
    properties.text.slice(0, 3) !== "FHS"
  ) {
    throw new HL7FatalError("text must begin with the FHS segment.");
  }

  if (
    (properties.newLine !== undefined &&
      properties.newLine === String.raw`\r`) ||
    properties.newLine === String.raw`\n`
  ) {
    throw new HL7FatalError("newLine must be \r or \n");
  }

  if (properties.extension !== undefined && properties.extension.length !== 3) {
    throw new HL7FatalError(
      "The extension for file save must be 3 characters long.",
    );
  }

  if (
    properties.fullFilePath !== undefined &&
    properties.fileBuffer !== undefined
  ) {
    throw new HL7FatalError(
      "You can not have specified a file path and a buffer. Please choose one or the other.",
    );
  }

  if (
    properties.date !== "8" &&
    properties.date !== "12" &&
    properties.date !== "14"
  ) {
    properties.date = "14";
  }

  const regex = /\n/gm;
  const subst = "\r";
  if (
    properties.fullFilePath !== undefined &&
    properties.fileBuffer === undefined
  ) {
    const fileBuffer = fs.readFileSync(properties.fullFilePath);
    properties.text = fileBuffer.toString().replaceAll(regex, subst);
  } else if (
    properties.fullFilePath === undefined &&
    properties.fileBuffer !== undefined
  ) {
    properties.text = properties.fileBuffer.toString().replaceAll(regex, subst);
  }

  if (properties.text === "") {
    properties.text = `FHS${properties.separatorField as string}${properties.separatorComponent as string}${properties.separatorRepetition as string}${properties.separatorEscape as string}${properties.separatorSubComponent as string}`;
  } else if (properties.text !== undefined) {
    const plan: ParserPlan = new ParserPlan(properties.text.slice(3, 8));
    // check to make sure that we set the correct properties
    properties.newLine = properties.text.includes("\r") ? "\r" : "\n";
    properties.separatorField = plan.separatorField;
    properties.separatorComponent = plan.separatorComponent;
    properties.separatorRepetition = plan.separatorRepetition;
    properties.separatorEscape = plan.separatorEscape;
    properties.separatorSubComponent = plan.separatorSubComponent;
  }

  return properties;
}

export function normalizedClientMessageParserOptions(
  raw?: ClientBuilderMessageOptions,
): ClientBuilderMessageOptions {
  const properties: ClientBuilderMessageOptions = {
    ...DEFAULT_CLIENT_BUILDER_OPTS,
    ...raw,
  };

  if (
    properties.text !== undefined &&
    properties.text !== "" &&
    properties.text?.slice(0, 3) !== "MSH"
  ) {
    throw new Error("text must begin with the MSH segment.");
  }

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

  if (properties.text === "" && properties.messageHeader !== undefined) {
    properties.text = `MSH${properties.separatorField as string}${properties.separatorComponent as string}${properties.separatorRepetition as string}${properties.separatorEscape as string}${properties.separatorSubComponent as string}`;
  } else if (properties.text !== undefined && properties.text !== "") {
    const plan: ParserPlan = new ParserPlan(properties.text.slice(3, 8));
    // check to make sure that we set the correct properties
    properties.newLine = properties.text.includes("\r") ? "\r" : "\n";
    properties.separatorField = plan.separatorField;
    properties.separatorComponent = plan.separatorComponent;
    properties.separatorRepetition = plan.separatorRepetition;
    properties.separatorEscape = plan.separatorEscape;
    properties.separatorSubComponent = plan.separatorSubComponent;
    // cleanup
    properties.text = properties.text.trim();
  } else {
    properties.text = "";
  }

  return properties;
}
