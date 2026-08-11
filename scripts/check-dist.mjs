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
/**
 * Guard the published tarball of every workspace package. Run after `npm run
 * build` — it inspects the real build output and the exact file list npm
 * would publish.
 *
 * It exists because of issue #47: the `lib/types` tsdown configs did not ask
 * for declaration-only output, so tsdown also emitted a full runtime bundle
 * plus JS source maps next to the `.d.mts` files. node-hl7-client went from
 * ~180 KB unpacked in v3.2.0 to ~44 MB in v4.x without anybody noticing,
 * because nothing in CI looked at the size of what was being shipped.
 *
 * Two independent checks:
 *
 * 1. Structure — `lib/types` may contain declarations only. A runtime `.mjs`
 *    or a JS `.map` in there means a config regressed to emitting JS.
 * 2. Budget — the unpacked size npm reports must stay under the per-package
 *    limit below. This catches growth the structural check cannot see, such
 *    as the entry bundles re-embedding the shared HL7 catalogue instead of
 *    code-splitting it into a shared chunk.
 *
 * Raise a budget deliberately, in the same commit as the change that needs the
 * headroom, so the increase shows up in review.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Maximum unpacked size npm may report, in bytes, per package. */
const UNPACKED_SIZE_BUDGET = {
  "node-hl7-client": 12 * 1024 * 1024,
  "node-hl7-server": 1 * 1024 * 1024,
};

const repoRoot = path.join(fileURLToPath(new URL(".", import.meta.url)), "..");
const packagesDir = path.join(repoRoot, "packages");

/**
 * Format a byte count the way the failure messages read best.
 * @param {number} bytes
 * @returns {string}
 */
const formatBytes = (bytes) => {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(1)} KB`;
};

/**
 * List every file under a directory, relative to it.
 * @param {string} dir
 * @returns {string[]}
 */
const listFiles = (dir) =>
  fs
    .readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) =>
      path.relative(dir, path.join(entry.parentPath, entry.name)),
    );

/**
 * Ask npm for the file list and unpacked size of the tarball it would publish.
 * `--ignore-scripts` keeps `prepublishOnly` from rebuilding what we are here
 * to inspect.
 * @param {string} packageDir
 * @returns {{unpackedSize: number, entryCount: number}}
 */
const packSummary = (packageDir) => {
  const raw = execFileSync(
    "npm",
    ["pack", "--dry-run", "--json", "--ignore-scripts"],
    { cwd: packageDir, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
  );
  const [result] = JSON.parse(raw);
  return { entryCount: result.entryCount, unpackedSize: result.unpackedSize };
};

/** @type {string[]} */
const failures = [];

for (const packageName of fs.readdirSync(packagesDir).toSorted()) {
  const packageDir = path.join(packagesDir, packageName);
  if (!fs.existsSync(path.join(packageDir, "package.json"))) continue;

  const libDir = path.join(packageDir, "lib");
  if (!fs.existsSync(libDir)) {
    failures.push(`${packageName}: no lib/ — run \`npm run build\` first.`);
    continue;
  }

  const typesDir = path.join(libDir, "types");
  if (fs.existsSync(typesDir)) {
    const strays = listFiles(typesDir).filter(
      (file) => !file.endsWith(".d.mts") && !file.endsWith(".d.cts"),
    );
    if (strays.length > 0) {
      failures.push(
        `${packageName}: lib/types must hold declarations only, found ` +
          `${strays.length} other file(s): ${strays.toSorted().join(", ")}. ` +
          `Set \`dts: { emitDtsOnly: true }\` and \`sourcemap: false\` on the ` +
          `lib/types entry in tsdown.config.mts.`,
      );
    }
  }

  const budget = UNPACKED_SIZE_BUDGET[packageName];
  if (budget === undefined) {
    failures.push(
      `${packageName}: no UNPACKED_SIZE_BUDGET entry — add one in ` +
        `scripts/check-dist.mjs so this package is covered.`,
    );
    continue;
  }

  const { entryCount, unpackedSize } = packSummary(packageDir);
  const status = unpackedSize > budget ? "OVER" : "ok";
  process.stdout.write(
    `${packageName}: ${formatBytes(unpackedSize)} unpacked in ${entryCount} ` +
      `files (budget ${formatBytes(budget)}) — ${status}\n`,
  );
  if (unpackedSize > budget) {
    failures.push(
      `${packageName}: unpacked size ${formatBytes(unpackedSize)} exceeds the ` +
        `${formatBytes(budget)} budget.`,
    );
  }
}

if (failures.length > 0) {
  process.stderr.write(`\nPublished-package check failed:\n`);
  for (const failure of failures) process.stderr.write(`  - ${failure}\n`);
  process.exit(1);
}

process.stdout.write("Published-package check passed.\n");
