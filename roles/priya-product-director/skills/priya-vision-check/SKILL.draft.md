---
name: priya-vision-check
description: Accepts a feature, initiative, or product decision and checks alignment against Mindshare's current product vision and strategy. Flags scope drift, vision misalignment, and missing customer-need evidence, then returns a vision-alignment assessment. Use when a new feature is proposed, as a gate before Gabe writes a PM spec.
---

# priya-vision-check

## Stage

DRAFT seed. Owner: Priya / Product Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- On new feature, initiative, or product-decision proposal, or
- On demand (Priya invokes).
- Gate before Gabe writes a PM spec.

## Inputs

- A feature, initiative, or product decision under consideration.
- Current product vision and strategy reference.
  - **Forward dependency:** vision/strategy source not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "vision source not found" message until it exists.

## Steps

1. Load the proposal and the current product vision/strategy reference. If the vision source is missing or unparseable, emit a soft failure note and stop.
2. Compare the proposal scope against the stated vision and strategy.
3. Detect: scope drift, vision misalignment, and missing customer-need evidence.
4. Grade each finding (required to resolve vs. advisory).
5. Assemble the vision-alignment assessment (see Outputs).

## Outputs

- A vision-alignment assessment:
  - Scope drift (proposal -> vision element in tension).
  - Vision misalignment (where the proposal diverges from strategy).
  - Missing customer-need evidence (claim -> evidence gap).
  - Overall alignment verdict with recommended action.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.
- Advisory gate before Gabe (`gabe-spec-review`) writes a PM spec.

## Automation path

- Triggered on new feature proposals. Pre-gate before Gabe writes a PM spec.

## Ownership / routing

- Owner: Priya. Feeds: Gabe (`gabe-spec-review`). Consumes research from Amara (`amara-research-synthesis`) when present.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (proposal + vision source) defined.
- [ ] Soft-failure path defined for missing vision source.
- [ ] Read-only — no write/comms steps. Advisory gate only.
- [ ] Registry entry `priya-vision-check` -> owner `priya-product-director`, status `draft`.
