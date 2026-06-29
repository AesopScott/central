---
name: mila-people-pulse
description: Accepts team health signals (role clarity feedback, onboarding status, cultural flag) and reviews for unresolved clarity gaps, onboarding stalls, and culture-standard violations. Returns a people-ops health report with owner-routed action items. Use on onboarding events or escalated culture signals; feeds Cole's HR audit.
---

# mila-people-pulse

## Stage

DRAFT seed. Owner: Mila / People Operations Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- Onboarding events, or
- Escalated culture signals.

## Inputs

- Team health signals: role clarity feedback, onboarding status, cultural flag.

## Steps

1. Receive the team health signals.
2. Detect unresolved role-clarity gaps.
3. Detect onboarding stalls (records not advancing past threshold).
4. Detect culture-standard violations.
5. Route each action item to its owner.
6. Assemble the people-ops health report (see Outputs).

## Outputs

- A people-ops health report:
  - Unresolved clarity gaps.
  - Onboarding stalls (record -> stage -> age).
  - Culture-standard violations.
  - Owner-routed action items.

## Gate

- None beyond read access to the supplied team health signals. Read-only assessment — returns a finding set. No writes to other roles' files, no external comms.

## Automation path

- Triggered on onboarding events or escalated culture signals. Feeds Cole's HR audit.

## Ownership / routing

- Owner: Mila. Feeds Cole's HR audit (operationalize / validate-role-files). Routes action items to named owners.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Owner-routed action items present in Outputs.
- [ ] Read-only — returns finding set, no writes/comms steps. No gate owner required.
- [ ] Feed to Cole's HR audit documented in routing.
- [ ] Registry entry `mila-people-pulse` -> owner `mila-people-operations-director`, status `draft`.
