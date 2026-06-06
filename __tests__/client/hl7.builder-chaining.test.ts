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
import { HL7_2_4 } from "node-hl7-client/src";
import { HL7_2_8 } from "node-hl7-client/src";
import { describe, expect, test } from "vitest";

/**
 * Verifies the chainable builder API.
 *
 * `buildXXX(...)` returns `this` so users can either chain calls or use
 * the existing imperative style. Both styles must produce byte-identical
 * output — chaining is purely an ergonomics layer.
 */
describe("builder chaining", () => {
  const DATE = new Date("2024-01-15T10:20:30Z");

  test("buildXXX returns the builder instance", () => {
    const b = new HL7_2_8();
    const returnValue = b.buildMSH({
      msh_10: "X",
      msh_11_1: "P",
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
    });
    expect(returnValue).toBe(b);
  });

  test("chained calls preserve the version-specific class type", () => {
    // Compile-time check: chaining keeps the HL7_2_4 type so version-specific
    // methods (buildECD) remain accessible on the chain result.
    const out = new HL7_2_4()
      .buildMSH({
        msh_10: "X",
        msh_11_1: "P",
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
      })
      .buildECD({
        ecd_1: "1",
        ecd_2: "RC",
      })
      .toString();

    expect(out).toContain("MSH|");
    expect(out).toContain("ECD|");
  });

  test("chained and imperative builds produce byte-identical output", () => {
    const chained = new HL7_2_4()
      .buildMSH({
        msh_10: "ID1",
        msh_11_1: "P",
        msh_7: DATE,
        msh_9_1: "ADT",
        msh_9_2: "A01",
      })
      .buildECD({
        ecd_1: "1",
        ecd_2: "RC",
        ecd_3: "Y",
      })
      .toString();

    const imperative = new HL7_2_4();
    imperative.buildMSH({
      msh_10: "ID1",
      msh_11_1: "P",
      msh_7: DATE,
      msh_9_1: "ADT",
      msh_9_2: "A01",
    });
    imperative.buildECD({
      ecd_1: "1",
      ecd_2: "RC",
      ecd_3: "Y",
    });

    expect(chained).toBe(imperative.toString());
  });
});
