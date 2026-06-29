---
name: drew-pipeline-review
description: Reads the current sales pipeline and flags opportunities with stale stage, missing next steps, unclear decision-maker contact, or authority gaps in commitment. Returns a pipeline-health report with owner-routed correction items. Use weekly or on pipeline change; feeds Jordan's customer-success pulse.
---

# drew-pipeline-review

## Stage

DRAFT seed. Owner: Drew / Sales Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- Weekly cadence, or
- On pipeline change.

## Inputs

- The current sales pipeline (opportunities, stages, contacts, next steps).
  - **Forward dependency:** pipeline source not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "pipeline source not found" message until it exists.

## Steps

1. Load the current pipeline. If missing or unparseable, emit a soft failure note and stop.
2. Per opportunity, detect: stale stage (no movement past threshold), missing next steps, unclear decision-maker contact, and authority gaps in commitment.
3. Route each correction to the owning rep/role.
4. Assemble the pipeline-health report (see Outputs).

## Outputs

- A pipeline-health report:
  - Stale-stage opportunities (opportunity -> age -> last signal).
  - Missing next steps (opportunity -> gap).
  - Unclear decision-maker contact (opportunity -> who is unknown).
  - Authority gaps in commitment (opportunity -> missing sign-off authority).
  - Owner-routed corrections.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.

## Automation path

- Triggered weekly or on pipeline change. Feeds Jordan's customer-success pulse.

## Ownership / routing

- Owner: Drew. Feeds: Jordan (`jordan-cs-pulse`). Pairs with Sloane (`sloane-revenue-review`) on funnel signals.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (sales pipeline) defined.
- [ ] Soft-failure path defined for missing pipeline source.
- [ ] Read-only — no write/comms steps. Report routes corrections only.
- [ ] Registry entry `drew-pipeline-review` -> owner `drew-sales-director`, status `draft`.
