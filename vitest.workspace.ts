import type { TestProjectInlineConfiguration } from "vitest/config";

export default [
  {
    extends: "./vitest.config.ts",
    test: {
      name: "node-hl7-client",
      include: ["__tests__/client/**/*.test.ts"],
    },
  },
  {
    extends: "./vitest.config.ts",
    test: {
      name: "node-hl7-server",
      include: ["__tests__/server/**/*.test.ts"],
    },
  },
] satisfies TestProjectInlineConfiguration[];
