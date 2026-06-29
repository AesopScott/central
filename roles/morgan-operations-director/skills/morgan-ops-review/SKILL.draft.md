---
name: morgan-ops-review
description: Accepts an operational process description or scaling proposal and reviews for bottlenecks, handoff gaps, undefined failure modes, and scaling risks. Returns an ops-readiness finding with correction owners. Use when a new operational process is proposed; gate before the process is adopted org-wide.
---

# morgan-ops-review

## Stage

DRAFT seed. Owner: Morgan / Operations Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- New operational process proposals.
- Gate before a process is adopted org-wide.

## Inputs

- An operational process description or scaling proposal (submitted item).

## Steps

1. Receive the operational process description or scaling proposal.
2. Map the process flow, owners, and handoff points.
3. Detect: bottlenecks, handoff gaps, undefined failure modes, and scaling risks.
4. Assign a correction owner to each detected gap.
5. Assemble the ops-readiness finding (see Outputs).

## Outputs

- An ops-readiness finding:
  - Bottlenecks (with location in the flow).
  - Handoff gaps (between roles/steps).
  - Undefined failure modes.
  - Scaling risks.
  - Correction owner per finding.

## Gate

- Gate before a process is adopted org-wide — a clean `morgan-ops-review` finding (or Scott override) is required before org-wide adoption.
- Read-only assessment — returns a finding set. No writes to other roles' files, no external comms.

## Automation path

- Triggered on new operational process proposals. Gate before process is adopted org-wide.

## Ownership / routing

- Owner: Morgan. Routes correction items to the named owner per finding. Feeds org-wide adoption decisions.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Correction-owner routing present in Outputs.
- [ ] Gate-before-adoption behavior defined.
- [ ] Read-only — returns finding set, no writes/comms steps.
- [ ] Registry entry `morgan-ops-review` -> owner `morgan-operations-director`, status `draft`.
