/**
 * Generate per-segment SegmentSpec TypeScript files from the Caristix HL7
 * Definition API (https://hl7-definition.caristix.com/v2-api/1).
 *
 * The Caristix API returns canonical HL7 usage codes (R/O/B/W/D/X/C) directly
 * — no integer-encoding to decode.
 *
 * This is a developer-only script. The generated `.ts` files are committed
 * to the repo; end users do NOT make any network calls. To regenerate, run
 * `node scripts/generate-segment-specs.mjs` (network access required).
 *
 * Fetched JSON is cached at /tmp/caristix-cache to make re-runs fast and
 * to avoid hammering Caristix on iteration.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(
  REPO_ROOT,
  "packages/node-hl7-client/src/hl7/metadata/segments",
);
const CACHE_DIR = "/tmp/caristix-cache";

const VERSIONS = [
  "2.1", "2.2", "2.3", "2.3.1", "2.4",
  "2.5", "2.5.1", "2.6", "2.7", "2.7.1", "2.8",
];

const API = "https://hl7-definition.caristix.com/v2-api/1";

/** Caristix usage codes are already canonical HL7 codes — pass through. */
const VALID_USAGE = new Set(["R", "O", "B", "W", "D", "X", "C"]);

/**
 * Fetch a JSON document from Caristix, caching by URL on disk so re-runs are
 * cheap and the API isn't hit unnecessarily.
 */
async function fetchCached(url) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cacheKey = url.replace(/[^a-zA-Z0-9._-]+/g, "_");
  const cachePath = path.join(CACHE_DIR, cacheKey + ".json");
  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, "utf-8"));
  }
  const res = await fetch(url, { headers: { accept: "application/json" } });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  const json = await res.json();
  fs.writeFileSync(cachePath, JSON.stringify(json));
  return json;
}

/**
 * Run async tasks with bounded concurrency.
 */
async function pool(tasks, concurrency = 12) {
  const results = new Array(tasks.length);
  let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, tasks.length) }, worker),
  );
  return results;
}

/**
 * Parse the Caristix `length` field. The API returns `0` to mean "no
 * declared length / unbounded" for many text fields; treat that as undefined.
 */
function parseLength(raw) {
  if (raw === null || raw === undefined) return undefined;
  if (typeof raw === "number") return raw > 0 ? raw : undefined;
  if (typeof raw === "string") {
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? n : undefined;
  }
  return undefined;
}

/**
 * Parse the Caristix `tableId` field. Comes back as a zero-padded string
 * like "0136" — strip to a number, drop empties.
 */
