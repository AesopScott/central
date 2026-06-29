---
name: agentify
description: Accepts a role slug and builds or modifies the agent autonomy state baseline (autonomy.md, agent.md, hooks, loops, schedules, communication, heartbeats, tool use), prepping agents for autonomy approval across levels 4, 5, and 6. Use when Tess (Autonomy Engineer) is invoked from the autonomy central tool to prepare a role for autonomy review.
---

# agentify

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

- Triggered in the autonomy central tool. Accepts a role slug.

## Inputs

- Role slug (the role to agentify).
- Current autonomy state baseline for the role, if any: `autonomy.md`, `agent.md`, hooks, loops, schedules, communication config, heartbeats, tool-use config.
- The target autonomy level (4, 5, or 6).
  - **Forward dependency:** autonomy baseline files may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "autonomy baseline not found" message and proceed to scaffold rather than error.

## Steps

1. Resolve the supplied role slug to its role home. If not found, emit a soft failure note and stop.
2. Read the existing autonomy state baseline (`autonomy.md`, `agent.md`, hooks, loops, schedules, communication, heartbeats, tool use). Scaffold any missing files from template.
3. For the target level (4/5/6), build or modify each baseline artifact to the required state.
4. Record the proposed authority, stop conditions, schedules, heartbeats, and tool grants for the level.
5. Assemble the autonomy state baseline package for owner review (see Outputs). Do not activate.

## Outputs

- An updated autonomy state baseline for the role:
  - `autonomy.md`, `agent.md`, hooks, loops, schedules, communication config, heartbeats, tool-use config.
  - Target level (4/5/6) and the authority/stop-conditions delta.
- A handoff to `automation-review` (triggered on agentify completion).

## Gate

- **OWNER-GATED (autonomy gate = Tess + Vik).** No autonomy state is activated by this skill. Builds/modifies baseline only; activation requires the autonomy gate (Tess + Vik) and Scott.

## Automation path

- None. Triggered in the autonomy central tool. On completion, hands off to `automation-review`.

## Ownership / routing

- Owner: Tess. Autonomy gate: Tess + Vik. Feeds: `automation-review` (on completion), `gate-check` (ongoing). Activation: Scott.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Accepts a role slug; resolves to a role home.
- [ ] Soft-failure path defined for missing autonomy baseline.
- [ ] Levels 4/5/6 handled; no activation step present (autonomy-gated).
- [ ] Hands off to `automation-review` on completion.
- [ ] Registry entry `agentify` -> owner `tess-autonomy-engineer`, status `draft`, gate `autonomy`.
