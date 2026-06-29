---
name: samira-support-review
description: Reads the current support queue and escalation log. Flags unresolved escalations, resolution-rate drift, missing escalation paths, and support gaps by customer segment. Returns a support-health report. Use when Samira (Support Director) needs a support-health signal, on escalation events or a weekly sweep.
---

# samira-support-review

## Stage

DRAFT seed. Owner: Samira / Support Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On escalation events, or
- Weekly sweep.

## Inputs

- The current support queue.
- The escalation log.

## Steps

1. Load the current support queue and escalation log. If missing or unparseable, emit a soft failure note and stop.
2. Scan the escalation log for unresolved escalations.
3. Compare resolution rate against prior baseline to detect drift.
4. Check the escalation paths for completeness — flag missing paths.
5. Group support coverage by customer segment and flag gaps.
6. Assemble the support-health report (see Outputs).

## Outputs

- A support-health report:
  - Unresolved escalations (escalation -> age -> owner).
  - Resolution-rate drift (current vs. baseline).
  - Missing escalation paths (scenario -> no path).
  - Support gaps by customer segment (segment -> gap).
- Read-only report. No writes to other roles' files.

## Gate

- None beyond read access to the support queue and escalation log. Read-only. No external comms, no writes to other roles' files.

## Automation path

- Triggered on escalation events or weekly sweep. Feeds Jordan's customer-success pulse (jordan-cs-pulse).

## Ownership / routing

- Owner: Samira. Feeds: Jordan (jordan-cs-pulse).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Inputs are the support queue and escalation log.
- [ ] Soft-failure path defined for missing/unparseable inputs.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Registry entry `samira-support-review` -> owner `samira-support-director`, status `draft`.
