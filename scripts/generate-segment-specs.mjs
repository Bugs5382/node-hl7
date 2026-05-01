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

const API = "https://hl7-definition.caristix.com/v2-api/1";

/** Caristix usage codes are already canonical HL7 codes — pass through. */
const VALID_USAGE = new Set(["B", "C", "D", "O", "R", "W", "X"]);

/**
 * Fetch a JSON document from Caristix, caching by URL on disk so re-runs are
 * cheap and the API isn't hit unnecessarily.
 */
async function fetchCached(url) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const cacheKey = url.replaceAll(/[^a-zA-Z0-9._-]+/g, "_");
  const cachePath = path.join(CACHE_DIR, cacheKey + ".json");
  if (fs.existsSync(cachePath)) {
    return JSON.parse(fs.readFileSync(cachePath, "utf8"));
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
 * Map a Caristix usage code to our HL7UsageCode set. C (Conditional) maps
 * to D in our model since they describe the same semantics.
 */
function normalizeUsage(raw) {
  if (!raw) return;
  const u = String(raw).trim().toUpperCase();
  if (u === "C") return "D";
  if (VALID_USAGE.has(u)) return u;
  return;
}

/**
 * Parse the Caristix `length` field. The API returns `0` to mean "no
 * declared length / unbounded" for many text fields; treat that as undefined.
 */
function parseLength(raw) {
  if (raw === null || raw === undefined) return;
  if (typeof raw === "number") return raw > 0 ? raw : undefined;
  if (typeof raw === "string") {
    const n = Number(raw);
    return Number.isFinite(n) && n > 0 ? n : undefined;
  }
  return;
}

/**
 * Parse the Caristix `tableId` field. Comes back as a zero-padded string
 * like "0136" — strip to a number, drop empties.
 */
function parseTable(raw) {
  if (!raw) return;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

/**
 * Run async tasks with bounded concurrency.
 */
async function pool(tasks, concurrency = 12) {
  const results = Array.from({ length: tasks.length });
  let index = 0;
  async function worker() {
    while (index < tasks.length) {
      const index_ = index++;
      results[index_] = await tasks[index_]();
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(concurrency, tasks.length) }, worker),
  );
  return results;
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

// Composite data types (XAD, XPN, CE, CWE, CX, ...) decompose into
// sub-components. Fetch each version's DataType list, then per data type
// fetch its component breakdown. Cache by version + data type id.
console.log("\nFetching DataType components for all versions...");
const dataTypesByVersion = {};
await pool(
  VERSIONS.map((v) => async () => {
    try {
      const list = await fetchCached(`${API}/HL7v${v}/DataTypes`);
      dataTypesByVersion[v] = list;
    } catch (error) {
      dataTypesByVersion[v] = [];
      console.warn(`  warn: HL7v${v}/DataTypes — ${error.message}`);
    }
  }),
);

const componentsByVersionAndType = {};
const dtFetchTasks = [];
for (const v of VERSIONS) {
  componentsByVersionAndType[v] = {};
  for (const dt of dataTypesByVersion[v] ?? []) {
    if (dt.type !== "DataType") continue;
    dtFetchTasks.push(async () => {
      try {
        const detail = await fetchCached(`${API}/HL7v${v}/DataTypes/${dt.id}`);
        const subs = (detail.fields ?? []).map((f, index) => ({
          hl7Type: f.dataType || undefined,
          length: parseLength(f.length),
          name: f.name || `${dt.id}.${index + 1}`,
          num: index + 1,
          rpt: f.rpt || undefined,
          table: parseTable(f.tableId),
          usage: normalizeUsage(f.usage),
        }));
        componentsByVersionAndType[v][dt.id] = subs;
      } catch (error) {
        console.warn(`  warn: v${v}/DataTypes/${dt.id} — ${error.message}`);
      }
    });
  }
}
await pool(dtFetchTasks, 16);
console.log(
  `  fetched ${dtFetchTasks.length} data-type detail records (composite breakdowns)\n`,
);

const allSegmentNames = new Set();
for (const v of VERSIONS) {
  for (const s of segmentsByVersion[v]) allSegmentNames.add(s.id);
}
const sortedNames = [...allSegmentNames].sort();
console.log(
  `\nTotal unique segments across all versions: ${sortedNames.length}\n`,
);

console.log("Fetching segment details (cached)...");
const detailsByVersionAndName = {};
const fetchTasks = [];
for (const v of VERSIONS) {
  detailsByVersionAndName[v] = {};
  for (const s of segmentsByVersion[v]) {
    fetchTasks.push(async () => {
      try {
        const detail = await fetchCached(`${API}/HL7v${v}/Segments/${s.id}`);
        detailsByVersionAndName[v][s.id] = detail;
      } catch (error) {
        console.warn(`  warn: v${v}/${s.id} — ${error.message}`);
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

    // If the field's data type is composite, attach sub-components from
    // the DataType cache (latest available version where the segment exists).
    let components;
    if (canonical.dataType) {
      for (const v of [...presence].reverse()) {
        const lookup = v === "2.8" ? "2.8" : v;
        const subs = componentsByVersionAndType[lookup]?.[canonical.dataType];
        if (subs && subs.length > 0) {
          components = subs;
          break;
        }
      }
    }

    const field = {
      components,
      hl7Type: canonical.dataType || undefined,
      length: parseLength(canonical.length),
      name: canonical.name || `${name}.${pos}`,
      num: pos,
      table: parseTable(canonical.tableId),
      usage,
    };
    fields.push(field);
  }

  return { description, fields, name, versions: presence };
}

/** Render a SegmentSpec to TypeScript source. */
function renderSpec(spec) {
  const lines = [
    `import { SegmentSpec } from "@/hl7/metadata/types";`,
    ``,
    `/**`,
    ` * ${spec.name} — ${spec.description.replaceAll("*/", String.raw`*\/`)}`,
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
    lines.push(`    {`, `      num: ${f.num},`);
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
    if (Array.isArray(f.components) && f.components.length > 0) {
      lines.push(`      components: [`);
      for (const c of f.components) {
        const parts = [`num: ${c.num}`, `name: ${JSON.stringify(c.name)}`];
        if (c.hl7Type) parts.push(`hl7Type: ${JSON.stringify(c.hl7Type)}`);
        if (typeof c.length === "number")
          parts.push(`length: { max: ${c.length} }`);
        if (typeof c.table === "number") parts.push(`table: ${c.table}`);
        if (c.usage) parts.push(`usage: ${JSON.stringify(c.usage)}`);
        if (c.rpt) parts.push(`rpt: ${JSON.stringify(c.rpt)}`);
        lines.push(`        { ${parts.join(", ")} },`);
      }
      lines.push(`      ],`);
    }
    lines.push(`    },`);
  }
  lines.push(`  ],`, `};`, ``);
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
barrelLines.push(
  ``,
  `/**`,
  ` * Lookup of every generated SegmentSpec, keyed by uppercase segment name.`,
  ` *`,
  ` * @since RELEASE_VERSION_PLACEHOLDER `,
  ` */`,
  `export const SEGMENT_SPECS: Readonly<Record<string, SegmentSpec>> = {`,
);
for (const name of generated) {
  barrelLines.push(`  ${name}: ${name}_SPEC,`);
}
barrelLines.push(`};`, ``);

fs.writeFileSync(path.join(OUT_DIR, "index.ts"), barrelLines.join("\n"));

console.log(`\nGenerated ${generated.length} segment specs in ${OUT_DIR}`);

// ---------------------------------------------------------------------------
// Generate per-data-type metadata + typed interfaces.
// ---------------------------------------------------------------------------

const DT_OUT_DIR = path.join(
  REPO_ROOT,
  "packages/node-hl7-client/src/hl7/metadata/datatypes",
);
fs.mkdirSync(DT_OUT_DIR, { recursive: true });

/** Convert "Street Address" → "streetAddress", strip parens, drop punctuation. */
function camelize(name) {
  // Drop parenthesized clarifications: "Suffix (e.g., Jr Or Iii)" → "Suffix"
  let s = String(name).replaceAll(/\([^)]*\)/g, "");
  // Replace non-alpha-numeric with space, then split.
  const tokens = s.split(/[^A-Za-z0-9]+/).filter((t) => t.length > 0);
  if (tokens.length === 0) return "";
  return (
    tokens[0].toLowerCase() +
    tokens
      .slice(1)
      .map((t) => t[0].toUpperCase() + t.slice(1).toLowerCase())
      .join("")
  );
}

/**
 * Build the canonical components list for a data type, picking the version
 * with the most components (composite types added components over time;
 * we want the most permissive shape).
 */
function pickCanonicalComponents(dtId) {
  let best = null;
  for (const v of VERSIONS) {
    const subs = componentsByVersionAndType[v]?.[dtId];
    if (subs && (!best || subs.length > best.length)) best = subs;
  }
  return best ?? [];
}

const allDataTypeIds = new Set();
for (const v of VERSIONS) {
  for (const id of Object.keys(componentsByVersionAndType[v] ?? {})) {
    allDataTypeIds.add(id);
  }
}
const sortedDtIds = [...allDataTypeIds].sort();

const generatedDts = [];
for (const dtId of sortedDtIds) {
  const subs = pickCanonicalComponents(dtId);
  if (subs.length === 0) continue; // primitives — no interface needed
  const lower = dtId.toLowerCase();
  const interfaceName = `HL7_${dtId}`;
  const lines = [
    `/**`,
    ` * ${dtId} — composite HL7 data type.`,
    ` *`,
    ` * Generated from the Caristix HL7 Definition API`,
    ` * (https://hl7-definition.caristix.com/v2/HL7v2.X/DataTypes/${dtId})`,
    ` * by scripts/generate-segment-specs.mjs. Do not edit by hand — re-run`,
    ` * the generator instead.`,
    ` *`,
    ` * Both numeric (\`${lower}_<n>\`) and camelCase keys are accepted; pick`,
    ` * whichever reads better. The runtime composer joins set components`,
    ` * with the HL7 component separator (\`^\`) and validates each piece.`,
    ` *`,
    ` * @since 4.0.0`,
    ` */`,
    `export interface ${interfaceName} {`,
  ];
  const usedCamel = new Set();
  for (const c of subs) {
    let camel = camelize(c.name);
    // Avoid duplicate camelCase keys (e.g. "Family Name" appears twice in
    // some interfaces); when collision detected, suffix with the position.
    if (camel === "" || usedCamel.has(camel))
      camel = `${camel || "field"}${c.num}`;
    usedCamel.add(camel);
    const comment = c.name.replaceAll("*/", String.raw`*\/`);
    lines.push(
      `  /** ${dtId}.${c.num} - ${comment} */`,
      `  ${lower}_${c.num}?: string;`,
      `  ${camel}?: string;`,
    );
  }
  lines.push(`}`, ``);
  fs.writeFileSync(path.join(DT_OUT_DIR, `${lower}.ts`), lines.join("\n"));
  generatedDts.push(dtId);
}

// Barrel + DATA_TYPES lookup keyed by uppercase id.
const dtBarrel = [
  `// Auto-generated by scripts/generate-segment-specs.mjs.`,
  `// Do not edit by hand — re-run the generator instead.`,
  `import { ComponentSpec } from "@/hl7/metadata/types";`,
  ``,
];
for (const id of generatedDts) {
  dtBarrel.push(
    `export type { HL7_${id} } from "@/hl7/metadata/datatypes/${id.toLowerCase()}";`,
  );
}
dtBarrel.push(
  ``,
  `/**`,
  ` * Sub-component layout for every composite HL7 data type, keyed by`,
  ` * uppercase id (e.g. \`"XAD"\`, \`"XPN"\`, \`"CWE"\`). Used by the runtime`,
  ` * composer to validate and assemble \`^\`-delimited composite values.`,
  ` *`,
  ` * Components are taken from the version with the largest set, since`,
  ` * composite types only ever grow (added components never break older`,
  ` * positions).`,
  ` *`,
, 
  ` * @since 4.0.0`,
  ` */`,
  `export const DATA_TYPES: Readonly<Record<string, readonly ComponentSpec[]>> = {`,
);
for (const id of generatedDts) {
  const subs = pickCanonicalComponents(id);
  const compactSubs = subs.map((c) => {
    const parts = [`num: ${c.num}`, `name: ${JSON.stringify(c.name)}`];
    if (c.hl7Type) parts.push(`hl7Type: ${JSON.stringify(c.hl7Type)}`);
    if (typeof c.length === "number")
      parts.push(`length: { max: ${c.length} }`);
    if (typeof c.table === "number") parts.push(`table: ${c.table}`);
    if (c.usage) parts.push(`usage: ${JSON.stringify(c.usage)}`);
    if (c.rpt) parts.push(`rpt: ${JSON.stringify(c.rpt)}`);
    return `    { ${parts.join(", ")} }`;
  });
  dtBarrel.push(`  ${id}: [`);
  dtBarrel.push(compactSubs.join(",\n") + ",", `  ],`);
}
dtBarrel.push(`};`, ``);
fs.writeFileSync(path.join(DT_OUT_DIR, "index.ts"), dtBarrel.join("\n"));

console.log(
  `Generated ${generatedDts.length} composite data-type interfaces in ${DT_OUT_DIR}`,
);
