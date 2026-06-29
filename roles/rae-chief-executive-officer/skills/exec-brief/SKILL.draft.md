---
name: exec-brief
description: Reads Mindshare Central priorities, open decisions, and cross-role blockers from docs/backlog.json and produces a crisp CEO briefing — unresolved tradeoffs, unclear ownership, stale priorities, and one recommended next move per domain. Use when Rae (CEO) needs a strategic health signal, on demand or on the weekly cadence.
---

# exec-brief

## Stage

DRAFT seed. Owner: Rae / Chief Executive Officer. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Source = `docs/backlog.json`.

## Trigger

- On demand (Rae invokes), or
- Weekly cadence (strategic health signal).

## Inputs

- `docs/backlog.json` — current priorities, open decisions, cross-role blockers, ownership.
  - **Forward dependency:** file not present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "backlog source not found" message until it exists.

## Steps

1. Load `docs/backlog.json`. If missing or unparseable, emit a soft failure note and stop.
2. Group items by domain (engineering, product, revenue, ops, people, security, etc.).
3. Per domain, detect: unresolved tradeoffs, unclear/missing ownership, stale priorities (no movement past threshold), and cross-role blockers.
4. For each domain, derive exactly one recommended next move.
5. Assemble the CEO briefing (see Outputs).

## Outputs

- A CEO briefing document:
  - Unresolved tradeoffs (with the roles in tension).
  - Unclear ownership (item -> candidate owner).
  - Stale priorities (item -> age -> last signal).
  - One recommended next move per domain.
- Auto-surfaces to Scott when any domain shows an unresolved tradeoff.

## Gate

- None beyond read access to `docs/backlog.json`. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Weekly strategic health signal. Auto-surface to Scott on unresolved-tradeoff detection.

## Ownership / routing

- Owner: Rae. Feeds: org-wide. Consumes signals from Jordan (cs-pulse), Leon (cadence), Mira (project-sweep), Drew (pipeline) when present.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input path `docs/backlog.json` matches registry `reads`.
- [ ] Soft-failure path defined for missing backlog.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `exec-brief` -> owner `rae-chief-executive-officer`, status `draft`.
