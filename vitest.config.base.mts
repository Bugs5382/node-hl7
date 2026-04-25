import path from "node:path";
import { defineConfig } from "vitest/config";

type PackageName = "node-hl7-client" | "node-hl7-server";

export function createVitestConfig(dir: string, pkg: PackageName) {
  const packagesDir = path.dirname(dir);
  const testName = pkg.replace("node-hl7-", "");
  const clientSrc = path.resolve(packagesDir, "node-hl7-client/src");
  const serverSrc = path.resolve(packagesDir, "node-hl7-server/src");

  return defineConfig({
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(dir, "./src") },
        { find: /^node-hl7-client\/src(.*)/, replacement: `${clientSrc}$1` },
        { find: /^node-hl7-server\/src(.*)/, replacement: `${serverSrc}$1` },
        { find: "node-hl7-client", replacement: path.resolve(clientSrc, "index.ts") },
        { find: "node-hl7-server", replacement: path.resolve(serverSrc, "index.ts") },
      ],
    },
    test: {
      include: [`../../__tests__/${testName}/**/*.test.ts`],
      coverage: {
        provider: "v8",
        exclude: [
          "*.mts",
          "*.mjs",
          "**/docs/**",
          "**/lib/**",
        ],
      },
    },
  });
}
