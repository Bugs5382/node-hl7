import { EmptyNode, Message } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

import { MSH_HEADER } from "./__data__/constants";

/**
 * Build a minimal-but-real Message that exercises ValueNode through the
 * normal accessors. Using the public API keeps these tests resilient to
 * internal-class moves while still touching the methods that are otherwise
 * uncovered.
 */
function buildSampleMessage(): Message {
  const m = new Message({
    messageHeader: { ...MSH_HEADER, msh_10: "CTRL_001" },
  });
  // Ints, floats, booleans, and a date that includes a timezone offset.
  m.set("OBX.1", "1");
  m.set("OBX.2", "NM");
  m.set("OBX.5", "98.6");
  m.set("OBX.11", "Y");
  m.set("OBX.13", "42");
  m.set("OBX.14", "20240101010159+0100");
  return m;
}

describe("builder modules — ValueNode toX & EmptyNode", () => {
  describe("ValueNode value coercion", () => {
    test("toString returns the underlying field value", () => {
      const m = buildSampleMessage();
      expect(m.get("OBX.5").toString()).toBe("98.6");
    });

    test("toInteger parses int-shaped fields", () => {
      const m = buildSampleMessage();
      expect(m.get("OBX.13").toInteger()).toBe(42);
    });

    test("toFloat parses decimal-shaped fields", () => {
      const m = buildSampleMessage();
      expect(m.get("OBX.5").toFloat()).toBeCloseTo(98.6);
    });

    test("toBoolean accepts Y as true and N as false", () => {
      const m = buildSampleMessage();
      m.set("OBX.11", "Y");
      expect(m.get("OBX.11").toBoolean()).toBe(true);
      m.set("OBX.11", "N");
      expect(m.get("OBX.11").toBoolean()).toBe(false);
    });

    test("toBoolean throws on anything other than Y/N", () => {
      const m = buildSampleMessage();
      m.set("OBX.11", "MAYBE");
      expect(() => m.get("OBX.11").toBoolean()).toThrow(
        /Not a valid value for boolean value/,
      );
    });

    test("toDate parses YYYYMMDDHHMMSS+TZ offset to UTC instant", () => {
      const m = buildSampleMessage();
      // 20240101010159+0100  →  2024-01-01T01:01:59 in UTC+1 → 00:01:59 UTC
      expect(m.get("OBX.14").toDate().toISOString()).toBe(
        "2024-01-01T00:01:59.000Z",
      );
    });

    test("toDate without timezone returns a local-time Date", () => {
      const m = buildSampleMessage();
      m.set("OBX.14", "20240101010159");
      const d = m.get("OBX.14").toDate();
      expect(d.getFullYear()).toBe(2024);
      expect(d.getMonth()).toBe(0); // January
      expect(d.getDate()).toBe(1);
      expect(d.getHours()).toBe(1);
      expect(d.getMinutes()).toBe(1);
      expect(d.getSeconds()).toBe(59);
    });

    test("toDate handles short YYYYMMDD with default zero time", () => {
      const m = buildSampleMessage();
      m.set("OBX.14", "20240315");
      const d = m.get("OBX.14").toDate();
      expect(d.getFullYear()).toBe(2024);
      expect(d.getMonth()).toBe(2); // March
      expect(d.getDate()).toBe(15);
      expect(d.getHours()).toBe(0);
    });
  });

  describe("EmptyNode", () => {
    // EmptyNode is what the API returns when a path doesn't exist; it
    // implements HL7Node by either no-oping or throwing on unsupported
    // operations. These tests pin that contract so future refactors don't
    // silently shift behavior.
    const node = new EmptyNode();

    test("missing path on a Message returns an EmptyNode-like value", () => {
      const m = new Message({
        messageHeader: { ...MSH_HEADER, msh_10: "CTRL_X" },
      });
      const missing = m.get("ZZZ.99.99");
      expect(missing.toString()).toBe("");
      expect(missing.length).toBe(0);
      expect(missing.exists("anything")).toBe(false);
      expect(missing.isEmpty()).toBe(true);
    });

    test("get returns itself, set returns itself", () => {
      expect(node.get("any")).toBe(node);
      expect(node.set("any", "value")).toBe(node);
    });

    test("write returns itself (no-op)", () => {
      expect(node.write(["x"], "value")).toBe(node);
    });

    test("toString is empty, length is 0, isEmpty is true", () => {
      expect(node.toString()).toBe("");
      expect(node.length).toBe(0);
      expect(node.isEmpty()).toBe(true);
    });

    test("exists is always false, toArray is empty", () => {
      expect(node.exists("anything")).toBe(false);
      expect(node.toArray()).toEqual([]);
    });

    test("name throws (not implemented)", () => {
      expect(() => node.name).toThrow(/Method not implemented/);
    });

    test("forEach throws (not implemented)", () => {
      expect(() => node.forEach(() => {})).toThrow(/Method not implemented/);
    });

    test("toFile throws (not implemented)", () => {
      expect(() => node.toFile("x")).toThrow(/Method not implemented/);
    });

    test("toRaw throws (not implemented)", () => {
      expect(() => node.toRaw()).toThrow(/Method not implemented/);
    });

    test("toDate / toInteger / toFloat / toBoolean throw", () => {
      expect(() => node.toDate()).toThrow(/Method not implemented/);
      expect(() => node.toInteger()).toThrow(/Method not implemented/);
      expect(() => node.toFloat()).toThrow(/Method not implemented/);
      expect(() => node.toBoolean()).toThrow(/Method not implemented/);
    });

    test("read throws and path throws", () => {
      expect(() => node.read(["x"])).toThrow(/Method not implemented/);
      expect(() => node.path).toThrow(/Method not implemented/);
    });
  });

  describe("SegmentList & SubComponent (via Message API)", () => {
    test("repeated segments yield a usable list", () => {
      const m = new Message({
        messageHeader: { ...MSH_HEADER, msh_10: "CTRL_LIST" },
      });
      m.addSegment("EVN").set("1", "A01");
      m.addSegment("EVN").set("1", "A04");

      const list = m.get("EVN");
      expect(list.toString()).toContain("EVN");
      expect(list.name).toBe("EVN");

      let count = 0;
      list.forEach(() => count++);
      expect(count).toBe(2);
    });

    test("sub-component access exercises SubComponent unescape path", () => {
      const m = new Message({
        text: "MSH|^~\\&|||||20240101000000||ADT^A01|CTRL_SUB|D|2.7\rPID|||MRN1^^^FAC&SYS&IDTYPE",
      });
      // PID.3 is a composite — drill into a sub-component
      expect(m.get("PID.3.4.1").toString()).toBe("FAC");
      expect(m.get("PID.3.4.2").toString()).toBe("SYS");
      expect(m.get("PID.3.4.3").toString()).toBe("IDTYPE");
    });
  });
});
