---
name: gabe-spec-review
description: Accepts a feature spec or product requirement and checks for complete acceptance criteria, stakeholder alignment, missing edge cases, and unclear scope boundaries. Returns a spec-completeness review separating required gaps from advisory ones. Use when a new spec is submitted, as a gate before engineering estimation begins.
---

# gabe-spec-review

## Stage

DRAFT seed. Owner: Gabe / Product Management Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- On new feature-spec or product-requirement submission, or
- On demand (Gabe invokes).
- Gate before engineering estimation begins.

## Inputs

- A feature spec or product requirement document.
  - **Forward dependency:** spec intake location not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "spec source not found" message until it exists.

## Steps

1. Load the submitted spec. If missing or unparseable, emit a soft failure note and stop.
2. Check acceptance criteria for completeness and testability.
3. Detect: stakeholder-alignment gaps, missing edge cases, and unclear scope boundaries.
4. Classify each gap as required (blocks estimation) vs. advisory.
5. Assemble the spec-completeness review (see Outputs).

## Outputs

- A spec-completeness review:
  - Acceptance-criteria gaps (criterion -> what's incomplete).
  - Stakeholder-alignment gaps (stakeholder -> unresolved item).
  - Missing edge cases (scenario -> uncovered behavior).
  - Unclear scope boundaries (boundary -> ambiguity).
  - Required vs. advisory classification per finding.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.
- Gate before engineering estimation begins (Nia `nia-eng-review`).

## Automation path

- Triggered on new spec submission. Gate before engineering estimation begins.

## Ownership / routing

- Owner: Gabe. Feeds: Nia (`nia-eng-review`). Consumes upstream from Priya (`priya-vision-check`).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (feature spec / product requirement) defined.
- [ ] Soft-failure path defined for missing spec source.
- [ ] Read-only — no write/comms steps. Gate produces finding set only.
- [ ] Registry entry `gabe-spec-review` -> owner `gabe-product-management-director`, status `draft`.
