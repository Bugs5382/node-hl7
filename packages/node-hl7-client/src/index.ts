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
import { HL7Node } from "./builder/interface/hL7Node";
import { IConnection } from "./client/connection";
import {
  FallBackHandler,
  NotifyPendingCount,
  OutboundHandler,
} from "./modules/types";

export { Batch } from "./builder/batch";
export { FileBatch } from "./builder/fileBatch";
export { type HL7Node } from "./builder/interface/hL7Node";

export { Message } from "./builder/message";
export { EmptyNode } from "./builder/modules/emptyNode";
export { NodeBase } from "./builder/modules/nodeBase";
export { Segment } from "./builder/modules/segment";
export { SegmentList } from "./builder/modules/segmentList";
export { Client, Client as default } from "./client/client";
export { Connection, type IConnection } from "./client/connection";
export { InboundResponse } from "./client/inboundResponse";

export { Delimiters, ReadyState } from "./declaration/enum";
export { HL7Error, HL7FatalError, HL7ParserError } from "./helpers/exception";

export { HL7ValidationError } from "./helpers/exception";
// Re-export the version-specific HL7 builder classes, segment specs, and
// helpers from `./hl7` so callers (and tests) can do
// `import { HL7_2_8, SEGMENT_SPECS } from "node-hl7-client"` without having
// to drill into deep `node-hl7-client/src/hl7/<ver>` subpaths (which the IDE
// flags due to the dotted directory names).
export * from "./hl7";
export { MLLPCodec } from "./modules/codec";
export type {
  ClientBuilderFileOptions,
  ClientBuilderMessageOptions,
  ClientBuilderOptions,
  ClientListenerOptions,
  ClientOptions,
  FallBackHandler,
  MessageItem,
  NotifyPendingCount,
  OutboundHandler,
} from "./modules/types";
export { assertNumber } from "@/utils/assertNumber";
export { createHL7Date, padHL7Date } from "@/utils/createHL7Date";
export { decodeHexString } from "@/utils/decodeHexString";
export { escapeForRegExp } from "@/utils/escapeForRegExp";
export { expBackoff } from "@/utils/expBackoff";
export { detectIPFamily, validIPv4, validIPv6 } from "@/utils/ipAddress";
export { isBatch, isFile, isHL7Number, isHL7String } from "@/utils/is";

export { randomString } from "@/utils/randomString";
