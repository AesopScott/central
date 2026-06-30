---
name: gate-check
description: Gate Check skill owned by Tess (Autonomy Engineer). Runs on: every 4h (change-gated). Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/gate-check/ to use.
---

# Gate Check

Owned by **Tess (Autonomy Engineer)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `gate-check/` folder into `~/.claude/skills/` and invoke it with `/gate-check`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the gate check capability for Tess (Autonomy Engineer). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: every 4h (change-gated)
- Invoke with `/gate-check` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- Registry status: `owner-gated`
- Autonomy gate — owner approval required before this skill runs autonomously (gate owners: Tess / Vik).

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the gate check work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Tess (Autonomy Engineer). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> New skill. Change-gated pre-check.
