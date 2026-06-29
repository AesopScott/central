---
name: assign-backlog
description: Reads the current backlog and session state, assigns backlog ownership of items to other roles and agents, sends handoff communications, tracks progress, and alerts on stale updates. Use when Cal (Program Manager) runs the daily backlog assignment sweep to route owner-blocked items to the correct role.
---

# assign-backlog

## Stage

DRAFT seed. Owner: Cal / Program Manager. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Source = `docs/backlog.json`.

## Trigger

- Daily cadence (backlog assignment sweep).

## Inputs

- `docs/backlog.json` — current backlog items, priorities, ownership, status.
  - **Forward dependency:** file not present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "backlog source not found" message until it exists.
- Current session state — active roles/agents and their availability.

## Steps

1. Load `docs/backlog.json` and session state. If backlog missing or unparseable, emit a soft failure note and stop.
2. Identify unassigned and owner-blocked backlog items.
3. For each item, match to the correct role/agent by domain and capacity.
4. Assign backlog ownership of the item to that role/agent.
5. Draft handoff communications to initiate each assignment.
6. **Gate:** route handoff comms through Mae (external_comms) before any live send (see Gate).
7. Track progress against assigned items.
8. Detect stale items (no movement past threshold) and raise alerts.

## Outputs

- A backlog assignment report:
  - Items assigned (item -> owner).
  - Handoff comms drafted (queued for Mae review before live send).
  - Progress tracking per assigned item.
  - Stale-item alerts (item -> age -> last signal).
- Auto-routes owner-blocked items to the correct role.

## Gate

- **external_comms via Mae** — before sending any live handoff communication, handoff comms must be reviewed/routed through Mae (Communications Director). The skill drafts and queues comms but does not send live until Mae clears the external_comms gate.
- Backlog read-only; assignment writes scoped to ownership fields only.

## Automation path

- Daily cadence. Auto-routes owner-blocked items to the correct role. Live handoff comms gated by Mae.

## Ownership / routing

- Owner: Cal. Feeds: org-wide assignment. Handoff comms gated through Mae (external_comms). Surfaces stale alerts to item owners and to Cal.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input path `docs/backlog.json` matches registry `reads`.
- [ ] Soft-failure path defined for missing backlog.
- [ ] Handoff comms gated through Mae (external_comms) before live send.
- [ ] Stale-detection threshold defined.
- [ ] Registry entry `assign-backlog` -> owner `cal-program-manager`, status `draft`.
