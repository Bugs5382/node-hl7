# AGENTS.md - node-hl7

Guide for AI agents working in this repository. Pair with `CLAUDE.md` (the working agreement and
hook-enforced rules). Keep this file current when the build, layout, or public API changes.

## What this is

An npm workspaces monorepo that ships two packages from one version line:

- `node-hl7-client` (`packages/node-hl7-client`): HL7 v2 message builder, parser and an MLLP/TLS
  client.
- `node-hl7-server` (`packages/node-hl7-server`): an MLLP/TLS server that receives and parses HL7
  messages. It depends on `node-hl7-client` as a peer.

Both packages are released together with the same version. The server's `node-hl7-client` peer
floor always tracks the client it ships with (`^<version>`), so it can never resolve to an older
client; `check:dist` asserts this.

## Using node-hl7

Consumers import each package from its own entry point (`node-hl7-client`, `node-hl7-server`), as
ESM or CJS. Each `package.json` `exports` map is the public surface; anything it does not export is
private. The per-package READMEs, the guides in `pages/` and the TypeDoc output describe the API.

## Layout

- `packages/node-hl7-client/src/` - client source (`index.ts` is the public entry).
- `packages/node-hl7-server/src/` - server source (`index.ts` is the public entry).
- `__tests__/client/`, `__tests__/server/` - Vitest suites, one Vitest project per package
  (`vitest.workspace.ts`); shared helpers in `__tests__/__utils__/`.
- `scripts/` - repo tooling: `check-dist.mjs` (published tarball guard) and the generators for the
  segment specs and HL7 tables. Never shipped.
- `docker/` - a containerised server and smoke tests for it.
- `pages/client/`, `pages/server/` - the hand-written user guides for each package. TypeDoc output
  goes to each package's `docs/` (gitignored).
- Build output goes to each package's `lib/` (gitignored); only what each package's `files` lists is
  published.

## Build, test, lint

Always pass `--ignore-scripts` to `npm ci`, `npm install` and `npm pack`: the root `prepare` script
runs husky, which resets `core.hooksPath`.

- Install: `npm install --ignore-scripts --legacy-peer-deps` (the lockfile is not committed; CI
  generates it with `npm install --package-lock-only --ignore-scripts --legacy-peer-deps`).
- Build: `npm run build` (tsdown in each workspace).
- Test: `npm test` (Vitest, both projects). The tests bind local TCP ports and generate their own
  TLS material; no external service is needed. The Redis queue test in `hl7.end2end.test.ts` is
  skipped (its in-memory Redis is flaky on CI runners).
- Lint: `npm run lint` (ESLint, then `npm-package-json-lint` in each workspace).
- Package checks, after a build: `npm run check:dist`. It fails if a `lib/types` folder holds
  anything but declarations, if either package goes over its unpacked-size budget, or if the
  server's client peer floor drifts. This repo uses `check:dist` in place of the template's
  `check:pack`, `check:pack:growth` and `check:install` scripts.
- License headers: `task license` (verify, never writes) and `task license:fix` (inject the MIT
  header). `.golic.yaml` adds the comment rules golic needs for TypeScript.
- Docs: `npm run typedoc`.

## Releasing

The Release Manager (`job-version-bump.yaml`) sets the version in both workspace `package.json`
files and the server's client peer floor, then updates each package's `CHANGELOG.md`. Publishing
the GitHub Release fires two publish workflows, one per package:
`action-deploy-npm.yaml` (client) and `action-deploy-npm-server.yaml` (server). Each publishes
through npm trusted publishing (OIDC, no token) with provenance, and the trusted publisher entry on
npmjs.com matches on the workflow file name, so never rename those two files.

## Logging

Follow the logging rules in `CLAUDE.md`. In short:

- Log generously: entry and exit of significant operations, decisions and branches, retries, state
  changes, external calls (target, duration, outcome), and every error with its context.
- Levels: `trace` for step-by-step detail, `debug` for flow, `info` for lifecycle, `warn` and
  `error` for problems. The environment filters the volume, so err on the side of too much.
- Never log secrets, tokens, or message contents that may carry PHI (names, MRNs), not even at
  `trace`. Log an opaque or keyed ID.

## Conventions and gotchas

- See `CLAUDE.md` for the branch/commit/PR rules; they are enforced by the git hooks in
  `.claude/hooks` (run `bash .claude/hooks/install.sh` once per clone). Husky also runs
  commitlint and `lint:fix` when it owns the hooks.
- Open every PR as a draft. CI skips drafts, so run the full checks locally, push once they pass,
  and mark the PR ready when the work is finished; see CLAUDE.md "CI and Actions minutes".
- A change to either package is a change to the shared version line: both packages republish on
  every release.
- The git history still holds old test TLS fixture keys (since removed from the tree), so the
  gitleaks step scans only the commits a PR adds, not the full history.
