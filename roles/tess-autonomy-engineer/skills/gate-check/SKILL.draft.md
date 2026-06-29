---
name: gate-check
description: Flags gates open wider than contracted, missing stop conditions, heartbeat/hook changes that expand authority, and roles operating above their approved level, returning a gate-review finding with required corrections. Use when Tess (Autonomy Engineer) sweeps autonomy/gate state on the 4-hour cadence, gated by a change-check pre-check that skips when nothing changed.
---

# gate-check

## Stage

DRAFT seed. Owner: Tess / Autonomy Engineer. Not activated. Autonomy-gated — not activated by Cole. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Runs every 4 hours, gated by a change-check pre-check (skips the run when no autonomy/gate files changed — limits model usage).

## Inputs

- Autonomy/gate state across roles: `autonomy.md`, gate configs, hooks, heartbeats, approved-level records.
  - **Forward dependency:** autonomy/gate files may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "autonomy/gate state not found" message until they exist.

## Steps

1. **Change-check pre-check (skip logic):** before any model work, compare autonomy/gate files against the last-seen state (hash/mtime). If nothing changed since the last run, log "no change — skipped" and stop. This limits model usage on the 4-hour cadence.
2. Load the changed autonomy/gate state. If missing or unparseable, emit a soft failure note and stop.
3. Flag **gates open wider than contracted**: effective gate scope exceeds the contracted scope.
4. Flag **missing stop conditions**: loops/schedules with no defined stop.
5. Flag **heartbeat/hook changes that expand authority**: a heartbeat or hook edit that grants more than approved.
6. Flag **roles operating above their approved level**: effective level > approved level.
7. Assemble a gate-review finding with required corrections (see Outputs).

## Outputs

- A gate-review finding with:
  - Gates wider than contracted (gate -> contracted vs. effective).
  - Missing stop conditions (loop/schedule -> gap).
  - Authority-expanding heartbeat/hook changes.
  - Roles operating above approved level (role -> approved vs. effective).
  - Required corrections.

## Gate

- **OWNER-GATED (autonomy).** Read-only review. No activation, no writes to other roles' files. Findings route to owners for correction.

## Automation path

- Every 4 hours, gated by the change-check pre-check (skips when no autonomy/gate files changed — limits model usage).

## Ownership / routing

- Owner: Tess. Autonomy gate: Tess + Vik. Consumes: org-wide autonomy/gate state. Feeds: owner correction routing. Activation: Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] 4-hour cadence with change-check pre-check documented in Steps.
- [ ] gate-dryrun: change-check skip path returns "no change — skipped" without model work.
- [ ] Soft-failure path defined for missing autonomy/gate state.
- [ ] All four flag classes covered (wider gates, missing stop conditions, authority-expanding heartbeat/hook, above-level operation).
- [ ] Read-only — no activation, no writes to other roles' files.
- [ ] Registry entry `gate-check` -> owner `tess-autonomy-engineer`, status `draft`, gate `autonomy`.
