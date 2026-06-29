---
name: jill-staffops-review
description: Reviews staff operational processes for clarity, coverage, and consistency. Returns a staffops health report. Use when Jill (Staff Operations Director) needs to assess staff-process changes.
---

# jill-staffops-review

## Stage

DRAFT seed. Owner: Jill / Staff Operations Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

**Folder note:** Role was renamed June -> Jill, but the folder slug is still `june-staff-operations-director` and this file lives there. Folder rename is Ana/operator scope — a separate task, tracked elsewhere.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On staff-process changes (new or modified staff operational process).

## Inputs

- Staff operational process descriptions (the processes under review).

## Steps

1. Load the staff operational processes under review. If missing or unparseable, emit a soft failure note and stop.
2. Check each process for clarity: are steps, owners, and triggers explicit?
3. Check coverage: are required staff operations actually addressed, with no gaps?
4. Check consistency: do processes agree with each other and with the operating standard?
5. Assemble the staffops health report (see Outputs).

## Outputs

- A staffops health report:
  - Clarity gaps (process -> what is unclear).
  - Coverage gaps (operation -> what is missing).
  - Consistency issues (process pair -> conflict).
- Read-only report. No writes to other roles' files.

## Gate

- None beyond read access to the submitted processes. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Triggered on staff-process changes.

## Ownership / routing

- Owner: Jill (folder slug `june-staff-operations-director`).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input is the submitted staff operational processes.
- [ ] Soft-failure path defined for missing/unparseable input.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `jill-staffops-review` -> owner `june-staff-operations-director` (folder slug), status `draft`.
