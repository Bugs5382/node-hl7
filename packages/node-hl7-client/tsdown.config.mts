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
import { defineConfig } from "tsdown";

const sourcemap = process.env.NODE_ENV === "development";

// `index` and `hl7` are built together per format rather than one config per
// entry. `index.ts` does `export * from "./hl7"`, so building them separately
// embedded a second copy of the multi-megabyte generated HL7 catalogue in each
// bundle; sharing one config lets rolldown hoist the common code into a chunk
// both entries import. See issue #47.
const entry = ["src/index.ts", "src/hl7.ts"];

export default defineConfig([
  {
    clean: true,
    dts: false,
    entry,
    format: ["cjs"],
    minify: !sourcemap,
    outDir: "lib/cjs",
    outputOptions: { exports: "named" },
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    dts: false,
    entry,
    format: ["esm"],
    minify: !sourcemap,
    outDir: "lib/esm",
    outputOptions: { exports: "named" },
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    // Declarations only. Without `emitDtsOnly` tsdown also emits a runtime
    // bundle here, and `sourcemap` must be pinned off because it silently
    // defaults to `true` whenever `declarationMap` is set in tsconfig — that
    // pair shipped ~29 MB of duplicate JS and maps in v4.x (issue #47).
    // Declaration maps stay off as well: they reference `src/`, which the
    // `files` allowlist does not publish.
    dts: { emitDtsOnly: true, sourcemap: false },
    entry,
    outDir: "lib/types",
    sourcemap: false,
    target: "esnext",
  },
]);
