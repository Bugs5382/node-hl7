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
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const configDir = fileURLToPath(new URL(".", import.meta.url));
const clientSource = path.join(configDir, "packages/node-hl7-client/src");
const serverSource = path.join(configDir, "packages/node-hl7-server/src");

export default defineConfig({
  plugins: [
    {
      name: "monorepo-at-alias",
      resolveId(source, importer) {
        if (!source.startsWith("@/") || !importer) return null;
        const clientMatch = importer.match(
          /^(.+\/packages\/node-hl7-client\/src)\b/,
        );
        const serverMatch = importer.match(
          /^(.+\/packages\/node-hl7-server\/src)\b/,
        );
        const srcDir = clientMatch?.[1] ?? serverMatch?.[1] ?? null;
        if (!srcDir) return null;
        const resolved = path.join(srcDir, source.slice(2));
        if (resolved.endsWith(".ts") || resolved.endsWith(".tsx"))
          return resolved;
        for (const extension of [".ts", ".tsx", "/index.ts"]) {
          const candidate = resolved + extension;
          if (fs.existsSync(candidate)) return candidate;
        }
        return resolved + ".ts";
      },
    },
  ],
  resolve: {
    alias: [
      { find: /^node-hl7-client\/src(.*)/, replacement: `${clientSource}$1` },
      { find: /^node-hl7-server\/src(.*)/, replacement: `${serverSource}$1` },
      {
        find: "node-hl7-client",
        replacement: path.join(clientSource, "index.ts"),
      },
      {
        find: "node-hl7-server",
        replacement: path.join(serverSource, "index.ts"),
      },
    ],
  },
  test: {
    coverage: {
      exclude: ["*.mts", "*.mjs", "**/docs/**", "**/lib/**"],
      provider: "v8",
    },
  },
});
