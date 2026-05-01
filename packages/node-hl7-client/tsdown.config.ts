import { defineConfig } from "tsdown";

const sourcemap = process.env.NODE_ENV === "development";

export default defineConfig([
  {
    clean: true,
    dts: false,
    entry: ["src/index.ts"],
    format: ["cjs"],
    minify: !sourcemap,
    outDir: "lib/cjs",
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    dts: false,
    entry: ["src/index.ts"],
    format: ["esm"],
    minify: !sourcemap,
    outDir: "lib/esm",
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    clean: false,
    dts: false,
    entry: ["src/hl7.ts"],
    format: ["cjs"],
    minify: !sourcemap,
    outDir: "lib/cjs",
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    dts: false,
    entry: ["src/hl7.ts"],
    format: ["esm"],
    minify: !sourcemap,
    outDir: "lib/esm",
    sourcemap: sourcemap,
    target: "esnext",
  },
  {
    entry: ["src/index.ts"],
    outDir: "lib/types",
  },
  {
    entry: ["src/hl7.ts"],
    outDir: "lib/types",
  },
]);
