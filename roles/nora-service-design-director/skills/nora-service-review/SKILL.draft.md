---
name: nora-service-review
description: Accepts a service blueprint, customer touchpoint map, or handoff spec. Reviews for touchpoint consistency, handoff clarity, and gaps between designed and delivered experience. Returns a service-design finding. Use when Nora (Service Design Director) needs to assess a service-design change before it feeds Kai's UX review.
---

# nora-service-review

## Stage

DRAFT seed. Owner: Nora / Service Design Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On service-design changes (new or modified service blueprint, touchpoint map, or handoff spec).

## Inputs

- A service blueprint, customer touchpoint map, or handoff spec (the artifact under review).

## Steps

1. Load the submitted service blueprint / touchpoint map / handoff spec. If missing or unparseable, emit a soft failure note and stop.
2. Map each touchpoint across the journey and check for consistency (tone, naming, sequencing, ownership).
3. Inspect each handoff for clarity: who hands to whom, with what, on what trigger.
4. Detect gaps between designed experience and delivered experience.
5. Assemble the service-design finding (see Outputs).

## Outputs

- A service-design finding:
  - Touchpoint consistency issues (location -> inconsistency).
  - Handoff clarity gaps (handoff -> what is unclear).
  - Designed-vs-delivered gaps (touchpoint -> divergence).
- Read-only finding set. No writes to other roles' files.

## Gate

- None beyond read access to the submitted artifact. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Triggered on service-design changes. Feeds Kai's UX review (kai-ux-review).

## Ownership / routing

- Owner: Nora. Feeds: Kai (kai-ux-review).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input is the submitted service-design artifact.
- [ ] Soft-failure path defined for missing/unparseable artifact.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `nora-service-review` -> owner `nora-service-design-director`, status `draft`.
