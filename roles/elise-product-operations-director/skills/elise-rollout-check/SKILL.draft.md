---
name: elise-rollout-check
description: Accepts a rollout plan for a new feature or process and reviews metrics instrumentation, feedback-loop presence, rollback plan, and launch-readiness signals. Returns a rollout-readiness report. Use pre-launch, as a gate before Reid approves the release.
---

# elise-rollout-check

## Stage

DRAFT seed. Owner: Elise / Product Operations Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- Pre-launch on a new feature/process rollout plan, or
- On demand (Elise invokes).
- Gate before Reid approves the release.

## Inputs

- A rollout plan for a new feature or process.
  - **Forward dependency:** rollout-plan intake location not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "rollout plan not found" message until it exists.

## Steps

1. Load the rollout plan. If missing or unparseable, emit a soft failure note and stop.
2. Check for metrics instrumentation (what is measured, where).
3. Check for a feedback loop (how signal returns post-launch).
4. Check for a rollback plan (trigger conditions, revert path).
5. Detect missing launch-readiness signals.
6. Assemble the rollout-readiness report (see Outputs).

## Outputs

- A rollout-readiness report:
  - Metrics instrumentation (present / gaps).
  - Feedback loop (present / gaps).
  - Rollback plan (present / gaps).
  - Launch-readiness signals (met / missing).
  - Overall readiness verdict with required corrections.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.
- Gate before Reid (`release-git`) approves the release.

## Automation path

- Triggered pre-launch. Gate before Reid approves release.

## Ownership / routing

- Owner: Elise. Feeds: Reid (`release-git`). Consumes upstream from Gabe (`gabe-spec-review`).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (rollout plan) defined.
- [ ] Soft-failure path defined for missing rollout plan.
- [ ] Read-only — no write/comms steps. Gate produces finding set only.
- [ ] Registry entry `elise-rollout-check` -> owner `elise-product-operations-director`, status `draft`.
