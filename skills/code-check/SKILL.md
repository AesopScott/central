---
name: code-check
description: Code Check skill owned by Bea (Ai Engineer). Runs on: on file change/create. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/code-check/ to use.
---

# Code Check

Owned by **Bea (Ai Engineer)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `code-check/` folder into `~/.claude/skills/` and invoke it with `/code-check`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the code check capability for Bea (Ai Engineer). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: on file change/create
- Invoke with `/code-check` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- Registry status: `owner-gated`
- Secrets gate — depends on credentials in .env.local; Scott (final authority) must provision and approve.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the code check work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Bea (Ai Engineer). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Uses deepseek API — needs key. Results to code-review drawer.
