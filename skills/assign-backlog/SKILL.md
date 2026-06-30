---
name: assign-backlog
description: Assign Backlog skill owned by Cal (Program Manager). Runs on: daily. Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/assign-backlog/ to use.
---

# Assign Backlog

Owned by **Cal (Program Manager)**. Generated scaffold from the Mindshare skills registry (`roles/skills-registry.json`). This file is a real, installable Claude skill: drop the `assign-backlog/` folder into `~/.claude/skills/` and invoke it with `/assign-backlog`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the assign backlog capability for Cal (Program Manager). Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

- Trigger: daily
- Invoke with `/assign-backlog` or when the user describes the task this skill names.

## Inputs & Outputs

- Reads: `docs/backlog.json`

## Authority & Gates

- Registry status: `draft`
- External-comms gate — any outbound message (email, Slack, Discord, partner) requires Mae (Communications) clearance.

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the assign backlog work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for Cal (Program Manager). No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.

## Registry Notes

> Sends handoff comms — external_comms gate via Mae before live.
