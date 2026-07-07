# Node HL7 Server

## v4.0.1 - 2026-07-07

### What Changed 👀

#### 🧩 Dependency Updates

- chore(deps): bump the github-actions group with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#27)
- chore(deps-dev): bump the development-dependencies group across 3 directories with 15 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#28)

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/compare/v4.0.0...v4.0.1

## v4.0.0 - 2026-06-07

### What Changed 👀

#### 💥 Breaking Changes

- **Monorepo layout** — `node-hl7-client` and `node-hl7-server` are now developed and released together from this single repository (replacing the separate repos). Same npm package names, but they version in lockstep and the server peer-depends on the client `^4.0.0` — install/upgrade both together.
- **No default HL7 version** — the implicit `2.7` was removed. A message's version comes from its builder (`new HL7_2_5()`) and is required.
- **`version` required per Client and per listener** — `new Client({ host, version })` and `server.createInbound({ port, version }, handler)`. A client rejects any message whose `MSH.12` differs from its version; a listener replies `AR` to a mismatch and skips the handler.

#### 🚀 Features

- **Full HL7 value-table coverage** — all 479 Caristix tables (v2.1–2.8) via `TABLES` / `lookupTable(version, id)`; metadata via `SEGMENT_SPECS` / `DATA_TYPES`.
- **Versioned validating builders** `HL7_2_1`…`HL7_2_8` — usage-code (R/O/B/W/D/X) + value-table validation.
- **node-hl7-server** — `InboundRequest.getSocket()`, custom ACKs, MSH overrides, TLS/mTLS.

#### 📄 Documentation

- `AGENTS.md` agent guide and refreshed READMEs.

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/releases/tag/v4.0.0
