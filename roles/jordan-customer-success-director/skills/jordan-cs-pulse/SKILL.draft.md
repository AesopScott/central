---
name: jordan-cs-pulse
description: Accepts customer touchpoint data, onboarding records, or support signals and produces a customer-health snapshot — accounts at risk, onboarding stalls, unresolved escalations, and a next recommended action per account. Use when new support signals arrive or on a weekly sweep to feed the Rae executive briefing with a read-only customer-health read.
---

# jordan-cs-pulse

## Stage

DRAFT seed. Owner: Jordan / Customer Success Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Jordan's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- New support signals, or
- Weekly sweep.

Feeds the Rae executive briefing.

## Inputs

- Customer touchpoint data, onboarding records, and support signals.
  - **Forward dependency:** these sources may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "customer signal sources not found" message until they exist.

## Steps

1. Load customer touchpoint data, onboarding records, and support signals. If sources are missing or unparseable, emit a soft failure note and stop.
2. Detect accounts at risk (engagement decline, negative signals).
3. Detect onboarding stalls (records past expected stage thresholds).
4. Detect unresolved escalations.
5. For each flagged account, derive one next recommended action.
6. Assemble the customer-health snapshot (see Outputs).

## Outputs

- A customer-health snapshot:
  - Accounts at risk (with signal rationale).
  - Onboarding stalls (account -> stuck stage -> age).
  - Unresolved escalations.
  - Next recommended action per account.
- Auto-surfaces to Scott when any account is flagged at high risk.

## Gate

- None beyond read access to customer signal sources. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered on new support signals or weekly sweep. Feeds the Rae executive briefing.

## Ownership / routing

- Owner: Jordan. Feeds: Rae (exec-brief). Consumes signals from Drew (pipeline-review) and Samira (support-review) when present.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing customer signal sources.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Next-action-per-account present in outputs.
- [ ] Registry entry `jordan-cs-pulse` -> owner `jordan-customer-success-director`, status `draft`.
