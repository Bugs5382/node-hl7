#!/usr/bin/env bash
# Install the governance hooks into the current git repository.
# Copies the Claude Code hooks + shared lib into .claude/hooks/ and the git
# enforcement hooks into .git/hooks/. Run from anywhere inside the repo.
set -euo pipefail
ROOT="$(git rev-parse --show-toplevel)"
SRC="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST="$ROOT/.claude/hooks"

mkdir -p "$DEST"
# Skip the copy when the source already IS the destination (e.g. a repo that
# vendored the hooks under .claude/hooks); copying onto itself errors.
if [ "$SRC" != "$DEST" ]; then
  cp "$SRC/lib.sh" "$SRC/forbidden-text.txt" \
     "$SRC/block-ai-tells.sh" "$SRC/validate-conventional-commit.sh" "$SRC/check-push-readiness.sh" \
     "$DEST/"
fi
chmod +x "$DEST/"*.sh

# A Linux-only repo (its build or tests can't run on macOS) has no local
# build/lint/test gate: CI is its gate. The commit hooks still install, and a
# gate installed earlier is removed; a pre-push hook that isn't ours is left alone.
hooks="pre-commit commit-msg pre-push"
if [ -f "$ROOT/.claude/linux-only" ]; then
  hooks="pre-commit commit-msg"
  if grep -qs '^# Git pre-push hook (enforcement)' "$ROOT/.git/hooks/pre-push"; then
    rm -f "$ROOT/.git/hooks/pre-push"
  fi
  echo "Skipped the pre-push gate: .claude/linux-only marks this repo as Linux-only (CI is its gate)."
fi
for h in $hooks; do
  cp "$SRC/$h" "$ROOT/.git/hooks/$h"
  chmod +x "$ROOT/.git/hooks/$h"
done

echo "Installed:"
echo "  Claude Code hooks -> $ROOT/.claude/hooks/ (wire them in .claude/settings.json)"
echo "  git hooks         -> $ROOT/.git/hooks/ (${hooks// /, })"
echo "Add the PreToolUse entries from .claude/settings.json to your Claude Code settings."
