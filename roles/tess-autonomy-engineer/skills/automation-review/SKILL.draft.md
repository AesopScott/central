---
name: automation-review
description: Reviews agent creation for hidden authority expansion, ownership ambiguity, premature automation, missing control planes, and operation confusion, returning a review finding with required corrections before implementation is approved. Use when Tess (Autonomy Engineer) reviews a freshly agentified role, triggered on agentify completion.
---

# automation-review

## Stage

DRAFT seed. Owner: Tess / Autonomy Engineer. Not activated. Autonomy-gated — not activated by Cole. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Triggered on `agentify` completion.

## Inputs

- The autonomy state baseline package produced by `agentify` (`autonomy.md`, `agent.md`, hooks, loops, schedules, communication, heartbeats, tool use) and the target level.
  - **Forward dependency:** package may reference baseline files not present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "agentify package not found" message until it exists.

## Steps

1. Load the `agentify` package for the role. If missing or unparseable, emit a soft failure note and stop.
2. Check for **hidden authority expansion**: authority granted beyond what the level/contract allows.
3. Check for **ownership ambiguity**: unclear or contested owner of the agent, its outputs, or its gates.
4. Check for **premature automation**: automation enabled before the role/level supports it.
5. Check for **missing control planes**: no stop conditions, no gate, no heartbeat oversight.
6. Check for **operation confusion**: overlapping or contradictory loops/schedules/tool grants.
7. Assemble a review finding with required corrections (see Outputs).

## Outputs

- A review finding with:
  - Each detected issue (authority expansion, ownership ambiguity, premature automation, missing control planes, operation confusion).
  - Required corrections that must be made before implementation is approved.
  - A pass/block verdict.

## Gate

- **OWNER-GATED (autonomy).** Implementation is not approved until required corrections are resolved. Read-only review; no writes to other roles' files, no activation.

## Automation path

- Triggered on `agentify` completion. Blocks implementation approval on unresolved required corrections.

## Ownership / routing

- Owner: Tess. Autonomy gate: Tess + Vik. Consumes: `agentify` output. Feeds: implementation approval gate. Activation: Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Trigger is `agentify` completion.
- [ ] Soft-failure path defined for missing agentify package.
- [ ] All five review classes covered (authority expansion, ownership ambiguity, premature automation, missing control planes, operation confusion).
- [ ] Read-only — no activation, no writes to other roles' files.
- [ ] Registry entry `automation-review` -> owner `tess-autonomy-engineer`, status `draft`, gate `autonomy`.
