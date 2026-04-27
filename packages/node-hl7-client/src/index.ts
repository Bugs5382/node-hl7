import { Batch } from "./builder/batch";
import { FileBatch } from "./builder/fileBatch";
import { HL7Node } from "./builder/interface/hL7Node";
import { Message } from "./builder/message";
import { EmptyNode } from "./builder/modules/emptyNode";
import { NodeBase } from "./builder/modules/nodeBase";
import { Segment } from "./builder/modules/segment";
import { SegmentList } from "./builder/modules/segmentList";
import { Client } from "./client/client";
import { Connection, IConnection } from "./client/connection";
import { InboundResponse } from "./client/inboundResponse";
import { Delimiters, ReadyState } from "./declaration/enum";
import {
  FallBackHandler,
  NotifyPendingCount,
  OutboundHandler,
} from "./modules/types";

export { HL7Error, HL7FatalError, HL7ParserError } from "./helpers/exception";
export { MLLPCodec } from "./modules/codec";
export type {
  ClientBuilderFileOptions,
  ClientBuilderMessageOptions,
  ClientBuilderOptions,
  ClientListenerOptions,
  ClientOptions,
  MessageItem,
} from "./modules/types";
export {
  Batch,
  Client,
  Connection,
  Delimiters,
  EmptyNode,
  FileBatch,
  InboundResponse,
  Message,
  NodeBase,
  ReadyState,
  Segment,
  SegmentList,
};
export type {
  FallBackHandler,
  HL7Node,
  IConnection,
  NotifyPendingCount,
  OutboundHandler,
};

export { assertNumber } from "@/utils/assertNumber";
export { createHL7Date, padHL7Date } from "@/utils/createHL7Date";
export { decodeHexString } from "@/utils/decodeHexString";
export { escapeForRegExp } from "@/utils/escapeForRegExp";
export { expBackoff } from "@/utils/expBackoff";
export { detectIPFamily, validIPv4, validIPv6 } from "@/utils/ipAddress";
export { isBatch, isFile, isHL7Number, isHL7String } from "@/utils/is";
export { randomString } from "@/utils/randomString";

// Re-export the version-specific HL7 builder classes, segment specs, and
// helpers from `./hl7` so callers (and tests) can do
// `import { HL7_2_8, SEGMENT_SPECS } from "node-hl7-client"` without having
// to drill into deep `node-hl7-client/src/hl7/<ver>` subpaths (which the IDE
// flags due to the dotted directory names).
export * from "./hl7";
export { HL7ValidationError } from "./helpers/exception";

export default Client;
