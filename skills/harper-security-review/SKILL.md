---
name: harper-security-review
description: Harper Security Review skill owned by Harper (Security Engineering Director). Runs on: security-sensitive PR. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/harper-security-review/ to use.
---

# Harper Security Review

Owned by **Harper (Security Engineering Director)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `harper-security-review/` folder into `~/.claude/skills/` and invoke it with `/harper-security-review`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the harper security review capability for Harper (Security Engineering Director). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: security-sensitive PR
- Invoke with `/harper-security-review` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- No special gate registered. Default authority is read-only / report-only until the owner activates broader scope.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the harper security review work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Harper (Security Engineering Director). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.
