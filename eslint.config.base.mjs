import pluginJs from "@eslint/js";
import pluginPrettier from "eslint-plugin-prettier";
import sortClassMembers from "eslint-plugin-sort-class-members";
import tseslint from "typescript-eslint";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  sortClassMembers.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    plugins: {
      prettier: pluginPrettier,
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
