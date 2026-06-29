---
name: operationalize
description: Reads the team-member file-structure standard and current roster, then for a selected role checks existence and currency of required files at their stage — flagging missing files, stale mirrors, mismatched stages, and new required structure not yet rolled out — and repairs or restores missing template-derived files from git or backup. Use when Cole (HR Director) is invoked from recruiting central to operationalize a role's file structure.
---

# operationalize

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

- Triggered in recruiting central. Accepts a selected role.

## Inputs

- The team-member file-structure standard (`roles/cole-hr-director/team-member-file-structure.md`).
- The current roster.
- The selected role's role home and its current operating stage.
  - **Forward dependency:** roster or role files may not all be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "file-structure standard or roster not found" message until they exist.

## Steps

1. Load the team-member file-structure standard and the current roster. If missing or unparseable, emit a soft failure note and stop.
2. Resolve the selected role and determine its operating stage.
3. For the role's stage, check **existence and currency** of every required file.
4. Flag **missing files**, **stale mirrors**, **mismatched stages**, and **new required structure not rolled out**.
5. **Repair only template-derived structural files** by restoring from git or backup.
6. Escalate any authority, autonomy, git, or secrets changes to the owners — do not self-repair these.
7. Assemble the operationalize report (see Outputs).

## Outputs

- An operationalize report for the role:
  - Missing files (file -> repaired-from git/backup, or escalated).
  - Stale mirrors (file -> drift).
  - Mismatched stages (expected vs. actual).
  - New required structure not yet rolled out.
  - Escalations routed to owners (authority/autonomy/git/secrets).

## Gate

- **Cole-owned.** Repairs only template-derived structural files (from git or backup). Escalates authority, autonomy, git, and secrets changes to owners — never self-applies them.

## Automation path

- None. Triggered in recruiting central.

## Ownership / routing

- Owner: Cole. Consumes: file-structure standard + roster. Repairs: template-derived structural files. Escalates: authority/autonomy -> Tess + Vik; git -> Reid; secrets -> owners. Activation: Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input path for file-structure standard matches registry `reads`.
- [ ] Soft-failure path defined for missing standard/roster.
- [ ] All four flag classes covered (missing files, stale mirrors, mismatched stages, un-rolled-out structure).
- [ ] Repairs scoped to template-derived structural files; authority/autonomy/git/secrets escalated, not self-applied.
- [ ] Registry entry `operationalize` -> owner `cole-hr-director`, status `draft`.
