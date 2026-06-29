---
name: commit-git
description: Scans for dirty branches and uncommitted files, recommends whether each should be committed and pushed to origin, and auto-commits and auto-pushes to origin on its own recommendation. Use when Reid (Release Manager) runs the hourly owner-gated uncommitted-work sweep — gated to skip when the worktree is clean.
---

# commit-git

## Stage

DRAFT seed. Owner: Reid / Release Manager. Status: owner-gated. Not activated.

- **Cannot be activated or live-tested by Cole.** Activation requires Reid (git_release owner) plus Scott (secrets/activation).
- **Level 5 behavior — accepted by Scott 2026-06-28.** Auto-commits and auto-pushes to origin on its own recommendation.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Source = git state (dirty branches / uncommitted files).

## Trigger

- Hourly cadence, gated by a dirty-state pre-check (skips run when the worktree is clean — limits model usage).

## Inputs

- Git state — dirty branches and uncommitted files across tracked work.
- Git credentials via `.env.local`.

## Steps

1. **Pre-check (gate):** scan for dirty branches / uncommitted files. If the worktree is clean, SKIP the run entirely (no model work) and record the skip — limits model usage.
2. If dirty state detected, enumerate dirty branches and uncommitted files.
3. For each, recommend whether it should be committed and pushed to origin.
4. On its own recommendation, auto-commit the changes.
5. Auto-push the commit to origin (credentials via `.env.local`).
6. Record the commit/push action in the sweep report.

## Outputs

- An uncommitted-work sweep report:
  - Dirty branches / uncommitted files found.
  - Commit + push recommendation per item.
  - Auto-commit and auto-push actions taken (commit -> branch -> origin result).

## Gate

- **git_release owner = Reid; OWNER-GATED.** Independent of `release-git` — no self-gate conflict: `release-git` gates other roles' commits, `commit-git` acts on Reid's own uncommitted-work sweep.
- **Level 5 behavior — accepted by Scott 2026-06-28.** Performs git mutations (commit + push to origin).
- **Dirty-state pre-check gate** — run is skipped when the worktree is clean.
- Git credentials via `.env.local` (secrets/activation owned by Scott).

## Automation path

- Hourly, gated by a dirty-state pre-check first (skips run when no uncommitted changes — limits model usage). Auto-commits and auto-pushes on its own recommendation. Level 5 behavior. Git credentials via `.env.local`.

## Ownership / routing

- Owner: Reid (git_release). Activation requires Reid + Scott (secrets/activation). Cannot be activated or live-tested by Cole.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Git-state inputs match registry `reads`.
- [ ] Dirty-state pre-check skip logic defined (skips when clean).
- [ ] Owner-gated: requires Reid (git_release) + Scott (secrets/activation); not activatable by Cole.
- [ ] Git credentials sourced from `.env.local` (no hardcoded secrets).
- [ ] test = none-live — no live test is performed (Level 5 auto-commit/auto-push not exercised in structural test).
- [ ] Registry entry `commit-git` -> owner `reid-release-manager`, status `owner-gated`.
