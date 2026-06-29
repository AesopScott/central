---
name: validate-role-files
description: Reads the file structure for every role, finds missing or incomplete files, and repairs them from git or backup, on a 4-hour cadence gated by a file-size/change pre-check that skips the run when no files changed. Use when Cole (HR Director) runs the org-wide role-file integrity sweep.
---

# validate-role-files

## Stage

DRAFT seed. Owner: Cole / HR Director. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Runs every 4 hours, gated by a file-size/change pre-check that determines if any files changed before running (skips the run when nothing changed — limits model usage).

## Inputs

- The team-member file-structure standard (`roles/cole-hr-director/team-member-file-structure.md`).
- The file structure for every role across the roster.
  - **Forward dependency:** not all role files may be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "file-structure standard or roster not found" message until they exist.

## Steps

1. **File-size/change pre-check (skip logic):** before any model work, compare role files against the last-seen state (size/hash/mtime). If no files changed since the last run, log "no change — skipped" and stop. This limits model usage on the 4-hour cadence.
2. Load the file-structure standard and every role's file structure. If missing or unparseable, emit a soft failure note and stop.
3. For every role, find **missing or incomplete files** against the standard for that role's stage.
4. **Repair** missing/incomplete files by restoring from git or backup.
5. Flag any file that cannot be restored from git or backup for owner escalation.
6. Assemble the validation report (see Outputs).

## Outputs

- An org-wide role-file validation report:
  - Missing/incomplete files per role.
  - Repairs applied (file -> restored-from git/backup).
  - Unrecoverable files flagged for escalation.

## Gate

- **Cole-owned.** Repairs by restore-from-git/backup only. Unrecoverable items and authority/autonomy/git/secrets changes escalate to owners — never self-applied.

## Automation path

- Every 4 hours, gated by the file-size/change pre-check (skips when no files changed — limits model usage).

## Ownership / routing

- Owner: Cole. Consumes: file-structure standard + org-wide role files. Repairs: missing/incomplete files from git/backup. Escalates: unrecoverable + authority/autonomy/git/secrets to owners. Activation: Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] 4-hour cadence with file-size/change pre-check documented in Steps.
- [ ] gate-dryrun: change pre-check skip path returns "no change — skipped" without model work.
- [ ] Soft-failure path defined for missing standard/roster.
- [ ] Repairs scoped to restore-from-git/backup; unrecoverable items escalated.
- [ ] Registry entry `validate-role-files` -> owner `cole-hr-director`, status `draft`.
