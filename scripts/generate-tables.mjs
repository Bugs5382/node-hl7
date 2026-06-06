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
 * Generate the per-version HL7 value-table registry from the Caristix HL7
 * Definition tables. Gives node-hl7-client full table parity with go-hl7.
 *
 * The ~480-table data set is embedded as a single JSON string parsed at module
 * load — NOT as a TypeScript object literal. A literal that large makes
 * typescript-eslint and the bundler pathologically slow (it hangs eslint); a
 * string is a single trivial token to every tool and parses in milliseconds at
 * runtime. The file is also eslint-disabled since it is fully generated.
 *
 * Source order:
 *   1. Caristix JSON vendored in the sibling go-hl7 checkout (offline, exact
 *      parity with go-hl7). Override with CARISTIX_DIR=/path/to/caristix.
 *   2. Fallback: the Caristix HL7 Definition API (cached at /tmp/caristix-cache).
 *
 * Developer-only. The generated registry.ts is committed; run:
 *   node scripts/generate-tables.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const OUT_FILE = path.join(
  REPO_ROOT,
  "packages/node-hl7-client/src/hl7/tables/registry.ts",
);
const CACHE_DIR = "/tmp/caristix-cache";
const API = "https://hl7-definition.caristix.com/v2-api/1";

const VERSIONS = [
  "2.1",
  "2.2",
  "2.3",
  "2.3.1",
  "2.4",
  "2.5",
  "2.5.1",
  "2.6",
  "2.7",
  "2.7.1",
  "2.8",
];

const VENDOR_DIR =
  process.env.CARISTIX_DIR ||
  path.resolve(REPO_ROOT, "../go-hl7/cmd/gentables/caristix");
const useVendor = fs.existsSync(VENDOR_DIR);
console.log(
  useVendor
    ? `Source: vendored Caristix JSON at ${VENDOR_DIR}`
    : `Source: Caristix API (${API})`,
);

async function fetchCached(url) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cachePath = path.join(
    CACHE_DIR,
    url.replaceAll(/[^a-zA-Z0-9._-]+/g, "_") + ".json",
  );
  if (fs.existsSync(cachePath))
    return JSON.parse(fs.readFileSync(cachePath, "utf8"));
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const json = await res.json();
  fs.writeFileSync(cachePath, JSON.stringify(json));
  return json;
}

async function fromApi(ver) {
  const out = {};
  const list = await fetchCached(`${API}/HL7v${ver}/Tables`);
  const tasks = list.map((t) => async () => {
    try {
      const detail = await fetchCached(`${API}/HL7v${ver}/Tables/${t.id}`);
      const id = normId(detail.tableId ?? detail.id ?? t.id);
      const values = (detail.entries ?? [])
        .map((e) => e?.value)
        .filter((v) => typeof v === "string" && v.length > 0);
      if (values.length > 0) out[id] = values;
    } catch (error) {
      console.warn(`  warn: v${ver}/Tables/${t.id} — ${error.message}`);
    }
  });
  await pool(tasks);
  return out;
}

function fromVendor(ver) {
  const dir = path.join(VENDOR_DIR, `HL7v${ver}`);
  const out = {};
  if (!fs.existsSync(dir)) return out;
  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith(".json") || file.startsWith("_")) continue;
    let json;
    try {
      json = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
    } catch {
      continue;
    }
    const id = normId(json.tableId ?? json.id ?? path.basename(file, ".json"));
    const values = (json.entries ?? [])
      .map((e) => e?.value)
      .filter((v) => typeof v === "string" && v.length > 0);
    if (values.length > 0) out[id] = values;
  }
  return out;
}

function normId(raw) {
  const s = String(raw).trim();
  return /^\d+$/.test(s) ? s.padStart(4, "0") : s;
}

async function pool(tasks, concurrency = 16) {
  let i = 0;
  async function worker() {
    while (i < tasks.length) await tasks[i++]();
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, tasks.length) }, worker),
  );
}

const tablesByVersion = {};
for (const ver of VERSIONS) {
  tablesByVersion[ver] = useVendor ? fromVendor(ver) : await fromApi(ver);
  console.log(`  v${ver}: ${Object.keys(tablesByVersion[ver]).length} tables`);
}

// Order keys deterministically so the generated file is stable across runs.
const ordered = {};
const uniqueIds = new Set();
for (const ver of VERSIONS) {
  ordered[ver] = {};
  for (const id of Object.keys(tablesByVersion[ver]).toSorted()) {
    ordered[ver][id] = tablesByVersion[ver][id];
    uniqueIds.add(id);
  }
}

const HEADER = `/*
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
*/`;

// The ~480-table data set is emitted as plain JS (allowJs is off, so TS never
// type-checks it) and typed via a loose .d.ts. A literal this large in a
// type-checked .ts file hangs typescript-eslint; the loader below only ever
// exposes the declared (non-literal) type to the program.
const embedded = JSON.stringify(JSON.stringify(ordered));
const dir = path.dirname(OUT_FILE);
fs.mkdirSync(dir, { recursive: true });

// 1. Data: plain JS, parsed once at module load (fast; not in the TS program).
fs.writeFileSync(
  path.join(dir, "registry.data.js"),
  `/* eslint-disable */
// Generated by scripts/generate-tables.mjs. Do not edit by hand.
export const RAW_TABLES = JSON.parse(${embedded});
`,
);

// 2. Loose type declaration so TS types the import without ever parsing the
//    data literal.
fs.writeFileSync(
  path.join(dir, "registry.data.d.ts"),
  `${HEADER}
// Generated by scripts/generate-tables.mjs. Do not edit by hand.
export declare const RAW_TABLES: Readonly<
  Record<string, Readonly<Record<string, readonly string[]>>>
>;
`,
);

// 3. Typed loader — the only table file the TS program parses.
fs.writeFileSync(
  OUT_FILE,
  `${HEADER}
/**
 * Per-version HL7 value tables (code sets) — full parity with go-hl7, generated
 * from the Caristix HL7 Definition tables by scripts/generate-tables.mjs. Do not
 * edit by hand — re-run the generator. Data lives in registry.data.js (kept out
 * of the type-checked program; a literal this large hangs typescript-eslint).
 *
 * @since 4.0.0
 */
import { HL7Version } from "@/hl7/metadata/types";

import { RAW_TABLES } from "./registry.data.js";

export const TABLES = RAW_TABLES as Readonly<
  Record<HL7Version, Readonly<Record<string, readonly string[]>>>
>;

/**
 * Look up an HL7 value table's allowed values for a given version. Accepts a
 * numeric id (e.g. \`396\`) or string id (e.g. \`"0396"\`); ids normalize to
 * 4-char zero-padded form. Returns undefined when the version lacks the table.
 *
 * @since 4.0.0
 */
export function lookupTable(
  version: HL7Version,
  id: number | string,
): readonly string[] | undefined {
  const key =
    typeof id === "number" ? String(id).padStart(4, "0") : id.padStart(4, "0");
  return TABLES[version]?.[key];
}
`,
);

console.log(
  `\nGenerated ${uniqueIds.size} unique tables across ${VERSIONS.length} versions -> ${dir}/registry{.ts,.data.js,.data.d.ts}`,
);
