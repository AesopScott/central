---
name: adrian-legal-gate
description: Adrian Legal Gate skill owned by Adrian (Legal Director). Runs on: external commitment / contract. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/adrian-legal-gate/ to use.
---

# Adrian Legal Gate

Owned by **Adrian (Legal Director)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `adrian-legal-gate/` folder into `~/.claude/skills/` and invoke it with `/adrian-legal-gate`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the adrian legal gate capability for Adrian (Legal Director). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: external commitment / contract
- Invoke with `/adrian-legal-gate` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- Registry status: `draft`
- External-comms gate — any outbound message (email, Slack, Discord, partner) requires Mae (Communications) clearance.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the adrian legal gate work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Adrian (Legal Director). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Hard gate — no external commitment without clearance.
