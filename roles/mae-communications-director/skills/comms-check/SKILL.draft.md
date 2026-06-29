---
name: comms-check
description: Audits all current role channel assignments against the communications registry, flagging roles reading channels they should ignore, missing assignments, stale communications, and role-relevant updates buried in the wrong channels, then returns a correction list routed to Mae. Use when Mae (Communications Director) runs the hourly comms hygiene sweep — gated to skip when nothing changed.
---

# comms-check

## Stage

DRAFT seed. Owner: Mae / Communications Director. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Source = communications registry.

## Trigger

- Hourly cadence, gated by a registry/channel change pre-check (skips run when nothing changed — limits model usage).

## Inputs

- Communications registry — authoritative role -> channel assignments.
- Current role channel assignments / reads — what each role is actually reading.

## Steps

1. **Pre-check (gate):** compare the communications registry and channel assignments against the last-seen snapshot. If nothing changed since the last run, SKIP the run entirely (no model work) and record the skip. This Cole-gate pattern limits model usage.
2. If changes detected, load the communications registry and current channel assignments.
3. Flag roles reading channels they should ignore (wrong-channel reads).
4. Flag missing assignments (role with no/incomplete channel coverage).
5. Flag stale communications (no movement past threshold).
6. Flag role-relevant updates buried in the wrong channels.
7. Assemble the correction list and route to Mae.

## Outputs

- A correction list routed to Mae:
  - Wrong-channel reads (role -> channel to drop).
  - Missing assignments (role -> channel to add).
  - Stale communications (item -> age -> channel).
  - Buried updates (update -> wrong channel -> correct channel).
- Findings report for Mae action or escalation.

## Gate

- **Change pre-check gate** — run is skipped when the registry/channels are unchanged since last snapshot (limits model usage).
- Read-only audit. No live comms sent; corrections routed to Mae for action.

## Automation path

- Hourly, gated by a registry/channel change pre-check first (skips run when nothing changed). Auto-routes correction list to Mae.

## Ownership / routing

- Owner: Mae. Consumes communications registry. Returns correction list to Mae for action or escalation.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Communications registry input matches registry `reads`.
- [ ] Pre-check skip logic defined (skips when nothing changed).
- [ ] gate-dryrun — verify the change pre-check returns SKIP on an unchanged snapshot.
- [ ] Correction list routed to Mae; no live comms steps.
- [ ] Registry entry `comms-check` -> owner `mae-communications-director`, status `draft`.
