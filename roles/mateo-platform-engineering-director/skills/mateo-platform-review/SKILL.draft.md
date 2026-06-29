---
name: mateo-platform-review
description: Accepts a platform infrastructure change, scaling decision, or reliability proposal and reviews for deployment risk, service-level exposure, dependency clarity, and missing rollback plan. Returns a platform-readiness finding. Use on infrastructure PRs; gate before Reid approves release.
---

# mateo-platform-review

## Stage

DRAFT seed. Owner: Mateo / Platform Engineering Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not voice-calibrated yet.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- Infrastructure PRs.
- Gate before Reid approves release.

## Inputs

- A platform infrastructure change, scaling decision, or reliability proposal (submitted item).

## Steps

1. Receive the infrastructure change / scaling decision / reliability proposal.
2. Assess deployment risk.
3. Assess service-level exposure.
4. Check dependency clarity (upstream/downstream services).
5. Check for a present and adequate rollback plan.
6. Assemble the platform-readiness finding (see Outputs).

## Outputs

- A platform-readiness finding:
  - Deployment-risk assessment.
  - Service-level exposure.
  - Dependency-clarity finding.
  - Rollback-plan status (present / missing / inadequate).
  - Readiness status: ready / requires-correction / blocked.

## Gate

- Gate before Reid approves release — a clean `mateo-platform-review` finding (or Scott override) is required before Reid's release approval.
- Read-only assessment — returns a finding set. No writes to other roles' files, no external comms.

## Automation path

- Triggered on infrastructure PRs. Gate before Reid approves release.

## Ownership / routing

- Owner: Mateo. Pre-fed by Harper (harper-security-review) on security-sensitive infra. Feeds Reid's release-readiness gate.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Rollback-plan presence check defined in Steps and Outputs.
- [ ] Gate-before-Reid-release behavior defined.
- [ ] Read-only — returns finding set, no writes/comms steps.
- [ ] Registry entry `mateo-platform-review` -> owner `mateo-platform-engineering-director`, status `draft`.
