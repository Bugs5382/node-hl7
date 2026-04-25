import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const configDir = fileURLToPath(new URL(".", import.meta.url));
const clientSrc = path.join(configDir, "packages/node-hl7-client/src");
const serverSrc = path.join(configDir, "packages/node-hl7-server/src");

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      exclude: ["*.mts", "*.mjs", "**/docs/**", "**/lib/**"],
    },
  },
  plugins: [
    {
      name: "monorepo-at-alias",
      resolveId(source, importer) {
        if (!source.startsWith("@/") || !importer) return null;
        const clientMatch = importer.match(/^(.+\/packages\/node-hl7-client\/src)\b/);
        const serverMatch = importer.match(/^(.+\/packages\/node-hl7-server\/src)\b/);
        const srcDir = clientMatch?.[1] ?? serverMatch?.[1] ?? null;
        if (!srcDir) return null;
        const resolved = path.join(srcDir, source.slice(2));
        if (resolved.endsWith(".ts") || resolved.endsWith(".tsx")) return resolved;
        for (const ext of [".ts", ".tsx", "/index.ts"]) {
          const candidate = resolved + ext;
          if (fs.existsSync(candidate)) return candidate;
        }
        return resolved + ".ts";
      },
    },
  ],
  resolve: {
    alias: [
      { find: /^node-hl7-client\/src(.*)/, replacement: `${clientSrc}$1` },
      { find: /^node-hl7-server\/src(.*)/, replacement: `${serverSrc}$1` },
      { find: "node-hl7-client", replacement: path.join(clientSrc, "index.ts") },
      { find: "node-hl7-server", replacement: path.join(serverSrc, "index.ts") },
    ],
  },
});
