---
name: harper-security-review
description: Accepts a code change, architecture proposal, or new integration and audits for OWASP-class risks, secrets exposure, auth gaps, and infrastructure attack surface. Returns a security-review finding set with CRITICAL/HIGH/MEDIUM severity tiers. Use on security-sensitive PRs; required gate before Mateo approves platform changes.
---

# harper-security-review

## Stage

DRAFT seed. Owner: Harper / Security Engineering Director. Not activated. Activation requires Scott. Director personality file is thin — this skill is functional, not yet voice-calibrated.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md (Director-Level Roles section).

## Trigger

- On a security-sensitive PR, architecture proposal, or new integration, or
- On demand (Harper invokes).
- Required gate before Mateo approves platform changes.

## Inputs

- A code change, architecture proposal, or new integration.
  - **Forward dependency:** PR/proposal intake location not formalized yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "change source not found" message until it exists.

## Steps

1. Load the code change, proposal, or integration. If missing or unparseable, emit a soft failure note and stop.
2. Audit for OWASP-class risks (injection, broken auth/access control, misconfiguration, etc.).
3. Scan for secrets exposure (hardcoded keys, tokens, credentials).
4. Check auth gaps (authn/authz coverage at boundaries).
5. Assess infrastructure attack surface (exposed services, dependency risk).
6. Assign each finding a severity tier (CRITICAL / HIGH / MEDIUM).
7. Assemble the security-review finding set (see Outputs).

## Outputs

- A security-review finding set, tiered:
  - CRITICAL (security vulnerability or data-loss risk — blocks).
  - HIGH (significant security/quality issue — fix before merge).
  - MEDIUM (security maintainability concern — consider).
  - Each finding: location -> risk -> recommended remediation.

## Gate

- Read-only assessment. Returns a finding set. No writes to other roles' files, no external comms.
- Required gate before Mateo (`mateo-platform-review`) approves platform changes. CRITICAL findings block.

## Automation path

- Triggered on security-sensitive PRs. Required gate before Mateo approves platform changes.

## Ownership / routing

- Owner: Harper. Feeds: Mateo (`mateo-platform-review`). Escalates CRITICAL findings to Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input contract (code change / architecture proposal / integration) defined.
- [ ] Soft-failure path defined for missing change source.
- [ ] Read-only — no write/comms steps. Severity tiers (CRITICAL/HIGH/MEDIUM) present.
- [ ] Registry entry `harper-security-review` -> owner `harper-security-engineering-director`, status `draft`.
