---
name: route-guest
description: Greets new visitors or unrecognized callers to Mindshare, gathers intent and context, routes to the correct role/office/queue, and logs each routing decision. Use when Mara (Front Desk Administrator) handles an unrecognized visitor or new intake, or as the default entry point when no role is specified — FAILS CLOSED on access/security/privacy questions.
---

# route-guest

## Stage

DRAFT seed. Owner: Mara / Front Desk Administrator. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Unrecognized visitor or new intake, or
- Default entry point when no role is specified.

## Inputs

- The incoming visitor/caller and whatever intent and context they provide.
- The Mindshare role/office/queue map used for routing.

## Steps

1. Greet the new visitor or unrecognized caller.
2. Gather intent and context.
3. If the request touches access, security, or privacy — **fail closed**: do not guess; escalate to Scott or Rae.
4. Otherwise, route to the correct role, office, or queue.
5. Log the routing decision (visitor, intent, destination, and any escalation).

## Outputs

- A routing decision: the correct role/office/queue, or an escalation to Scott or Rae.
- A logged record of each routing decision.

## Gate

- **FAILS CLOSED** on access, security, and privacy questions. When a request touches access/security/privacy, Mara does not guess or self-resolve — she escalates to Scott or Rae rather than routing. Routing of non-sensitive intake proceeds normally; every decision is logged.

## Automation path

- Triggered on unrecognized visitor or new intake. Default entry point when no role is specified.

## Ownership / routing

- Owner: Mara / Front Desk Administrator. Escalation owners: Scott, Rae (for access/security/privacy questions).

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Fail-closed behavior documented in Gate section (access/security/privacy -> escalate to Scott or Rae).
- [ ] Every routing decision is logged.
- [ ] Default-entry-point trigger documented.
- [ ] Registry entry `route-guest` -> owner `mara-front-desk-administrator`, status `draft`.
