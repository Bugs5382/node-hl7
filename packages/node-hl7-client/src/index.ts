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

export type { NotifyPendingCount,  };

export { Message } from "./builder/message";
export { EmptyNode } from "./builder/modules/emptyNode";
export { NodeBase } from "./builder/modules/nodeBase";
export { Segment } from "./builder/modules/segment";
export { SegmentList } from "./builder/modules/segmentList";
export { Client, Client as default } from "./client/client";
export {Connection, type IConnection} from "./client/connection";
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
  FallBackHandler, MessageItem, OutboundHandler,
} from "./modules/types";
export { assertNumber } from "@/utils/assertNumber";
export { createHL7Date, padHL7Date } from "@/utils/createHL7Date";
export { decodeHexString } from "@/utils/decodeHexString";
export { escapeForRegExp } from "@/utils/escapeForRegExp";
export { expBackoff } from "@/utils/expBackoff";
export { detectIPFamily, validIPv4, validIPv6 } from "@/utils/ipAddress";
export { isBatch, isFile, isHL7Number, isHL7String } from "@/utils/is";

export { randomString } from "@/utils/randomString";
