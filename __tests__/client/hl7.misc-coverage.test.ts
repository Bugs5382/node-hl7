import { Batch, FileBatch, Message } from "node-hl7-client/src";
import { ParserPlan } from "node-hl7-client/src/modules/parserPlan";
import { describe, expect, test } from "vitest";
import { MSH_HEADER } from "./__data__/constants";

/**
 * Targeted edge-case coverage for small modules — ParserPlan defaults,
 * Message addSegment edge paths, Batch / FileBatch behavior. These pin
 * fallbacks that nothing else exercises.
 */
describe("ParserPlan — separator defaults when input is short", () => {
  test("only field separator → component, repetition, escape, sub default", () => {
    const p = new ParserPlan("|");
    expect(p.separatorField).toBe("|");
    expect(p.separatorComponent).toBe("^");
    expect(p.separatorRepetition).toBe("~");
    expect(p.separatorEscape).toBe("\\");
    expect(p.separatorSubComponent).toBe("&");
  });

  test("field + component → repetition, escape, sub default", () => {
    const p = new ParserPlan("|^");
    expect(p.separatorField).toBe("|");
    expect(p.separatorComponent).toBe("^");
    expect(p.separatorRepetition).toBe("~");
    expect(p.separatorEscape).toBe("\\");
    expect(p.separatorSubComponent).toBe("&");
  });

  test("field + component + repetition → escape, sub default", () => {
    const p = new ParserPlan("|^~");
    expect(p.separatorField).toBe("|");
    expect(p.separatorComponent).toBe("^");
    expect(p.separatorRepetition).toBe("~");
    expect(p.separatorEscape).toBe("\\");
    expect(p.separatorSubComponent).toBe("&");
  });

  test("field + component + repetition + escape → sub default", () => {
    const p = new ParserPlan("|^~\\");
    expect(p.separatorField).toBe("|");
    expect(p.separatorComponent).toBe("^");
    expect(p.separatorRepetition).toBe("~");
    expect(p.separatorEscape).toBe("\\");
    expect(p.separatorSubComponent).toBe("&");
  });

  test("full canonical separator set is parsed verbatim", () => {
    const p = new ParserPlan("|^~\\&");
    expect(p.separatorField).toBe("|");
    expect(p.separatorComponent).toBe("^");
    expect(p.separatorRepetition).toBe("~");
    expect(p.separatorEscape).toBe("\\");
    expect(p.separatorSubComponent).toBe("&");
  });
});

describe("Batch / FileBatch — basic round-trip", () => {
  function newMsg(controlId: string): Message {
    return new Message({
      messageHeader: { ...MSH_HEADER, msh_10: controlId },
    });
  }

  test("Batch can wrap multiple messages and produce a string", () => {
    const batch = new Batch();
    batch.start();
    batch.add(newMsg("CTRL_A"));
    batch.add(newMsg("CTRL_B"));
    batch.end();
    const out = batch.toString();
    expect(out).toContain("BHS");
    expect(out).toContain("BTS");
    expect(out).toContain("CTRL_A");
    expect(out).toContain("CTRL_B");
  });

  test("FileBatch produces FHS/FTS framing", () => {
    const file = new FileBatch();
    file.start();
    file.add(newMsg("CTRL_FILE"));
    file.end();
    const out = file.toString();
    expect(out).toContain("FHS");
    expect(out).toContain("FTS");
    expect(out).toContain("CTRL_FILE");
  });
});

describe("Message — high-level segment helpers", () => {
  test("totalSegment counts segments by name", () => {
    const m = new Message({
      messageHeader: { ...MSH_HEADER, msh_10: "X" },
    });
    m.addSegment("EVN");
    m.addSegment("EVN");
    m.addSegment("PID");
    expect(m.totalSegment("EVN")).toBe(2);
    expect(m.totalSegment("PID")).toBe(1);
    expect(m.totalSegment("NOPE")).toBe(0);
  });

  test("getFirstSegment / getLastSegment return the expected ends", () => {
    const m = new Message({
      messageHeader: { ...MSH_HEADER, msh_10: "X" },
    });
    m.addSegment("EVN");
    const last = m.addSegment("PID");
    expect(m.getFirstSegment().name).toBe("MSH");
    expect(m.getLastSegment()).toBe(last);
  });

  test("addSegment with an empty name throws", () => {
    const m = new Message({
      messageHeader: { ...MSH_HEADER, msh_10: "X" },
    });
    expect(() => m.addSegment("")).toThrow();
  });

  test("addSegment with undefined path throws HL7ParserError", () => {
    const m = new Message({
      messageHeader: { ...MSH_HEADER, msh_10: "X" },
    });
    expect(() => m.addSegment(undefined as any)).toThrow(/Missing segment path/);
  });

  test("addSegment with a multi-segment path throws HL7ParserError", () => {
    const m = new Message({
      messageHeader: { ...MSH_HEADER, msh_10: "X" },
    });
    expect(() => m.addSegment("PID.1")).toThrow(/Invalid segment/);
  });
});
