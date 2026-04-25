import { normalizedClientMessageParserOptions } from "@/builder/normalizedParser";
import { HL7FatalError, HL7ParserError } from "@/helpers/exception";
import {
  ClientBuilderMessageOptions,
  ClientBuilderOptions,
} from "@/modules/types";
import { createHL7Date } from "@/utils/createHL7Date";
import { isHL7Number } from "@/utils/is";
import { randomString } from "@/utils/randomString";
import { split } from "@/utils/spilt";
import { FileBatch } from "./fileBatch";
import { HL7Node } from "@/builder/interface/hL7Node";
import { NodeBase } from "./modules/nodeBase";
import { RootBase } from "./modules/rootBase";
import { Segment } from "./modules/segment";
import { SegmentList } from "@/builder/modules/segmentList";

/**
 * Message Class
 * @since 1.0.0
 */
export class Message extends RootBase {
  /** @internal */
  _opt: ReturnType<typeof normalizedClientMessageParserOptions>;

  /**
   * Build the Message or Parse It
   * @since 1.0.0
   * @param props {@link ClientBuilderOptions}
   * @example
   * If you are processing a full message, do this:
   *
   * const message = new Message({text: "The HL7 Message Here"})
   * ... output cut ...
   *
   * If you are building out a message, do this:
   *
   * const message = new Message({messageHeader: { ... MSH Header Required Values Here ... }});
   *
   * which then you add segments with fields and values for your Hl7 message.
   *
   */
  constructor(props?: ClientBuilderMessageOptions) {
    const opt = normalizedClientMessageParserOptions(props);

    super(opt);

    this._opt = opt;

    if (typeof opt.text !== "undefined" && opt.text !== "") {
      const totalMsh = split(opt.text).filter((line: string) => line.startsWith("MSH"));
      if (totalMsh.length !== 0 && totalMsh.length !== 1) {
        throw new HL7FatalError("Multiple MSH segments found. Use Batch.");
      }
    }

    if (typeof this._opt.messageHeader !== "undefined") {
      const msh = this._opt.messageHeader as any;

      if (!msh.msh_9_1 || typeof msh.msh_9_2 === "undefined") {
        throw new Error("MSH.9.1 & MSH 9.2 must be defined.");
      }
      if (msh.msh_9_1.length !== 3) {
        throw new Error("MSH.9.1 must be 3 characters in length.");
      }
      if (msh.msh_9_2.length !== 3) {
        throw new Error("MSH.9.2 must be 3 characters in length.");
      }
      if (
        typeof msh.msh_9_3 !== "undefined" &&
        (msh.msh_9_3.length < 3 || msh.msh_9_3.length > 10)
      ) {
        throw new Error(
          "MSH.9.3 must be 3 to 10 characters in length if specified.",
        );
      }
      if (
        typeof msh.msh_10 !== "undefined" &&
        (msh.msh_10.length < 1 || msh.msh_10.length > 199)
      ) {
        throw new Error(
          "MSH.10 must be greater than 0 and less than 199 characters.",
        );
      }

      this.set("MSH.7", createHL7Date(new Date(), this._opt.date));
      this.set("MSH.9.1", msh.msh_9_1.toString());
      this.set("MSH.9.2", msh.msh_9_2.toString());
      this.set(
        "MSH.9.3",
        typeof msh.msh_9_3 !== "undefined"
          ? msh.msh_9_3.toString()
          : `${msh.msh_9_1}_${msh.msh_9_2}`,
      );
      this.set(
        "MSH.10",
        typeof msh.msh_10 !== "undefined" ? msh.msh_10.toString() : randomString(),
      );
      if (typeof msh.msh_11_1 !== "undefined") {
        this.set("MSH.11.1", msh.msh_11_1.toString());
      } else if (typeof msh.msh_11 !== "undefined") {
        this.set("MSH.11", msh.msh_11.toString());
      }
      if (typeof msh.msh_11_2 !== "undefined") {
        this.set("MSH.11.2", msh.msh_11_2.toString());
      }
      this.set("MSH.12", "2.7");
    }
  }

  /**
   * Add a new segment to a message.
   * @since 1.0.0
   * @remarks Creating a new segment adds an empty segment to the message.
   * It could be blank, or it could have values added into it.
   * @param path
   * @example
   *
   * const message = new Message({. the correct options here .})
   *
   * const segment = message.addSegment('PV1')
   * segment.set('PV1.1', 'Value Here');
   *
   * // When doing this, it overall adds it to the 'message' object
   * // when your output is the final result.
   *
   * const finalMessage = message.toString();
   *
   */
  addSegment(path: string): Segment {
    if (typeof path === "undefined") {
      throw new HL7ParserError("Missing segment path.");
    }

    const preparedPath = this.preparePath(path);
    if (preparedPath.length !== 1) {
      throw new HL7ParserError(`Invalid segment ${path}.`);
    }

    return this.addChild(preparedPath[0]) as Segment;
  }

  /**
   * Get HL7 Segment at Path
   * @since 1.0.0
   * @param path
   */
  get(path: string | number): HL7Node {
    let ret: any;

    if (typeof path === "number") {
      if (path >= 0 && path < this.children.length) {
        ret = this.children[path];
      }
    } else if (path !== "") {
      const _path = this.preparePath(path);
      ret = this.read(_path);
    }

    return typeof ret !== "undefined"
      ? (ret as HL7Node)
      : (NodeBase.empty as HL7Node);
  }

