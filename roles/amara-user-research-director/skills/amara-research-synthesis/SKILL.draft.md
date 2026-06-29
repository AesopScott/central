---
name: amara-research-synthesis
description: Accepts raw user research sessions, interview notes, or usability findings. Extracts structured insights — behavioral patterns, unmet needs, friction points, and evidence-graded recommendations. Returns a research-synthesis report ready for Priya and Kai. Use when Amara (User Research Director) completes a research session that feeds product vision and UX review gates.
---

# amara-research-synthesis

## Stage

DRAFT seed. Owner: Amara / User Research Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On new research session completion (raw sessions, interview notes, or usability findings ready).

## Inputs

- Raw user research sessions, interview notes, or usability findings (the source material).

## Steps

1. Load the raw research sessions / interview notes / usability findings. If missing or unparseable, emit a soft failure note and stop.
2. Extract behavioral patterns recurring across sessions.
3. Identify unmet needs surfaced by participants.
4. Identify friction points in the observed experience.
5. Grade each recommendation by strength of supporting evidence.
6. Assemble the research-synthesis report (see Outputs).

## Outputs

- A research-synthesis report ready for Priya and Kai:
  - Behavioral patterns (pattern -> supporting sessions).
  - Unmet needs (need -> evidence).
  - Friction points (point -> where observed).
  - Evidence-graded recommendations (recommendation -> evidence grade).
- Read-only synthesis. No writes to other roles' files.

## Gate

- None beyond read access to the source research material. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Triggered on new research session completion. Feeds product vision (priya-vision-check) and UX review (kai-ux-review) gates.

## Ownership / routing

- Owner: Amara. Feeds: Priya (priya-vision-check), Kai (kai-ux-review).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input is the raw research material (sessions / notes / findings).
- [ ] Soft-failure path defined for missing/unparseable input.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `amara-research-synthesis` -> owner `amara-user-research-director`, status `draft`.
