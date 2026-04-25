import baseConfig from "../../eslint.config.base.mjs";

export default [
  ...baseConfig,
  {
    ignores: [".node_modules/*", "docs/*", "lib/*", "__tests__/*", "docker/*"],
  },
];
