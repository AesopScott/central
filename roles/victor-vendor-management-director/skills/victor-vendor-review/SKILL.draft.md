---
name: victor-vendor-review
description: Accepts a new vendor proposal, contract, or renewal decision. Reviews for strategic fit, contract risk, commitment clarity, and missing Scott or Finn approval gates. Returns a vendor-review packet. Use when Victor (Vendor Management Director) needs to gate vendor onboarding or contract renewal before Adrian reviews legal exposure.
---

# victor-vendor-review

## Stage

DRAFT seed. Owner: Victor / Vendor Management Director. Not activated. Activation requires Scott. Director personality file thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles).

## Trigger

- On vendor onboarding or contract renewal (new vendor proposal, contract, or renewal decision).

## Inputs

- A new vendor proposal, contract, or renewal decision (the artifact under review).

## Steps

1. Load the submitted vendor proposal / contract / renewal decision. If missing or unparseable, emit a soft failure note and stop.
2. Assess strategic fit against current vendor and tooling posture.
3. Flag contract risk (term, exposure, lock-in, liability).
4. Check commitment clarity — what is being committed, by whom, for how long.
5. Flag missing Scott or Finn approval gates.
6. Assemble the vendor-review packet (see Outputs).

## Outputs

- A vendor-review packet:
  - Strategic fit assessment (fit / misfit -> why).
  - Contract risk (risk -> tier).
  - Commitment clarity gaps (commitment -> what is unclear).
  - Missing approval gates (Scott / Finn sign-off required).
- Read-only packet. No writes to other roles' files.

## Gate

- GATE: external_comms. No external vendor commitment proceeds without this review clearing and required Scott/Finn approval gates satisfied. Read-only assessment — flags the gate, does not execute commitments.

## Automation path

- Triggered on vendor onboarding or contract renewal. Gate before Adrian reviews legal exposure (adrian-legal-gate).

## Ownership / routing

- Owner: Victor. Gates: external_comms. Feeds: Adrian (adrian-legal-gate). Approval gates: Scott, Finn.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input is the submitted vendor proposal / contract / renewal decision.
- [ ] Soft-failure path defined for missing/unparseable input.
- [ ] Gate `external_comms` declared; review flags missing Scott/Finn approval gates.
- [ ] Read-only assessment — no write/comms steps execute commitments.
- [ ] Registry entry `victor-vendor-review` -> owner `victor-vendor-management-director`, status `draft`.
