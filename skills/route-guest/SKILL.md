---
name: route-guest
description: Route Guest skill owned by Mara (Front Desk Administrator). Runs on: unrecognized visitor / new intake. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/route-guest/ to use.
---

# Route Guest

Owned by **Mara (Front Desk Administrator)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `route-guest/` folder into `~/.claude/skills/` and invoke it with `/route-guest`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the route guest capability for Mara (Front Desk Administrator). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: unrecognized visitor / new intake
- Invoke with `/route-guest` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- No special gate registered. Default authority is read-only / report-only until the owner activates broader scope.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the route guest work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Mara (Front Desk Administrator). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Fails closed on access/security/privacy — escalates to Scott or Rae.
