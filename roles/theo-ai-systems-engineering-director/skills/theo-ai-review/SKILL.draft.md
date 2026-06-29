---
name: theo-ai-review
description: Accepts a proposed AI integration, model choice, or AI system architecture and evaluates it against Mindshare's current AI stack — model fit, deployment pattern, cost posture, failure modes, and overlap with existing systems — returning a graded review with a recommended action. Use when an AI-system PR or new model proposal needs a read-only assessment before Vik reviews control-plane implications.
---

# theo-ai-review

## Stage

DRAFT seed. Owner: Theo / AI Systems Engineering Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Theo's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- AI-system PRs, or
- New model proposals.

Pre-gate before Vik reviews control-plane implications.

## Inputs

- A proposed AI integration, model choice, or AI system architecture (PR, proposal doc, or architecture description).
- The current AI stack reference (model inventory, deployment patterns, cost posture).
  - **Forward dependency:** AI-stack reference may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "AI-stack reference not found" message until it exists.

## Steps

1. Load the proposal and the current AI-stack reference. If the reference is missing or unparseable, emit a soft failure note and stop.
2. Assess model fit against the stated job-to-be-done.
3. Assess deployment pattern against existing deployment conventions.
4. Assess cost posture (token/compute footprint, run cadence).
5. Enumerate failure modes and missing safeguards.
6. Detect overlap or redundancy with existing AI systems.
7. Grade each dimension and derive one recommended action (approve / revise / reject-with-reasons).

## Outputs

- A graded AI-system review:
  - Model fit (grade + rationale).
  - Deployment pattern (grade + rationale).
  - Cost posture (grade + rationale).
  - Failure modes (finding set).
  - Overlap with existing systems (finding set).
  - One recommended action.
- Auto-surfaces to Scott when the review grades the proposal as reject or high-risk.

## Gate

- None beyond read access to the proposal and AI-stack reference. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered on AI-system PRs or new model proposals. Pre-gate before Vik reviews control-plane implications.

## Ownership / routing

- Owner: Theo. Feeds: Vik (control-plane review). Consumed by AI-system change authors.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing AI-stack reference.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `theo-ai-review` -> owner `theo-ai-systems-engineering-director`, status `draft`.
