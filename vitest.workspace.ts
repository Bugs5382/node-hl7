import type { TestProjectInlineConfiguration } from "vitest/config";

export default [
  {
    extends: "./vitest.config.ts",
    test: {
      include: ["__tests__/client/**/*.test.ts"],
      name: "node-hl7-client",
    },
  },
  {
    extends: "./vitest.config.ts",
    test: {
      include: ["__tests__/server/**/*.test.ts"],
      name: "node-hl7-server",
    },
  },
] satisfies TestProjectInlineConfiguration[];
