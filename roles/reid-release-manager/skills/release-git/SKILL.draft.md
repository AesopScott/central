---
name: release-git
description: Inspects the current git state across all tracked repos for dirty worktrees, stale branches, unclear merge authority, missing test evidence, and unreviewed promotion paths, then returns a release-readiness report before any release is approved. Use when Reid (Release Manager) runs the pre-git-approval gate that blocks other roles' git actions without a clean release-check.
---

# release-git

## Stage

DRAFT seed. Owner: Reid / Release Manager. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Source = git state across tracked repos.

## Trigger

- Pre-git-approval gate (invoked before a release/git action is approved for another role).

## Inputs

- Git state across all tracked repos — worktree status, branches, merge authority, test evidence, promotion paths.

## Steps

1. Enumerate all tracked repos.
2. Inspect each for dirty worktrees (uncommitted changes).
3. Detect stale branches (no movement past threshold).
4. Check for unclear merge authority (who owns the merge).
5. Check for missing test evidence on promotion candidates.
6. Detect unreviewed promotion paths.
7. Assemble the release-readiness report.

## Outputs

- A release-readiness report:
  - Dirty worktrees (repo -> branch -> status).
  - Stale branches (branch -> age -> last signal).
  - Unclear merge authority (branch -> missing owner).
  - Missing test evidence (promotion candidate -> gap).
  - Unreviewed promotion paths.
- Reports state of all changes across tracked repos.

## Gate

- **git_release owner = Reid.** This skill GATES OTHER roles' commits/releases — it is the pre-git-approval gate, not a self-gate. The gate blocks git actions without a clean Reid release-check output or human override approval.
- **Read-only — no git mutations.** Inspects state only; performs no commits, pushes, merges, or branch changes.

## Automation path

- Triggered pre-git approval. Gate blocks git actions without a clean Reid release-check output or human override approval.

## Ownership / routing

- Owner: Reid (git_release). Read-only. Gates other roles' git actions. Override approval routes to a human.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Git-state inputs match registry `reads`.
- [ ] Read-only — no git mutation steps (no commit/push/merge/branch).
- [ ] Gate owner = Reid (git_release); gates other roles, not self.
- [ ] Human override path defined.
- [ ] Registry entry `release-git` -> owner `reid-release-manager`, status `draft`.