function parseTable(raw) {
  if (!raw) return undefined;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * Map a Caristix usage code to our HL7UsageCode set. C (Conditional) maps
 * to D in our model since they describe the same semantics.
 */
function normalizeUsage(raw) {
  if (!raw) return undefined;
  const u = String(raw).trim().toUpperCase();
  if (u === "C") return "D";
  if (VALID_USAGE.has(u)) return u;
  return undefined;
}

console.log("Fetching segment lists for all versions...");
const segmentsByVersion = {};
await pool(
  VERSIONS.map((v) => async () => {
    const list = await fetchCached(`${API}/HL7v${v}/Segments`);
    segmentsByVersion[v] = list.filter((s) => s.type === "Segment");
    console.log(`  v${v}: ${segmentsByVersion[v].length} segments`);
  }),
);

const allSegmentNames = new Set();
for (const v of VERSIONS) {
  for (const s of segmentsByVersion[v]) allSegmentNames.add(s.id);
}
const sortedNames = [...allSegmentNames].sort();
console.log(`\nTotal unique segments across all versions: ${sortedNames.length}\n`);

console.log("Fetching segment details (cached)...");
const detailsByVersionAndName = {};
const fetchTasks = [];
for (const v of VERSIONS) {
  detailsByVersionAndName[v] = {};
  for (const s of segmentsByVersion[v]) {
    fetchTasks.push(async () => {
      try {
        const detail = await fetchCached(
          `${API}/HL7v${v}/Segments/${s.id}`,
        );
        detailsByVersionAndName[v][s.id] = detail;
      } catch (err) {
        console.warn(`  warn: v${v}/${s.id} — ${err.message}`);
      }
    });
  }
}
await pool(fetchTasks, 16);
console.log(`  fetched ${fetchTasks.length} segment-version detail records\n`);

/**
 * Build a consolidated SegmentSpec for one segment name across every version
 * where it exists.
 */
function buildSpec(name) {
  const presence = VERSIONS.filter((v) => detailsByVersionAndName[v][name]);
  if (presence.length === 0) return null;

  // Pick a description — use the latest version that has one.
  let description = name;
  for (const v of [...presence].reverse()) {
    const d = detailsByVersionAndName[v][name];
    if (d?.longName) {
      description = d.longName;
      break;
    }
  }

  // Field count = max field count across all versions.
  let maxFields = 0;
  for (const v of presence) {
    const fs = detailsByVersionAndName[v][name].fields || [];
    if (fs.length > maxFields) maxFields = fs.length;
  }

  const fields = [];
  for (let pos = 1; pos <= maxFields; pos++) {
    // Find canonical field metadata from the latest version that has this position.
    let canonical = null;
    for (const v of [...presence].reverse()) {
      const f = detailsByVersionAndName[v][name].fields?.[pos - 1];
      if (f) {
        canonical = f;
        break;
      }
    }
    if (!canonical) continue;

    const usage = {};
    for (const v of presence) {
      const f = detailsByVersionAndName[v][name].fields?.[pos - 1];
      if (!f) continue;
      const u = normalizeUsage(f.usage);
      if (u) usage[v] = u;
    }
    if (Object.keys(usage).length === 0) continue;

    const field = {
      num: pos,
      name: canonical.name || `${name}.${pos}`,
      hl7Type: canonical.dataType || undefined,
      length: parseLength(canonical.length),
      table: parseTable(canonical.tableId),
      usage,
    };
    fields.push(field);
  }

  return { name, description, versions: presence, fields };
}

/** Render a SegmentSpec to TypeScript source. */
function renderSpec(spec) {
  const lines = [
    `import { SegmentSpec } from "@/hl7/metadata/types";`,
    ``,
    `/**`,
    ` * ${spec.name} — ${spec.description.replace(/\*\//g, "*\\/")}`,
    ` *`,
    ` * Generated from the Caristix HL7 Definition API`,
    ` * (https://hl7-definition.caristix.com/v2/HL7v2.X/Segments/${spec.name})`,
    ` * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run the`,
    ` * generator instead.`,
    ` *`,
    ` * @since 4.0.0`,
    ` */`,
    `export const ${spec.name}_SPEC: SegmentSpec = {`,
    `  name: "${spec.name}",`,
    `  description: ${JSON.stringify(spec.description)},`,
    `  versions: ${JSON.stringify(spec.versions)},`,
    `  fields: [`,
  ];
  for (const f of spec.fields) {
    lines.push(`    {`);
    lines.push(`      num: ${f.num},`);
    lines.push(`      name: ${JSON.stringify(f.name)},`);
    if (f.hl7Type) lines.push(`      hl7Type: ${JSON.stringify(f.hl7Type)},`);
    // Caristix `length` is the maximum field length, not an exact length.
    // Render as `{ max: N }` so the validator's range-check path applies and
    // shorter values aren't falsely flagged as "must be exactly N characters".
    if (typeof f.length === "number") {
      lines.push(`      length: { max: ${f.length} },`);
    }
    if (typeof f.table === "number") lines.push(`      table: ${f.table},`);
    lines.push(`      usage: ${JSON.stringify(f.usage)},`);
    lines.push(`    },`);
  }
  lines.push(`  ],`);
  lines.push(`};`);
  lines.push(``);
  return lines.join("\n");
}

console.log("Generating SegmentSpec files...");
fs.mkdirSync(OUT_DIR, { recursive: true });
const generated = [];
for (const name of sortedNames) {
  const spec = buildSpec(name);
  if (!spec) continue;
  const out = renderSpec(spec);
  fs.writeFileSync(path.join(OUT_DIR, `${name.toLowerCase()}.ts`), out);
  generated.push(name);
}

// Generate barrel + name->spec lookup.
const barrelLines = [
  `// Auto-generated by scripts/generate-segment-specs.mjs.`,
  `// Do not edit by hand — re-run the generator instead.`,
  `import { SegmentSpec } from "@/hl7/metadata/types";`,
];
for (const name of generated) {
  barrelLines.push(
    `import { ${name}_SPEC } from "@/hl7/metadata/segments/${name.toLowerCase()}";`,
  );
}
barrelLines.push(``);
for (const name of generated) {
  barrelLines.push(
    `export { ${name}_SPEC } from "@/hl7/metadata/segments/${name.toLowerCase()}";`,
  );
}
barrelLines.push(``);
barrelLines.push(`/**`);
barrelLines.push(` * Lookup of every generated SegmentSpec, keyed by uppercase segment name.`);
barrelLines.push(` *`);
barrelLines.push(` * @since RELEASE_VERSION_PLACEHOLDER `);
barrelLines.push(` */`);
barrelLines.push(
  `export const SEGMENT_SPECS: Readonly<Record<string, SegmentSpec>> = {`,
);
for (const name of generated) {
  barrelLines.push(`  ${name}: ${name}_SPEC,`);
}
barrelLines.push(`};`);
barrelLines.push(``);

fs.writeFileSync(path.join(OUT_DIR, "index.ts"), barrelLines.join("\n"));

console.log(`\nGenerated ${generated.length} segment specs in ${OUT_DIR}`);
