---
name: nia-eng-review
description: Accepts an implementation plan or engineering initiative and checks for team-capacity clarity, code-quality gate presence, missing test plans, and unclear squad handoffs, returning an engineering-readiness assessment. Use when a new implementation plan is submitted and needs a read-only readiness check that gates before build sessions begin.
---

# nia-eng-review

## Stage

DRAFT seed. Owner: Nia / Engineering Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Nia's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- New implementation plan submission.

Gate before build sessions begin.

## Inputs

- An implementation plan or engineering initiative (plan doc, PR, or initiative description).
  - **Forward dependency:** plan source may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "implementation plan not found" message until it exists.

## Steps

1. Load the implementation plan. If missing or unparseable, emit a soft failure note and stop.
2. Check team-capacity clarity (named owners, realistic load).
3. Check for code-quality gate presence.
4. Check for missing or incomplete test plans.
5. Check for unclear handoffs between squads.
6. Assemble the engineering-readiness assessment (see Outputs).

## Outputs

- An engineering-readiness assessment:
  - Team-capacity clarity (finding).
  - Code-quality gate presence (finding).
  - Missing test plans (finding set).
  - Unclear squad handoffs (finding set).
  - Overall readiness verdict (ready / not ready, with required corrections).
- Auto-surfaces to Scott when the plan is graded not ready.

## Gate

- None beyond read access to the implementation plan. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered on new implementation plan submission. Gate before build sessions begin.

## Ownership / routing

- Owner: Nia. Feeds: build sessions (readiness signal). Consumed by plan authors.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing implementation plan.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Readiness verdict present in outputs.
- [ ] Registry entry `nia-eng-review` -> owner `nia-engineering-director`, status `draft`.
