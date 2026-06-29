---
name: owen-tech-review
description: Accepts a technology decision, stack change, or platform proposal. Reviews alignment against the current technology strategy roadmap, flags redundant tools, missing architectural fit, and decisions made without strategic context. Returns a tech-strategy alignment finding. Use when Owen (Technology Director) needs to gate a technology proposal before Mateo evaluates platform impact.
---

# owen-tech-review

## Stage

DRAFT seed. Owner: Owen / Technology Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On new technology proposals (technology decision, stack change, or platform proposal).

## Inputs

- A technology decision, stack change, or platform proposal (the artifact under review).
- The current technology strategy roadmap (reference for alignment).

## Steps

1. Load the submitted technology proposal and the current technology strategy roadmap. If either is missing or unparseable, emit a soft failure note and stop.
2. Check the proposal's alignment against the technology strategy roadmap.
3. Flag redundant tools — overlap with capabilities already in the stack.
4. Flag missing architectural fit — where the proposal does not slot cleanly into current architecture.
5. Flag decisions made without strategic context.
6. Assemble the tech-strategy alignment finding (see Outputs).

## Outputs

- A tech-strategy alignment finding:
  - Roadmap alignment assessment (aligned / drift -> where).
  - Redundant tools (tool -> existing overlap).
  - Missing architectural fit (proposal element -> gap).
  - Decisions made without strategic context.
- Read-only finding set. No writes to other roles' files.

## Gate

- None beyond read access to the submitted proposal and roadmap. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Triggered on new technology proposals. Gate before Mateo evaluates platform impact (mateo-platform-review).

## Ownership / routing

- Owner: Owen. Gates: Mateo (mateo-platform-review).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Inputs are the technology proposal and the technology strategy roadmap.
- [ ] Soft-failure path defined for missing/unparseable inputs.
- [ ] Read-only — no write/comms steps. Gate is advisory (pre-Mateo), no write authority.
- [ ] Registry entry `owen-tech-review` -> owner `owen-technology-director`, status `draft`.
