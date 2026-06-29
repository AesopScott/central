---
name: mira-project-sweep
description: Reads active projects from the Mindshare backlog (docs/backlog.json) and flags projects with unclear phase boundaries, missing owners, stale milestones, or no proof of progress. Returns a project health sweep separating escalation-required from self-correcting items. Use weekly or on backlog change; feeds Cal's MAPS backlog hygiene check.
---

# mira-project-sweep

## Stage

DRAFT seed. Owner: Mira / PMO Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section). Source = `docs/backlog.json`.

## Trigger

- Weekly cadence, or
- On backlog change.

## Inputs

- `docs/backlog.json` — active Mindshare projects: phase boundaries, owners, milestones, progress evidence.
  - **Forward dependency:** file not present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "backlog source not found" message until it exists.

## Steps

1. Load `docs/backlog.json`. If missing or unparseable, emit a soft failure note and stop.
2. Enumerate active projects.
3. Per project, detect: unclear phase boundaries, missing owners, stale milestones (no movement past threshold), and no proof of progress.
4. Classify each flagged project as escalation-required or self-correcting.
5. Assemble the project health sweep (see Outputs).

## Outputs

- A project health sweep:
  - Projects with unclear phase boundaries.
  - Projects with missing owners.
  - Projects with stale milestones (project -> milestone -> age).
  - Projects with no proof of progress.
  - Each item classified escalation-required vs. self-correcting.

## Gate

- None beyond read access to `docs/backlog.json`. Read-only assessment — returns a finding set. No writes to other roles' files, no external comms.

## Automation path

- Triggered weekly or on backlog change. Feeds Cal's MAPS backlog hygiene check.

## Ownership / routing

- Owner: Mira. Feeds Cal's MAPS backlog hygiene check (assign-backlog). Escalation-required items surface upward.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input path `docs/backlog.json` matches registry `reads`.
- [ ] Soft-failure path defined for missing backlog.
- [ ] Escalation-required vs. self-correcting classification present in Outputs.
- [ ] Read-only — returns finding set, no writes/comms steps. No gate owner required.
- [ ] Registry entry `mira-project-sweep` -> owner `mira-pmo-director`, status `draft`.
