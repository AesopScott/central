---
name: exec-brief
description: Exec Brief skill owned by Rae (Chief Executive Officer). Runs on: on-demand + weekly. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/exec-brief/ to use.
---

# Exec Brief

Owned by **Rae (Chief Executive Officer)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `exec-brief/` folder into `~/.claude/skills/` and invoke it with `/exec-brief`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the exec brief capability for Rae (Chief Executive Officer). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: on-demand + weekly
- Invoke with `/exec-brief` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads: `docs/backlog.json`

## Authority & Gates

- No special gate registered. Default authority is read-only / report-only until the owner activates broader scope.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the exec brief work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Rae (Chief Executive Officer). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> docs/backlog.json not present yet — forward dependency, accepted by Scott.
