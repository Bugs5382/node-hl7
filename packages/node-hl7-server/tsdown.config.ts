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
    splitting: false,
    target: "esnext",
  },
  {
    dts: false,
    entry: ["src/index.ts"],
    format: ["esm"],
    minify: !sourcemap,
    outDir: "lib/esm",
    sourcemap: sourcemap,
    splitting: false,
    target: "esnext",
  },
  {
    dts: {
      only: true,
    },
    entry: ["src/index.ts"],
    outDir: "lib/types",
  },
]);
