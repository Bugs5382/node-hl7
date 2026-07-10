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
import { createESLintConfig } from "@the-rabbit-hole/eslint-config";

export default [
  // Generated HL7 table data (~2 MB JSON embedded in plain JS). It is not
  // hand-authored and must not be linted — typescript-eslint hangs parsing a
  // literal this large. Types are provided by registry.data.d.ts.
  { ignores: ["**/hl7/tables/registry.data.js"] },
  ...createESLintConfig({
    disableExtends: [
      "eslintA11y",
      "eslintReact",
      "eslintStorybook",
      "eslintTesting",
    ],
    rules: {
      // The HL7 builder is a deliberately polymorphic surface — `set(path,
      // value)` accepts strings, numbers, Dates, objects, arrays, etc. across
      // a wide range of segment shapes. Replacing the `any` value type with
      // `unknown` would force every caller to narrow before passing values,
      // defeating the ergonomic point of the fluent builder. The `any` here
      // is intentional and scoped to value-passing API sites; we don't use
      // it to silently bypass type errors elsewhere.
      "@typescript-eslint/no-explicit-any": "off",

      // Honor the conventional `_`-prefix opt-out for intentionally unused
      // identifiers (e.g. callback params that must match an interface).
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],

      // `func-style` (added in eslint-config 0.6) requires function
      // expressions over declarations. It is purely stylistic — it carries no
      // correctness benefit here, and converting declarations to expressions
      // changes hoisting semantics across ~55 existing sites for no gain. We
      // keep the existing declaration style.
      "func-style": "off",

      // The builder tree exposes a plain `children` array on its nodes; it is
      // not the DOM. `unicorn/better-dom-traversing` wants `.firstElementChild`
      // in place of `.children[0]`, which does not exist on these nodes and
      // would break the builder — the rule is a false positive here.
      "unicorn/better-dom-traversing": "off",

      // `newLine` is a documented public parameter on the `toFile(...)` API of
      // both Message and Batch. `unicorn/consistent-compound-words` wants
      // `newline`; renaming it would churn the public surface for no benefit.
      "unicorn/consistent-compound-words": "off",

      // The HL7 acronym is preserved as uppercase in filenames
      // (e.g. createHL7Date.ts) so the casing matches the HL7 spec body.
      "unicorn/filename-case": "off",

      // Prettier formats hex literals as lowercase (0x0b), unicorn wants uppercase (0x0B).
      // Letting prettier own number formatting prevents an autofix loop.
      "unicorn/number-literal-case": "off",

      // Server/Client emit Node.js EventEmitter events as their public
      // API — migrating to EventTarget would break every existing handler.
      "unicorn/prefer-event-target": "off",

      // Public API parameter names (`res`, `props`, `req`, `dir`) and short
      // local idioms ship as documented surface area — auto-renaming them
      // would break consumers.
      "unicorn/prevent-abbreviations": "off",
    },
  }),
  // CLI scripts may exit non-zero on error; that's the whole point.
  {
    files: ["scripts/**/*"],
    rules: {
      "unicorn/no-process-exit": "off",
    },
  },
  // Docker example scripts are standalone CommonJS examples that intentionally
  // call process.exit() and use require() — both are appropriate for runnable
  // demo programs and are reflected in the README usage.
  {
    files: ["docker/**/*.{js,mjs,cjs}"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "unicorn/no-process-exit": "off",
    },
  },
  // Test files use `any` extensively for mocks, stubs, and reaching into
  // internal builder state. Constraining tests to the production type
  // contract would defeat the purpose of the test. The other relaxations
  // below cover idioms that are common and harmless inside test files —
  // describe-scoped helpers and the occasional `.forEach()`.
  {
    files: ["__tests__/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/no-array-for-each": "off",
    },
  },
];
