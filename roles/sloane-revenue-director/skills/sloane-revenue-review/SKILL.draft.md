---
name: sloane-revenue-review
description: Accepts a pricing proposal, revenue model, or conversion-funnel change and reviews assumption clarity, attribution logic, and owner approval. Returns a revenue-clarity finding with the questions that must be answered before changes go live. Use on pricing or revenue-model changes, as a gate before Finn reviews financial implications.
---

# sloane-revenue-review

## Stage

DRAFT seed. Owner: Sloane / Revenue Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- On a pricing proposal, revenue-model change, or conversion-funnel change, or
- On demand (Sloane invokes).
- Gate before Finn reviews financial implications.

## Inputs

- A pricing proposal, revenue model, or conversion-funnel change.
  - **Forward dependency:** revenue-change intake location not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "revenue proposal not found" message until it exists.

## Steps

1. Load the proposal. If missing or unparseable, emit a soft failure note and stop.
2. Check assumption clarity (what is assumed, is it stated and bounded).
3. Check attribution logic (how revenue/conversion is credited).
4. Check owner approval (who signed off, is the approval present).
5. Derive the open questions that must be answered before go-live.
6. Assemble the revenue-clarity finding (see Outputs).

## Outputs

- A revenue-clarity finding:
  - Assumption clarity (clear / unclear, per assumption).
  - Attribution logic (sound / ambiguous).
  - Owner approval (present / missing).
  - Questions to answer before go-live.
  - Overall clarity verdict.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.
- Gate before Finn (`accounting`) reviews financial implications.

## Automation path

- Triggered on pricing or revenue-model changes. Gate before Finn reviews financial implications.

## Ownership / routing

- Owner: Sloane. Feeds: Finn (`accounting`). Pairs with Drew (`drew-pipeline-review`) on funnel signals.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (pricing / revenue model / funnel change) defined.
- [ ] Soft-failure path defined for missing revenue proposal.
- [ ] Read-only — no write/comms steps. Gate produces finding set only.
- [ ] Registry entry `sloane-revenue-review` -> owner `sloane-revenue-director`, status `draft`.
