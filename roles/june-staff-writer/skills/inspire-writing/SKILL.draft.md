---
name: inspire-writing
description: Builds outlines, messages, or requested writing to inspire the user toward creative success, surfacing a fresh nudge for each active individual project. Use when June (Staff Writer) needs to deliver creative momentum, on demand or on the daily inspiration cadence.
---

# inspire-writing

## Stage

DRAFT seed. Owner: June / Staff Writer. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- On demand (June invokes), or
- Scheduled daily inspiration reminder for individual projects to keep them moving.

## Inputs

- The selected individual project(s) and any prior writing/outlines June owns for them.
- An optional request for a specific outline, message, or piece of writing.

## Steps

1. Identify the active individual project(s) due for an inspiration nudge.
2. Read June's own prior outputs for those projects to pick up the thread.
3. Build the requested artifact — an outline, a message, or the requested writing — aimed at inspiring creative success and forward movement.
4. Write the artifact to June's own outputs.
5. Surface the nudge to the user.

## Outputs

- An inspiration artifact per active project: an outline, a message, or requested writing.
- A short "keep it moving" nudge tied to each project.

## Gate

- None. Read-only over June's own outputs; writes only to June's own outputs. No external comms, no writes to other roles' files.

## Automation path

- Scheduled daily inspiration reminder for individual projects to keep them moving.

## Ownership / routing

- Owner: June / Staff Writer. Feeds: the individual project owners June supports.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Reads and writes restricted to June's own outputs.
- [ ] No external comms steps. No gate owner required.
- [ ] Daily schedule trigger documented.
- [ ] Registry entry `inspire-writing` -> owner `june-staff-writer`, status `draft`.
