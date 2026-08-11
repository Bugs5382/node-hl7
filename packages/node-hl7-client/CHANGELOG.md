# Node HL7 Client

## v4.1.1 - 2026-08-11

### What Changed 👀

#### 🐛 Bug Fixes

- fix(build): emit declarations only into lib/types and share the HL7 catalogue chunk @Bugs5382 (#48)

#### 🔐 Security

- fix(build): emit declarations only into lib/types and share the HL7 catalogue chunk @Bugs5382 (#48)

#### 📄 Documentation

- docs(changelog): rewrite the v4.0.0 entries in conventional-commit form @Bugs5382 (#49)

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/compare/v4.1.0...v4.1.1

## v4.1.0 - 2026-07-10

### What Changed 👀

#### 🚀 Features

- feat(server): relax inbound version constraint @Bugs5382 (#44)

#### 🧩 Dependency Updates

- chore(deps): bump github actions @Bugs5382 (#43)
- chore(deps-dev): upgrade eslint-config to 0.6 and restore clean lint @Bugs5382 (#41)
- chore(deps-dev): update development dependencies @Bugs5382 (#38)
- chore(deps): bump the github-actions group with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#27)
- chore(deps-dev): bump the development-dependencies group across 3 directories with 15 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#28)

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/compare/v4.0.0...v4.1.0

## v4.0.1 - 2026-07-10

### What Changed 👀

#### 🧩 Dependency Updates

- chore(deps): bump github actions @Bugs5382 (#43)
- chore(deps-dev): upgrade eslint-config to 0.6 and restore clean lint @Bugs5382 (#41)
- chore(deps-dev): update development dependencies @Bugs5382 (#38)
- chore(deps): bump the github-actions group with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#27)
- chore(deps-dev): bump the development-dependencies group across 3 directories with 15 updates @[dependabot[bot]](https://github.com/apps/dependabot) (#28)

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/compare/v4.0.0...v4.0.1

## v4.0.0 - 2026-06-07

### What Changed 👀

#### 💥 Breaking Changes

- feat!: monorepo layout, client and server release in lockstep @Bugs5382 (#12)
  Same npm package names, but the server peer-depends on the client `^4.0.0` — install and upgrade both together.
- feat!: remove the implicit `2.7` default HL7 version @Bugs5382 (#12)
  A message's version now comes from its builder (`new HL7_2_5()`) and is required.
- feat(client, server)!: require explicit HL7 version per client and listener @Bugs5382 (#20)
  `new Client({ host, version })` and `server.createInbound({ port, version }, handler)`. A client rejects any message whose `MSH.12` differs from its version; a listener replies `AR` to a mismatch and skips the handler.

#### 🚀 Features

- feat: full HL7 value-table coverage — all 479 Caristix tables (v2.1–2.8) via `TABLES` / `lookupTable(version, id)`, with metadata via `SEGMENT_SPECS` / `DATA_TYPES` @Bugs5382 (#12)
- feat: versioned validating builders `HL7_2_1`…`HL7_2_8` with usage-code (R/O/B/W/D/X) and value-table validation @Bugs5382 (#12)
  MSH.9 is keyed by component (`msh_9_1`/`msh_9_2`) on 2.2+, and MSH.11 (`msh_11_1`) on 2.3+.
- feat(server): `InboundRequest.getSocket()`, custom ACKs, MSH overrides, and TLS/mTLS @Bugs5382 (#12)

#### 📄 Documentation

- docs: v4.0.0 example and changelog corrections @Bugs5382 (#21)
- docs: `AGENTS.md` agent guide and refreshed READMEs, with every example verified against the v4.0.0 builder/listener contract @Bugs5382 (#12)

### Extra

**Full Changelog**: https://github.com/Bugs5382/node-hl7/releases/tag/v4.0.0
