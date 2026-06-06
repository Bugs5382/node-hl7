import path from "node:path";
import { defineConfig } from "vitest/config";

type PackageName = "node-hl7-client" | "node-hl7-server";

export function createVitestConfig(dir: string, package_: PackageName) {
  const packagesDir = path.dirname(dir);
  const testName = package_.replace("node-hl7-", "");
  const clientSource = path.resolve(packagesDir, "node-hl7-client/src");
  const serverSource = path.resolve(packagesDir, "node-hl7-server/src");

  return defineConfig({
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(dir, "./src") },
        { find: /^node-hl7-client\/src(.*)/, replacement: `${clientSource}$1` },
        { find: /^node-hl7-server\/src(.*)/, replacement: `${serverSource}$1` },
        {
          find: "node-hl7-client",
          replacement: path.resolve(clientSource, "index.ts"),
        },
        {
          find: "node-hl7-server",
          replacement: path.resolve(serverSource, "index.ts"),
        },
      ],
    },
    test: {
      include: [`../../__tests__/${testName}/**/*.test.ts`],
      coverage: {
        provider: "v8",
        exclude: ["*.mts", "*.mjs", "**/docs/**", "**/lib/**"],
      },
    },
  });
}
