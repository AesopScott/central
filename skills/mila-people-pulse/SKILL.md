---
name: mila-people-pulse
description: Mila People Pulse skill owned by Mila (People Operations Director). Runs on: onboarding / culture signal. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/mila-people-pulse/ to use.
---

# Mila People Pulse

Owned by **Mila (People Operations Director)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `mila-people-pulse/` folder into `~/.claude/skills/` and invoke it with `/mila-people-pulse`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the mila people pulse capability for Mila (People Operations Director). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: onboarding / culture signal
- Invoke with `/mila-people-pulse` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- No special gate registered. Default authority is read-only / report-only until the owner activates broader scope.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the mila people pulse work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Mila (People Operations Director). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Feeds Cole's HR audit.
