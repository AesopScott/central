---
name: release-git
description: Release Git skill owned by Reid (Release Manager). Runs on: pre-git-approval gate. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/release-git/ to use.
---

# Release Git

Owned by **Reid (Release Manager)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `release-git/` folder into `~/.claude/skills/` and invoke it with `/release-git`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the release git capability for Reid (Release Manager). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: pre-git-approval gate
- Invoke with `/release-git` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.

## Authority & Gates

- Registry status: `draft`
- Git/release gate — commit, push, branch, or promotion steps require Reid (Release Manager) approval.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the release git work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Reid (Release Manager). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Read-only release-readiness report. Gates OTHER roles' commits.
