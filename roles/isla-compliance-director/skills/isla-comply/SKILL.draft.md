---
name: isla-comply
description: Accepts a new process, contract, data practice, or operational change and checks it against the current compliance framework, flagging requirements that must be satisfied before go-live and returning a compliance checklist that separates blocking from advisory findings. Use when a process or contract change needs a read-only compliance assessment as the required gate before Adrian reviews legal exposure.
---

# isla-comply

## Stage

DRAFT seed. Owner: Isla / Compliance Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Isla's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Process changes, or
- Contract changes, or
- New data practice / operational change.

Required gate before Adrian reviews legal exposure.

## Inputs

- A new process, contract, data practice, or operational change (description, doc, or PR).
- The current compliance framework reference.
  - **Forward dependency:** compliance framework reference may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "compliance framework not found" message until it exists.

## Steps

1. Load the change and the current compliance framework. If the framework is missing or unparseable, emit a soft failure note and stop.
2. Map the change to applicable framework requirements.
3. For each requirement, determine satisfied / unsatisfied status.
4. Classify each unsatisfied requirement as blocking or advisory.
5. Assemble the compliance checklist (see Outputs).

## Outputs

- A compliance checklist:
  - Blocking findings (must be satisfied before go-live).
  - Advisory findings (should be addressed).
  - Requirement -> satisfied/unsatisfied status with rationale.
- Auto-surfaces to Scott when any blocking finding is present.

## Gate

- None beyond read access to the change and compliance framework. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered on process or contract changes. Required gate before Adrian reviews legal exposure.

## Ownership / routing

- Owner: Isla. Feeds: Adrian (legal exposure review). Consumed by change authors.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing compliance framework.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Blocking vs. advisory classification present in outputs.
- [ ] Registry entry `isla-comply` -> owner `isla-compliance-director`, status `draft`.
