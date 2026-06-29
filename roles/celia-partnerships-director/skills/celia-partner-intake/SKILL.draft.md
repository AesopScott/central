---
name: celia-partner-intake
description: Accepts a new partnership opportunity and reviews for strategic alignment, authority to commit, commitment clarity, and missing Scott or Rae sign-off gates. Returns a partnership-readiness packet. Use when a new partnership inquiry arrives; gate before any external partnership communication.
gate: external_comms
---

# celia-partner-intake

## Stage

DRAFT seed. Owner: Celia / Partnerships Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- New partnership inquiry.
- Gate before any external partnership communication.

## Inputs

- A new partnership opportunity (inquiry / proposal).

## Steps

1. Receive the partnership opportunity.
2. Assess strategic alignment with Mindshare priorities.
3. Verify authority to commit and the clarity of the proposed commitment.
4. Detect missing Scott or Rae sign-off gates.
5. Assemble the partnership-readiness packet (see Outputs).

## Outputs

- A partnership-readiness packet:
  - Strategic-alignment assessment.
  - Authority-to-commit finding.
  - Commitment-clarity finding.
  - Missing sign-off gates (Scott / Rae).
  - Readiness status: ready / requires-sign-off / blocked.

## Gate

- **GATE — `external_comms`.** No external partnership communication proceeds without a clean `celia-partner-intake` packet showing required Scott/Rae sign-offs satisfied, or an explicit Scott override.
- Read-only assessment — returns a finding set. No writes to other roles' files, no external comms sent by the skill itself.

## Automation path

- Triggered on new partnership inquiry. Gate before any external partnership communication.

## Ownership / routing

- Owner: Celia. Routes sign-off gaps to Scott / Rae. Pairs with Adrian (adrian-legal-gate) on any binding commitment.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry, `gate: external_comms`).
- [ ] Gate behavior defined (blocks external partnership comms without sign-off or override).
- [ ] Missing Scott/Rae sign-off detection present in Outputs.
- [ ] Read-only — returns finding set, no writes/comms steps.
- [ ] Registry entry `celia-partner-intake` -> owner `celia-partnerships-director`, status `draft`.