  /**
   * Read a path of a message.
   * @remarks Could return {@link SegmentList}
   * @since 1.0.0
   * @param path
   */
  read(path: string[]): HL7Node {
    const segmentName = path.shift() as string;
    if (path.length === 0) {
      const segments = this.children.filter(
        (x) => (x as Segment).name === segmentName,
      ) as Segment[];
      if (segments.length > 0) {
        return new SegmentList(this, segments) as HL7Node;
      }
    } else {
      if (typeof segmentName === "undefined") {
        throw new HL7ParserError("Segment name is not defined.");
      }
      const segment = this._getFirstSegment(segmentName);
      if (typeof segment !== "undefined") {
        return segment.read(path);
      }
    }
    return Message.empty;
  }

  /**
   * Set HL7 Segment at Path with a Value
   * @since 1.0.0
   * @param path
   * @param value
   */
  set(path: string | number, value?: any): HL7Node {
    if (arguments.length === 1) {
      return this.ensure(path);
    }

    if (typeof path === "string") {
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          this.set(`${path}.${i + 1}`, value[i]);
        }
      } else {
        const _path = this.preparePath(path);
        this.write(_path, this.prepareValue(value));
      }

      return this;
    } else if (isHL7Number(path)) {
      if (Array.isArray(value)) {
        const child = this.ensure(path);
        for (let i = 0, l = value.length; i < l; i++) {
          child.set(i, value[i]);
        }
        return this;
      } else {
        this.setChild(this.createChild(this.prepareValue(value), path), path);
      }

      return this;
    }

    throw new HL7ParserError("Path must be a string or number.");
  }

  /**
   * Create File from a Message
   * @remarks Will procure a file of the saved MSH in the proper format
   * that includes a FHS and FTS segments.
   * @since 1.0.0
   * @param name File Name
   * @param newLine Provide a New Line
   * @param location Where to save the exported file
   * @param extension Custom extension of the file.
   * Default: hl7
   * @example
   * ```ts
   * const message = new Message({text: hl7_batch_string})
   * message.toFile('readTestMSH', true, 'temp/')
   * ```
   * You can set an `extension` parameter on Batch to set a custom extension if you don't want to be HL7.
   */
  toFile(
    name: string,
    newLine?: boolean,
    location?: string,
    extension: string = "hl7",
  ): string {
    const fileBatch = new FileBatch({
      location,
      newLine: newLine === true ? "\n" : "",
      extension,
    });
    fileBatch.start();

    fileBatch.set("FHS.3", this.get("MSH.3").toString());
    fileBatch.set("FHS.4", this.get("MSH.4").toString());
    fileBatch.set("FHS.5", this.get("MSH.5").toString());
    fileBatch.set("FHS.6", this.get("MSH.6").toString());
    fileBatch.set("FHS.7", this.get("MSH.7").toString());
    fileBatch.set(
      "FHS.9",
      `hl7.${name}.${this.get("MSH.7").toString()}.${fileBatch._opt.extension as string}`,
    );
    fileBatch.set("FHS.11", this.get("MSH.10").toString());

    fileBatch.add(this);

    fileBatch.end();

    fileBatch.createFile(name);

    return fileBatch.fileName();
  }

  /**
   * Write Core of the Message
   * @since 1.0.0
   * @param path
   * @param value
   * @protected
   */
  protected writeCore(path: string[], value: string): HL7Node {
    const segmentName = path.shift() as string;
    if (typeof segmentName === "undefined") {
      throw new HL7ParserError("Segment name is not defined.");
    }
    let index = this._getFirstSegmentIndex(segmentName);
    if (index === undefined) {
      index = this.children.length;
    }
    return this.writeAtIndex(path, value, index, segmentName);
  }

  /**
   * Create a new child of a message which is a segment.
   * @since
   * @see {@link Segment}
   * @param text Segment string. Must be 3 characters long.
   * @param _index Not used to create a segment.
   * @protected
   */
  protected createChild(text: string, _index: number): HL7Node {
    return new Segment(this, text.trim());
  }

  /**
   * Path Core
   * @since 1.0.0
   * @protected
   */
  protected pathCore(): string[] {
    return [];
  }

  /**
   * Total Segments
   * @remarks That match the name.
   * @since 4.0.0
   * @param name
   */
  totalSegment(name: string): number {
    return this.children.filter((segment) => (segment as Segment).name === name)
      .length;
  }

  getLastSegment(): Segment {
    return this.children[this.children.length - 1] as Segment;
  }

  getFirstSegment(): Segment {
    return this.children[0] as Segment;
  }

  /** @internal */
  private _getFirstSegment(name: string): Segment | undefined {
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const segment = children[i] as Segment;
      if (segment.name === name) {
        return segment;
      }
    }
    return undefined;
  }

  /** @internal */
  private _getFirstSegmentIndex(name: string): number | undefined {
    const children = this.children;
    for (let i = 0, l = children.length; i < l; i++) {
      const segment = children[i] as Segment;
      if (segment.name === name) {
        return i;
      }
    }
    return undefined;
  }
}

export default Message;
