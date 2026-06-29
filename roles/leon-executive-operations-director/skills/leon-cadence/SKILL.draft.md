---
name: leon-cadence
description: Reviews the current meeting cadence, decision backlog, and executive alignment record, flagging overdue decisions, missed cadence beats, and alignment gaps between Rae's priorities and active workstreams, and returns a cadence health report. Use on the weekly cadence to feed Rae's alignment briefing with a read-only cadence assessment.
---

# leon-cadence

## Stage

DRAFT seed. Owner: Leon / Executive Operations Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Leon's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Weekly cadence.

Feeds Rae's alignment briefing.

## Inputs

- The current meeting cadence record, decision backlog, and executive alignment record.
- Rae's current priorities (for alignment comparison).
  - **Forward dependency:** these sources may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "cadence/alignment sources not found" message until they exist.

## Steps

1. Load the cadence record, decision backlog, alignment record, and Rae's priorities. If sources are missing or unparseable, emit a soft failure note and stop.
2. Detect overdue decisions (past expected resolution thresholds).
3. Detect missed cadence beats (skipped or stale recurring touchpoints).
4. Detect alignment gaps between Rae's priorities and active workstreams.
5. Assemble the cadence health report (see Outputs).

## Outputs

- A cadence health report:
  - Overdue decisions (item -> age -> owner).
  - Missed cadence beats.
  - Alignment gaps (priority -> divergent workstream).
- Auto-surfaces to Scott when an overdue decision or alignment gap is detected.

## Gate

- None beyond read access to the cadence/alignment sources. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered weekly. Feeds Rae's alignment briefing.

## Ownership / routing

- Owner: Leon. Feeds: Rae (exec-brief / alignment briefing). Consumed by executive operations.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing cadence/alignment sources.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Alignment-gap detection present in outputs.
- [ ] Registry entry `leon-cadence` -> owner `leon-executive-operations-director`, status `draft`.
