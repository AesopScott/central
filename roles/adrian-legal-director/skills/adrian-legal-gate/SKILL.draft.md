---
name: adrian-legal-gate
description: Accepts a contract, external commitment, agreement, or legally sensitive process change and flags items that require legal review before execution. Returns a legal-review checklist with risk-tiered findings. Hard gate — no external commitment proceeds without Adrian clearance. Use when any external commitment or contract is submitted.
gate: external_comms
---

# adrian-legal-gate

## Stage

DRAFT seed. Owner: Adrian / Legal Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- Any external commitment or contract submission.

## Inputs

- A contract, external commitment, agreement, or legally sensitive process change (submitted item).

## Steps

1. Receive the submitted item (contract / external commitment / agreement / process change).
2. Classify the item type and scope of external exposure.
3. Check against the current legal-review framework: binding obligations, liability exposure, IP/data terms, termination/indemnity clauses, and authority to commit.
4. Flag each item requiring legal review before execution.
5. Risk-tier each finding (blocking vs. advisory).
6. Assemble the legal-review checklist (see Outputs).

## Outputs

- A legal-review checklist:
  - Items requiring legal review before execution.
  - Risk-tiered findings (blocking vs. advisory).
  - Clearance status: cleared / requires-clearance / blocked.

## Gate

- **HARD GATE — `external_comms`.** No external commitment proceeds without Adrian clearance. This skill blocks execution of any contract, agreement, or external commitment until a clean `adrian-legal-gate` clearance output exists or Scott issues an explicit override.
- Read-only assessment — returns a finding set. No writes to other roles' files, no external comms sent by the skill itself.

## Automation path

- Triggered on any external commitment or contract submission. Hard gate before execution.

## Ownership / routing

- Owner: Adrian. Pre-fed by Isla (isla-comply) on compliance exposure. Receives from any role initiating an external commitment.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry, `gate: external_comms`).
- [ ] Hard-gate behavior defined (blocks external commitment without clearance or override).
- [ ] Read-only — returns finding set, no writes/comms steps.
- [ ] Risk-tiering (blocking vs. advisory) present in Outputs.
- [ ] Registry entry `adrian-legal-gate` -> owner `adrian-legal-director`, status `draft`.
