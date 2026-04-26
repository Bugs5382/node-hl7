import { createESLintConfig } from "@the-rabbit-hole/eslint-config";

export default createESLintConfig({
  disableExtends: [
    "eslintA11y",
    "eslintReact",
    "eslintStorybook",
    "eslintTesting",
  ],
});
